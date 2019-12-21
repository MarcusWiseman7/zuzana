<template>
  <v-container>
    <h1 class="mt-5 mb-4 info--text">Co se u nás děje?</h1>
    <!-- <v-img
      :src="require('~/assets/pics/flyer22.11.jpg')"
      alt="flyer"
    ></v-img> -->

    <current-events />

    <div v-if="akce[0].item">
      <h2
        class="mb-1 info--text"
        style="textDecoration:underline"
      >Další připravované akce:</h2>
      <h2
        class="info--text"
        v-for="(item, index) in akce"
        :key="index"
      >{{ item.item }}</h2>
    </div>

    <v-carousel
      hide-delimiters
      class="mt-5"
    >
      <v-carousel-item
        v-for="(item, index) in items"
        :key="index"
      >
        <v-img :src="require('~/assets/pics/' + item.src)"></v-img>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
import CurrentEvents from '~/components/PageSections/CurrentEvents'

export default {
  components: {
    CurrentEvents
  },
  data() {
    return {
      items: [
        { src: '013.jpg' },
        { src: '030.jpg' },
        { src: '046.jpg' },
        { src: '097.jpg' },
        { src: '111.jpg' },
        { src: '8029.jpg' }
      ],
      akce: [
        { item: '' }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
h1, h2 {
  font-weight: normal;
  letter-spacing: 1px;
}
</style>
