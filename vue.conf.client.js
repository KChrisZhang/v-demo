'use strict';

const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');

module.exports = {
  entry: './src/entry-client.js',
  // 这是将服务器的整个输出
  // 构建为单个 JSON 文件的插件。
  // 默认文件名为 `vue-ssr-server-bundle.json`
  plugins: [
    new VueSSRClientPlugin()
  ]
}