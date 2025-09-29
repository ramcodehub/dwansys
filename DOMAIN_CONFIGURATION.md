# 🌐 Domain Configuration Summary

This document outlines the specific domain configuration for your Dwansys deployment.

## 🏷️ Domains Overview

| Service | URL | Primary |
|---------|-----|---------|
| Frontend (GoDaddy) | https://dwansys.com/ | ✅ Yes |
| Frontend (Netlify) | https://dwansyss.netlify.app/ | ❌ No |
| Backend (Render) | https://dwansys.onrender.com/ | N/A |

## 📡 DNS Configuration for GoDaddy (Primary Domain)

### A Records
| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 75.2.60.5 | 1 hour |

### CNAME Records
| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | www | dwansyss.netlify.app | 1 hour |

### Domain Forwarding
Set up forwarding to ensure consistent user experience:

- Forward www.dwansys.com → https://dwansys.com (301 Permanent Redirect)

## 🔗 Service Connections

### Frontend to Backend
- Frontend makes API calls to: `https://dwansys.onrender.com/api/`
- CORS is configured to allow requests from:
  - https://dwansys.com
  - https://www.dwansys.com
  - https://dwansyss.netlify.app

### Backend Environment Variables
Key environment variables in Render:

```
CORS_ORIGIN=https://dwansys.com,https://www.dwansys.com,https://dwansyss.netlify.app
```

## 🔍 Verification Steps

1. **DNS Propagation**
   ```bash
   nslookup dwansys.com
   nslookup www.dwansys.com
   ```

2. **SSL Certificates**
   - All domains should show valid SSL certificates
   - Check using browser security indicators

3. **Service Connectivity**
   - Frontend should load at https://dwansys.com
   - Backend should respond at https://dwansys.onrender.com/health
   - API calls should succeed without CORS errors

## ⚙️ Configuration Files

### Frontend (.env.local)
```bash
VITE_API_BASE_URL=https://dwansys.onrender.com
```

### Backend (render.yaml)
```yaml
- key: CORS_ORIGIN
  value: https://dwansys.com,https://www.dwansys.com,https://dwansyss.netlify.app
```

### Netlify (netlify.toml)
```toml
[[redirects]]
  from = "/api/*"
  to = "https://dwansys.onrender.com/api/:splat"
  status = 200
  force = true
```

## 🔄 Update Process

When making changes to domain configuration:

1. Update DNS records in GoDaddy dashboard
2. Update CORS settings in Render environment variables
3. Update frontend environment variables if needed
4. Allow time for DNS propagation (up to 48 hours)
5. Test all connections thoroughly

## 🛡️ Security Considerations

- Ensure all connections use HTTPS
- Limit CORS origins to only necessary domains
- Regularly review and audit domain configurations
- Monitor certificate expiration dates