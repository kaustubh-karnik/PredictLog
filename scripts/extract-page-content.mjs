import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '../..');
const outDir = path.resolve(__dirname, '../src/content');

const pages = [
  { name: 'command-overview', file: 'command_overview/code.html' },
  { name: 'shortfall-watch', file: 'shortfall_watch/code.html' },
  { name: 'forward-supply-map', file: 'forward_supply_map/code.html' },
  { name: 'coa-planner', file: 'coa_planner/code.html' },
];

function extractMainInner(html) {
  const mainOpen = html.indexOf('<main');
  if (mainOpen === -1) throw new Error('No <main> found');
  const mainStart = html.indexOf('>', mainOpen) + 1;
  const mainClose = html.lastIndexOf('</main>');
  if (mainClose === -1) throw new Error('No </main> found');
  let inner = html.slice(mainStart, mainClose).trim();
  // Remove trailing inline scripts (ported to React)
  inner = inner.replace(/<script[\s\S]*?<\/script>\s*$/i, '').trim();
  return inner;
}

fs.mkdirSync(outDir, { recursive: true });

for (const { name, file } of pages) {
  const htmlPath = path.join(root, file);
  const html = fs.readFileSync(htmlPath, 'utf8');
  const content = extractMainInner(html);
  fs.writeFileSync(path.join(outDir, `${name}.html`), content, 'utf8');
  console.log(`Extracted ${name} (${content.length} chars)`);
}
