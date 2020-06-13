<template>
  <div>
    <div class="fl">
      <SearchFeed/>
    </div>
    <div class="fr">
      <SortFeed />
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import SearchFeed from './SearchFeed'
import SortFeed from './SortFeed'
export default {
  name: 'App',
  components: {
    SearchFeed,
    SortFeed
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
