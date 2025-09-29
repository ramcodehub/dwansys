# Dwansys

Official website for Dwansys, a software solutions company. Built with modern web technologies to showcase services, expertise, and contact information with a clean, responsive design.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher)

### Development Setup

1. Install dependencies:
   ```bash
   # Install backend dependencies
   cd backend
   npm install
   
   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

2. Set up environment variables:
   - Backend: Copy [backend/env.example](file:///c:/Users/sathi/OneDrive/Desktop/Dwansys/backend/env.example) to [backend/.env](file:///c:/Users/sathi/OneDrive/Desktop/Dwansys/backend/.env) and configure
   - Frontend: Copy [frontend/env.example](file:///c:/Users/sathi/OneDrive/Desktop/Dwansys/frontend/env.example) to [frontend/.env.local](file:///c:/Users/sathi/OneDrive/Desktop/Dwansys/frontend/.env.local) and configure

3. Run development servers:
   ```bash
   # Start backend (from backend directory)
   npm run dev
   
   # Start frontend (from frontend directory)
   npm run dev
   ```

## 📁 Project Structure

```
.
├── backend/           # Express.js backend API
│   ├── src/
│   │   ├── routes/    # API routes
│   │   ├── services/  # Business logic
│   │   └── middleware/# Error handling, etc.
│   └── server.js      # Main server file
└── frontend/          # React + Vite frontend
    ├── src/
    │   ├── components/ # React components
    │   ├── pages/      # Page components
    │   └── App.jsx     # Main app component
    └── dist/          # Production build (generated)
```

## 🌐 Deployment Options

### Netlify + Render (Current Setup)
See [DEPLOYMENT_GUIDE.md](file:///c:/Users/sathi/OneDrive/Desktop/Dwansys/DEPLOYMENT_GUIDE.md) for detailed instructions.

### GoDaddy Hosting
See [GODADDY_DEPLOYMENT_GUIDE.md](file:///c:/Users/sathi/OneDrive/Desktop/Dwansys/GODADDY_DEPLOYMENT_GUIDE.md) for detailed instructions.

### Complete Multi-Platform Deployment
See [FULL_DEPLOYMENT_GUIDE.md](file:///c:/Users/sathi/OneDrive/Desktop/Dwansys/FULL_DEPLOYMENT_GUIDE.md) for comprehensive instructions.

## 🛠️ Development Commands

### Frontend
```bash
cd frontend

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Format code
npm run format
```

### Backend
```bash
cd backend

# Start development server
npm run dev

# Start production server
npm start
```

## 📖 Documentation

- [Frontend README](file:///c:/Users/sathi/OneDrive/Desktop/Dwansys/frontend/README.md)
- [Backend README](file:///c:/Users/sathi/OneDrive/Desktop/Dwansys/backend/README.md)
- [Deployment Guide (Netlify/Render)](file:///c:/Users/sathi/OneDrive/Desktop/Dwansys/DEPLOYMENT_GUIDE.md)
- [Deployment Guide (GoDaddy)](file:///c:/Users/sathi/OneDrive/Desktop/Dwansys/GODADDY_DEPLOYMENT_GUIDE.md)
- [Theme System](file:///c:/Users/sathi/OneDrive/Desktop/Dwansys/frontend/THEME_SYSTEM.md)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📞 Support

For issues or questions, please check the documentation first or contact the development team.
