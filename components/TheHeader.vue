<template>
  <div>
    <v-navigation-drawer v-model="sideNav" temporary fixed>
      <v-list>
        <v-list-tile
          v-for="(item, index) in menuItems"
          :key="index"
          router :to="item.link" exact>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar fixed dark color="primary" class="main-bar" :height="mainbarHeight">
      <v-toolbar-side-icon large
        @click.native.stop="sideNav = !sideNav"
      >Menu</v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <nuxt-link to="/" exact>
        <v-toolbar-title class="white--text"><h1>Zuzana Doudová</h1></v-toolbar-title>
      </nuxt-link>
      <v-spacer></v-spacer>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'the-header',
  data () {
    return {
      sideNav: false,
      menuItems: [
        { title: 'HOME', link: '/' },
        { title: 'AKTUALITY', link: 'aktuality' },
        { title: 'ROZPIS LEKCÍ', link: 'rozpis_lekci' },
        { title: 'OSOBNÍ PROFIL', link: 'osobni_profil' },
        { title: 'INSTRUKTOŘI', link: 'instruktori' },
        { title: 'KONTAKT', link: 'kontakt' }
      ]
    }
  },
  props: ['offsetTop'],
  computed: {
    mainbarHeight () {
      if (this.offsetTop <= 100) { return 175 }
      else { return 60 }
    }
  }
}
</script>

<style lang="stylus" scoped>
h1 
  font-weight normal 
  font-family 'Caveat', cursive 
  font-size 3rem
</style>
