// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueAuth from '@websanova/vue-auth'
import _ from 'lodash'
import NProgress from 'vue-nprogress'
import App from './views/App.vue'
import router from './router'
import VueAWN from 'vue-awesome-notifications'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
window.jQuery = window.$ = require('jquery/dist/jquery.min')
require('bootstrap/dist/js/bootstrap.min.js')
Vue.use(BootstrapVue)

// Make lodash available in all vue components
Object.defineProperty(Vue.prototype, '$lodash', { value: _ })

Vue.router = router
let awnConfig = {position: 'top-right'}
awnConfig.labels = {'async': 'Processing...'}
awnConfig.modal = {'okLabel': 'Yes', 'cancelLabel': 'No'}
Vue.use(VueAWN, awnConfig)

Vue.use(NProgress)
const nprogress = new NProgress({ parent: '.nprogress-container' })
Vue.use(VueAxios, axios)
/* eslint-disable no-new */

Vue.use(VueAuth, {
  auth: {
    request: function (req, token) {
      console.log('request :', req)
    },
    response: function (res) {
      return res
    }
  },
  http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
  loginData: { url: SERVICE_URL + '/signup', fetchUser: false },
  refreshData: { enabled: false }
})

axios.interceptors.response.use(response => {
  if (response !== null || response !== undefined) {
    if (response.status === 410) {
      window.notifier('Session expired. Please verify again')
      return Promise.reject(response)
    }
  }
  return Promise.resolve(response)
}, error => {
  console.log(error)
  return Promise.reject(error)
})

const app = new Vue({
  el: '#app',
  router,
  nprogress,
  template: '<App/>',
  store: store,
  components: {
    App,
    router
  },
  methods: {
  },
  mounted () {
  }
})

export {
  app, router, store
}
