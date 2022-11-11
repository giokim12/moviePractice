<template>
  <div>
    <h1>랜덤뷰 페이지임</h1>
    <div class="card" style="width: 18rem;">
      <img :src="imgPath" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ randomMovie.title }}</h5>
        <p class="card-text">{{ randomMovie.overview }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'RandomView',
  data() {
    return {
      randomMovie : null
    }
  },
  methods: {
    getWeather() {
      const API_KEY = 'ecd3c53b7ca0cba2390fa21a07e38535'
      const URL = 'https://api.openweathermap.org/data/2.5/weather?'
      let params = {
        q: 'seoul',
        appid: API_KEY
      }
      axios.get(URL, {params})
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  computed: {
    imgPath() {
      return "https://image.tmdb.org/t/p/original/"+this.randomMovie.poster_path
    },
  },
  created() {
    this.randomMovie = this.$store.getters.randomMovie
    this.getWeather()
  }
}
</script>

<style>

</style>