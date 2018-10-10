import Vue from 'vue'
import Router from 'vue-router'
import ProductList from '@/modules/product/views/list/ProductList'
import ProductRoot from '@/modules/product/ProductRoot'
import HomePage from '@/modules/home/HomePage'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/products',
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
