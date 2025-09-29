# Dwansys Frontend

Official website for Dwansys, a software solutions company. Built with modern web technologies to showcase services, expertise, and contact information with a clean, responsive design.

## Environment Variables

Create a `.env.local` file in the `frontend/` directory with:

```
VITE_API_BASE_URL=http://localhost:5000
```

For production deployment on Netlify, set these environment variables in the Netlify dashboard:

```
VITE_API_BASE_URL=https://your-backend-url.onrender.com
```

## Development

1. Install dependencies:
   ```
   npm install
   ```

2. Create the `.env.local` file as shown above

3. Run the development server:
   ```
   npm run dev
   ```

## Build

To build for production:
```
npm run build
```

The build artifacts will be stored in the `dist/` directory.