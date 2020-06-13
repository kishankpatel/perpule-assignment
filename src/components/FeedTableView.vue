<template>
  <div class="table_view">
    <table class="table table-hover table-bordered">
      <thead class="thead-dark">
        <tr>
          <th>SL.</th>
          <th>Title</th>
          <th>Description</th>
          <th>Last Edited</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="feed in feeds" :key="`tr-${feed.id}`">
          <td>{{feed.id}}</td>
          <td>{{feed.title}}</td>
          <td>{{feed.description}}</td>
          <td>{{feed.dateLastEdited}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import utility from '../mixins/utility';
export default {
  name: 'TableView',
  props: {
    feeds: Array
  },
  mixins: [utility]
};
</script>


<style scoped>
  .table_view {
    margin: 30px 0;
  }
  .table_view tr th:nth-child(4), .table_view tr td:nth-child(4) {
    min-width: 100px;
  }
</style>
