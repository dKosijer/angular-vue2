/**
 * Created by DejanK on 8/19/2017.
 */
import angular from 'angular'
import { AngularService } from './store/angular/actions.js'
import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import { sync } from 'vuex-router-sync'
import * as config from 'config'
import App from './App.vue'
import * as filters from './filters'
import setLocale from './i18n'
import router from './router'
import storeData from './store'

let store;
const appModule = angular
  .module('readyBid', [])
  .provider('Store', function StoreProvider () {
    this.$get = () => { return store }
  })
  .service('AngularService', ['$timeout', AngularService])
  .run(['AngularService', function (AngularService) {
    AngularService.linkStore();

    Vue.use(Vuex)
    store = new Vuex.Store(storeData)

    Vue.use(VueResource)
    setLocale(config.defaultLocale)
    sync(store, router)

    Object.keys(filters).forEach(key => {
      Vue.filter(key, filters[key])
    })

    const appVue = new Vue({
      router,
      store,
      ...App
    })

    appVue.$mount('#app')
  }])


export default appModule

