import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import {VitePWA} from 'vite-plugin-pwa'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),VitePWA({
    registerType: 'autoUpdate',
    disable:process.env.NODE_ENV === 'development',
    devOptions: {
      enabled: false,
    }
  })],
  server: {
    headers: {
      "Cross-Origin-Embedder-Policy": "require-corp",
      "Cross-Origin-Opener-Policy": "same-origin"
    },
     proxy: {
    '/cdn': {
      target: 'https://unpkg.com',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/cdn/, '')
    }
   }
  }
})

