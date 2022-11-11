<template>
  <div>
    <!-- <button class='go-to-movie'> 보러가기</button> -->
    <br>
    <div class="container">
      <div class="mb-5">
        <h3>랜덤 추천 영화</h3>
        <img v-if="randomMovie" :src="imgPath" height="500px" alt="..."/>
      </div>
      <div>
        <h3>{{ this.$store.state.weather[1] }}의 {{ this.$store.state.weather[0] }}에 어울리는 영화</h3>
        <div class="row">
          <CarouselItem
            v-for="movie in weatherMovie"
            :key="movie.id"
            :movie="movie"
            class="col-6"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import CarouselItem from '@/components/CarouselItem.vue'
export default {
  name: 'RandomView',
  data() {
    return {
      randomMovie : null
    }
  },
  components: {
    CarouselItem
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
          console.log(response.data)
          this.$store.dispatch('getWeather', response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    isFirst(idx) {
      if (idx === 0) {
        return true
      }
    }
  },
  computed: {
    imgPath() {
      return "https://image.tmdb.org/t/p/original/"+this.randomMovie.poster_path
    },
    back() {
      return `background-image: url(${this.imgPath})`
    },
    weather() {
      return this.$store.state.weather
    },
    weatherMovie() {
      return this.$store.getters.weatherMovie
    },

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