# Netlify TOML Configuration Fix

## Problem
The Netlify deployment was failing with the following error:
```
Failed during stage 'Reading and parsing configuration files'
Could not parse configuration file
Unknown character "60" at row 1, col 2, pos 1:
1> <<<<<<< HEAD
    ^
2: =======
```

## Root Cause
The [netlify.toml](file://c:\Users\sathi\OneDrive\Desktop\Dwansys\frontend\netlify.toml) files (both in root and frontend directories) contained unresolved merge conflict markers:
- `<<<<<<< HEAD`
- `=======`
- `>>>>>>> [commit-hash]`

These markers were preventing Netlify from parsing the configuration files correctly.

## Solution Applied
Cleaned up both [netlify.toml](file://c:\Users\sathi\OneDrive\Desktop\Dwansys\frontend\netlify.toml) files by removing all merge conflict markers and keeping the correct configuration:

```toml
[build]
  base = "frontend"
  command = "npm run build"
  publish = "frontend/dist"

[build.environment]
  NODE_VERSION = "20"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

# Headers for security and performance
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

# API proxy for local development
[[redirects]]
  from = "/api/*"
  to = "https://dwansys.onrender.com/api/:splat"
  status = 200
  force = true
```

## Verification
- Configuration files are now syntactically correct
- No more merge conflict markers
- Ready for Netlify deployment

## Next Steps
1. Commit these changes to the repository
2. Push to trigger a new Netlify build
3. Monitor the deployment to ensure it completes successfully