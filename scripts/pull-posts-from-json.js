#!/usr/bin/env node
/**
 * One-off: read WordPress posts JSON (from wp_posts_search output) and write
 * wordpress-content/posts/<slug>.html with a manifest comment and content.raw.
 * Usage: node scripts/pull-posts-from-json.js <path-to-json-file>
 */
const fs = require('fs');
const path = require('path');

const jsonPath = process.argv[2];
if (!jsonPath) {
  console.error('Usage: node pull-posts-from-json.js <path-to-json-file>');
  process.exit(1);
}

const outDir = path.join(__dirname, '..', 'wordpress-content', 'posts');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const raw = fs.readFileSync(jsonPath, 'utf8');
const posts = JSON.parse(raw);

for (const post of posts) {
  const slug = post.slug;
  const id = post.id;
  const content = post.content?.raw ?? '';
  const title = (post.title?.raw ?? '').replace(/-->/g, '');
  const header = `<!-- post_id: ${id} slug: ${slug} title: ${title} -->\n`;
  const outPath = path.join(outDir, `${slug}.html`);
  fs.writeFileSync(outPath, header + content, 'utf8');
  console.log('Wrote', outPath);
}

console.log('Done. Posts:', posts.length);
