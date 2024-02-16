import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: './', // 设置项目的基础路径
  build: {
    outDir: 'dist', // 设置构建输出目录
    assetsDir: 'assets', // 设置静态资源输出目录
    // 也可以在这里设置其他构建选项
  }
})
