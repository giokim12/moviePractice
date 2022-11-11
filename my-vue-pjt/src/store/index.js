import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movieList: [],
  },
  getters: {
  },
  mutations: {
    GET_MOVIE(state, movieList) {
      state.movieList = movieList
    }
  },
  actions: {
    getMovie(context, response) {
      context.commit("GET_MOVIE", response);
    },
  },
  modules: {
  }
})
