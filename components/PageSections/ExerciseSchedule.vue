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
        <td class="text-xs-center">{{ props.item.minusone }}</td>
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
        { text: '7:15-8:10', align: 'center', sortable: false },
        { text: '9:30-10:30', align: 'center', sortable: false }, 
        { text: '19-19:50', align: 'center', sortable: false }, 
        { text: '20-20:55', align: 'center', sortable: false }
      ],
      vestecItems: [
        { day: 'PO', minusone: '', firstTime: '', secondTime: 'Spinning Zůza', thirdTime: 'BodyART Zůza' },
        { day: 'ÚT', minusone: 'DeepWORK  Euforie Pankrác', firstTime: '', secondTime: '', thirdTime: 'Power jóga Kačka' },
        { day: 'ST', minusone: '', firstTime: '', secondTime: '', thirdTime: '' },
        { day: 'ČT', minusone: '', firstTime: '', secondTime: 'BodyStyling od 2/19 Zůza', thirdTime: 'Spinning Tomáš' },
        { day: 'PÁ', minusone: '', firstTime: '', secondTime: '', thirdTime: '' },
        { day: 'SO', minusone: '', firstTime: 'Speciální akce dle rozpisu', secondTime: '', thirdTime: '' },
        { day: 'NE', minusone: '', firstTime: '', secondTime: '', thirdTime: '' }
      ],
      dobrisItems: [
        { day: 'PO', minusone: '', firstTime: '', secondTime: '', thirdTime: '' },
        { day: 'ÚT', minusone: 'DeepWORK  Euforie Pankrác', firstTime: '', secondTime: '', thirdTime: '' },
        { day: 'ST', minusone: '', firstTime: '', secondTime: 'deepWORK Zůza', thirdTime: '' },
        { day: 'ČT', minusone: '', firstTime: '', secondTime: '', thirdTime: '' },
        { day: 'PÁ', minusone: '', firstTime: '', secondTime: '', thirdTime: '' },
        { day: 'SO', minusone: '', firstTime: '', secondTime: '', thirdTime: '' },
        { day: 'NE', minusone: '', firstTime: '', secondTime: '', thirdTime: '' }
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
