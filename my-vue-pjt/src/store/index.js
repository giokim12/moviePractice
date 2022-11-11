import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movieList: [],
  },
  getters: {
    randomMovie(state) {
      const random = Math.floor(Math.random() * state.movieList.length);
      return state.movieList[random];
    },
  },
  mutations: {
    GET_MOVIE(state, movieList) {
      state.movieList = movieList;
    },
  },
  actions: {
    getMovie(context, response) {
      context.commit("GET_MOVIE", response);
    },
  },
  modules: {},
});
