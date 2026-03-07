# WordPress Content (Offline Clone)

This directory is the **offline clone** of WordPress page and post content for **mrsutherland.net**. Theme and app source live elsewhere in the repo; here we store only the content that normally lives in the WordPress database (pages and posts) so it can be edited locally and pushed back via WordPress MCP.

## Structure

- **`pages/`** — One file per WordPress page (e.g. `my-page-slug.html`). Content is the HTML/block markup returned by WordPress (e.g. from `wp_get_page`).
- **`posts/`** — One file per WordPress post (e.g. `my-post-slug.html`). Same format as pages.

Each file has a first line that is an HTML comment with `page_id` or `post_id`, `slug`, and `title` so you can push updates using the correct ID. The rest of the file is the raw content to send to `wp_update_page` or `wp_update_post`.

## Workflow

1. **Pull (live → local)**  
   Use WordPress MCP `wp_get_page` (or post tools) to fetch current content, then save it here (e.g. `pages/<slug>.html`).

2. **Edit**  
   Edit the HTML files locally. No live site changes happen until you push.

3. **Push (local → live)**  
   Use WordPress MCP `wp_update_page` (or post equivalent) with the content from the corresponding file. Then clear LiteSpeed Cache and verify on the live site.

Theme and app deployments use **SSH MCP** (see `.cursor/rules/site-management-tools.mdc` and `.agent/skills/deploy-hostinger/SKILL.md`). Page/post updates use **WordPress MCP** only.

## Rules

- Do not edit the live site directly. Always edit here (or in theme/app dirs), then push via MCP.
- After any push, clear cache and test on mrsutherland.net.
