import { fileURLToPath, URL } from 'node:url'

import useVitePlugins from './config/plugins'
import useDefineConfig from './config/define'
import useServer from './config/server'
import useOptimizeDeps from './config/optimizeDeps'
// https://vite.dev/config/
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有
  // `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd(), '')

  const { VITE_VERSION, VITE_BASE_URL, VITE_API_URL } = env
  console.log(`🚀 API_URL = ${VITE_API_URL}`)
  console.log(`🚀 VERSION = ${VITE_VERSION}`)
  return {
    // vite 配置
    base: VITE_BASE_URL,
    server: useServer(env),
    optimizeDeps: useOptimizeDeps(),
    define: useDefineConfig(env),
    plugins: useVitePlugins(mode, env),
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@styles': fileURLToPath(new URL('./src/assets/styles', import.meta.url)),
        '@views': fileURLToPath(new URL('./src/views', import.meta.url)),
        '@http': fileURLToPath(new URL('./src/http', import.meta.url)),
        '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
        '@stores': fileURLToPath(new URL('./src/stores', import.meta.url)),
        '#': fileURLToPath(new URL('./types', import.meta.url)),
      },
    },

  }
})
