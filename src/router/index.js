import Vue from 'vue'
import VueMeta from 'vue-meta'
import VueRouter from 'vue-router'

import ListView from '../views/ListView'
import DetailView from '../views/DetailView'

Vue.use(VueMeta)
Vue.use(VueRouter)

var routes = [
  { path: '/', name: 'list', component: ListView },
  { path: '/:name', name: 'detail', component: DetailView },
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  base: '/', // set this field to `'/'` if your app is serverd from domain root
  mode: 'hash',
  routes
})

export default router
