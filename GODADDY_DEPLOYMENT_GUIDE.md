# 🚀 Deployment Guide: GoDaddy Hosting (Frontend)

This guide will help you deploy your Dwansys frontend application to GoDaddy hosting.

## 📋 Prerequisites

- [ ] GoDaddy hosting account with cPanel access
- [ ] Domain name registered (can be with GoDaddy or another registrar)
- [ ] Built frontend files (already generated in the `dist` folder)
- [ ] FTP client (FileZilla, WinSCP, or similar)
- [ ] Backend deployed and accessible (Render or another hosting service)

## 🔧 Pre-deployment Configuration

### 1. Update Environment Variables

Before building, ensure your frontend is configured to connect to your backend:

1. Create a [.env.production](file:///c:/Users/sathi/OneDrive/Desktop/Dwansys/frontend/.env.production) file in the `frontend/` directory:
   ```bash
   VITE_API_BASE_URL=https://your-backend-url.onrender.com
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   VITE_NODE_ENV=production
   ```

2. Replace the placeholder URLs with your actual backend and Supabase URLs.

### 2. Rebuild the Frontend

After updating environment variables, rebuild the frontend:

```bash
cd frontend
npm run build
```

This will generate updated files in the `dist/` folder.

## 📁 Deployment Steps

### Step 1: Access Your GoDaddy Hosting

1. Log in to your GoDaddy account
2. Navigate to your hosting product
3. Click "Manage" next to your hosting plan
4. Open cPanel by clicking "cPanel Admin"

### Step 2: Upload Files via File Manager or FTP

#### Option A: Using cPanel File Manager

1. In cPanel, find and open "File Manager"
2. Navigate to your document root (usually `public_html` or a subdirectory)
3. Delete any existing files in this directory (backup first if needed)
4. Upload the contents of the `dist` folder:
   - Select all files and folders in your local `dist` folder
   - Upload them to the document root directory
   - Make sure to upload the `assets` folder and all its contents

#### Option B: Using FTP Client

1. Get your FTP credentials from GoDaddy:
   - Host/Server: Your domain or IP address
   - Username: Your cPanel username
   - Password: Your cPanel password
   - Port: 21 (FTP) or 22 (SFTP)

2. Connect using your FTP client:
   - Upload the contents of the `dist` folder to your document root directory
   - This typically includes:
     - `index.html`
     - `favicon.png`
     - `assets/` folder with all its contents

### Step 3: Configure the Backend URL

If you haven't already, make sure your frontend is configured to communicate with your backend:

1. In your GoDaddy File Manager or FTP client, locate the `index.html` file
2. Verify that it references the correct backend URL in the JavaScript files
3. If needed, you can modify the JavaScript files in the `assets` folder, but it's better to rebuild with correct environment variables

### Step 4: Test Your Deployment

1. Visit your domain in a web browser
2. Check that all pages load correctly
3. Test the contact form and subscription functionality
4. Verify that images and styles load properly

## ⚙️ Additional Configuration

### Handling Routing (Client-side Routing)

Since your app uses React Router, you'll need to configure URL rewriting:

1. In cPanel, find and open "Redirects"
2. Create a redirect rule:
   - Type: "Redirect with or without www"
   - Redirects to: Your domain's main page (e.g., `https://yourdomain.com/index.html`)
   - Wildcard Redirect: Yes
   - HTTP Status Code: 200 (not 301 or 302)

Alternatively, you can create a [.htaccess](file:///c:/Users/sathi/OneDrive/Desktop/Dwansys/frontend/.htaccess) file in your document root with:

```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

### Optimizing Performance

1. Enable Gzip compression (if not already enabled in cPanel)
2. Set cache headers for static assets:
   ```apache
   # In .htaccess
   <IfModule mod_expires.c>
     ExpiresActive on
     ExpiresByType text/css "access plus 1 year"
     ExpiresByType application/javascript "access plus 1 year"
     ExpiresByType image/png "access plus 1 year"
     ExpiresByType image/jpg "access plus 1 year"
     ExpiresByType image/jpeg "access plus 1 year"
   </IfModule>
   ```

## 🔧 Troubleshooting

### Common Issues

1. **Blank Page or 404 Errors**:
   - Check that all files were uploaded correctly
   - Verify the [.htaccess](file:///c:/Users/sathi/OneDrive/Desktop/Dwansys/frontend/.htaccess) file is in place for routing
   - Ensure `index.html` is in the document root

2. **CORS Errors**:
   - Verify backend CORS configuration allows your domain
   - Check that `VITE_API_BASE_URL` points to the correct backend URL

3. **Images Not Loading**:
   - Check that the `assets` folder and all its contents were uploaded
   - Verify file permissions (should be 644 for files, 755 for directories)

4. **CSS/JavaScript Not Loading**:
   - Check browser console for 404 errors
   - Verify file paths in `index.html` are correct
   - Ensure all assets were uploaded

### Debug Commands

```bash
# Test build locally before deployment
cd frontend
npm run build
npm run preview

# Check environment variables
echo $VITE_API_BASE_URL
```

## 🔒 Security Checklist

- [ ] Never commit `.env` files to Git
- [ ] Use only public Supabase keys in frontend
- [ ] Enable HTTPS on your domain
- [ ] Set up proper file permissions (644 for files, 755 for directories)
- [ ] Use environment variables for all sensitive data
- [ ] Regularly update dependencies

## 🔄 Updating Your Site

To update your site after making changes:

1. Rebuild the frontend:
   ```bash
   cd frontend
   npm run build
   ```

2. Upload the new contents of the `dist` folder to your GoDaddy hosting
3. Clear your browser cache to see changes immediately

## 📞 Support

If you encounter issues:

1. Check browser console for JavaScript errors
2. Verify all files were uploaded correctly
3. Check GoDaddy error logs in cPanel
4. Ensure environment variables are correctly set
5. Test backend endpoints directly

---

**🎉 Congratulations!** Your Dwansys frontend application should now be live on your GoDaddy hosting!