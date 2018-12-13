<template>
  <div>
    <h3 class="my-3">V našem fitness bez problémů můžete využít kartu MultiSport</h3>
    <h2 v-if="akce[0].item" class="mb-1" style="textDecoration:underline">Další připravované akce:</h2>
    <template
      v-if="akce[0].item" 
      v-for="(item, index) in akce"
    >
      <h2 :key="index">{{ item.item }}</h2>
      <h3 v-if="item.link" :key="item.link"><a :href="item.link">{{ item.linkText }}</a></h3>
    </template>
  </div>
</template>

<script>
export default {
  name: 'current-events',
  data () {
    return {
      akce: [
        { item: '5.1.2019 - Novoroční cvičební párty Vestec (2 hod cvíča)' },
        { item: '19.1.2019 - Novoroční cvičební párty Dobříš (2 hod cvíča)' },
        { item: '17.-19.5. Cvičební víkend ve Starém Světě', link: 'http://www.dovolena-cviceni.cz/capro-tym/doudova', linkText: 'Click here to book this trip!' },
        { item: '21. - 29.6.2019 - Cvičení u moře, Chorvatsko, Polynesia, Umag' },
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
