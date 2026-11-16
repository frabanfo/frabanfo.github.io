// Prints the built /cv page to public/cv.pdf with headless Edge/Chrome (text stays selectable for ATS).
// Usage: npm run cv:pdf   (then rebuild/commit so dist and the repo include the new PDF)
import { existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const candidates = [
  process.env.BROWSER_PATH,
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
].filter(Boolean);

const browser = candidates.find((p) => existsSync(p));
if (!browser) {
  console.error('No Edge/Chrome found. Set BROWSER_PATH to a Chromium-based browser.');
  process.exit(1);
}

const input = pathToFileURL(resolve('dist/cv/index.html')).href;
const output = resolve('public/cv.pdf');

execFileSync(browser, [
  '--headless',
  '--disable-gpu',
  '--no-pdf-header-footer',
  '--print-to-pdf-no-header',
  `--print-to-pdf=${output}`,
  input,
], { stdio: 'inherit' });

console.log(`CV written to ${output}`);
