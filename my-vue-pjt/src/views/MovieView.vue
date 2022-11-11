<template>
  <div>
    <h1>MovieView 페이지임</h1>
    <!-- {{ movieList.length }} -->
    <div class ="row">
      <MovieCardVue
        v-for="(movie, idx) in movieList"
        :key="idx"
        :movie="movie"
      />
    </div>
  </div>
</template>

<script>
import MovieCardVue from '@/components/MovieCard.vue'
import axios from 'axios'

export default {
  name: 'MovieView',
  components: {
    MovieCardVue
  },
  created () {
    this.getMovieList()
  },
  methods:{
    getMovieList() {
      const API_KEY = '68713b7a90b1232e24d3b1ef15246cba'
      const URL = 'https://api.themoviedb.org/3/movie/top_rated?'
      let params = {
        api_key: API_KEY,
        language: 'en-US',
        // page: 1
      }
      axios.get(URL, {params})
        .then((response) => {
          // console.log(response.data.results)
          this.$store.dispatch('getMovie', response.data.results)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  computed: {
    movieList() {
      return this.$store.state.movieList
    }
  }
}
</script>

<style>

</style>