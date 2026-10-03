import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Where the site lives on its server. Cloudflare (and a custom domain like
  // ukate.uk) serve it from the root "/". GitHub Pages serves it from
  // /portfolio/, so the GitHub deploy workflow sets BASE_PATH=/portfolio/.
  base: process.env.BASE_PATH || '/',
})
