import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import mkcert from 'vite-plugin-mkcert'

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: '../RestoreApiV2/wwwroot',
    chunkSizeWarningLimit: 1024,
    emptyOutDir: true
  },
  server: {
    port: 3080
  },
  plugins: [react(), mkcert()],
})
