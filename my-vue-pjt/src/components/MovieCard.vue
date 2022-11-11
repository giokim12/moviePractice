<template>
    <div class="col-6 col-lg-4" @click="goDetail(movie.id)">
      <div class="card shadow-sm mb-5 bg-white rounded">
        <img :src="imgPath" class="card-img-top rounded" height="500px" alt="...">
        <div class="card-body">
          <h5 class="card-title font-weight-bold text-left">{{ movie.title }}</h5>
          <p class="card-text overview text-left">{{ movie.overview }}</p>
        </div>
      </div>
    </div>
  
  
</template>

<script>


export default {
  name: 'MovieCard',
  props: {
    movie: Object,
  },
  computed: {
    imgPath() {
      return "https://image.tmdb.org/t/p/original/"+this.movie.poster_path
    }
  },
  methods: {
    goDetail(id) {
      this.$router.push({name: 'detail', params: {id}})
    }
  }
}
</script>

<style>
.overview {
  display:-webkit-box; 
  word-wrap:break-word; 
  -webkit-line-clamp:4; 
  -webkit-box-orient:vertical; 
  overflow:hidden; 
  text-overflow:ellipsis;
}
</style>