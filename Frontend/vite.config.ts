import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/weatherforecast': 'http://localhost:5000', // Proxy API requests to the backend server running on port 5000
    },
    port: 3000 // Start the React development server on port 3000
  },
})
