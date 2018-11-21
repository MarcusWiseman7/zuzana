<template>
  <v-app>
    <the-header offsetTop="200" />
    <v-img :src="require('~/assets/pics/slide.jpg')" max-height="579px">
      <v-layout column fill-height class="lightbox white--text" align-center justify-center>
        <v-flex shrink>
          <h1 class="white--text">CVÍČO VESTEC</h1>
        </v-flex>
        <v-flex shrink>
          <p style="fontStyle:italic">"Síla nepochází z fyzických schopností, ale z nezlomné vůle."</p>
        </v-flex>
        <v-flex shrink>
          <p>​-Mahátma Gándhí</p>
        </v-flex>
        <v-flex shrink>
          <v-btn 
            dark outline large
            nuxt to="aktuality" exact
          >AKCE/AKTUALITY</v-btn>
        </v-flex>
      </v-layout>
    </v-img>
    <nuxt />
    <the-footer />
  </v-app>
</template>

<script>
import TheFooter from '~/components/TheFooter'
import TheHeader from '~/components/TheHeader'

export default {
  components: {
    TheFooter,
    TheHeader
  }
}
</script>

<style lang="stylus" scoped>
html, body 
  height 100%
.v-image
  margin-top 60px
h1 
  font-size 3rem
p 
  margin-left 16px
  margin-right 16px
  font-size 1rem
  letter-spacing 1.5px
@media screen and (min-width 600px)
  h1  
    font-size 6rem
  p 
    font-size 1.25rem
    letter-spacing 1.5px
@media screen and (min-width 960px)
  h1 
    font-size 7rem
</style>
