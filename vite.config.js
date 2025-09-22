import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import babel from '@rollup/plugin-babel';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // Ensures correct base path for serving files
  plugins: [
    react(),
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env', '@babel/preset-react'], // Added @babel/preset-react
    }),
  ],
})