<template>
  <div class="table_view">
    <table class="table table-hover table-bordered">
      <thead class="thead-dark">
        <tr>
          <th>SL.</th>
          <th>Title</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="feed in feeds" :key="`tr-${feed.id}`">
          <td>{{feed.id}}</td>
          <td>{{feed.title}}</td>
          <td>{{feed.description}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TableView',
  props: {
    feeds: Array
  }
};
</script>


<style scoped>
  .table_view {
    margin: 30px 0;
  }
</style>
