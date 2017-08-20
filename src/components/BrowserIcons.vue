<template>
  <transition-group tag="ul" class="browser-icons" name="icons">
    <li v-for="name in list" :key="name">
      <img :src="path(name)" :alt="name">
    </li>
  </transition-group>
</template>

<script>
  export default {
    name: 'browser-icons',

    props: ['list'],

    methods: {
      path: name => `./static/images/${name}_32.png`
    }
  }
</script>

<style lang="stylus">
  .browser-icons
    list-style none
    padding-left 0

    li
      display inline-block
      margin-right 8px
      vertical-align middle
      transition opacity .3s ease, transform .5s ease

    img
      display block
      height 16px
      width 16px

  .icons-enter
  .icons-leave-active
    opacity 0
    transform translateX(8px)
</style>
