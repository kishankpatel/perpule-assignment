import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  base: '/',
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/home',
      component: () => import('../components/Home')
    }
  ]
})

export default router
