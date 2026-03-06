# Mr Sutherland Editorial theme

Modern editorial WordPress theme for mrsutherland.net. Clean typography, navy/slate + amber design tokens, no top blue line.

## Install

1. Zip the `mrsutherland-editorial` folder (this folder only, not the parent).
2. In WP Admin go to **Appearance → Themes → Add New → Upload Theme** and upload the zip.
3. Activate **Mr Sutherland Editorial**.

## Design

- **Colors:** CSS variables in `style.css` (`--color-bg`, `--color-accent`, etc.) — matches the GPT-5.4 interactive app.
- **Fonts:** DM Serif Display (headings), Source Sans 3 (body), loaded via Google Fonts in `functions.php`.
- **No blue line:** Theme does not add a top border; if your previous theme did, the repo plugin `remove-blue-line.php` removes it site-wide.

## Templates

- `front-page.php` — Homepage with hero and recent posts.
- `index.php` — Default blog list.
- `single.php` — Single post.
- `archive.php` — Category/tag/date archives.
- `page.php` — Static pages (e.g. the GPT-5.4 interactive page when it uses a Custom HTML block).

## Menu

After activation, set **Appearance → Menus** and assign a menu to **Primary Menu**.
