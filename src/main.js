import Vue from 'vue'
import VueResource from 'vue-resource'
import { sync } from 'vuex-router-sync'
import * as config from 'config'
import App from './App.vue'
import * as filters from './filters'
import setLocale from './i18n'
import router from './router'
import store from './store'

Vue.use(VueResource)
setLocale(config.defaultLocale)
sync(store, router)

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

const app = new Vue({
  router,
  store,
  ...App
})

app.$mount('#app')
