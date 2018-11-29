<template>
  <v-img :src="require('~/assets/pics/instructors.jpg')">
    <v-container fill-height>
      <v-layout column>
        <v-layout justify-center>
          <v-flex xs12 lg8>
            <v-card flat height="100%" tile style="opacity:0.9">
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
        </v-layout>
        <v-layout justify-center v-bind="binding" ref="app">
          <v-flex xs12 sm6 lg4>
            <v-card flat height="420px" tile style="opacity:0.9">
              <v-card-text>
                <p>Sportovni centrum TJ Viktoria Vestec</p>
                <p>U hriste 575, Vestec</p>
              </v-card-text>
              <v-responsive>
                <div id="vestecMap" class="gmap"></div>
              </v-responsive>
            </v-card>
          </v-flex>
          <v-flex xs12 sm6 lg4>
            <v-card flat height="420px" tile style="opacity:0.9">
              <v-card-text>
                <p>ZŠ</p>
                <p>Lidická 384, Dobříš</p>
              </v-card-text>
              <v-responsive>
                <div id="dobrisMap" class="gmap"></div>
              </v-responsive>
            </v-card>
          </v-flex>
        </v-layout>
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
      vestecCenter: { lat: 49.9836736, lng: 14.506301000000007 },
      dobrisCenter: { lat: 49.783430, lng: 14.174430 },
      zoom: 15
    }
  },
  mounted() {
    this.$vestecMap = new this.$google.maps.Map(document.getElementById('vestecMap'), {
      center: new this.$google.maps.LatLng(this.vestecCenter),
      zoom: this.zoom
    })
    this.$marker = new this.$google.maps.Marker({ position: this.vestecCenter, map: this.$vestecMap })
    this.$dobrisMap = new this.$google.maps.Map(document.getElementById('dobrisMap'), {
      center: new this.$google.maps.LatLng(this.dobrisCenter),
      zoom: this.zoom
    })
    this.$dobrisMarker = new this.$google.maps.Marker({ position: this.dobrisCenter, map: this.$dobrisMap })
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
  margin-right 8px
  margin-left 8px
@media screen and (min-width 960px)
  .v-image
    max-height 800px
</style>
