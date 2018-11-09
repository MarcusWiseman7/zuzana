<template>
  <div>
    <v-container>
      <v-layout justify-center row v-bind="binding" ref="app">
        <v-flex xs12 sm6 md4>
          <v-img :src="require('~/assets/pics/profile.png')"></v-img>
        </v-flex>
        <v-flex xs12 sm6>
          <v-container>
            <blockquote>"Myslím, že cvičení by mělo být formou aktivního odpočinku a tak se snažím, aby si každý z hodiny odnesl nejen dobrý pocit z toho, že pro sebe něco udělal, ale především se odprostil od běžných starostí a odcházel s úsměvem"</blockquote>
            <v-layout row class="mt-4" justify-center>
              <a 
                class="mx-4"
                v-for="(item, index) in socialItems"
                :key="index" 
                :href="item.link"
              ><v-icon color="primary">{{ item.icon }}</v-icon></a>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-container-fluid class="my-5">
          <h1 class="mb-3">Co se u nás děje?</h1>
          <h3>V našem fitness bez problémů můžete využít kartu MultiSport</h3>
        </v-container-fluid>
      </v-layout>
    </v-container>

    <nuxt-link to="/rozpis_lekci">
    <v-container-fluid>
      <v-layout row wrap>
        <v-flex xs6 sm4
          v-for="(item, index) in items"
          :key="index"
        >
          <v-card height="100%" tile dark flat>
            <v-card-text>
              <h2>{{ item.title }}</h2>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container-fluid>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  layout: 'landing',
  data () {
    return {
      items: [
        { title: 'BodyART' },
        { title: 'DeepWORK' },
        { title: 'Spinning' },
        { title: 'Power joga' },
        { title: 'Bosu' },
        { title: 'Kruhový trénink' }
      ],
      socialItems: [
        { link: 'https://www.facebook.com/profile.php?id=100009177529273', icon: 'fab fa-facebook-square' },
        { link: 'mailto:cvicovestec@gmail.com', icon: 'fas fa-envelope' }
      ]
    }
  },
  computed: {
    binding () {
      const binding = {}
      if (this.$vuetify.breakpoint.xsOnly) {
        binding.column = true 
      }
      return binding
    }
  }
}
</script>

<style lang="stylus" scoped>
.v-card
  background-color #303030
h2 
  font-weight normal 
  text-align center 
  font-size 1.5rem
  padding-top 2rem
  padding-bottom 2rem
blockquote 
  text-align justify
  text-justify inner-word 
  font-size 2rem
  font-style italic 
  font-weight 200
  letter-spacing .5px
  line-height 2.25rem
@media screen and (min-width 600px)
  h2  
    font-size 2rem
    padding-top 2.5rem
    padding-bottom 2.5rem
  blockquote 
    font-size 2.25rem
    line-height 2.5rem
@media screen and (min-width 1264px)
  blockquote 
    font-size 2.75rem
    line-height 3rem
</style>
