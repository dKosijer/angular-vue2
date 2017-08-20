import * as config from 'config'
import AngularModule from './angular'

export default {
  modules: {
    angular: AngularModule
  },

  state: {
    browsers: ['chrome', 'edge', 'firefox', 'opera', 'safari'],
    history: [],
    locale: config.defaultLocale,
    query: ''
  },

  actions: {
    HISTORY: ({ commit }, browser) => {
      commit('SET_HISTORY', {browser})
    },

    LOCALE: ({ commit }, locale) => {
      commit('SET_LOCALE', {locale})
    },

    QUERY: ({ commit }, query) => {
      commit('SET_QUERY', {query})
    },
    PRINT: ({ commit }, query) => {
      console.log('print')
    }
  },

  mutations: {
    SET_HISTORY: (state, { browser }) => {
      state.history.push(browser)
    },

    SET_LOCALE: (state, { locale }) => {
      state.locale = locale
    },

    SET_QUERY: (state, { query }) => {
      state.query = query
    }
  },

  getters: {
    browsers: (state) => state.browsers,
    history: (state) => state.history,
    locale: (state) => state.locale,
    query: (state) => state.query
  }
}
