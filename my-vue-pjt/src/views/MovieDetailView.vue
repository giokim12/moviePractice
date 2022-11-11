<template>
  <div>
    <h1>MOVIE DETAIL</h1>
    <div>
      <img :src="imgPath" class="poster-img">
      <hr>
      <!-- {{ movie }} -->
      <div>
        <h1> {{ movie.title }} </h1>
      </div>
      <div>평점: {{ movie.vote_average}}</div>
      <div>소개: {{ movie.overview }}</div>
      
      
    </div>
  </div>
</template>

<script>
// import axios from 'axios'


export default {
  name: 'MovieDetailView',
  data() {
    return {
      movie: null

    }
  },
  computed: {
    movies() {
      return this.$store.state.movieList
    },
    imgPath() {
      return "https://image.tmdb.org/t/p/original/"+this.movie.poster_path
    },
  },
  methods: {
    getMovieById() {
      const id = this.$route.params.id
      console.log(this.$route.params.id)
      for (const movie of this.movies) {
        console.log(movie.id)
        if (movie.id === Number(id)) {
          this.movie = movie
          break
        }
      }
    }
  },
  created() {
    this.getMovieById(this.$route.params.id)
  }
}
</script>

<style>
.poster-img{
  width: 1000px;
  height: 1500px;

}
</style>