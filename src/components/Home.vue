<template>
  <div class="container home_page">
    <h1>Feeds</h1>
    <FilterData />
    <FeedGridView :feeds="feeds" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import FeedGridView from './FeedGridView'
import FilterData from './Filter'
export default {
  name: 'App',
  components: {
    FeedGridView,
    FilterData
  },
  data () {
    return {
      searchQuery: '',
      currentPage: 1,
      perPage: 10
    }
  },
  created () {
    this.initializeData();
  },
  computed: {
    ...mapState(['feeds'])
  },
  methods: {
    initializeData () {
      this.$store.dispatch('loadFeeds');
    }
  }
};
</script>

<style scoped>
  .container {
    width: 80%;
    margin: 0 auto;
  }
</style>

