<template>
  <div>
    <WatchListItem
      v-for="(watch, idx) in watchList"
      :key = "idx"
      :watch = 'watch'
    />
  </div>
</template>

<script>
import WatchListItem from '@/components/WatchListItem'

export default {
  name: 'WatchList',
  components: {
    WatchListItem,
  },
  computed: {
    watchList() {
      return this.$store.state.watchList
    }
  }
}
</script>

<style>

</style>