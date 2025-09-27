# 🚀 Deployment Guide: Netlify (Frontend) + Render (Backend)

This guide will help you deploy your Dwansys application to production.

## 📋 Prerequisites

- [ ] GitHub repository with your code
- [ ] Netlify account (free tier available)
- [ ] Render account (free tier available)
- [ ] Supabase project with database setup
- [ ] Domain names (optional, but recommended)

---

## 🔹 Frontend Deployment (Netlify)

### Step 1: Prepare Frontend
1. **Update API URL**: In your frontend code, ensure `VITE_API_BASE_URL` points to your Render backend
2. **Test locally**: Run `npm run build` to ensure build works
3. **Commit changes**: Push all changes to your GitHub repository

### Step 2: Deploy to Netlify
1. **Login to Netlify**: Go to [netlify.com](https://netlify.com) and sign in
2. **New Site from Git**: Click "New site from Git"
3. **Connect GitHub**: Authorize Netlify to access your repository
4. **Select Repository**: Choose your Dwansys repository
5. **Build Settings**:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Base directory**: `frontend` (if deploying from monorepo)
6. **Environment Variables**: Go to Site settings > Environment variables and add:
   ```
   VITE_API_BASE_URL=https://your-backend-app.onrender.com
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   VITE_NODE_ENV=production
   ```
7. **Deploy**: Click "Deploy site"

### Step 3: Configure Custom Domain (Optional)
1. Go to Site settings > Domain management
2. Add your custom domain
3. Update DNS records as instructed
4. Enable HTTPS (automatic with Netlify)

---

## 🔹 Backend Deployment (Render)

### Step 1: Prepare Backend
1. **Test locally**: Run `npm start` to ensure server starts correctly
2. **Commit changes**: Push all changes to your GitHub repository

### Step 2: Deploy to Render
1. **Login to Render**: Go to [render.com](https://render.com) and sign in
2. **New Web Service**: Click "New +" > "Web Service"
3. **Connect GitHub**: Authorize Render to access your repository
4. **Select Repository**: Choose your Dwansys repository
5. **Service Settings**:
   - **Name**: `dwansys-backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Root Directory**: `backend` (if deploying from monorepo)
6. **Environment Variables**: Add the following:
   ```
   NODE_ENV=production
   PORT=10000
   LOG_LEVEL=info
   CORS_ORIGIN=https://your-frontend-app.netlify.app
   SUPABASE_URL=your_supabase_project_url
   SUPABASE_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_KEY=your_supabase_service_role_key
   EMAIL_HOST=your_smtp_host
   EMAIL_PORT=587
   EMAIL_USER=your_email_username
   EMAIL_PASS=your_email_password
   EMAIL_FROM=noreply@yourdomain.com
   ```
7. **Deploy**: Click "Create Web Service"

### Step 3: Configure Custom Domain (Optional)
1. Go to your service settings
2. Add custom domain
3. Update DNS records as instructed
4. Enable HTTPS (automatic with Render)

---

## 🔹 Post-Deployment Configuration

### Step 1: Update Frontend API URL
1. **Get Backend URL**: Copy your Render backend URL (e.g., `https://dwansys-backend.onrender.com`)
2. **Update Netlify**: Go to Site settings > Environment variables
3. **Update VITE_API_BASE_URL**: Set to your Render backend URL
4. **Redeploy**: Trigger a new deployment

### Step 2: Test Endpoints
1. **Health Check**: Visit `https://your-backend-app.onrender.com/health`
2. **Ping Endpoint**: Visit `https://your-backend-app.onrender.com/ping`
3. **API Test**: Test your contact form and subscription form

### Step 3: Monitor and Debug
1. **Netlify Logs**: Check function logs in Netlify dashboard
2. **Render Logs**: Check service logs in Render dashboard
3. **Supabase Logs**: Monitor database activity in Supabase dashboard

---

## 🔹 Environment Variables Reference

### Frontend (.env.local for development)
```bash
VITE_API_BASE_URL=http://localhost:10000
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_NODE_ENV=development
```

### Backend (.env for development)
```bash
NODE_ENV=development
PORT=10000
LOG_LEVEL=debug
CORS_ORIGIN=http://localhost:5173
SUPABASE_URL=your_supabase_project_url
SUPABASE_KEY=your_supabase_anon_key
SUPABASE_SERVICE_KEY=your_supabase_service_role_key
EMAIL_HOST=your_smtp_host
EMAIL_PORT=587
EMAIL_USER=your_email_username
EMAIL_PASS=your_email_password
EMAIL_FROM=noreply@yourdomain.com
```

---

## 🔹 Troubleshooting

### Common Issues

1. **CORS Errors**:
   - Check `CORS_ORIGIN` in backend environment variables
   - Ensure frontend URL matches exactly (including https://)

2. **Build Failures**:
   - Check Node.js version compatibility
   - Ensure all dependencies are in package.json
   - Check for TypeScript errors

3. **API Connection Issues**:
   - Verify `VITE_API_BASE_URL` in frontend
   - Check backend logs for errors
   - Test backend endpoints directly

4. **Database Connection Issues**:
   - Verify Supabase credentials
   - Check database permissions
   - Ensure RLS policies are correct

### Debug Commands

```bash
# Test frontend build locally
cd frontend
npm run build
npm run preview

# Test backend locally
cd backend
npm start

# Check environment variables
echo $VITE_API_BASE_URL
echo $CORS_ORIGIN
```

---

## 🔹 Security Checklist

- [ ] Never commit `.env` files to Git
- [ ] Use only public Supabase keys in frontend
- [ ] Enable HTTPS on both frontend and backend
- [ ] Set up proper CORS origins
- [ ] Use environment variables for all sensitive data
- [ ] Enable rate limiting on backend
- [ ] Set up proper error handling

---

## 🔹 Performance Optimization

- [ ] Enable gzip compression (automatic with Netlify/Render)
- [ ] Set up CDN (automatic with Netlify)
- [ ] Optimize images and assets
- [ ] Enable caching headers
- [ ] Monitor performance metrics

---

## 📞 Support

If you encounter issues:
1. Check the logs in both Netlify and Render dashboards
2. Verify all environment variables are set correctly
3. Test endpoints individually
4. Check Supabase dashboard for database issues

---

**🎉 Congratulations!** Your Dwansys application should now be live and accessible to users worldwide!
