<template>
  <v-app dark v-scroll="onScroll">
    <the-header :offsetTop="offsetTop" />
    <nuxt style="marginTop:175px" />
    <the-footer />
  </v-app>
</template>

<script>
import TheHeader from '~/components/TheHeader'
import TheFooter from '~/components/TheFooter'

export default {
  data () {
    return {
      offsetTop: 0
    }
  },
  components: {
    TheHeader,
    TheFooter
  },
  methods: {
    onScroll (e) {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
    }
  }
}
</script>

<style lang="stylus" scoped>
html, body 
  height 100%
</style>
