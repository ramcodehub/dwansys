# GoDaddy Deployment Guide

This guide explains how to deploy the Dwansys frontend application to GoDaddy hosting.

## Prerequisites

1. GoDaddy hosting account with cPanel access
2. Node.js installed locally (for building the project)
3. FTP client (like FileZilla) or GoDaddy File Manager access

## Build Process

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the project:
   ```bash
   npm run build
   ```

   This will create a `dist` folder containing all the production files.

## Deployment Steps

### Option 1: Using FTP Client (Recommended)

1. Open your FTP client (e.g., FileZilla)
2. Connect to your GoDaddy hosting using:
   - Host: Your GoDaddy FTP server address
   - Username: Your GoDaddy cPanel username
   - Password: Your GoDaddy cPanel password
   - Port: 21 (or as provided by GoDaddy)

3. Navigate to the `dist` folder in your local project
4. Upload all contents of the `dist` folder to the `public_html` directory (or your desired subdirectory) on GoDaddy

### Option 2: Using GoDaddy File Manager

1. Build the project locally as described above
2. Compress the contents of the `dist` folder into a ZIP file
3. Log in to your GoDaddy cPanel
4. Open the File Manager
5. Navigate to the `public_html` directory
6. Upload the ZIP file
7. Extract the ZIP file contents directly into `public_html`

## Configuration

### Environment Variables

The application uses environment variables for API configuration. These are embedded during the build process:

- `VITE_API_BASE_URL`: Set to your backend URL (https://dwansys.onrender.com)

If you need to change the API endpoint, update the [.env.production](file:///c:/Users/sathi/OneDrive/Desktop/Dwansys/frontend/.env.production) file before building:

```env
VITE_API_BASE_URL=https://your-backend-url.com
```

### Routing Configuration

The [.htaccess](file:///c:/Users/sathi/OneDrive/Desktop/Dwansys/frontend/.htaccess) file handles:
- React Router navigation (redirects to index.html)
- WWW to non-WWW redirects
- Security headers
- Static asset caching
- Gzip compression

## DNS Configuration

To point your domain to GoDaddy hosting:

1. Log in to your domain registrar (where you purchased the domain)
2. Update the nameservers to point to GoDaddy's nameservers:
   - `ns1.secureserver.net`
   - `ns2.secureserver.net`

Alternatively, if keeping DNS with your current provider:

1. Create an A record pointing to GoDaddy's IP address
2. Or create a CNAME record pointing to your GoDaddy hosting

## Troubleshooting

### Common Issues

1. **404 errors on routes**: Ensure [.htaccess](file:///c:/Users/sathi/OneDrive/Desktop/Dwansys/frontend/.htaccess) is uploaded and Apache mod_rewrite is enabled

2. **Blank page**: Check browser console for errors, ensure all files were uploaded correctly

3. **API connection issues**: Verify `VITE_API_BASE_URL` is correctly set in environment variables

4. **Mixed content errors**: Ensure all resources use HTTPS

### Verifying Deployment

1. Visit your domain in a browser
2. Check browser developer tools console for errors
3. Test all navigation routes
4. Test form submissions (Contact Us, Subscribe)

## Updating the Deployment

To update your site:

1. Pull the latest changes from your repository
2. Rebuild the project: `npm run build`
3. Upload the new contents of the `dist` folder, overwriting existing files

Note: For a seamless update, consider uploading to a staging directory first, then moving to production.