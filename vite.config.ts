import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  alias: {
    '@components': resolve(__dirname, 'src/components'),
    '@api': resolve(__dirname, 'src/api'),
    '@assets': resolve(__dirname, 'src/assets'),
    '@types': resolve(__dirname, 'src/types'),
    '@store': resolve(__dirname, 'src/store')
  },
  build: {
    base: './',
    // assetsDir: ''
  }
})
