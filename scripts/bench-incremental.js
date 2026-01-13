#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const version = process.argv[2]; // 'ts3' or 'ts58'
if (!version || !['ts3', 'ts58'].includes(version)) {
  console.error('Usage: node scripts/bench-incremental.js [ts3|ts58]');
  process.exit(1);
}

const tsVersion = version === 'ts3' ? '3.9.5' : '5.8.3';
const buildScript = version === 'ts3' ? 'build:ts3' : 'build:ts58';
const logsDir = path.join(__dirname, '..', 'logs');

if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

console.log(`Running incremental benchmark for TypeScript ${tsVersion}...\n`);

// Clean first
console.log('Cleaning...');
execSync('npm run clean', { stdio: 'inherit', cwd: path.join(__dirname, '..') });

// Initial build
console.log('Running initial build...');
const initialStartTime = Date.now();
try {
  execSync(`npm run ${buildScript}`, {
    stdio: 'pipe',
    cwd: path.join(__dirname, '..'),
  });
  const initialEndTime = Date.now();
  const initialDuration = initialEndTime - initialStartTime;
  console.log(`Initial build completed in ${initialDuration}ms\n`);
  
  // Save initial build log
  const initialLogPath = path.join(logsDir, `${version}_incremental_initial.txt`);
  fs.writeFileSync(initialLogPath, `Initial build completed in ${initialDuration}ms\n`);
} catch (error) {
  console.error(`Initial build failed: ${error.message}\n`);
  process.exit(1);
}

// Find a file in app to modify
const appSrcPath = path.join(__dirname, '..', 'packages', 'app', 'src');
const pagesPath = path.join(appSrcPath, 'pages');
const files = fs.readdirSync(pagesPath).filter(f => f.endsWith('.tsx'));
const targetFile = files[0] || 'home.tsx';
const targetFilePath = path.join(pagesPath, targetFile);

if (!fs.existsSync(targetFilePath)) {
  console.error(`Target file not found: ${targetFilePath}`);
  process.exit(1);
}

// Read and modify the file (add a comment)
console.log(`Modifying ${targetFile}...`);
const originalContent = fs.readFileSync(targetFilePath, 'utf-8');
const modifiedContent = originalContent + '\n// Modified for incremental build test\n';
fs.writeFileSync(targetFilePath, modifiedContent);

// Incremental build
console.log('Running incremental build...');
const incrementalStartTime = Date.now();
try {
  const output = execSync(`npm run ${buildScript}`, {
    stdio: 'pipe',
    encoding: 'utf-8',
    cwd: path.join(__dirname, '..'),
  });
  const incrementalEndTime = Date.now();
  const incrementalDuration = incrementalEndTime - incrementalStartTime;
  console.log(`Incremental build completed in ${incrementalDuration}ms\n`);
  
  // Save incremental build log
  const incrementalLogPath = path.join(logsDir, `${version}_incremental_rebuild.txt`);
  fs.writeFileSync(incrementalLogPath, `Incremental build completed in ${incrementalDuration}ms\n\nBuild output:\n${output}`);
  
  // Restore original file
  fs.writeFileSync(targetFilePath, originalContent);
  console.log('File restored to original state');
  
  const results = {
    version: tsVersion,
    initialBuild: {
      duration: initialDuration,
      unit: 'ms',
    },
    incrementalBuild: {
      duration: incrementalDuration,
      unit: 'ms',
    },
    speedup: ((initialDuration / incrementalDuration) * 100).toFixed(2) + '%',
    improvement: initialDuration - incrementalDuration,
  };
  
  console.log('\n=== Incremental Build Results ===');
  console.log(`Initial build: ${initialDuration}ms`);
  console.log(`Incremental build: ${incrementalDuration}ms`);
  console.log(`Speedup: ${results.speedup}`);
  console.log(`Improvement: ${results.improvement}ms faster`);
  
  // Save results
  const resultsPath = path.join(logsDir, `${version}_incremental_results.json`);
  fs.writeFileSync(resultsPath, JSON.stringify(results, null, 2));
  
  // Update main summary
  const mainSummaryPath = path.join(logsDir, 'summary.json');
  let mainSummary = {};
  if (fs.existsSync(mainSummaryPath)) {
    mainSummary = JSON.parse(fs.readFileSync(mainSummaryPath, 'utf-8'));
  }
  if (!mainSummary.incremental) {
    mainSummary.incremental = {};
  }
  mainSummary.incremental[version] = results;
  fs.writeFileSync(mainSummaryPath, JSON.stringify(mainSummary, null, 2));
  
  console.log(`\nResults saved to ${resultsPath}`);
  console.log(`Summary updated in ${mainSummaryPath}`);
} catch (error) {
  // Restore original file even on error
  fs.writeFileSync(targetFilePath, originalContent);
  console.error(`Incremental build failed: ${error.message}\n`);
  process.exit(1);
}
