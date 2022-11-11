<template>
  <div>

    <div class="input-group mb-3 movie-form">
      <input 
        type="text" class="form-control" 
        placeholder="Movie Name" 
        aria-label="Movie Name" 
        aria-describedby="button-addon2"
        v-model='watchTitle'
        @keyup.enter='createWatch'
      >
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button" id="button-addon2">ADD</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WatchListForm',
  data() {
    return {
      watchTitle: null,
    }
  },
  methods: {
    createWatch() {
      this.$store.dispatch('createWatch', this.watchTitle)
      this.watchTitle = null
    }
  }
}
</script>

<style>
  .movie-form {
    width: 50%;
  }
</style>