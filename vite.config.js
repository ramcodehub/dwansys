import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Add base path configuration for deployment to subdirectories if needed
  base: './',
  // Configure build options
  build: {
    // Ensure assets are properly bundled
    assetsDir: 'assets',
    // Ensure the app can be deployed to subdirectories
    outDir: 'dist',
    // Rollup options for better chunking
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          bootstrap: ['bootstrap']
        }
      }
    }
  },
  // Configure server options for development
  server: {
    port: 5173,
    // Enable host to make it accessible from other devices
    host: true
  }
});