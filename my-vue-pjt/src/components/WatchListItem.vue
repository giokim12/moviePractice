<template>
  <div>
    <!-- 워치리스트아이템뷰 -->
    <span 
      v-if="watch"
      @click= 'updateWatchStatus'
      :class = "{'is-seen' : watch.isSeen }"
    >
      {{ watch.title }}
    <!-- {{ watch.isSeen}} -->
    </span>
  </div>
</template>

<script>
export default {
  name: 'WatchListItem',
  props: {
    watch: Object
  },
  methods: {
    updateWatchStatus() {
      this.$store.dispatch('updateWatchStatus', this.watch)
    }
  }
}
</script>

<style>
  .is-seen {
    text-decoration: line-through;
  }
</style>