<template>
  <ul class="language-switch">
    <li v-for="(value, key) in languages" v-text="value" @click="changeLocale(key)" :class="{active: key === locale}"></li>
  </ul>
</template>

<script>
  import setLocale from '../i18n'
  import { languages } from '../i18n/locales'

  export default {
    name: 'language-switch',

    computed: {
      locale () {
        return this.$store.getters.locale
      }
    },

    data () {
      return {
        languages
      }
    },

    methods: {
      changeLocale (locale) {
        setLocale(locale)
        this.$store.dispatch('LOCALE', locale)
      }
    }
  }
</script>

<style lang="stylus">
  .language-switch li
    cursor pointer
    margin-bottom .5em

    &:hover
      color #222

    &.active:after
      content '✔'
      margin-left 5px
</style>
