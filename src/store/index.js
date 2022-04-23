import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const defaultState = {
  count: 0,
}

export const getters = {
  isEven: state => state.count % 2 === 0,
}

export const mutations = {
  increment(state) {
    state.count++
  },
}

export const actions = {
  incrementAsync({ commit }) {
    setTimeout(() => {
      commit('increment')
    }, 1000)
  },
}

export default new Vuex.Store({
  state: { ...defaultState },
  getters,
  mutations,
  actions,
});
