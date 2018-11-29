<template>
  <div>
    <h2 class="text-xs-center">ROZPIS {{ location.toUpperCase() }}</h2>
    <v-data-table
      :headers="headers"
      :items="items"
      hide-actions
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.day }}</td>
        <td class="text-xs-center">{{ props.item.firstTime }}</td>
        <td class="text-xs-center">{{ props.item.secondTime }}</td>
        <td class="text-xs-center">{{ props.item.thirdTime }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: 'exercise-schedule',
  data () {
    return {
      headers: [
        { text: '', align: 'center', sortable: false },
        { text: '9:30-10:30', align: 'center', sortable: false }, 
        { text: '19-19:50', align: 'center', sortable: false }, 
        { text: '20-20:55', align: 'center', sortable: false }
      ],
      vestecItems: [
        { day: 'PO', firstTime: '', secondTime: 'Spinning Zůza', thirdTime: 'BodyART Zůza' },
        { day: 'ÚT', firstTime: '', secondTime: '', thirdTime: 'Power jóga Kačka' },
        { day: 'ST', firstTime: '', secondTime: '', thirdTime: '' },
        { day: 'ČT', firstTime: '', secondTime: 'BodyStyling od 2/19 Zůza', thirdTime: 'Spinning Tomáš' },
        { day: 'PÁ', firstTime: '', secondTime: '', thirdTime: '' },
        { day: 'SO', firstTime: 'Speciální akce dle rozpisu', secondTime: '', thirdTime: '' },
        { day: 'NE', firstTime: '', secondTime: '', thirdTime: '' }
      ],
      dobrisItems: [
        { day: 'PO', firstTime: '', secondTime: '', thirdTime: '' },
        { day: 'ÚT', firstTime: '', secondTime: '', thirdTime: '' },
        { day: 'ST', firstTime: '', secondTime: 'deepWORK Zůza', thirdTime: '' },
        { day: 'ČT', firstTime: '', secondTime: '', thirdTime: '' },
        { day: 'PÁ', firstTime: '', secondTime: '', thirdTime: '' },
        { day: 'SO', firstTime: '', secondTime: '', thirdTime: '' },
        { day: 'NE', firstTime: '', secondTime: '', thirdTime: '' }
      ]
    }
  },
  computed: {
    items () {
      let location = this.$store.getters.getLocation
      if (location === 'vestec') {
        return this.vestecItems
      } else {
        return this.dobrisItems
      }
    },
    location () {
      return this.$store.getters.getLocation
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
