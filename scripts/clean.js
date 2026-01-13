#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const packages = ['core', 'ui', 'app'];
const rootDir = path.join(__dirname, '..');

// Remove dist directories
packages.forEach((pkg) => {
  const distPath = path.join(rootDir, 'packages', pkg, 'dist');
  if (fs.existsSync(distPath)) {
    fs.rmSync(distPath, { recursive: true, force: true });
    console.log(`Removed ${distPath}`);
  }
});

// Remove .tsbuildinfo files
function removeTsBuildInfo(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== 'node_modules' && entry.name !== '.git') {
      removeTsBuildInfo(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.tsbuildinfo')) {
      fs.unlinkSync(fullPath);
      console.log(`Removed ${fullPath}`);
    }
  }
}

removeTsBuildInfo(rootDir);

// Note: We don't clean logs directory to preserve benchmark results
// If you want to clean logs, do it manually or use a separate command

console.log('Clean completed!');
