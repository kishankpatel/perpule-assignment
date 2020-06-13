<template>
  <div class="grid_view">
    <div class="grid_row row">
      <div
        v-for="feed in feeds"
        :key="`cell-${feed.id}`"
        class="grid_cell md4"
      >
        <div class="card">
          <img :src="getImgUrl(feed.image)" alt="Image">
          <div class="p15">
            <div class="feed_title" :title="feed.title">{{feed.title}}</div>
            <div class="feed_desc">{{feed.description}}</div>
          </div>
        </div>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GridView',
  props: {
    feeds: Array
  },
  methods: {
    getImgUrl(imgName) {
      var images = require.context('../assets/images', false)
      return images('./' + imgName)
    }
  }
};
</script>

<style scoped>
  img {
    height: 200px;
    width: 100%;
  }
  .feed_title {
    font-weight: 500;
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .feed_desc {
    height: 80px;
    overflow: auto;
    margin-top: 10px;
  }


</style>
