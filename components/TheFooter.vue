<template>
  <v-footer dark height="auto">
    <v-layout row fill-height justify-center>
      <div class="my-4">
        &copy; {{ date }} by Marcus Wiseman
      </div>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  name: 'the-footer',
  computed: {
    date () {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
