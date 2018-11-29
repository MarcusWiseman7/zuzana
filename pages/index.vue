<template>
  <div>
    <v-container>
      <v-layout justify-center v-bind="binding" ref="app">
        <v-flex xs12 sm6 md4>
          <v-img :src="require('~/assets/pics/zprofile.jpg')"></v-img>
        </v-flex>
        <v-flex xs12 sm6>
          <v-container>
            <blockquote>"Myslím, že cvičení by mělo být formou aktivního odpočinku a tak se snažím, aby si každý z hodiny odnesl nejen dobrý pocit z toho, že pro sebe něco udělal, ale především se odprostil od běžných starostí a odcházel s úsměvem"</blockquote>
            <v-layout class="mt-4" justify-center>
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
      <v-layout justify-center class="my-4">
        <switch-location />
      </v-layout>
      <v-layout justify-center v-bind="binding" ref="app">
        <v-flex xs12 sm6>
          <h1>Co se u nás děje?</h1>
          <current-events />
        </v-flex>
        <v-flex xs12 sm6 md4>
          <exercise-schedule />
        </v-flex>
      </v-layout>
    </v-container>
    <exercise-items />
  </div>
</template>

<script>
import SwitchLocation from '~/components/PageSections/SwitchLocation'
import ExerciseItems from '~/components/PageSections/ExerciseItems'
import CurrentEvents from '~/components/PageSections/CurrentEvents'
import ExerciseSchedule from '~/components/PageSections/ExerciseSchedule'

export default {
  layout: 'landing',
  components: {
    SwitchLocation,
    ExerciseItems,
    CurrentEvents,
    ExerciseSchedule
  },
  data () {
    return {
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
blockquote 
  text-align justify
  text-justify inner-word 
  font-size 2rem
  font-style italic 
  font-weight 200
  letter-spacing .5px
  line-height 2.25rem
@media screen and (min-width 600px)
  blockquote 
    font-size 2.25rem
    line-height 2.5rem
@media screen and (min-width 1264px)
  blockquote 
    font-size 2.75rem
    line-height 3rem
</style>
