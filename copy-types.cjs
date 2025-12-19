const fs = require('fs');
const path = require('path');

const src = path.resolve(__dirname, 'src/index.d.ts');
const distDir = path.resolve(__dirname, 'dist');
const dest = path.join(distDir, 'index.d.ts');

if (!fs.existsSync(src)) {
  throw new Error('src/index.d.ts NOT FOUND');
}

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

fs.copyFileSync(src, dest);

console.log('✔ TypeScript types copied to dist/index.d.ts');
