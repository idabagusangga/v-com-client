<template lang="html">


    <v-flex md3>
      <v-card>
        <v-card-title primary-title>
          <div>
            <div class="headline">{{prod.name}}</div>
            <span class="grey--text">${{prod.price}}</span>
          </div>
        </v-card-title>
        <v-card-media
          :src="prod.image"
          height="125px"
          contain
        ></v-card-media>
        <v-card-actions>
          <v-btn flat>Contact Seller</v-btn>
          <v-btn flat color="purple" @click="addProdToCard">Add to Cart</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
          <v-card-text v-show="show">
            {{prod.details}}
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>

  



</template>

<script>
  export default {
    props: ['prod'],
    data: () => ({
      show: false
    }),
    methods: {
      addProdToCard () {
        this.$store.dispatch('addToCart', this.prod)
      }
    }
  }
</script>

<style lang="css">
</style>
