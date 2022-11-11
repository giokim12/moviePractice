<template>
  <!-- <div>
    {{ movie}}
  </div> -->
  <div>
    <div class="card " style="width: 18rem;">
      <img :src="imgPath" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ movie.title }}</h5>
        <p class="card-text">{{ movie.overview }}</p>
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
  }
}
</script>

<style>

</style>