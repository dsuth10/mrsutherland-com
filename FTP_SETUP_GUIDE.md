# FTP/SFTP Setup Guide for WordPress

This guide will help you set up FTP/SFTP access to upload the `flooding-sorter-app.js` file.

## Finding Your FTP Credentials

### Step 1: Log into Your Hosting Control Panel

The steps depend on your hosting provider:

#### **cPanel (Most Common)**
1. Log into cPanel (usually at `https://mrsutherland.net/cpanel` or your host's URL)
2. Look for **"FTP Accounts"** or **"Files"** section

#### **Other Control Panels**
- **Plesk**: Look for **"FTP"** or **"File Manager"**
- **DirectAdmin**: **"FTP Management"**
- **WordPress.com**: SFTP credentials in **Settings → Hosting Configuration**
- **WordPress.org (self-hosted)**: Check with your hosting provider

### Step 2: Get Your FTP Credentials

You'll need:
- **FTP Host/Server**: Usually `ftp.mrsutherland.net` or `mrsutherland.net` or your server IP
- **Username**: Often your cPanel username or a specific FTP username
- **Password**: Your FTP password (may be different from cPanel password)
- **Port**: 
  - FTP: `21`
  - SFTP: `22`

### Step 3: Create FTP Account (if needed)

If you don't have FTP access yet:
1. In cPanel: **FTP Accounts → Create FTP Account**
2. Username: Create a new one or use your main account
3. Set a secure password
4. Directory: Usually auto-set to your domain's root
5. Click **Create FTP Account**

## Using FTP Clients

### Option 1: FileZilla (Free, Recommended)

1. **Download FileZilla**: https://filezilla-project.org/download.php?type=client
2. **Install and Open FileZilla**
3. **Connect**:
   - Host: `ftp.mrsutherland.net` (or your FTP server)
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: `21` (FTP) or `22` (SFTP)
   - Click **Quickconnect**
4. **Navigate**:
   - Left side: Your local computer files
   - Right side: Your server files
   - Navigate to: `/public_html/wp-content/uploads/` or `/wp-content/uploads/`
5. **Upload**:
   - Find `dist/assets/flooding-sorter-app.js` on the left
   - Drag it to the right side (uploads folder)
   - Rename to `flooding-sorter-app.js` if needed

### Option 2: WinSCP (Windows)

1. **Download**: https://winscp.net/eng/download.php
2. **Open WinSCP**
3. **New Session**:
   - File protocol: SFTP (recommended) or FTP
   - Host name: `mrsutherland.net` or your FTP server
   - User name: Your FTP username
   - Password: Your FTP password
   - Port: `22` (SFTP) or `21` (FTP)
4. **Connect** and navigate to `/wp-content/uploads/`
5. **Upload** the file

### Option 3: Cyberduck (Mac/Windows)

1. **Download**: https://cyberduck.io/download/
2. **Open Cyberduck**
3. **Open Connection**:
   - Select FTP or SFTP
   - Server: `mrsutherland.net`
   - Username & Password: Your credentials
   - Connect
4. Navigate and upload

### Option 4: Using cPanel File Manager (No FTP Client Needed!)

This is the **easiest option** if you have cPanel:

1. **Log into cPanel**
2. **Click "File Manager"**
3. **Navigate to**: `wp-content/uploads/`
4. **Click "Upload"** button at the top
5. **Select** `dist/assets/flooding-sorter-app.js`
6. **After upload**: Click the file and select "Rename" → `flooding-sorter-app.js`

## Common FTP Paths

Your WordPress uploads folder is typically at one of these locations:

- `/public_html/wp-content/uploads/` (most common)
- `/wp-content/uploads/`
- `/home/username/public_html/wp-content/uploads/`
- `/var/www/html/wp-content/uploads/` (some servers)

## Troubleshooting

### "Connection Refused" or "Timeout"
- Try SFTP instead of FTP (port 22)
- Check if FTP is enabled in your hosting control panel
- Contact your hosting provider

### "Permission Denied"
- Make sure you're uploading to `/wp-content/uploads/` (not other folders)
- Check file permissions (should be `644` or `755`)

### "Cannot Connect"
- Verify FTP is enabled for your hosting account
- Check firewall settings
- Try passive FTP mode in FileZilla settings

## Alternative: Contact Your Hosting Provider

If you're unsure:
1. Contact your hosting support
2. Ask for:
   - FTP/SFTP credentials
   - Connection details (host, port, protocol)
   - The correct path to `wp-content/uploads/`

## After Upload

Once uploaded, verify the file is accessible:
- Visit: `https://mrsutherland.net/wp-content/uploads/flooding-sorter-app.js`
- You should see the JavaScript code (or it may download)

Your WordPress page should now load the React app correctly!


