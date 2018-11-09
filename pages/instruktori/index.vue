<template>
  <div class="bg">
    <v-container
      v-for="(item, index) in instructors"
      :key="index"
      class="fg"
    >
      <v-layout justify-center row v-bind="binding" ref="app">
        <v-flex xs12 sm6 lg4>
          <v-img :src="require('~/assets/pics/' + item.src)"></v-img>
        </v-flex>
        <v-flex xs12 sm6 min-height="100%" class="pl-3 info--text">
          <h1>{{ item.name }}</h1>
          <h3 v-if="item.sub">{{ item.sub }}</h3>
          <v-container>
            <p v-for="(item, i) in item.zItems" :key="i">
              {{ item.item }}
            </p>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      instructors: [
        {
          src: '8341.jpg',
          name: 'Zuzana Doudová',
          sub: 'Dosažené vzdělání:',
          zItems: [
            { item: 'deepWORK Instructor' },
            { item: 'Piloxing Instructor' },
            { item: 'Zumba Basics' },
            { item: 'Stretch Basic diplom' },
            { item: 'Flexi-bar Basic' },
            { item: 'Bosu Core diplom' },
            { item: 'Spinning Clinic - lektorka spinningu JGSI' },
            { item: 'Fitbox academy - licence Instruktor Basic' },
            { item: 'kurz cvičitele aerobiku I. tř. (získání živnostenského oprávnění)' },
            { item: 'kurz cvičitele aerobiku II. a III. tř. v Akademii cvičitelů a instruktorů' }
          ] 
        },
        {
          src: 'katka.jpg',
          name: 'Kateřina Kůrková "Kačka"',
          zItems: [
            { item: 'Power jóga, lektor jógy pro těhotné systémem A. Smékalové' },
            { item: 'Workshopy:  Vinyasa, Prana Flow, asistence v ásánách' }
          ]
        },
        {
          src: 'ins.jpg',
          name: 'Veronika Kmochová',
          zItems: [
            { item: 'Cvičím od roku: 2012' },
            { item: 'Zaměření:  hatha jóga, fit jóga, relaxační dýchání, cvičení pro zdravá záda' },
            { item: 'Říká o sobě:  jógu cvičím intuitivně od dětství, aniž bych tušila, že se jedná o jógové ásany, ale skutečně intenzivně se jí věnuji od roku 2008. O nabyté zkušenosti a znalosti se s Vámi ráda podělím na svých lekcích. Hodiny přizpůsobuji potřebám Vás, klientů. Mým cílem je, abyste z mých hodin odcházeli s pocitem dobře stráveného času a s úsměvem na tváři.' },
            { item: 'Mé motto:  "Je mnoho způsobů, jak dojít k cíli. Jóga je jedním z nich"' }
          ]
        }
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
p 
  color #d5d5d5
  font-size 1.2rem
  letter-spacing .5px
  line-height 28px
</style>
