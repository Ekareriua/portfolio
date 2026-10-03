import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Where the site lives on its server. Cloudflare (and a custom domain like
  // ukate.uk) serve it from the root "/". GitHub Pages serves it from
  // /portfolio/, so the GitHub deploy workflow sets BASE_PATH=/portfolio/.
  base: process.env.BASE_PATH || '/',
  build: {
    // Three pages: the main site, the privacy notice and the "not found" page
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        privacy: fileURLToPath(new URL('./privacy.html', import.meta.url)),
        notFound: fileURLToPath(new URL('./404.html', import.meta.url)),
      },
    },
  },
})
