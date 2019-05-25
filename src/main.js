import Vue from 'vue'
import App from './App.vue'
// import './registerServiceWorker'

/**
 * 对于ssr，通过entry创建根实例和挂载到DOM
 * 此处只是简单导出createApp函数
 * 导出一个工厂函数，用于创建新的
 * 应用程序、router 和 store 实例
 */

import {
  sync
} from 'vuex-router-sync'
import {
  createStore
} from './store.js'
import {
  createRouter
} from './router.js'

Vue.config.productionTip = false

export function createApp() {
  // 创建 router 和 store 实例 
  const store = createStore()
  const router = createRouter()

  // 同步路由状态(route state)到 store
  sync(store, router)

  // 注入router到根实例
  const app = new Vue({
    store,
    router,
    // 根实例简单的渲染应用程序组件
    render: h => h(App)
  })

  return {
    app,
    store,
    router
  }
}