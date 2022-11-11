<template>
  <div>

    <ul class="list-group list-group">
      <li 
        class="list-group-item"
        v-if="watch"
        @click= 'updateWatchStatus'
        :class = "{'is-seen change-colour list-group-item-secondary' : watch.isSeen }"  
      >
        {{ watch.title }}
      </li>

    </ul>
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