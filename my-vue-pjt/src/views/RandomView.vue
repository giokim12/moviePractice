<template>
  <div>
    <button class='go-to-movie'> 보러가기</button>
    <div class="container">
      <img :src="imgPath" class="card-img-top" alt="...">
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
    back() {
      return `background-image: url(${this.imgPath})`
    }
  },
  created() {
    this.randomMovie = this.$store.getters.randomMovie
    this.getWeather()
  }
}
</script>

<style>
  .go-to-movie {
    width: 300px;
    background-color: white;
    color: black;
    border-radius: 5px;
    border: 1px solid green;
    margin: 10px;
    height: 30px;
    font-weight: bold;
  }
  .go-to-movie:hover {
    background-color: green;
    color: white;
  }
</style>