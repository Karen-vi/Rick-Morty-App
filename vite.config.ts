import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/graphql': {
        target: 'https://rickandmortyapi.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/graphql/, '/graphql'),
      },
    },
  },
})
