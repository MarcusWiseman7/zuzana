<template>
  <div>
    <h3 class="my-3">V našem fitness bez problémů můžete využít kartu MultiSport</h3>
    <h2
      v-if="akce[0].item"
      class="mb-1"
      style="textDecoration:underline"
    >
      Další připravované akce:
    </h2>
    <div v-if="akce[0].item">
      <template v-for="(item, index) in akce">
        <h2 :key="index">{{ item.item }}</h2>
        <h3
          v-if="item.link"
          :key="item.link"
        ><a :href="item.link">{{ item.linkText }}</a></h3>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'current-events',
  data() {
    return {
      akce: [
        { item: '3-5.4.2020 - Sportovní víkend Starý Svět' },
        { item: '29-31.5.2020 - Sportovní víkend Orea Resort Horizont Šumava' },
        { item: '22-29.6.2020 - Cvičení u moře – Chorvatsko Lanterna' }
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
