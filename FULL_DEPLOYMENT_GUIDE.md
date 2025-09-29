# 🚀 Complete Deployment Guide: Netlify + GoDaddy + Render + Supabase

This guide provides step-by-step instructions for deploying your Dwansys application across multiple platforms.

## 📋 Prerequisites

- [ ] GitHub repository with your code
- [ ] Netlify account (free tier available)
- [ ] GoDaddy account with domain and hosting
- [ ] Render account (free tier available)
- [ ] Supabase account and project
- [ ] Domain names registered

---

## 🔹 1. Frontend Deployment (Netlify)

### Step 1: Prepare Frontend
1. Ensure your [netlify.toml](file:///c:/Users/sathi/OneDrive/Desktop/Dwansys/frontend/netlify.toml) file is properly configured with redirects for client-side routing
2. Test locally: `npm run build` in the frontend directory
3. Commit all changes to your GitHub repository

### Step 2: Deploy to Netlify
1. Login to Netlify: Go to [netlify.com](https://netlify.com) and sign in
2. Click "New site from Git"
3. Connect to GitHub and authorize Netlify
4. Select your Dwansys repository
5. Configure build settings:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Add environment variables in Site settings > Environment:
   ```
   VITE_API_BASE_URL=https://your-backend-app.onrender.com
   VITE_SUPABASE_URL=your_actual_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_actual_supabase_anon_key
   VITE_NODE_ENV=production
   ```
7. Click "Deploy site"

### Step 3: Configure Custom Domain on Netlify
1. Go to Site settings > Domain management
2. Add your custom domain (both www and non-www versions)
3. Follow Netlify's instructions for DNS configuration
4. Enable HTTPS (automatic with Netlify)

---

## 🔹 2. GoDaddy Domain Configuration

### Step 1: DNS Configuration for Frontend
1. Log in to your GoDaddy account
2. Go to Domain Management
3. Select your domain
4. Click "DNS" to manage DNS records
5. Add these records:
   
   | Type | Name | Value | TTL |
   |------|------|-------|-----|
   | A | @ | 75.2.60.5 (Netlify IP) | 1 hour |
   | A | www | 75.2.60.5 (Netlify IP) | 1 hour |
   | CNAME | www | your-site.netlify.app | 1 hour |

### Step 2: DNS Configuration for Backend (Optional)
If you want to use a custom subdomain for your backend:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | api | your-backend.onrender.com | 1 hour |

### Step 3: Redirect Configuration
Ensure either www or non-www is your canonical domain:
1. In GoDaddy DNS settings, you can set up forwarding
2. Or handle redirects in your application code

---

## 🔹 3. Backend Deployment (Render)

### Step 1: Prepare Backend
1. Review your [render.yaml](file:///c:/Users/sathi/OneDrive/Desktop/Dwansys/backend/render.yaml) configuration
2. Test locally: `npm start` in the backend directory
3. Commit all changes to your GitHub repository

### Step 2: Deploy to Render
1. Login to Render: Go to [render.com](https://render.com) and sign in
2. Click "New Web Service"
3. Connect to GitHub and authorize Render
4. Select your Dwansys repository
5. Configure service settings:
   - **Name**: `dwansys-backend`
   - **Environment**: `Node`
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
6. Add environment variables:
   ```
   NODE_ENV=production
   PORT=10000
   LOG_LEVEL=info
   CORS_ORIGIN=https://your-domain.com,https://www.your-domain.com,https://your-frontend.netlify.app
   SUPABASE_URL=your_actual_supabase_project_url
   SUPABASE_KEY=your_actual_supabase_anon_key
   SUPABASE_SERVICE_KEY=your_actual_supabase_service_role_key
   EMAIL_HOST=your_smtp_host
   EMAIL_PORT=587
   EMAIL_USER=your_email_username
   EMAIL_PASS=your_email_password
   EMAIL_FROM=noreply@yourdomain.com
   ```
7. Click "Create Web Service"

### Step 3: Configure Custom Domain on Render (Optional)
1. In your service dashboard, go to Settings
2. Under "Custom Domains", add your domain
3. Follow Render's DNS instructions
4. HTTPS is automatic with Render

---

## 🔹 4. Supabase Setup

### Step 1: Database Migration
1. Log in to your Supabase project dashboard
2. Go to SQL Editor
3. Run the SQL scripts from your project:
   - [contacts.sql](file:///c:/Users/sathi/OneDrive/Desktop/Dwansys/backend/sql/contacts.sql)
   - [subscribers.sql](file:///c:/Users/sathi/OneDrive/Desktop/Dwansys/backend/sql/subscribers.sql)

### Step 2: Configure Authentication
1. Go to Authentication > Settings
2. Disable "Enable email signup" if you only want admin access
3. Configure site URL to match your frontend domain

### Step 3: Configure API Keys
1. Go to Project Settings > API
2. Copy your Project URL and anon key for frontend use
3. Keep your service role key secret for backend use only

### Step 4: Row Level Security (RLS)
1. Run the RLS policies from:
   - [rls_policies.sql](file:///c:/Users/sathi/OneDrive/Desktop/Dwansys/backend/sql/rls_policies.sql)
   - [subscribers_rls_policies.sql](file:///c:/Users/sathi/OneDrive/Desktop/Dwansys/backend/sql/subscribers_rls_policies.sql)

---

## 🔹 5. CI/CD Automation

### Netlify Auto-deploy
1. By default, Netlify will auto-deploy on pushes to the main branch
2. Configure in Site settings > Build & deploy > Continuous deployment

### Render Auto-deploy
1. Render automatically deploys on pushes to the main branch
2. Configure in your service settings > Deploy settings

### Environment Security
1. Never commit .env files to your repository
2. Always use platform-provided environment variable management
3. Use different keys for development, staging, and production

---

## 🔹 6. Verification Steps

### Test Frontend → Backend Connection
1. Visit your frontend URL
2. Submit the contact form
3. Check Render logs for successful processing
4. Verify data appears in Supabase tables

### Test Domain Resolution
1. Visit both www and non-www versions of your domain
2. Verify proper redirects to your canonical domain
3. Check SSL certificate validity

### SEO and Accessibility
1. Verify meta tags appear correctly in page source
2. Test sitemap accessibility if you have one
3. Check page loading speed and performance

### Monitoring
1. Set up uptime monitoring for both frontend and backend
2. Configure error tracking and alerts
3. Monitor Supabase usage and performance

---

## 🔧 Troubleshooting Common Issues

### CORS Errors
- Verify CORS_ORIGIN in Render environment variables
- Ensure it includes all domains (www, non-www, Netlify URL)

### Database Connection Issues
- Double-check SUPABASE_URL and keys
- Verify RLS policies are correctly applied
- Check Supabase project settings

### Build Failures
- Check Node.js version compatibility
- Ensure all dependencies are in package.json
- Verify build commands in deployment configurations

### Routing Issues
- Confirm [netlify.toml](file:///c:/Users/sathi/OneDrive/Desktop/Dwansys/frontend/netlify.toml) redirect rules
- Check [.htaccess](file:///c:/Users/sathi/OneDrive/Desktop/Dwansys/frontend/.htaccess) file for GoDaddy deployments

---

## 🔒 Security Checklist

- [ ] All environment variables stored securely in platform dashboards
- [ ] Only public Supabase keys exposed to frontend
- [ ] HTTPS enabled on all services
- [ ] Proper CORS configuration
- [ ] Rate limiting implemented in backend
- [ ] Database RLS policies applied
- [ ] Regular backups of Supabase database

---

## 🎉 Success!

Your Dwansys application is now deployed across multiple platforms with:
- Frontend on Netlify with custom domain
- Backend on Render with environment security
- Database on Supabase with proper security
- Domain managed through GoDaddy with proper DNS configuration
- Automated CI/CD pipeline
- Monitoring and error handling

Monitor your services regularly and update dependencies as needed.