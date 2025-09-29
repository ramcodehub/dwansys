# 🌐 GoDaddy DNS Configuration Guide

This guide provides detailed instructions for configuring DNS records in GoDaddy to point your domain to Netlify (frontend) and Render (backend).

## 📋 Prerequisites

- Active GoDaddy domain
- Deployed Netlify site URL (e.g., `your-site.netlify.app`)
- Deployed Render backend URL (e.g., `your-backend.onrender.com`)

## 🔧 DNS Configuration Steps

### Step 1: Access GoDaddy DNS Manager

1. Log in to your GoDaddy account
2. Navigate to "My Products"
3. Find your domain and click "DNS" next to it
4. You'll see the DNS Management page

### Step 2: Configure DNS Records for Frontend (Netlify)

Add the following A records to point your domain to Netlify:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 75.2.60.5 | 1 hour |
| A | www | 75.2.60.5 | 1 hour |

Add the following CNAME record for www (alternative approach):

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | www | your-site.netlify.app | 1 hour |

**Note**: You should use either the A records OR the CNAME record for www, not both.

### Step 3: Configure DNS Records for Backend (Render) - Optional

If you want to use a custom subdomain for your API:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | api | your-backend.onrender.com | 1 hour |

### Step 4: Configure Domain Forwarding (Redirects)

To ensure all traffic goes to your preferred domain version (www or non-www):

1. In the DNS Management page, scroll down to "Forwarding"
2. Click "Add"
3. Configure forwarding:
   - **Forward from**: www.yourdomain.com
   - **Forward to**: https://yourdomain.com (or vice versa)
   - **Type**: Permanent (301)
   - **Settings**: Forward only

### Step 5: Verify DNS Changes

DNS changes can take up to 48 hours to propagate globally, but typically happen much faster:

1. Use a tool like [https://dnschecker.org](https://dnschecker.org) to verify propagation
2. Test your domain in different browsers
3. Check both www and non-www versions

## 🛠️ Troubleshooting DNS Issues

### Common Problems

1. **Site not loading after DNS changes**:
   - Wait for DNS propagation (up to 48 hours)
   - Clear your browser cache
   - Try accessing from different networks

2. **SSL Certificate Issues**:
   - Ensure your domain is properly added to Netlify
   - Let Netlify automatically provision SSL certificates
   - Check for mixed content warnings

3. **Email Issues**:
   - If you're using GoDaddy email, ensure MX records are preserved
   - Don't delete existing MX, TXT, or other critical records unless instructed

### Checking DNS Records

You can verify your DNS records using command line tools:

```bash
# Check A records
nslookup yourdomain.com

# Check CNAME records
nslookup www.yourdomain.com

# Check all records
dig yourdomain.com ANY
```

## 🔒 Security Considerations

1. **Protect Your Domain**:
   - Enable two-factor authentication on your GoDaddy account
   - Lock your domain to prevent unauthorized transfers
   - Regularly review DNS records for unauthorized changes

2. **Monitor Changes**:
   - Keep a record of all DNS changes
   - Set up alerts for domain expiration
   - Regularly audit DNS records

## 🔄 Updating DNS Records

When making changes to DNS records:

1. Make changes during low-traffic periods
2. Update one record at a time
3. Allow time for propagation before making additional changes
4. Test thoroughly after each change

## 📞 GoDaddy Support

If you encounter issues with DNS configuration:

1. Check GoDaddy's help articles
2. Use the online chat support
3. Call GoDaddy customer support
4. Provide specific error messages and screenshots when requesting help

---

With these DNS configurations, your domain will properly point to your Netlify frontend with the backend API accessible through Render.