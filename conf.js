const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const merge = require('lodash.merge');
const isServer = process.env.TARGET === 'node';
const isDev = process.env.BUILD_ENV === 'dev';

module.exports = {
  outputDir: isServer ? '../dist/server' : '../dist/client',
  assetsDir: 'static',
  configureWebpack: {

    // 将 entry 指向应用程序的 server / client 文件
    entry: isServer ? './src/entry_server.js' : './src/entry_client.js',

    // 对 bundle renderer 提供 source map 支持
    devtool: 'source-map',

    target: isServer ? 'node' : 'web',

    node: isServer ? undefined : false,

    output: {
      libraryTarget: isServer ? 'commonjs2' : undefined,
    },

    // https://webpack.js.org/configuration/externals/#function
    // https://github.com/liady/webpack-node-externals
    // 外置化应用程序依赖模块。可以使服务器构建速度更快，
    // 并生成较小的 bundle 文件。
    externals: (isServer && isDev) ?
      nodeExternals({
        // 不要外置化 webpack 需要处理的依赖模块。
        // 你可以在这里添加更多的文件类型。例如，未处理 *.vue 原始文件，
        // 你还应该将修改 `global`（例如 polyfill）的依赖模块列入白名单
        whitelist: [/\.css$/]
      }) :
      undefined,

    optimization: {
      splitChunks: {
        minChunks: 2,
      }
    },

    plugins: [isServer ? new VueSSRServerPlugin() : new VueSSRClientPlugin()],

    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': path.resolve(__dirname, 'src'),
      },
    },

  },
  chainWebpack: config => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap(options => {
        merge(options, {
          optimizeSSR: false
        });
      });
  },
};