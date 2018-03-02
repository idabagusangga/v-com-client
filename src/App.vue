<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <loginForm></loginForm>
        <h1>{{msg}}</h1>
        <h1>Your Checkout Detail</h1>
        <div class="">
            <v-container grid-list-md text-xs-center>
              <v-layout row wrap>
                <v-flex xs3>
                  <v-card>
                    <v-card-text class="px-0">Quantity</v-card-text>
                  </v-card>
                </v-flex>
                  <v-flex xs6 style="max-height: 100px;">
                    <v-card >
                      <v-card-text class="px-0">Item</v-card-text>
              
                    </v-card>
                            </v-flex>
                    <v-flex xs3 >
                      <v-card>
                        <v-card-text class="px-0">$</v-card-text>
                      </v-card>
                      </v-flex>
              </v-layout>
            </v-container>
        </div>
        <checkoutDetail v-for="s in itemsInCart" :item="s"></checkoutDetail>
        <h1>Total</h1>
        ${{grandTotal}}
          <v-btn color="info" @click="checkout">CheckOut</v-btn>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <!-- <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon> -->
      <a href="#" @click.stop="drawer = !drawer"><checkout></checkout></a>
      <v-spacer></v-spacer>
    
      
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn>
      
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import checkout from '@/components/checkout'
import checkoutDetail from '@/components/checkoutDetail'
import loginForm from '@/components/loginForm'
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'V-Mart'
    }
  },
  name: 'App',
  components: {
    checkout: checkout,
    checkoutDetail: checkoutDetail,
    loginForm: loginForm
  },
  computed: {
    itemsInCart () {
      return this.$store.state.shoppingCart
    },
    loginStatus () {
      return this.$store.state.loginState
    },
    grandTotal () {
      let total = 0
      this.$store.state.shoppingCart.forEach(item => {
        total += item.price
      })
      return total
    },
    msg () {
      return this.$store.state.errorMessage
    }
  },
  methods: {
    checkout () {
      this.$store.dispatch('checkout')
    }
  }
}
</script>
