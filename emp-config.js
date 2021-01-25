const empVue2Ts = require('@efox/emp-vue2-ts')

const hostConfig = {
  dev: {
    host: 'localhost',
    port: 8010,
    publicPath: 'http://localhost:8010/',
  },
  prod: {
    host: 'localhost',
    port: 8010,
    publicPath: 'http://localhost:8010/',
  },
}

module.exports = empVue2Ts(({ config, env, empEnv }) => {
  const confEnv = env === 'production' ? 'prod' : 'dev'
  const { port, publicPath } = hostConfig[empEnv || confEnv] || {}

  // 设置项目URL
  config.output.publicPath(publicPath)
  // 设置项目端口
  config.devServer.port(port)
  config.plugin('mf').tap((args) => {
    args[0] = {
      ...args[0],
      ...{
        name: 'vue2TsApp',
        remotes: {},
        exposes: {
          './Hello.vue': './src/components/Hello',
        },
        shared: ['vue/dist/vue.esm.js'],
        // 被远程引入的文件名
        filename: 'emp.js',
      },
    }
    return args
  })

  // 配置 index.html
  config.plugin('html').tap((args) => {
    args[0] = {
      ...args[0],
      ...{
        // head 的 title
        title: 'EMP Vue2 TS APP',
        // 远程调用项目的文件链接
        files: {},
      },
    }
    return args
  })
})
