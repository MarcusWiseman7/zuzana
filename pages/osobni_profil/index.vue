<template>
  <div>
    <v-layout justify-center>
      <v-flex xs12 md10 lg8>
        <v-img class="bg" :src="require('~/assets/pics/profile.jpg')"></v-img>
      </v-flex>
    </v-layout>
    
    <v-container class="fg">
      <v-layout class="info--text">
        <v-flex xs12>
          <h3>Něco málo o mě:</h3>
          <p>Vítejte na mých stránkách. Jsem instruktorkou DeepWORKu, BodyARTu, Spinningu, Bosu, Fitboxu a různých forem aerobního cvičení. Sportu se věnuji již řadu let, ale lektorkou jsem se stala v roce 2000 a od té doby pravidelně navštěvují různá školení a kongresy v Čechách i v zahraničí. Ráda se neustále vzdělávám, jedině tak mohu předat svým klientům to nejlepší. Poslední dobou se mou velkou láskou stal především deepWORK a silovější formy cvičení. Ráda se ale občas vrátím i ke klasickému dance aerobicu. Je pro mě moc důležité, aby se klienti při cvičení cítili fajn. Těší mě, když mohu být součástí jejich progresu a když mohu vidět, že z fitka odchází s úsměvem a dobrou náladou. To je tou největší odměnou. Pak vím, že má práce má smysl.</p>
          <h3>Osobní profil:</h3>
          <p>Narodila jsem se 26.5.1978 - ve znamení Blíženců. Aerobicu se věnuji cca od svých 16 let. Zaměřuji se na různé formy cvičení - dance aerobic, P-class, body-stylling, body-bar, step aerobic, dále fitbox a spinning.</p>
          <h3>Dosažené vzdělání:</h3>
          <p>* r. 2015 - deepWORK Instructor</p>
          <p>* r. 2013 - Piloxing Instructor</p>
          <p>* r. 2011 - Zumba Basics</p>
          <p>* r. 2010 - Stretch Basic diplom</p>
          <p>* r. 2009 - Flexi-bar Basic</p>
          <p>* r. 2007 - Bosu Core diplom</p>
          <p>* r. 2006 - Spinning Clinic - lektorka spinningu JGSI</p>
          <p>* r. 2006 - Fitbox academy - licence Instruktor Basic</p>
          <p>* r. 2002 - kurz cvičitele aerobiku I. tř. (získání živnostenského oprávnění)</p>
          <p>• r. 2000 - kurz cvičitele aerobiku II. a III. tř. v Akademii cvičitelů a instruktorů</p>
          <p>• pravidelné návštěvy seminářů a workshopů</p>
          <p>o deepWORK</p>
          <p>o bodyART</p>
          <p>o kickbox aerobik, fitbox</p>
          <p>o bodyform, body styling</p>
          <p>o dance aerobik</p>
          <p>o spinning - Heart rate training</p>
          <p>o step aerobik</p>
          <h3>Hobby:</h3>
          <p>in-liny, cyklistika, jogging, lyžování</p>
          <h3>Jaká jsem?</h3>
          <p>Optimistický nadšenec do všeho nového :-)</p>
          <p>Cvičení je pro mě aktivní forma relaxace - bez něj to zkrátka nejde!</p>
        </v-flex>
      </v-layout>
    </v-container>
    <v-layout row justify-space-around class="mb-5">
      <v-flex xs12 sm4 lg3
        v-for="(item, index) in pics"
        :key="index"
        class="b-img"
      >
        <v-img :src="require('~/assets/pics/' + item.src)"></v-img>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pics: [
        { src: '8344.jpg' },
        { src: '8341.jpg' },
        { src: '8339.jpg' }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
// html 
//   overflow-x hidden 
// ::-webkit-scrollbar 
//   width 0
//   background transparent 
// .bg 
//   height 70vh
//   opacity 0.7
// .fg
//   position absolute
//   top 150px
//   left 0
//   max-height 70vh 
//   overflow-y scroll
h3 
  text-decoration underline
  margin-top 2.5rem
  margin-bottom 1.5rem 
  font-size 1.75rem
  letter-spacing .5px
p 
  font-size 1.2rem
  letter-spacing .5px
  line-height 28px
@media screen and (min-width 600px)
  .b-img 
    margin-left 16px
    margin-right 16px
</style>
