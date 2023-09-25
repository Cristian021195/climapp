import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    workbox: {//registerType: 'autoUpdate',
      sourcemap:true,
      cleanupOutdatedCaches: true,//skipWaiting:true
    }
  })],
})
