import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store ({
    state: {
      location: 'vestec'
    },
    mutations: {
      setLocation (state, location) {
        state.location = location
      }
    },
    actions: {
      setLocation ({ commit }, location) {
        commit('setLocation', location)
      }
    },
    getters: {
      getLocation (state) {
        return state.location
      }
    }
  })
}

export default createStore
