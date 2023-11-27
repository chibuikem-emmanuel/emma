import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
   server: {
    host: '127.0.0.1',  // Set the host to 127.0.0.1
    port: 5173,         // Set the port to 5173
  },

  plugins: [react()],
})
