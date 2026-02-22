# Hostinger-Specific Upload Guide for flooding-sorter-app.js

This guide is tailored specifically for Hostinger hosting. Your site uses **hPanel** (Hostinger's control panel), not cPanel.

## Method 1: Using hPanel File Manager (Easiest - No FTP Client Needed!)

This is the **simplest method** and works for all Hostinger plans:

### Steps:

1. **Log into hPanel**
   - Go to https://hpanel.hostinger.com/
   - Log in with your Hostinger credentials

2. **Open File Manager**
   - In hPanel, look for **"Files"** section
   - Click **"File Manager"**

3. **Navigate to WordPress uploads folder**
   - Navigate to: `public_html/wp-content/uploads/`
   - If you see `domains/mrsutherland.net/public_html/wp-content/uploads/`, use that path

4. **Upload the file**
   - Click the **"Upload"** button at the top
   - Select your `dist/assets/flooding-sorter-app.js` file
   - Wait for upload to complete

5. **Verify the file**
   - Check that `flooding-sorter-app.js` appears in the file list
   - The file should be accessible at: `https://mrsutherland.net/wp-content/uploads/flooding-sorter-app.js`

## Method 2: Using SFTP (Recommended for larger files)

**Important Hostinger-specific details:**
- SFTP is available on **Premium plans and above**
- SFTP port is **65002** (not the standard port 22)
- You must enable SSH access first
- The password is the same as your FTP password

### Step 1: Enable SSH Access

1. **Log into hPanel**
2. Navigate to **"Hosting"** → Select your domain
3. Go to **"Advanced"** → **"SSH Access"**
4. Toggle **"SSH access"** to **"Enable"**
5. Note the credentials shown:
   - **FTP IP**: e.g., `185.185.185.185`
   - **FTP/SSH Username**: Your username
   - **Port**: `65002`

### Step 2: Get Your Password

- The SFTP/SSH password is the **same as your main domain's FTP password**
- If you don't know it, you can reset it in **"FTP Accounts"** section

### Step 3: Connect with FileZilla

1. **Download FileZilla**: https://filezilla-project.org/download.php?type=client

2. **Open FileZilla** and use Quickconnect:
   - **Host**: Your FTP IP (from SSH Access section, e.g., `185.185.185.185`)
   - **Username**: Your FTP/SSH Username
   - **Password**: Your FTP password
   - **Port**: `65002`
   - Click **"Quickconnect"**

   **OR use Site Manager** (to save credentials):
   - File → Site Manager → New Site
   - **Protocol**: SFTP – SSH File Transfer Protocol
   - **Host**: Your FTP IP
   - **Port**: `65002`
   - **Logon Type**: Normal
   - **User**: Your FTP/SSH Username
   - Click **"Connect"** and enter password when prompted

3. **If you see "Unknown host key" message**: 
   - Check **"Always trust this host"** and click **OK**

### Step 4: Upload the File

1. **Navigate to uploads folder**:
   - On the right (server side), navigate to: `public_html/wp-content/uploads/`
   
2. **Upload the file**:
   - On the left (local side), find `dist/assets/flooding-sorter-app.js`
   - Drag it from left to right (or right-click → Upload)
   - Ensure it's named `flooding-sorter-app.js`

3. **Verify**:
   - Check the file appears in the uploads folder
   - File should be accessible at: `https://mrsutherland.net/wp-content/uploads/flooding-sorter-app.js`

## Method 3: Allow .js Uploads in WordPress (After Upload)

Since WordPress blocks `.js` files by default, you have two options:

### Option A: Add to Theme's functions.php (Recommended)

1. **Access functions.php**:
   - Via File Manager: `public_html/wp-content/themes/your-theme-name/functions.php`
   - Or via WordPress: **Appearance → Theme Editor → functions.php**

2. **Add this code** at the end (before the closing `?>` if present):

```php
// Allow .js file uploads
function allow_js_uploads($mimes) {
    $mimes['js'] = 'application/javascript';
    return $mimes;
}
add_filter('upload_mimes', 'allow_js_uploads');
```

3. **Save the file**

### Option B: Upload via File Manager/FTP (No Code Needed)

If you upload via File Manager or SFTP directly, you don't need to modify WordPress settings. The file will work as long as it's in the correct location.

## Hostinger-Specific Notes

1. **hPanel vs cPanel**: Hostinger uses **hPanel**, not cPanel. The interface may look different but functionality is similar.

2. **SFTP Requirements**:
   - Available on **Premium plans and above**
   - If you're on a lower plan, use **File Manager** instead

3. **File Paths**:
   - Your WordPress installation is typically in: `public_html/` or `domains/mrsutherland.net/public_html/`
   - Uploads folder: `public_html/wp-content/uploads/`

4. **FTP vs SFTP**:
   - Hostinger supports both FTP and SFTP
   - SFTP (port 65002) is more secure and recommended
   - Standard FTP uses port 21

## Troubleshooting

### "SSH Access not available"
- This means you're on a Basic or Starter plan
- Use **File Manager** instead (Method 1)
- Or upgrade to Premium plan for SFTP access

### "Permission Denied"
- Make sure you're uploading to `/wp-content/uploads/`
- Check file permissions (should be 644 or 755)

### "File not accessible"
- Verify the file path: `https://mrsutherland.net/wp-content/uploads/flooding-sorter-app.js`
- Clear WordPress cache if you use a caching plugin
- Check file permissions in File Manager

### "Can't find uploads folder"
- In File Manager, navigate to `public_html/`
- Look for `wp-content` folder
- Then `uploads` folder inside it
- If folders are hidden, check File Manager settings to show hidden files

## After Upload

Once uploaded, your WordPress page at `/effects-of-flooding-sorter/` should automatically load the JavaScript file and display the React app!

Verify it's working:
- Visit: `https://mrsutherland.net/effects-of-flooding-sorter/`
- The interactive activity should load and work


