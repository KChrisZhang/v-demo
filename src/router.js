import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'

Vue.use(Router)

// 类似于createApp，我们也需要给每个请求一个新的router实例
export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/about/:id',
        name: 'about',
        component: About
      }
    ]
  })
}