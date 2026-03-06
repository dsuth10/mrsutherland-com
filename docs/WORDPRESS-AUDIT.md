# WordPress Theme & Embed Audit

## Blue top line

- **Cause:** Theme or plugin CSS applies a blue border/line at the top of the site (e.g. `body`, `.site-header`, or wrapper).
- **Fix:** Use the repo plugin **`remove-blue-line.php`**. Upload it to `/wp-content/plugins/` (or as a single-file plugin) and activate. It injects high-priority CSS in `wp_head` to remove `border-top` and `box-shadow` on common selectors.
- **If the line remains:** In WP Admin → Appearance → Customize → Additional CSS, add:
  ```css
  body, .site, .site-header, #masthead { border-top: none !important; }
  ```
  Or inspect the live page (DevTools) to find the exact selector and add it to the plugin.

## Legacy embed / single bundle

- **Canonical interactive page:** [https://mrsutherland.net/gpt-54-teacher-workload/](https://mrsutherland.net/gpt-54-teacher-workload/)
- **Single script:** The page must load only **one** app bundle: `gpt-54-teacher-workload-app.js` from `/wp-content/uploads/`.
- **Check:** In WordPress, edit the page for `/gpt-54-teacher-workload/` and ensure the Custom HTML block has exactly one script tag:  
  `https://mrsutherland.net/wp-content/uploads/gpt-54-teacher-workload-app.js`
- **Remove:** Any old or duplicate script URLs (e.g. hash-named `index-*.js` or older bundle names).
