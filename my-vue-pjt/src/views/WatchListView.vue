<template>
  <div>
    <h1>와치리스트뷰 페이지임</h1>
    <WatchListFormVue/>
    <WatchListItemVue/>
  </div>
</template>

<script>
import WatchListFormVue from '@/components/WatchListForm.vue';
import WatchListItemVue from '@/components/WatchListItem.vue';

export default {
  name: 'WatchListView',
  components: {
    WatchListFormVue,
    WatchListItemVue
  }
}
</script>

<style>

</style>