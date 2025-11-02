
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html')
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return 'assets/[name]-[hash][extname]'
          
          // Remove 'public/' prefix if it exists
          const normalizedName = assetInfo.name.replace('public/', '')
          
          // Specifically handle custom.js
          if (normalizedName.indexOf('custom.js') !== -1) {
            return 'assets/js/custom.js'
          }
          
          // Get the file extension
          const extParts = normalizedName.split('.')
          const extType = extParts.length > 1 ? extParts[extParts.length - 1] : ''
          
          // Handle images
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            // If it's already in an images directory, maintain the path
            if (normalizedName.indexOf('images/') !== -1) {
              return normalizedName
            }
            return `assets/images/${path.basename(normalizedName)}`
          }
          
          // Handle CSS files
          if (extType === 'css') {
            if (normalizedName.indexOf('css/') !== -1) {
              return normalizedName
            }
            return `assets/css/[name]-[hash][extname]`
          }
          
          // Handle JS files
          if (extType === 'js') {
            if (normalizedName.indexOf('js/') !== -1) {
              return normalizedName
            }
            return `assets/js/[name]-[hash][extname]`
          }
          
          // Handle other assets
          return `assets/${path.basename(normalizedName)}`
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js'
      }
    }
  },
  base: '/w4lk3r04.github.io/',
  publicDir: 'public',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './public/assets')
    }
  }
});