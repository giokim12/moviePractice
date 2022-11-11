<template>
  <div>
    <!-- 와치리스트폼 컴포넌트임 -->
    <div>
      <input 
        type="text"
        v-model='watchTitle'
        @keyup.enter='createWatch'
      >
      <button>Add</button>
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

</style>