# AI Scare Trade — Blog Post & Story Web App

This folder contains the full AI Scare Trade blog post and its scroll-driven story web app.

## Live URLs

| URL | Purpose |
|-----|---------|
| [Blog post](https://mrsutherland.net/the-ai-scare-trade-is-coming-for-schools-and-its-wearing-a-lanyard/) | Article in blog feed, links to interactive page |
| [Interactive page](https://mrsutherland.net/ai-scare-trade-story/) | Full scroll-driven story with infographics |

## Contents

| Item | Description |
|------|--------------|
| `ai_scare_trade_schools_blog_post.md` | Full blog post content (source) |
| `public/images/` | Infographic images (Image1.png, image2.png, …) |
| `src/` | React app (scroll reveal, modules) |
| `index.html`, `package.json`, etc. | Vite build config |

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3001

## Deploy to WordPress (Required for interactive page)

The interactive page at https://mrsutherland.net/ai-scare-trade-story/ needs these files uploaded:

### 1. Build the app
```bash
npm run build
```

### 2. Upload JavaScript
- Copy `dist/assets/index-*.js` to `ai-scare-trade-story-app.js`
- Upload to `wp-content/uploads/` via hPanel File Manager or SFTP (port 65002)

### 3. Upload images
Create folder `wp-content/uploads/ai-scare-trade/` and upload:
- Image1.png, image2.png, image3.png, image4.png, image5.png
(from `public/images/` or `dist/images/`)

### 4. Clear cache
- WP Admin → LiteSpeed Cache → Purge All
- Hard refresh browser (Ctrl+Shift+R)
