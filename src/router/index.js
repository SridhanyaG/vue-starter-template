import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
  mode: 'hash', // Demo is living in GitHub.io, so required!
  linkActiveClass: 'is-active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      name: 'Home',
      path: '/ns',
      meta: {auth: false},
      component: require('../views/Home').default
    },
    {
      name: 'login',
      path: '/login',
      component: require('../views/Login').default
    },
    {
      path: '*',
      redirect: '/ns/'
    }
  ]
})

export default router
