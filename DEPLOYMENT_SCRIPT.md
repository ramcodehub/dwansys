# Deployment Script for GoDaddy

This script outlines the steps to deploy the Dwansys frontend to GoDaddy hosting.

## Prerequisites
1. Node.js installed locally
2. FTP client (like FileZilla) or GoDaddy File Manager access
3. GoDaddy hosting account with cPanel access

## Deployment Steps

### 1. Build the Project
```bash
cd frontend
npm install
npm run build
```

This will create a `dist` folder with all the production files.

### 2. Verify Build Contents
Check that the `dist` folder contains:
- [index.html](file:///c:/Users/sathi/OneDrive/Desktop/Dwansys/frontend/dist/index.html)
- [.htaccess](file:///c:/Users/sathi/OneDrive/Desktop/Dwansys/frontend/.htaccess)
- [assets/](file:///c:/Users/sathi/OneDrive/Desktop/Dwansys/frontend/dist/assets/) folder with all static assets

### 3. Deploy to GoDaddy

#### Option A: Using FTP Client
1. Open your FTP client
2. Connect to your GoDaddy hosting with your credentials
3. Navigate to the `dist` folder locally
4. Upload all contents to the `public_html` directory on GoDaddy

#### Option B: Using GoDaddy File Manager
1. Compress the contents of the `dist` folder into a ZIP file
2. Log in to your GoDaddy cPanel
3. Open the File Manager
4. Navigate to the `public_html` directory
5. Upload the ZIP file
6. Extract the contents directly into `public_html`

## Post-Deployment Verification
1. Visit your domain in a browser
2. Check that all pages load correctly
3. Test the contact form and subscription functionality
4. Verify that there are no console errors

## Updating the Deployment
To update your site:
1. Pull the latest changes from your repository
2. Rebuild the project: `npm run build`
3. Upload the new contents of the `dist` folder, overwriting existing files