// store.js
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export function createStore() {
  return new Vuex.Store({
    state: {
      items: {}
    },
    actions: {
      fetchItem({
        commit
      }, id) {
        return axios.get('http://testapi.niuyan.com/niuyan_market/web/v1/topinfo').then(res => {
          commit('setItem', {
            id,
            item: res
          })
        })
      }
    },
    mutations: {
      setItem(state, {
        id,
        item
      }) {
        // state.items[id] = item
        // console.log(item)
        Vue.set(state.items, id, item)
      }
    }
  })
}