import Vue from 'vue'
import Router from 'vue-router'
import ProductList from '@/modules/product/views/list/ProductList'
import ProductRoot from '@/modules/product/ProductRoot'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: ProductRoot,
      children: [
        {
          path: '',
          name: 'Products',
          component: ProductList
        }
      ]
    }
  ]
})

export default router
