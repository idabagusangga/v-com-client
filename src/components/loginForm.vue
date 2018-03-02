<template>
  <v-container fluid>
    <h1>Login to Checkout</h1>
    <v-layout row>

      <v-flex xs8>
        <v-text-field
          name="input-10-2"
          label="Enter your username"
          min="8"
          :type="e3 ? 'password' : 'text'"
          v-model="username"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>

      <v-flex xs8>
        <v-text-field
          name="input-10-2"
          label="Enter your password"
          hint="At least 8 characters"
          min="8"
          :type="e4 ? 'password' : 'text'"
          v-model="passwordUser"
        ></v-text-field>
      </v-flex>
    </v-layout>
      <v-btn color="success" @click="login">Login</v-btn> or
      <v-btn color="info" @click="register">register</v-btn>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        e1: false,
        e2: false,
        e3: false,
        e4: true,
        password: 'Password',
        passwordUser: '',
        username: ''
      }
    },
    methods: {
      login () {
        this.$store.dispatch('login', {username: this.username, password: this.passwordUser})
      },
      register () {
        this.$store.dispatch('register', {username: this.username, password: this.passwordUser})
      }
    }
  }
</script>

<style lang="css">
</style>
