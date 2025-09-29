# 🧪 Deployment Verification Guide

This guide will help you verify that all components of your deployment are properly configured and working together.

## 🔍 Verification Steps

### 1. Backend Health Check
Visit these URLs in your browser to verify the backend is running:

- Health check: https://dwansys.onrender.com/health
- Ping endpoint: https://dwansys.onrender.com/ping

You should see JSON responses indicating the backend is operational.

### 2. Frontend Access
Verify that your frontend is accessible at:

- GoDaddy domain: https://dwansys.com/
- Netlify domain: https://dwansyss.netlify.app/

### 3. API Connectivity Test
Test the connection between frontend and backend:

1. Visit your frontend (either domain)
2. Navigate to a page with a form (Contact Us or Subscribe)
3. Fill out and submit the form
4. Check the Render logs to confirm the request was processed

### 4. CORS Configuration Verification
Check that CORS is properly configured:

1. Open browser developer tools (F12)
2. Go to the Network tab
3. Submit a form on your website
4. Look for the API request to your Render backend
5. Check the response headers for `access-control-allow-origin`

### 5. DNS Configuration Check
Verify your GoDaddy DNS settings are correct:

```bash
# Check A records
nslookup dwansys.com

# Check www CNAME
nslookup www.dwansys.com
```

### 6. SSL Certificate Verification
Ensure all domains have valid SSL certificates:

- https://dwansys.com (GoDaddy domain)
- https://www.dwansys.com (www version)
- https://dwansyss.netlify.app (Netlify domain)
- https://dwansys.onrender.com (Render backend)

## 🛠️ Troubleshooting Common Issues

### CORS Errors
If you encounter CORS errors:

1. Check that `CORS_ORIGIN` in your Render environment variables includes:
   - https://dwansys.com
   - https://www.dwansys.com
   - https://dwansyss.netlify.app

2. Restart your Render service after making changes

### API Connection Issues
If forms aren't working:

1. Verify `VITE_API_BASE_URL` in your frontend is set to:
   `https://dwansys.onrender.com`

2. Check that your API routes in the backend match what the frontend expects

### Domain Resolution Issues
If your GoDaddy domain isn't working:

1. Verify DNS records in GoDaddy dashboard:
   - A record for @ pointing to your hosting IP
   - CNAME for www pointing to dwansyss.netlify.app

2. Check domain forwarding settings

## 📊 Monitoring Your Deployment

### Render Monitoring
- Check logs in Render dashboard
- Monitor uptime and response times
- Set up alerts for service disruptions

### Netlify Monitoring
- Check deploy logs
- Monitor bandwidth usage
- Review form submissions (if using Netlify Forms)

### GoDaddy Monitoring
- Verify domain expiration date
- Check DNS propagation status
- Monitor email service (if using)

## ✅ Success Criteria

When all these checks pass, your deployment is working correctly:

- [ ] Backend health checks return 200 OK
- [ ] Frontend loads without errors on both domains
- [ ] Forms submit successfully and data is stored
- [ ] No CORS errors in browser console
- [ ] All domains have valid SSL certificates
- [ ] DNS records resolve correctly
- [ ] API requests complete successfully

## 📞 Support

If you encounter issues:

1. Check all environment variables are correctly set
2. Verify all configuration files match the domains provided
3. Review the deployment guides for troubleshooting steps
4. Check platform-specific dashboards for error logs