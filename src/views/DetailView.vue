<template>
  <div class="detail-view">
    <browser-item :name="name" :view="'full'" class="full-browser-item">
      <template scope="{ image }">
        <img :src="image" :alt="name">
        <p v-html="detail"></p>
      </template>
    </browser-item>
    <h4 class="back">
      <router-link :to="{name: 'list'}" v-text="$t('message.back')"></router-link>
    </h4>
  </div>
</template>

<script>
  import BrowserItem from '../components/BrowserItem'

  export default {
    name: 'detail-view',

    components: {
      BrowserItem
    },

    computed: {
      name () {
        return this.$route.params.name
      }
    },

    data () {
      return {
        brand: this.$t('message.loading'),
        detail: ''
      }
    },

    metaInfo () {
      return {
        title: this.brand,
        titleTemplate: '%s « ' + this.$t('message.heading')
      }
    },

    methods: {
      getDetail (name) {
        // Simulate REST API call
        this.$http
          .get(`./static/mock/${name}.json`)
            .then(response => response.json())
            .then(data => {
              this.brand = data.name
              this.detail = data.detail
            })
      }
    },

    mounted () {
      this.$store.dispatch('HISTORY', this.name)
      this.getDetail(this.name)
    }
  }
</script>

<style lang="stylus">
  .full-browser-item
    padding-top 20px

    img
      float left
      height 256px
      width 256px
      margin-right 20px
      margin-bottom 20px

    p
      color #888
      line-height 1.5
      margin-top 10px

  .back
    clear both
    font-weight 300
    text-align center
</style>
