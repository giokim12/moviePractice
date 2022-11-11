<template>
  <div>
    <h1>보고싶은 영화</h1>

    <WatchListFormVue/>
    <WatchListVue/>
    <WatchListItemVue/>
  </div>
</template>

<script>
import WatchListFormVue from '@/components/WatchListForm.vue'
import WatchListItemVue from '@/components/WatchListItem.vue'
import WatchListVue from '@/components/WatchList.vue'


export default {
  name: 'WatchListView',
  components: {
    WatchListFormVue,
    WatchListItemVue,
    WatchListVue
  }
}
</script>

<style>

</style>