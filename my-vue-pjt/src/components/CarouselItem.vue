<template>
  <div>
    <img :src="imgPath" alt="..." height="500px"/>
  </div>
</template>

<script>
export default {
  name: 'CarouselItem',
  props: {
    movie: Object
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