'use strict';

const merge = require('lodash.merge');
const clientConf = require('./vue.conf.client')
const serverConf = require('./vue.conf.server')
const isServer = process.env.APPLICATION === 'server'
const configureWebpack = isServer ? serverConf : clientConf

module.exports = {
  outputDir: isServer ? './dist/server' : './dist/client',
  configureWebpack,
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
}