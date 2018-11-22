<template>
  <v-container>
    <v-layout class="mt-5" justify-center row v-bind="binding" ref="app">
      <v-flex xs12 sm6>
        <v-img :src="require('~/assets/pics/rozpis.png')"></v-img>
      </v-flex>
      <v-flex xs12 sm6>
        <div class="ml-4">
          <p>*lekce může být nahrazena sobotní cvičební akcí</p>
          <p>Rezervace na stránkách <a href="www.tjviktoriavestec.cz">www.tjviktoriavestec.cz</a></p>
          <p>   v sekci "cvičení-Zuzi"</p>
          <br><br>
          <p>mob. 777 100 015</p>
          <p>email: <a href="mailto:cvicovestec@gmail.com">cvicovestec@gmail.com</a></p>
          <br><br>
          <p>Cena lekce: 120 Kč/55 min</p>
          <p>Cena permanentky: 1.000 Kč/10 lekcí</p>
          <br><br>
          <p>Úterní lekce Bodystylingu probíhá v ZŠ Šeberov, ul. V Ladech 6, Šeberov</p>
          <p>(vstup z boční strany budovy)</p>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
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
  font-size 1.1rem
  letter-spacing .7px
</style>
