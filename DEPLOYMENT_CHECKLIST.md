# 📋 Deployment Checklist

Use this checklist to ensure all deployment steps are completed properly.

## 🔲 Pre-deployment

### Frontend Preparation
- [ ] Update [netlify.toml](file:///c:/Users/sathi/OneDrive/Desktop/Dwansys/frontend/netlify.toml) with correct redirect rules
- [ ] Test build locally with `npm run build`
- [ ] Verify [.htaccess](file:///c:/Users/sathi/OneDrive/Desktop/Dwansys/frontend/.htaccess) file for GoDaddy deployment
- [ ] Update environment variables in [env.example](file:///c:/Users/sathi/OneDrive/Desktop/Dwansys/frontend/env.example)

### Backend Preparation
- [ ] Update [render.yaml](file:///c:/Users/sathi/OneDrive/Desktop/Dwansys/backend/render.yaml) with correct environment variables
- [ ] Test server locally with `npm start`
- [ ] Update environment variables in [env.example](file:///c:/Users/sathi/OneDrive/Desktop/Dwansys/backend/env.example)

### Database Preparation
- [ ] Prepare SQL migration scripts
- [ ] Verify RLS policies
- [ ] Document Supabase credentials

## 🔲 Platform Setup

### Netlify (Frontend)
- [ ] Connect GitHub repository
- [ ] Configure build settings (base: frontend, build: npm run build, publish: dist)
- [ ] Add environment variables:
  - `VITE_API_BASE_URL`
  - `VITE_SUPABASE_URL`
  - `VITE_SUPABASE_ANON_KEY`
  - `VITE_NODE_ENV`
- [ ] Deploy site
- [ ] Configure custom domain
- [ ] Enable HTTPS

### Render (Backend)
- [ ] Connect GitHub repository
- [ ] Configure service settings (name: dwansys-backend, root: backend)
- [ ] Set build command: `npm install`
- [ ] Set start command: `npm start`
- [ ] Add environment variables:
  - `NODE_ENV`
  - `PORT`
  - `LOG_LEVEL`
  - `CORS_ORIGIN`
  - `SUPABASE_URL`
  - `SUPABASE_KEY`
  - `SUPABASE_SERVICE_KEY`
  - `EMAIL_*` variables
- [ ] Deploy service
- [ ] Configure custom domain (optional)
- [ ] Enable HTTPS

### GoDaddy (Domain)
- [ ] Configure DNS records:
  - A record for @ (root domain) pointing to Netlify
  - A record for www pointing to Netlify
  - CNAME for www (if needed)
  - CNAME for api subdomain (if using custom backend domain)
- [ ] Set up domain forwarding (www to non-www or vice versa)
- [ ] Verify SSL certificates

### Supabase (Database)
- [ ] Run SQL migration scripts:
  - [contacts.sql](file:///c:/Users/sathi/OneDrive/Desktop/Dwansys/backend/sql/contacts.sql)
  - [subscribers.sql](file:///c:/Users/sathi/OneDrive/Desktop/Dwansys/backend/sql/subscribers.sql)
- [ ] Apply RLS policies:
  - [rls_policies.sql](file:///c:/Users/sathi/OneDrive/Desktop/Dwansys/backend/sql/rls_policies.sql)
  - [subscribers_rls_policies.sql](file:///c:/Users/sathi/OneDrive/Desktop/Dwansys/backend/sql/subscribers_rls_policies.sql)
- [ ] Configure authentication settings
- [ ] Document API keys for each environment

## 🔲 Post-deployment

### Integration Testing
- [ ] Test frontend → backend communication
- [ ] Test database read/write operations
- [ ] Test contact form submission
- [ ] Test subscription form
- [ ] Test all pages and navigation
- [ ] Test 404 page handling

### Domain Verification
- [ ] Verify www and non-www versions resolve correctly
- [ ] Test redirects work properly
- [ ] Check SSL certificate validity
- [ ] Verify DNS propagation

### SEO and Performance
- [ ] Test meta tags
- [ ] Verify sitemap accessibility (if applicable)
- [ ] Check page load speed
- [ ] Test mobile responsiveness

### Monitoring and Security
- [ ] Set up uptime monitoring
- [ ] Configure error tracking
- [ ] Verify security headers
- [ ] Test rate limiting
- [ ] Verify environment variables are not exposed

## 🔲 Ongoing Maintenance

### CI/CD
- [ ] Verify auto-deploy on main branch push
- [ ] Set up staging environment (optional)
- [ ] Configure branch deployment previews

### Security
- [ ] Regularly update dependencies
- [ ] Monitor logs for suspicious activity
- [ ] Rotate credentials periodically
- [ ] Backup database regularly

---

✅ **Deployment Complete!** Your application is now live and accessible to users.