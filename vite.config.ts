import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
// https://vite.dev/config/
export default defineConfig({
  base: 'kahfi-tailwind',
  plugins: [react()],
  build: {
    emptyOutDir: true,
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1024 * 3,
    rollupOptions: {
      output: {
        // Generate output with hash in filename.
        entryFileNames: `assets/[name]-[hash].js`,
        chunkFileNames: `assets/[name]-[hash].js`,
        assetFileNames: `assets/[name]-[hash].[ext]`,
      },
    },
  },
})
