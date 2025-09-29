#!/bin/bash

# Dwansys Deployment Script
# This script helps prepare your project for deployment

echo "🚀 Dwansys Deployment Preparation Script"
echo "========================================"

# Check if we're in the right directory
if [ ! -f "package.json" ] && [ ! -d "frontend" ] && [ ! -d "backend" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

echo "📋 Checking project structure..."

# Check frontend
if [ -d "frontend" ]; then
    echo "✅ Frontend directory found"
    cd frontend
    if [ -f "package.json" ]; then
        echo "✅ Frontend package.json found"
        echo "📦 Installing frontend dependencies..."
        npm install
        echo "🔨 Building frontend..."
        npm run build
        if [ $? -eq 0 ]; then
            echo "✅ Frontend build successful"
        else
            echo "❌ Frontend build failed"
            exit 1
        fi
    else
        echo "❌ Frontend package.json not found"
        exit 1
    fi
    cd ..
else
    echo "❌ Frontend directory not found"
    exit 1
fi

# Check backend
if [ -d "backend" ]; then
    echo "✅ Backend directory found"
    cd backend
    if [ -f "package.json" ]; then
        echo "✅ Backend package.json found"
        echo "📦 Installing backend dependencies..."
        npm install
        echo "🔍 Checking backend configuration..."
        if [ -f "server.js" ]; then
            echo "✅ Backend server.js found"
        else
            echo "❌ Backend server.js not found"
            exit 1
        fi
    else
        echo "❌ Backend package.json not found"
        exit 1
    fi
    cd ..
else
    echo "❌ Backend directory not found"
    exit 1
fi

echo ""
echo "🎯 Deployment Configuration Files:"
echo "=================================="

# Check for deployment files
if [ -f "frontend/netlify.toml" ]; then
    echo "✅ netlify.toml found"
else
    echo "❌ netlify.toml not found"
fi

if [ -f "backend/render.yaml" ]; then
    echo "✅ render.yaml found"
else
    echo "❌ render.yaml not found"
fi

if [ -f "frontend/env.example" ]; then
    echo "✅ Frontend env.example found"
else
    echo "❌ Frontend env.example not found"
fi

if [ -f "backend/env.example" ]; then
    echo "✅ Backend env.example found"
else
    echo "❌ Backend env.example not found"
fi

echo ""
echo "📝 Next Steps:"
echo "=============="
echo "1. Copy env.example files to .env files and fill in your values"
echo "2. Update the URLs in netlify.toml and render.yaml with your actual domains"
echo "3. Push your code to GitHub"
echo "4. Follow the DEPLOYMENT_GUIDE.md for detailed deployment instructions"
echo ""
echo "🔗 Quick Links:"
echo "- Netlify: https://netlify.com"
echo "- Render: https://render.com"
echo "- Supabase: https://supabase.com"
echo ""
echo "✅ Deployment preparation complete!"
