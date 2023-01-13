import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020'
    }
  },
  define: {
    'process.env': {}
  },
  esbuild: {
    // https://github.com/vitejs/vite/issues/8644#issuecomment-1159308803
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  },
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-macros', 'babel-plugin-styled-components']
      }
    })
  ],
  resolve: {
    alias: {
      '@/styles': path.resolve(__dirname, './src/styles'),
      '@/constants': path.resolve(__dirname, './src/constants'),
      '@/services': path.resolve(__dirname, './src/services'),
      '@/components': path.resolve(__dirname, './src/app/components'),
      '@/utils': path.resolve(__dirname, './src/utils'),
      '@/state': path.resolve(__dirname, './src/state'),
      '@/store': path.resolve(__dirname, './src/store'),
      '@/public/*': path.resolve(__dirname, './public/*')
    }
  }
})
