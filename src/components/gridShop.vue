<template>
  <div class="categories">
    <v-container
      fluid
      style="min-height: 0; max-width:800px; margin: auto;"
      grid-list-lg
    >
      <v-layout row wrap>
        <v-flex md6>
          <a href="#" style="text-decoration: none;" @click="getFashion">
        
        
            <v-card color="red darken-2" class="white--text">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs7>
                    <div>
                      <div class="headline">{{testString[1]}}</div>
                      <div>Get the latest look</div>
                    </div>
                  </v-flex>
                  <v-flex xs5>
                    <v-card-media
                      src="../static/img/fashion.png"
                      height="125px"
                      contain
                    ></v-card-media>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          
          </a>
        </v-flex>
        
        <v-flex md6>
        <a href="#" style="text-decoration: none;" @click="storeSearchItem('electronics')">
          
            <v-card color="green darken-1" class="white--text">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs7>
                    <div>
                      <div class="headline">{{testString[0]}}</div>
                      <div>For your inner geeks</div>
                    </div>
                  </v-flex>
                  <v-flex xs5>
                    <v-card-media
                      src="../static/img/comp.png"
                      height="125px"
                      contain
                    ></v-card-media>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
            </a>
          </v-flex>
        
        <v-flex md4>
        <a href="#" style="text-decoration: none;" @click="storeSearchItem('Computers')">
          
            <v-card color="yellow darken-1" class="white--text">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs7>
                    <div>
                      <div class="headline">{{testString[2]}}</div>
                      <div>High-end PCs for the lowest price</div>
                    </div>
                  </v-flex>
                  <v-flex xs5>
                      <v-card-media
                        src="../static/img/cart.png"
                        height="125px"
                        contain></v-card-media>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
            </a>
          </v-flex>
        
        <v-flex md5>
      <a href="#" style="text-decoration: none;" @click="storeSearchItem('Furniture')">
      
          <v-card color="amber darken-1" class="white--text">
            <v-container fluid grid-list-lg>
              <v-layout row>
                <v-flex xs7>
                  <div>
                    <div class="headline">{{testString[5]}}</div>
                    <div>All your other needs!</div>
                  </div>
                </v-flex>
                <v-flex xs5>
                  <v-card-media
                    src="../static/img/shoppingbag.png"
                    height="125px"
                    contain
                  ></v-card-media>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
                </a>
        </v-flex>

      <v-flex md3>
      <a href="#" style="text-decoration: none;" @click="storeSearchItem('ipod')">
        
          <v-card color="light-blue darken-1" class="white--text">
            <v-container fluid grid-list-lg>
              <v-layout row>
                <v-flex xs7>
                  <div>
                    <div class="headline">Music</div>
                    <div>Some tunes for your day!</div>
                  </div>
                </v-flex>
                <v-flex xs5>
                  <v-card-media
                    src="../static/img/music.png"
                    height="125px"
                    contain
                  ></v-card-media>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
          </a>
        </v-flex>
      
    
      </v-layout>
    </v-container>
  </div>
  
</template>

<script>
// import { mapActions } from 'vuex'
  export default {
    data: () => ({
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`,
      testString: [`Electronics`,`Fashion`,`Computers`,`Groceries`,`Cameras`,`Sales`]
    }),
    methods: {
      getFashion (payload) {
        this.$store.dispatch('storeGetFashion', payload)
      },
      storeSearchItem (payload) {
        this.$store.dispatch('storeSearch', payload)
      }
    }
  }
</script>

<style lang="css">
.categories {
}
</style>
