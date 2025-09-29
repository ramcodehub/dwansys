# Dwansys Deployment Script (PowerShell)
# This script helps prepare your project for deployment

Write-Host "🚀 Dwansys Deployment Preparation Script" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green

# Check if we're in the right directory
if (-not (Test-Path "package.json") -and -not (Test-Path "frontend") -and -not (Test-Path "backend")) {
    Write-Host "❌ Error: Please run this script from the project root directory" -ForegroundColor Red
    exit 1
}

Write-Host "📋 Checking project structure..." -ForegroundColor Yellow

# Check frontend
if (Test-Path "frontend") {
    Write-Host "✅ Frontend directory found" -ForegroundColor Green
    Set-Location frontend
    if (Test-Path "package.json") {
        Write-Host "✅ Frontend package.json found" -ForegroundColor Green
        Write-Host "📦 Installing frontend dependencies..." -ForegroundColor Yellow
        npm install
        Write-Host "🔨 Building frontend..." -ForegroundColor Yellow
        npm run build
        if ($LASTEXITCODE -eq 0) {
            Write-Host "✅ Frontend build successful" -ForegroundColor Green
        } else {
            Write-Host "❌ Frontend build failed" -ForegroundColor Red
            exit 1
        }
    } else {
        Write-Host "❌ Frontend package.json not found" -ForegroundColor Red
        exit 1
    }
    Set-Location ..
} else {
    Write-Host "❌ Frontend directory not found" -ForegroundColor Red
    exit 1
}

# Check backend
if (Test-Path "backend") {
    Write-Host "✅ Backend directory found" -ForegroundColor Green
    Set-Location backend
    if (Test-Path "package.json") {
        Write-Host "✅ Backend package.json found" -ForegroundColor Green
        Write-Host "📦 Installing backend dependencies..." -ForegroundColor Yellow
        npm install
        Write-Host "🔍 Checking backend configuration..." -ForegroundColor Yellow
        if (Test-Path "server.js") {
            Write-Host "✅ Backend server.js found" -ForegroundColor Green
        } else {
            Write-Host "❌ Backend server.js not found" -ForegroundColor Red
            exit 1
        }
    } else {
        Write-Host "❌ Backend package.json not found" -ForegroundColor Red
        exit 1
    }
    Set-Location ..
} else {
    Write-Host "❌ Backend directory not found" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "🎯 Deployment Configuration Files:" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan

# Check for deployment files
if (Test-Path "frontend/netlify.toml") {
    Write-Host "✅ netlify.toml found" -ForegroundColor Green
} else {
    Write-Host "❌ netlify.toml not found" -ForegroundColor Red
}

if (Test-Path "backend/render.yaml") {
    Write-Host "✅ render.yaml found" -ForegroundColor Green
} else {
    Write-Host "❌ render.yaml not found" -ForegroundColor Red
}

if (Test-Path "frontend/env.example") {
    Write-Host "✅ Frontend env.example found" -ForegroundColor Green
} else {
    Write-Host "❌ Frontend env.example not found" -ForegroundColor Red
}

if (Test-Path "backend/env.example") {
    Write-Host "✅ Backend env.example found" -ForegroundColor Green
} else {
    Write-Host "❌ Backend env.example not found" -ForegroundColor Red
}

Write-Host ""
Write-Host "📝 Next Steps:" -ForegroundColor Cyan
Write-Host "==============" -ForegroundColor Cyan
Write-Host "1. Copy env.example files to .env files and fill in your values"
Write-Host "2. Update the URLs in netlify.toml and render.yaml with your actual domains"
Write-Host "3. Push your code to GitHub"
Write-Host "4. Follow the DEPLOYMENT_GUIDE.md for detailed deployment instructions"
Write-Host ""
Write-Host "🔗 Quick Links:" -ForegroundColor Cyan
Write-Host "- Netlify: https://netlify.com"
Write-Host "- Render: https://render.com"
Write-Host "- Supabase: https://supabase.com"
Write-Host ""
Write-Host "✅ Deployment preparation complete!" -ForegroundColor Green
