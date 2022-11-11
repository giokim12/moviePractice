<template>
  <div>
    <h1>MovieView 페이지임</h1>
    <MovieCardVue/>
  </div>
</template>

<script>
import MovieCardVue from '@/components/MovieCard.vue';

export default {
  name: 'MovieView',
  components: {
    MovieCardVue
  }
}
</script>

<style>

</style>