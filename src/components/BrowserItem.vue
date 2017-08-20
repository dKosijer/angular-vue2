<template>
  <div class="browser-item">
    <slot :image="image"></slot>
  </div>
</template>

<script>
  export default {
    name: 'browser-item',

    props: ['name', 'view'],

    computed: {
      image () {
        const size = (this.view === 'full') ? 512 : 256
        return `./static/images/${this.name}_${size}.png`
      }
    }
  }
</script>

<style lang="stylus">
  .browser-item a
    font-weight 600
</style>
