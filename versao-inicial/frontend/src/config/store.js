import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMenuVisible: false,
    user: {
      name: 'Usuario Mock',
      email: 'mock@coder.com.br'
    }
  },
  mutations: {
    toggleMenu(state, isVisible) {
      if (isVisible === undefined ) {
        state.isMenuVisible = !state.isMenuVisible
      } else {
        state.isMenuVisible = isVisible
      }
    }
  }
})