import { TDesignResolver } from '@tdesign-vue-next/auto-import-resolver';
import Components from 'unplugin-vue-components/vite'

/**
 * 自动注册Vue组件的插件配置
 * 该插件可以自动导入组件，无需手动import
 * 提高开发效率并减少样板代码
 */
const useComponents = () => {
  return Components({
    resolvers: [
      TDesignResolver({
        library: 'vue-next'
      })
    ],
    dts: './types/components.d.ts' // 生成组件类型声明文件的路径
  })
}

export default useComponents
