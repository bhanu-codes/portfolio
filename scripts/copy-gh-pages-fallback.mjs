import { copyFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const browserOutput = resolve('dist/portfolio-frontend/browser');
const indexFile = resolve(browserOutput, 'index.html');
const fallbackFile = resolve(browserOutput, '404.html');

if (!existsSync(indexFile)) {
  throw new Error(`Angular browser output not found: ${indexFile}`);
}

copyFileSync(indexFile, fallbackFile);
console.log('Created GitHub Pages SPA fallback: dist/portfolio-frontend/browser/404.html');
