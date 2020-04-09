import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    alertDetails: {
      isOpen: false,
      message: 'Successfully added to cart.',
      color: 'success'
    },
    showDrawer: false
  },
  mutations: {
    toggleAlert(state) {
      state.alertDetails.isOpen = !state.alertDetails.isOpen
    },
    setDrawer(state, payload) {
      state.showDrawer = payload
    }
  },
  actions: {

  }
})
