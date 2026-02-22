# Upload Instructions for flooding-sorter-app.js

WordPress blocks `.js` file uploads by default for security reasons. Here are your options:

## Option 1: Allow JS Uploads (Recommended - One-time setup)

1. Add the code from `allow-js-uploads.php` to your WordPress theme's `functions.php` file:
   - Go to **Appearance → Theme Editor → functions.php**
   - Add the code at the end of the file
   - Save the file

2. Then upload `dist/assets/flooding-sorter-app.js` via WordPress Media Library
   - Go to **Media → Add New**
   - Upload the file
   - WordPress will save it as `flooding-sorter-app.js` in `/wp-content/uploads/`

## Option 2: Upload via FTP/SFTP (Most reliable)

1. Use an FTP client (FileZilla, WinSCP, etc.) to connect to your WordPress site
2. Navigate to `/wp-content/uploads/`
3. Upload `dist/assets/flooding-sorter-app.js` and rename it to `flooding-sorter-app.js`
4. The file should be accessible at: `https://mrsutherland.net/wp-content/uploads/flooding-sorter-app.js`

## Option 3: Upload via cPanel File Manager

1. Log into cPanel
2. Open **File Manager**
3. Navigate to `wp-content/uploads/`
4. Upload `dist/assets/flooding-sorter-app.js`
5. Rename it to `flooding-sorter-app.js` if needed

## Verify Upload

After uploading, verify the file is accessible:
- Visit: https://mrsutherland.net/wp-content/uploads/flooding-sorter-app.js
- You should see the JavaScript code (it may download or display in browser)

The WordPress page at `/effects-of-flooding-sorter/` is already configured to load this file.


