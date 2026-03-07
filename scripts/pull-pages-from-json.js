#!/usr/bin/env node
/**
 * One-off: read WordPress pages JSON (from wp_pages_search output) and write
 * wordpress-content/pages/<slug>.html with a manifest comment and content.raw.
 * Usage: node scripts/pull-pages-from-json.js <path-to-json-file>
 */
const fs = require('fs');
const path = require('path');

const jsonPath = process.argv[2];
if (!jsonPath) {
  console.error('Usage: node pull-pages-from-json.js <path-to-json-file>');
  process.exit(1);
}

const outDir = path.join(__dirname, '..', 'wordpress-content', 'pages');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const raw = fs.readFileSync(jsonPath, 'utf8');
const pages = JSON.parse(raw);

for (const page of pages) {
  const slug = page.slug;
  const id = page.id;
  const content = page.content?.raw ?? '';
  const header = `<!-- page_id: ${id} slug: ${slug} title: ${(page.title?.raw ?? '').replace(/-->/g, '')} -->\n`;
  const outPath = path.join(outDir, `${slug}.html`);
  fs.writeFileSync(outPath, header + content, 'utf8');
  console.log('Wrote', outPath);
}

console.log('Done. Pages:', pages.length);
