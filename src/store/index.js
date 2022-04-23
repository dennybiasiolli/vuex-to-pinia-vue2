import Vue from 'vue'
import Vuex from 'vuex'
import todo from './modules/todo'

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

export const modules = {
  todo,
}

export default new Vuex.Store({
  state: { ...defaultState },
  getters,
  mutations,
  actions,
  modules,
})
