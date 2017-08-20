<template>
  <div class="app">
    <h1 v-text="$t('message.heading')"></h1>
    <browser-icons class="view-history" :list="history" :data-tip="$t('message.history')"></browser-icons>
    <transition name="view" mode="out-in" appear>
      <router-view :key="$route.fullPath"></router-view>
    </transition>
    <language-switch class="switch"></language-switch>
  </div>
</template>

<script>
  import BrowserIcons from './components/BrowserIcons'
  import LanguageSwitch from './components/LanguageSwitch'

  export default {
    name: 'app',

    components: {
      BrowserIcons,
      LanguageSwitch
    },

    computed: {
      history () {
        return this.$store.getters.history
      }
    },

    metaInfo: {
      title: 'Vue Webpack 2',
      titleTemplate: null
    }
  }
</script>

<style lang="stylus">
  @import './assets/styles/fonts.css';

  .app
    font-family Merriweather, sans-seirf
    color #666
    width 900px
    margin 0 auto

  h1
    font-weight 600
    line-height 1.5em

  a
    color #547498

  .view-history:after
    content attr(data-tip)
    display inline-block
    font-size 12px
    padding-left 6px
    opacity 0
    transform translateX(10px)
    transition opacity .3s ease, transform .3s ease

  .view-history:hover:after
    opacity 1
    transform translateX(0)

  .view-enter-active
  .view-leave-active
    transition opacity .3s ease

  .view-enter
  .view-leave-active
    opacity 0

  .switch
    position fixed
    left 0
    top 0
</style>
