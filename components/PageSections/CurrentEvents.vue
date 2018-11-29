<template>
  <div>
    <h3 class="my-3">V našem fitness bez problémů můžete využít kartu MultiSport</h3>
    <h2 v-if="akce[0].item" class="mb-1" style="textDecoration:underline">Další připravované akce:</h2>
    <h2 
      v-if="akce[0].item" 
      v-for="(item, index) in akce"
      :key="index"
    >{{ item.item }}</h2>
    <h3><a href="http://www.dovolena-cviceni.cz/capro-tym/doudova">Click here to book this trip!</a></h3>
  </div>
</template>

<script>
export default {
  name: 'current-events',
  data () {
    return {
      akce: [
        { item: '1.12. Vánoční párty Vestec 10 - 12 hod' },
        { item: '2.12. Vánoční párty Dobřší' },
        { item: '10.12. Vánoční spinning Vestec' },
        { item: '10.12. Vánoční BodyART Vestec' },
        { item: '12.12. Vánoční DeepWORK Dobříš' },
        { item: '17.-19.5. Cvičební víkend ve Starém Světě', link: 'http://www.dovolena-cviceni.cz/capro-tym/doudova' }
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
