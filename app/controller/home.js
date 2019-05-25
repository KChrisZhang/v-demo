'use strict';

const fs = require('fs');
const path = require('path');
const Controller = require('egg').Controller;
const {
  createBundleRenderer
} = require('vue-server-renderer');

const serverBundle = require('../../dist/server/vue-ssr-server-bundle.json');
const clientManifest = require('../../dist/client/vue-ssr-client-manifest.json');
const template = fs.readFileSync(path.resolve(__dirname, '../public/index.html'), 'UTF-8');

class HomeController extends Controller {
  async index(config) {
    const ctx = this.ctx;
    console.log(ctx.request.url)

    // ctx.status = 200;
    // ctx.body = 'Hello world';

    const renderer = createBundleRenderer(serverBundle, {
      runInNewContext: false, // 推荐
      template, // （可选）页面模板
      clientManifest // （可选）客户端构建 manifest
    })

    try {
      const html = await renderer.renderToString({
        url: ctx.request.url
      });
      ctx.status = 200;
      ctx.body = html;
    } catch (e) {
      console.log(e)
      ctx.status = 500;
      ctx.body = 'Internal Server Error';
    }
  }
}

module.exports = HomeController;