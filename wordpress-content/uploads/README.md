# Local copy of wp-content/uploads

This folder is a **full local mirror** of the live site’s WordPress uploads directory:

`https://mrsutherland.net` → `domains/mrsutherland.net/public_html/wp-content/uploads/`

## Contents

- **By year**: `2024/`, `2025/`, `2026/` — media uploaded via WordPress (images, etc.)
- **App bundles**: `flooding-sorter-app.js`, `gpt-54-teacher-workload-app.js`, `ai-scare-trade-story-app.js`
- **App assets**: `ai-scare-trade/` — images for the AI Scare Trade story app
- **Plugin data**: `wpforms/`, `wpcode/`, `iwc-logs/`, `wpcf7_uploads/` — cache and config (safe to ignore for content)

## Refreshing this copy

To pull the latest from the server (overwrites local):

```bash
scp -P 65002 -o StrictHostKeyChecking=no -r u390745858@89.116.53.253:domains/mrsutherland.net/public_html/wp-content/uploads "wordpress-content/"
```

Run from the project root. Uses your SSH key at `~/.ssh/id_ed25519`.

## Usage

- Browse images and files locally without touching the live site.
- Compare with the server after changes.
- Use as a backup before bulk changes.

Do **not** edit the live site’s uploads directly; keep this as a read-only mirror unless you’re intentionally syncing.
