<template lang="html">
  <div class="">
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex xs3>
            <v-card>
              <v-card-text class="px-0">1</v-card-text>
            </v-card>
          </v-flex>
            <v-flex xs6 style="max-height: 100px;">
              <v-card >
                <v-card-text class="px-0">{{item.name}}</v-card-text>
        
              </v-card>
                      </v-flex>
              <v-flex xs3 >
                <v-card>
                  <v-card-text class="px-0">${{item.price}}</v-card-text>
                </v-card>
                </v-flex>

        </v-layout>
      </v-container>
  </div>

</template>

<script>
  export default {
    props: ['item'],
    computed: {
    }
  }
</script>

<style lang="css">
</style>
  