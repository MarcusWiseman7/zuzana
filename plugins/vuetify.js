import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuetify, {
  theme: {
    primary: '#fc1c7d', // a color that is not in the material colors palette
    accent: '#a9e976',
    secondary: '#444444',
    info: '#d5d5d5',
    warning: colors.amber.base,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3
  },
  iconfont: 'fa'
})
