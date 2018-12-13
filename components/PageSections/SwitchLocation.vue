<template>
  <v-container>
    <v-layout justify-center>
      <h3>Vybrat lokalitu:</h3>
      <v-btn large @click="switchLocation('vestec')">Vestec</v-btn>
      <v-btn large @click="switchLocation('dobříš')">Dobříš</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'switch-location',
  methods: {
    switchLocation (location) {
      this.$store.dispatch('setLocation', location)
    }
  }
}
</script>

<style lang="stylus" scoped>
h3 
  align-self center
  margin-right 16px
</style>
