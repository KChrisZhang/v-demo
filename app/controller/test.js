'use strict';

const fs = require('fs');
const path = require('path');
const Vue = require('vue');
const Controller = require('egg').Controller;
const {
  createRenderer
} = require('vue-server-renderer');

const renderer = createRenderer({
  // template: fs.readFileSync(path.resolve(__dirname, '../public/index.html'), 'utf-8')
})

class TestController extends Controller {
  async index() {
    const ctx = this.ctx
    const app = new Vue({
      template: `<div>app</div>`
    })
    renderer.renderToString(app, (err, html) => {
      if (err) {
        ctx.status = 500
        ctx.body = error
      } else {
        ctx.status = 200
        ctx.body = html
      }
    })
  }
}

module.exports = TestController