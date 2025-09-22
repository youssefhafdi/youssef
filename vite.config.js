import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Use '/' on Vercel, './' for GitHub Pages
  base: process.env.VERCEL ? '/' : './',
  plugins: [
    react(),
  ],
})