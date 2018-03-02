<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <div class="">
        <v-flex xs12>
          <v-text-field
            box
            label="Search for product or categories"
            v-model="search"
            hint="Search for any product!"
            persistent-hint
          ></v-text-field>
        </v-flex>
          <v-btn color="success" @click="searchProduct">Search</v-btn>
      </div>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      search:''
    }
  },
  methods: {
    searchProduct() {
      this.$store.dispatch('storeSearch', this.search)
    }
  }
}
</script>

<style lang="css">
</style>
