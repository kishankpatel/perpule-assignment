<template>
  <div class="container home_page">
    <h1>Feeds</h1>
    <FilterData />
    <FeedGridView :feeds="filteredFeeds" />
    <FeedTableView :feeds="filteredFeeds" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import FeedGridView from './FeedGridView'
import FeedTableView from './FeedTableView'
import FilterData from './Filter'
export default {
  name: 'App',
  components: {
    FeedGridView,
    FeedTableView,
    FilterData
  },
  data () {
    return {
      currentPage: 1,
      perPage: 10
    }
  },
  created () {
    this.initializeData();
    this.$store.dispatch('updateSortBy', this.$route.query.sortBy);
    this.$store.dispatch('updateSearchQuery', this.$route.query.searchQuery);
  },
  computed: {
    ...mapState(['feeds', 'searchQuery', 'sortBy']),
    filteredFeeds () {
      let feeds = this.searchFeeds(this.searchQuery);
      return this.sortFeeds(feeds);
    },
    requireExactMatch () {
      return this.searchQuery.length > 2 && this.searchQuery[0] === '"' && (this.searchQuery[this.searchQuery.length-1] === '"')
    },
    queryx () {
      return this.searchQuery.replace(/"/g, '').toLocaleLowerCase()
    },
    parsedQuery () {
      if (this.requireExactMatch) {
        return this.searchQuery.replace(/^"/, '').replace(/"$/,'')
      } else {
        return this.searchQuery
      }
    }
  },
  methods: {
    initializeData () {
      this.$store.dispatch('loadFeeds');
    },
    sortFeeds(feeds) {
      if (this.sortBy === undefined || this.sortBy === '') {
        return feeds;
      }
      return feeds.sort((a, b) => a[this.sortBy].localeCompare(b[this.sortBy]));
    },
    searchFeeds (searchQuery) {
      if(searchQuery !== undefined && searchQuery.length) {
        return this.feeds.filter(feed => {
          if (this.requireExactMatch) {
            if (feed.title.toLocaleLowerCase().indexOf(this.parsedQuery) !== -1 || feed.description.toLocaleLowerCase().indexOf(this.parsedQuery) !== -1) {
              return true;
            }
          } else {
            let titleMatches = []
            this.parsedQuery.split(' ').forEach((q) => {
              titleMatches.push(feed.title.toLocaleLowerCase().indexOf(q))
            })
            // Return if match found for title
            if (titleMatches.indexOf(-1) === -1) {
              return true;
            } else {
              // Try searching match for description
              let descMatches = []
              this.parsedQuery.split(' ').forEach((q) => {
                descMatches.push(feed.description.toLocaleLowerCase().indexOf(q))
              })
              if (descMatches.indexOf(-1) === -1) {
                return true;
              }
            }
          }
        })
      } else {
        return this.feeds;
      }
    }
  }
};
</script>
