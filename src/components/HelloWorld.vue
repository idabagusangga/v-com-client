<template>
  <div class="">
    
    <v-container fluid>
      <v-slide-y-transition mode="out-in">
        <v-layout column align-center>
          <img src="@/assets/logo.png" alt="Vuetify.js" class="mb-5" style="max-width:250px;">
          <blockquote>
          <h1>VueCommerce</h1>
          {{errMsg}}
          </blockquote>
        </v-layout>
      </v-slide-y-transition>
      <gridShop></gridShop>

      <searchBar></searchBar>
    </v-container>
    <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <itemCard v-for="p in productsArr.data.data" :prod="p"/>
    </v-layout>
    </v-container>
  </div>

</template>

<script>
import gridShop from '@/components/gridShop'
import itemCard from '@/components/item-card'
import searchBar from '@/components/searchBar'
import { mapActions } from 'vuex'
export default {
  data () {
  return {
  }
},
  components: {
    gridShop: gridShop,
    itemCard: itemCard,
    searchBar: searchBar
  },
  methods: {
  ...mapActions([
    'getDefaultProducts'
  ]),
  mixedProducts () {
    this.$store.dispatch('getDefaultProducts')
   }
 },
  mounted () {
    this.mixedProducts ()
  },
  computed: {
    productsArr () {
      return this.$store.state.defaultProducts
    },
    errMsg () {
      return this.$store.state.errorMessage
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.mb-5 {
  margin-bottom: 0px !important;
}
</style>
