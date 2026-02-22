# Allow JavaScript Uploads in WordPress — Hostinger Guide

> **Note:** While this guide helps enable JS uploads via the WordPress Media Library, the **recommended method for automated deployments** is using **SFTP/SSH**. This avoids WordPress's security feature of appending `.txt` to JS files and allows for full automation of images and assets. See the `deploy-hostinger` skill for details.

This guide explains how to add the `allow_js_uploads` filter so you can upload `.js` files (like `ai-scare-trade-story-app.js`) via the WordPress Media Library or MCP tools. Your site is hosted on **Hostinger** and uses **hPanel**.

---

## What This Does

WordPress blocks `.js` file uploads by default for security. Adding this filter:

- Allows `.js` files in the Media Library (Media → Add New)
- Enables the WordPress MCP to upload JavaScript bundles via `wp_upload_media`
- Does **not** change how files uploaded via hPanel File Manager or SFTP work (those already work)

---

## Choose Your Method

| Method | Pros | Cons |
|--------|------|------|
| **A: Standalone plugin** | Survives theme updates, easy to disable | One extra plugin |
| **B: Theme functions.php** | No new plugin | Lost when theme is updated |

**Recommended:** Method A (plugin) — safer long-term.

---

## Method A: Create a Standalone Plugin (Recommended)

### Step 1: Log into hPanel

1. Go to **https://hpanel.hostinger.com/**
2. Log in with your Hostinger credentials

### Step 2: Open File Manager

1. In hPanel, find the **Files** section
2. Click **File Manager**

### Step 3: Navigate to the Plugins Folder

1. In the left or main panel, navigate:
   ```
   public_html → wp-content → plugins
   ```
2. If you see `domains/mrsutherland.net/public_html/`, use that as the root instead

### Step 4: Create the Plugin Folder and File

1. Click **New Folder**
2. Name it: `allow-js-uploads`
3. Open the new `allow-js-uploads` folder
4. Click **New File**
5. Name it: `allow-js-uploads.php`

### Step 5: Edit the Plugin File

1. Right-click `allow-js-uploads.php` → **Edit** (or select it and click Edit)
2. Paste this code:

```php
<?php
/**
 * Plugin Name: Allow JS Uploads
 * Description: Enables .js file uploads in WordPress Media Library for embedding web apps.
 * Version: 1.0.0
 * Author: Mr Sutherland
 */

if (!defined('ABSPATH')) {
    exit;
}

// Allow .js files to be uploaded via Media Library
function allow_js_uploads_mime($mimes) {
    $mimes['js'] = 'application/javascript';
    return $mimes;
}
add_filter('upload_mimes', 'allow_js_uploads_mime');

// Ensure correct MIME type is detected for .js files
function allow_js_uploads_filetype($data, $file, $filename) {
    if (pathinfo($filename, PATHINFO_EXTENSION) === 'js') {
        $data['type'] = 'application/javascript';
        $data['ext']  = 'js';
        $data['proper_filename'] = $filename;
    }
    return $data;
}
add_filter('wp_check_filetype_and_ext', 'allow_js_uploads_filetype', 10, 3);
```

3. Click **Save** or **Save Changes**

### Step 6: Activate the Plugin

1. Go to **https://mrsutherland.net/wp-admin/**
2. Log in if needed
3. Go to **Plugins → Installed Plugins**
4. Find **Allow JS Uploads**
5. Click **Activate**

---

## Method B: Add to Theme functions.php

### Step 1: Find Your Active Theme

1. Go to **https://mrsutherland.net/wp-admin/**
2. **Appearance → Themes**
3. Note the **active** theme name (e.g. `twentytwentyfour`, `astra`, or a custom theme)

### Step 2: Open functions.php via hPanel

1. Log into **hPanel** → **File Manager**
2. Navigate to:
   ```
   public_html/wp-content/themes/[YOUR-THEME-NAME]/functions.php
   ```
   Replace `[YOUR-THEME-NAME]` with your active theme (e.g. `twentytwentyfour`)

### Step 3: Backup First

1. Right-click `functions.php` → **Copy**
2. Name the copy: `functions.php.backup-2026-02-21`
3. Keep it in the same folder

### Step 4: Edit functions.php

1. Right-click `functions.php` → **Edit**
2. Scroll to the **very end** of the file (before any closing `?>` if present)
3. Add this code on a new line:

```php
// Allow .js file uploads for embedded web apps
function allow_js_uploads($mimes) {
    $mimes['js'] = 'application/javascript';
    return $mimes;
}
add_filter('upload_mimes', 'allow_js_uploads');

function fix_js_mime_type($data, $file, $filename) {
    if (pathinfo($filename, PATHINFO_EXTENSION) === 'js') {
        $data['type'] = 'application/javascript';
    }
    return $data;
}
add_filter('wp_check_filetype_and_ext', 'fix_js_mime_type', 10, 3);
```

4. Save the file

### Alternative: Use WordPress Theme Editor

1. Go to **Appearance → Theme File Editor**
2. Select **Theme functions** (`functions.php`) in the right sidebar
3. Add the same code at the end
4. Click **Update File**

> **Warning:** Theme Editor edits can break the site if there’s a syntax error. Prefer hPanel File Manager so you can restore from backup.

---

## Verify It Works

### Test 1: Media Library Upload

1. Go to **Media → Add New**
2. Drag and drop a small `.js` file (or use **Select Files**)
3. If it uploads without an error, the filter is working

### Test 2: Check File Accessibility

1. Upload a test file named e.g. `test-upload.js`
2. Open it in the Media Library and copy the **File URL**
3. Open that URL in a new browser tab — you should see the file content (or a download)

---

## Hostinger-Specific Paths

| Item | Path |
|------|------|
| hPanel | https://hpanel.hostinger.com |
| WordPress admin | https://mrsutherland.net/wp-admin |
| Plugins folder | `public_html/wp-content/plugins/` |
| Theme folder | `public_html/wp-content/themes/[theme-name]/` |
| Uploads folder | `public_html/wp-content/uploads/` |

If you see `domains/mrsutherland.net/public_html/`, that is your site root — `public_html` is inside it.

---

## Troubleshooting

### "Sorry, you are not allowed to upload this file type"

- The filter is not active or not loaded.
- **Fix:** Confirm the plugin is activated, or that the code was added to the active theme’s `functions.php` and saved.

### Plugin doesn’t appear in Plugins list

- The plugin folder or file name may be wrong.
- **Fix:** Ensure the file is at `wp-content/plugins/allow-js-uploads/allow-js-uploads.php` and that the plugin header (`Plugin Name:`, etc.) is correct.

### Theme update removed my changes

- Changes in `functions.php` are overwritten by theme updates.
- **Fix:** Use Method A (standalone plugin) instead.

### Still can’t upload .js

1. Clear caches: **LiteSpeed Cache → Purge All**
2. Hard refresh: **Ctrl+Shift+R** (Windows) or **Cmd+Shift+R** (Mac)
3. Try another browser or an incognito/private window

---

## After Enabling: Uploading JS via MCP

Once the filter is active, the WordPress MCP can upload `.js` files with `wp_upload_media`. There may still be size limits for very large bundles; for big files, hPanel File Manager or SFTP remains the most reliable option.

---

## Reference: Plugin File Location

The same code is in your project at:

```
[project-root]/allow-js-uploads.php
```

You can copy from there if you prefer, but the plugin version above includes the proper WordPress plugin header so it appears in the Plugins list.
