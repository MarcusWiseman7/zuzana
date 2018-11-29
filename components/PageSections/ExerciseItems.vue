<template>
  <v-container fluid class="pa-0">
    <v-layout row wrap>
      <v-flex xs6 sm4
        v-for="(item, index) in items"
        :key="index"
      >
        <v-dialog v-model="item.dialog" full-width max-width="700px">
          <v-card tile dark flat
            slot="activator"
          >
            <v-card-text>
              <h2 style="textDecoration:underline #fc1c7d">{{ item.title }}</h2>
            </v-card-text>
          </v-card>
          
          <v-card>
            <v-card-title class="accent--text"><h2>{{ item.title }}</h2></v-card-title>
            <v-card-text class="accent--text"><p>{{ item.info }}</p></v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="accent" flat @click="item.dialog = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'exercise-items',
  data () {
    return {
      items: [
        { title: 'BodyART', dialog: false, info: 'Jedná se o lekci body&mind - pomalého cvičení, které spojuje východní fylozofii, prvky jógy a zdravotní fitness cvičení.  Základní pozice a sestavy z jógy jsou přizpůsobeny zdravotním omezením běžné klientely. BodyArt byl původně vyvinutý jako terapeutická metoda. Klade velký důraz na hluboké dýchání, je založen na principu jin a jang a 5 prvků z tradiční čínské medicíny. Pravidelné cvičení vede k odstranění svalových dysbalancí, rozvíjí sílu, flexibilitu a pomáhá k odbourávání stresu. Cvičí se naboso a je vhodné pro muže i ženy, začátečníky ale i aktivní sportovce.' },
        { title: 'DeepWORK', dialog: false, info: 'Jedná se o velmi intenzivní trénínk, při kterém budujeme nejen fyzickou zdatnost, vytrvalost a sílu, ale zároveň je zaměřený na naší duchovní sílu a vnitřní rovnováhu. Je inspirován fylozofií dálného východu a vždy respektuje rovnováhu mezi jin a jang. V průběhu hodiny projdete 5 základními elementy - země, dřevo, oheň, kov a voda. Používáme vždy jen vlastní váhu těla, lekce se cvičí naboso. Cvičení je určené pro všechny, kdo se rádi hýbou, milují výzvy a chtějí zlepšit svou fyzičku. Je určené pro muže i ženy, začátečníky i pokročilé.' },
        { title: 'Spinning', dialog: false, info: 'Je energeticky účinné cvičení. Lekce je vedena na stacionárních kolech, kdy za doprovodu motivační muziky a zkušeného lektora, užijete nejen skvělou atmosféru, ale hlavně odvedete účinný kardio-vaskulární trénink. Spinning vám nejen vytvaruje postavu, zlepší fyzickou kondici, ale určitě vás i skvěle odreaguje. Lekce je opět určena pro všechny věkové skupiny, začátečníky i pokročilé. Nezapomeňte vodu, ručník, na sebe ideálně oblečení jako na kolo.' },
        { title: 'Power joga', dialog: false, info: 'Vychází z klasické jógy, avšak jednotlivé pozice se dynamicky střídají. Je zaměřená na posílení středu těla a práci hlubokého stabilizačního systému. Cvičení vede k posílení a protažení svalů celého těla, rozvíjí koordinaci, sílu, flexibilitu, zároveň se však naučíte správně a hluboce dýchat.' },
        { title: 'Bosu', dialog: false, info: 'Při lekci využijeme speciální balanční pomůcku bosu balance trainer, díky které je cvičení mnohem efektivnější - kromě běžných svalů zapojíme i vnitřní stabilizační systém (hluboké svaly). Cvičení je zaměřené na formování postavy, rozvoje síly, stability a zlepšení fyzické kondice.' },
        { title: 'Bodystyling', dialog: false, info: 'Po krátkém zahřátí následuje posilování svalů celého těla. Občas i s využitím cvičebních pomůcek jako bosu balance trainer, činek, gumiček, převážně však cvičíme jen s vlastní váhou těla. Lekce je zaměřená na rozvoj síly a formováí postavy.' }
      ],
    }
  }
}
</script>

<style lang="stylus" scoped>
.v-card
  background-color #303030
p 
  font-size 1.1rem
  letter-spacing .7px
  text-align justify
h2 
  font-weight normal 
  text-align center 
  font-size 1.5rem
  padding-top 2rem
  padding-bottom 2rem
@media screen and (min-width 600px)
  h2  
    font-size 2rem
    padding-top 2.5rem
    padding-bottom 2.5rem
</style>
