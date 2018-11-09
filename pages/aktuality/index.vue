<template>
  <v-container>
    <h1 class="mt-5 mb-4 info--text">Co se u nás děje?</h1>
    <v-img :src="require('~/assets/pics/party.jpg')"></v-img>
    <h1 class="my-4 info--text"><li>V našem fitness bez problémů můžete využít kartu MultiSport</li></h1>
    
    <h2 v-if="akce[0].item" class="mb-1 info--text" style="textDecoration:underline">Další připravované akce:</h2>
    <h2 
      class="info--text"
      v-if="akce[0].item" 
      v-for="(item, index) in akce"
      :key="index"
    >{{ item.item }}</h2>
    
    <v-carousel hide-delimiters class="mt-5">
      <v-carousel-item
        v-for="(item, index) in items"
        :key="index"
      ><v-img :src="require('~/assets/pics/' + item.src)"></v-img></v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
export default {
  data () {
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
h1, h2 
  font-weight normal
  letter-spacing 1px
</style>
