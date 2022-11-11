import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movieList: [],
    watchList: [],
    weather: [],
  },
  getters: {
    randomMovie(state) {
      const random = Math.floor(Math.random() * state.movieList.length);
      return state.movieList[random];
    },
    weatherMovie(state) {
      const weather = state.weather[0];
      switch (weather) {
        case "clear sky": // if (x === 'value1')
          return state.movieList.filter(
            (movie) => movie.genre_ids.includes(28) === true //액션
          );
        case "few clouds":
          return state.movieList.filter(
            (movie) => movie.genre_ids.includes(12) === true //어드벤쳐
          );
        case "broken clouds":
          return state.movieList.filter(
            (movie) => movie.genre_ids.includes(16) === true //애니메이션
          );
        case "shower rain":
          return state.movieList.filter(
            (movie) => movie.genre_ids.includes(28) === true
          );
        case "rain":
          return state.movieList.filter(
            (movie) => movie.genre_ids.includes(878) === true //sf
          );
        case "thunderstorm":
          return state.movieList.filter(
            (movie) => movie.genre_ids.includes(27) === true //호러
          );
        case "snow":
          return state.movieList.filter(
            (movie) => movie.genre_ids.includes(28) === true
          );
        case "mist":
          return state.movieList.filter(
            (movie) => movie.genre_ids.includes(28) === true
          );
        default:
          return state.movieList.filter(
            (movie) => movie.genre_ids.includes(28) === true
          );
      }
    },
  },
  mutations: {
    GET_MOVIE(state, movieList) {
      state.movieList = movieList;
    },
    CREATE_WATCH(state, watchItem) {
      state.watchList.push(watchItem);
    },
    UPDATE_WATCH_STATUS(state, watchItem) {
      state.watchList = state.watchList.map((watch) => {
        if (watch === watchItem) {
          watch.isSeen = !watch.isSeen;
        }
        return watch;
      });
    },
    WEATHER(state, weather) {
      const description = weather.weather[0].description;
      const region = weather.name;
      state.weather = [description, region];
    },
  },
  actions: {
    getMovie(context, response) {
      context.commit("GET_MOVIE", response);
    },
    createWatch(context, watchTitle) {
      const watchItem = {
        title: watchTitle,
        isSeen: false,
      };
      context.commit("CREATE_WATCH", watchItem);
    },
    updateWatchStatus(context, watchItem) {
      context.commit("UPDATE_WATCH_STATUS", watchItem);
    },
    getWeather(context, weather) {
      context.commit("WEATHER", weather);
    },
  },
  modules: {},
});
