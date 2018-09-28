import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    fooVariable: null
  },
  getters: {
    getFooVariable (state) {
      return state.fooVariable
    }
  },
  mutations: {
    changeFooVariable: function (state, value) {
      state.fooVariable = value
    }
  }
})

export default store
