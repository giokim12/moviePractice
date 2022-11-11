import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movieList: [],
    watchList: [],
  },
  getters: {
  },
  mutations: {
    GET_MOVIE(state, movieList) {
      state.movieList = movieList
    },
    CREATE_WATCH(state, watchItem) {
      state.watchList.push(watchItem)
    },
    UPDATE_WATCH_STATUS(state, watchItem) {
      state.watchList = state.watchList.map((watch) => {
        if (watch === watchItem) {
          watch.isSeen = !watch.isSeen
        }
        return watch
      })
    }
  },
  actions: {
    getMovie(context, response) {
      context.commit("GET_MOVIE", response);
    },
    createWatch(context, watchTitle) {
      const watchItem = {
        title : watchTitle,
        isSeen: false,
      }
      context.commit('CREATE_WATCH', watchItem)
    },
    updateWatchStatus(context, watchItem) {
      context.commit('UPDATE_WATCH_STATUS', watchItem)
    }
  },
  modules: {
  }
})
