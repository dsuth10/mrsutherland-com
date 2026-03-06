# GPT-5.4 and Teacher Workload — Blog Post & Custom Front Page

This folder contains the full blog post and its custom, scroll-driven front page for the Mr Sutherland blog.

## Live URLs

| URL | Purpose |
|-----|---------|
| [Blog post](https://mrsutherland.net/gpt-5-4-and-the-future-of-teacher-workload/) | Article in blog feed, links to interactive page |
| [Interactive page](https://mrsutherland.net/gpt-54-teacher-workload/) | Custom front page with hero, stats table, flowchart, and sections |

## Contents

| Item | Description |
|------|-------------|
| `GPT-5.4-Teacher-Workload-Blog-Post.md` | Full blog post content (source) |
| `src/App.tsx` | Main app; composes Hero and section components |
| `src/theme.ts` | Design tokens (colors, spacing) |
| `src/components/` | Hero, NumbersSection, WhatChangesSection, BusyWorkSection, BeyondHypeSection, TeacherAngleSection, PracticalStepsSection, ArticleFooter, ScrollModule |
| `index.html`, `package.json`, etc. | Vite build config |

## Local Development

```bash
npm install
npm run dev
```

Open **http://localhost:3002**

## Design

- **Theme:** Deep navy/slate with warm amber accents (education-focused, readable).
- **Typography:** DM Serif Display (headings), Source Sans 3 (body).
- **Features:** Scroll-reveal sections, capability comparison table, Teacher Work Week flowchart (no external images required).

## Build & Deploy to WordPress

1. **Build** (produces stable bundle name for upload):
   ```bash
   npm run build:wp
   ```
   This creates `dist/gpt-54-teacher-workload-app.js`.

2. **Upload** `dist/gpt-54-teacher-workload-app.js` to **`/wp-content/uploads/`** via:
   - hPanel File Manager, or
   - SFTP (Hostinger port 65002).

3. **Page embed:** The WordPress page at `/gpt-54-teacher-workload/` must use a Custom HTML block with **only** this script (no legacy or duplicate script URLs):
   ```html
   <style>#app-wrapper{width:100vw!important;max-width:100vw!important;margin-left:calc(-50vw+50%)!important;margin-right:calc(-50vw+50%)!important;position:relative!important;left:0!important;right:0!important}#root{width:100%!important;max-width:none!important}#root>div{width:100vw!important;max-width:none!important;margin-left:calc(-50vw+50%)!important;margin-right:calc(-50vw+50%)!important}</style>
   <script src="https://cdn.tailwindcss.com"></script>
   <div id="app-wrapper"><div id="root"></div></div>
   <script src="https://mrsutherland.net/wp-content/uploads/gpt-54-teacher-workload-app.js"></script>
   ```
   Fonts: add Google Fonts (DM Serif Display, Source Sans 3) in the block or theme if desired.

4. **Cache:** WP Admin → LiteSpeed Cache → Purge All; then hard refresh (Ctrl+Shift+R).

5. **QA:** Check desktop/tablet/mobile, keyboard nav, and that no old bundle is referenced.
