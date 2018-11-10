<template>
  <v-img :src="require('~/assets/pics/instructors.jpg')">
    <v-container fill-height>
      <v-layout justify-center row v-bind="binding" ref="app">
        <v-flex xs12 sm4>
          <v-card height="100%" flat tile style="opacity:0.9">
            <v-card-title>
              <h1>Kontakt</h1>
            </v-card-title>
            <v-card-text>
              <h2>Zuzana Doudová</h2>
              <p>mob: 777 100 015</p>
              <p>e-mail: <a href="mailto:cvicovestec@gmail.com">cvicovestec@gmail.com</a></p>
              <p>Spolupracujeme s Rodinným centrem Baráček: <a href="http://www.rcbaracek.cz/">www.rcbaracek.cz/</a></p>
            </v-card-text>
            <v-card-actions>
              <a 
                style="margin-right:auto;margin-left:auto;"
                v-for="(item, index) in socialItems"
                :key="index" 
                :href="item.link"
              ><v-icon color="primary">{{ item.icon }}</v-icon></a>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 lg4>
          <v-card height="100%" flat tile style="opacity:0.9">
            <v-card-text>
              <p>Sportovni centrum TJ Viktoria Vestec</p>
              <p>U hriste 575, Vestec</p>
            </v-card-text>
            <v-responsive>
              <div id="map" class="gmap"></div>
            </v-responsive>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-img>
</template>

<script>
export default {
  data () {
    return {
      socialItems: [
        { link: 'https://www.facebook.com/profile.php?id=100009177529273', icon: 'fab fa-facebook-square' },
        { link: 'mailto:cvicovestec@gmail.com', icon: 'fas fa-envelope' }
      ],
      center: { lat: 49.9836736, lng: 14.506301000000007 },
      zoom: 15
    }
  },
  mounted() {
    this.$map = new this.$google.maps.Map(document.getElementById('map'), {
      center: new this.$google.maps.LatLng(this.center),
      zoom: this.zoom
    }),
    this.$marker = new this.$google.maps.Marker({ position: this.center, map: this.$map })
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
h1 
  font-size 2.75rem
  letter-spacing .5px
  font-weight normal
h2 
  font-size 1.7rem
  letter-spacing .5px
  font-weight normal
p 
  font-size 1.1rem
  letter-spacing .5px
.gmap
  height 300px
  width 95%
.v-card
  padding-top 15%
@media screen and (min-width 600px)
  .v-image
    max-height 600px
@media screen and (min-width 960px)
  .v-image
    max-height 650px
</style>
