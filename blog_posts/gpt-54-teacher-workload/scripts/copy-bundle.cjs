/**
 * After Vite build, copy the hashed JS bundle to a stable name for WordPress upload.
 * Usage: node scripts/copy-bundle.cjs
 */
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(process.cwd(), 'dist', 'assets');
const distDir = path.join(process.cwd(), 'dist');
const outName = 'gpt-54-teacher-workload-app.js';

if (!fs.existsSync(assetsDir)) {
  console.error('dist/assets not found. Run npm run build first.');
  process.exit(1);
}

const files = fs.readdirSync(assetsDir);
const bundle = files.find((f) => f.startsWith('index-') && f.endsWith('.js'));
if (!bundle) {
  console.error('No index-*.js bundle found in dist/assets');
  process.exit(1);
}

fs.copyFileSync(path.join(assetsDir, bundle), path.join(distDir, outName));
console.log(`Copied ${bundle} → dist/${outName}`);
