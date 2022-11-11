<template>
  <div>
    <h1>보고싶은 영화</h1>
  <div class="container">
    <div class="row">
      <div class="col">
      </div>
      <div class="col-8">
        <WatchListFormVue/>
        <WatchListVue/>
        <WatchListItemVue/>
      </div>
      <div class="col">
      </div>
    </div>
  </div>

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