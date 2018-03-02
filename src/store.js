import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store ({
  state: {
    defaultProducts: [],
    errorMessage: '',
    shoppingCart: [],
    loginState: false
    
  },
  actions: {
    getDefaultProducts ({ commit }) {
      axios.get('http://35.198.206.238:3001/walmart')
      .then(response => {
        console.log(response);
        commit('updateDefaultProduct', response)
      })
      .catch(err => {
        commit('errorMsg', 'No product found')
      })
    },
    storeGetFashion ({ commit }, payload) {
      axios.get(`http://35.198.206.238:3001/walmart?q=dress`)
      .then(response => {
        console.log(response);
        commit('updateDefaultProduct', response)
      })
      .catch(err => {
        commit('errorMsg', 'No product found')
      })
    },
    storeSearch ({ commit }, payload) {
      axios.get(`http://35.198.206.238:3001/walmart?q=${payload}`)
        .then(response => {
          commit('updateDefaultProduct', response)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addToCart ({ commit }, payload) {
      commit('updateCart', payload)
    },
    login ({ commit }, payload) {
      axios.post(`http://35.198.206.238:3001/users/login`, payload)
        .then(response => {
          localStorage.setItem('token', response.data.token)
          commit('setLoginState', true)
        })
        .catch(err => {
          console.log(err)
        })
    },
    register ({ commit }, payload) {
      axios.post(`http://35.198.206.238:3001/users/register`, payload) 
        .then(response => {
          commit('errorMsg', response.data.msg)
        })
        .catch(err => {
          commit('errorMsg', err)
        })
      
    },
    checkLogin ({ commit }) {
      if (!this.state.loginState) {
        commit('errorMsg', 'Login dulu dong')
      }
    },
    checkout ({ commit }) {
      if (this.state.loginState === false) {
        alert('Please log in')
        commit('errorMsg', 'please log in')
      } else {
        alert('Thank you for shopping with us!')
      }
    }
  },
  mutations : {
    errorMsg (state, data) {
      state.errorMessage = data
    },
    updateDefaultProduct (state, data) {
      state.defaultProducts = data
    },
    updateCart(state, payload) {
      state.shoppingCart.push(payload)
    },
    setLoginState (state, payload) {
      state.loginState = payload
    }
  }
})