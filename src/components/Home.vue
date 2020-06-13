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
  },
  computed: {
    ...mapState(['feeds', 'searchQuery']),
    filteredFeeds () {
      var vueObj = this;
      if(vueObj.searchQuery.length) {
        return this.feeds.filter(feed => {
          if (this.exactMatch) {
            if (feed.title.toLocaleLowerCase().indexOf(vueObj.parsedQuery) !== -1 || feed.description.toLocaleLowerCase().indexOf(vueObj.parsedQuery) !== -1) {
              return true;
            }
          } else {
            let titleMatches = []
            vueObj.parsedQuery.split(' ').forEach((q) => {
              titleMatches.push(feed.title.toLocaleLowerCase().indexOf(q))
            })
            // Return if match found for title
            if (titleMatches.indexOf(-1) === -1) {
              return true;
            } else {
              // Try searching match for description
              let descMatches = []
              vueObj.parsedQuery.split(' ').forEach((q) => {
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
    },
    exactMatch () {
      return this.searchQuery.length > 2 && this.searchQuery[0] === '"' && (this.searchQuery[this.searchQuery.length-1] === '"')
    },
    queryx () {
      return this.searchQuery.replace(/"/g, '').toLocaleLowerCase()
    },
    parsedQuery () {
      if (this.exactMatch) {
        return this.searchQuery.replace(/^"/, '').replace(/"$/,'')
      } else {
        return this.searchQuery
      }
    }
  },
  methods: {
    initializeData () {
      this.$store.dispatch('loadFeeds');
    }
  }
};
</script>
