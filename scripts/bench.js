#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const version = process.argv[2]; // 'ts3' or 'ts58'
if (!version || !['ts3', 'ts58'].includes(version)) {
  console.error('Usage: node scripts/bench.js [ts3|ts58]');
  process.exit(1);
}

const tsVersion = version === 'ts3' ? '3.9.5' : '5.8.3';
const buildScript = version === 'ts3' ? 'build:ts3' : 'build:ts58';
const logsDir = path.join(__dirname, '..', 'logs');

if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

console.log(`Running benchmark for TypeScript ${tsVersion}...`);
console.log('This will run 5 iterations...\n');

const times = [];
const iterations = 5;

for (let i = 1; i <= iterations; i++) {
  console.log(`Iteration ${i}/${iterations}...`);
  
  // Clean first (but preserve logs)
  execSync('npm run clean', { stdio: 'inherit', cwd: path.join(__dirname, '..') });
  
  // Build and measure time
  const startTime = Date.now();
  let buildOutput = '';
  try {
    buildOutput = execSync(`npm run ${buildScript}`, {
      stdio: 'pipe',
      encoding: 'utf-8',
      cwd: path.join(__dirname, '..'),
    }).toString();
    const endTime = Date.now();
    const duration = endTime - startTime;
    times.push(duration);
    console.log(`  Completed in ${duration}ms\n`);
    
    // Save log with build output
    const logPath = path.join(logsDir, `${version}_build_${i}.txt`);
    const logContent = `Build ${i} completed in ${duration}ms\n\nBuild output:\n${buildOutput}`;
    fs.writeFileSync(logPath, logContent);
  } catch (error) {
    console.error(`  Failed: ${error.message}\n`);
    const errorLogPath = path.join(logsDir, `${version}_build_${i}_error.txt`);
    fs.writeFileSync(errorLogPath, `Build ${i} failed: ${error.message}\n\n${error.stack || ''}`);
    process.exit(1);
  }
}

// Calculate statistics
times.sort((a, b) => a - b);
const min = times[0];
const max = times[times.length - 1];
const median = times[Math.floor(times.length / 2)];
const avg = times.reduce((a, b) => a + b, 0) / times.length;

const stats = {
  version: tsVersion,
  iterations,
  times,
  min,
  max,
  median,
  avg,
  unit: 'ms',
};

console.log('=== Results ===');
console.log(`Min: ${min}ms`);
console.log(`Max: ${max}ms`);
console.log(`Median: ${median}ms`);
console.log(`Average: ${avg.toFixed(2)}ms`);

// Save summary
const summaryPath = path.join(logsDir, `${version}_summary.json`);
fs.writeFileSync(summaryPath, JSON.stringify(stats, null, 2));

// Update or create main summary
const mainSummaryPath = path.join(logsDir, 'summary.json');
let mainSummary = {};
if (fs.existsSync(mainSummaryPath)) {
  mainSummary = JSON.parse(fs.readFileSync(mainSummaryPath, 'utf-8'));
}
mainSummary[version] = stats;
fs.writeFileSync(mainSummaryPath, JSON.stringify(mainSummary, null, 2));

console.log(`\nResults saved to ${summaryPath}`);
console.log(`Summary updated in ${mainSummaryPath}`);
