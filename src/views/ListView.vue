<template>
  <div class="list-view">
    <p class="filter">
      <img src="../assets/images/logo.svg">
      <input type="search" v-model="query">
    </p>
    <transition-group tag="ul" class="browser-list" name="matched">
      <li v-for="match in matches" :key="match">
        <router-link :to="{name: 'detail', params: {name: match}}">
          <browser-item :name="match" :view="'simple'" class="simple-browser-item">
            <template scope="props">
              <img :src="props.image" :alt="match">
              <span>{{ match | uppercase }}</span>
            </template>
          </browser-item>
        </router-link>
      </li>
    </transition-group>
  </div>
</template>

<script>
  import BrowserItem from '../components/BrowserItem'
  import { USE } from '../store/angular/actions-types.js'

  export default {
    name: 'list-view',

    components: {
      BrowserItem
    },

    computed: {
      matches () {
        const browsers = this.$store.getters.browsers
        const query = this.query
        this.$store.dispatch(USE)
        return browsers.filter(browser => browser.indexOf(query) > -1)
      }
    },

    data () {
      return {
        query: ''
      }
    },

    metaInfo () {
      return {
        title: this.$t('message.heading'),
        titleTemplate: null
      }
    },

    beforeMount () {
      this.query = this.$store.getters.query
    },

    beforeDestroy () {
      this.$store.dispatch('QUERY', this.query)
    }
  }
</script>

<style lang="stylus">
  .filter
    background #f0f0f0
    border 1px solid #ccc
    border-radius 5px
    display inline-flex
    align-items center
    overflow hidden
    margin 0

    img
      height 24px
      width 24px
      margin-left 4px
      margin-right 4px

    input
      outline none
      border none
      border-left 1px solid #ccc
      box-sizing border-box
      color #666
      font-family Menlo, monospace
      font-size 18px
      height 32px
      width 200px
      padding-left 6px
      padding-right 6px

  .browser-list
    list-style none
    padding 0

    li
      border-radius 10px
      display inline-block
      margin-right 30px
      transition background .5s ease, opacity .3s ease, transform .5s ease

      &:hover
        background #e6e6e6

      &:last-child
        margin-right 0

  .matched-enter
  .matched-leave-active
    opacity 0
    transform scale(.1)

  .matched-leave-active
    position absolute

  .simple-browser-item
    padding 10px
    text-align center

    img
      display block
      height 128px
      width 128px
      margin-bottom 10px

    span
      background #98a9b7
      border-radius 10px
      display inline-block
      color #f4f4f4
      font-size 12px
      line-height 20px
      text-shadow 0 0 1px #000
      padding 0 12px
</style>
