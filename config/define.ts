/**
 * @description: 配置全局变量
 */
const useDefineConfig = (env: Record<string, string>) => ({
  // 注意:此处添加window会导致vitest测试失败,请慎重!
  // __API_URL__: 'window.location.origin',
  __APP_NAME__: JSON.stringify(env.VITE_APP_TITLE),
  __APP_VERSION__: JSON.stringify(env.VITE_VERSION)
})

export default useDefineConfig
