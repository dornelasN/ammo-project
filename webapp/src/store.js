import Vue from 'vue'
import Vuex from 'vuex'

import product from '@/modules/product/store'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    product
  },
  state: {},
  mutations: {},
  actions: {},

  strict: process.env.NODE_ENV !== 'production'
})

export default store

if (module.hot) {
  module.hot.accept(
    [
      '@/modules/product/store'
    ],
    () => {
      store.hotUpdate({
        modules: {
          product: require('@/modules/product/store').default
        }
      })
    }
  )
}
