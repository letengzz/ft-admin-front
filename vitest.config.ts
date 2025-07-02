/**
 * @vitest-environment jsdom // (目标文件顶部，有效)
*/
import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

// 注意：viteConfig 是一个函数，需要手动调用并传入 mode 参数
const resolvedViteConfig = await viteConfig({ mode: 'test', command: 'serve' })

export default mergeConfig(
  resolvedViteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: ['node_modules', 'e2e/**'],
      root: process.cwd(),
    },
  })
)
// import { defineConfig } from 'vitest/config'

// export default defineConfig({
//   test: {
//     environment: 'jsdom',
//     exclude: ['node_modules', 'e2e/**'],
//     root: process.cwd(),
//   },
// })
