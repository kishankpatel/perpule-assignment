<template>
  <div class="search_box">
    <input
      type="text"
      v-model.trim="queryString"
      placeholder="Search..."
      @keyup.enter="changeSearchQuery()"
    />
    <img
      :src="getImgUrl('search-icon.png')"
      alt="Image"
      @click="changeSearchQuery()"
    >
  </div>
</template>

<script>
import utility from '../mixins/utility';
import Vue from 'vue';
import VueRouter from 'vue-router';
import { mapState } from 'vuex';

Vue.use(VueRouter)
export default {
  data () {
    return {
      queryString: ''
    }
  },
  mixins: [utility],
  created () {
    /*eslint-disable*/
    debugger
    if (this.$route.query.searchQuery) {
      this.queryString = this.$route.query.searchQuery;
    }
  },
  computed: {
    ...mapState(['searchQuery'])
  },
  methods : {
    changeSearchQuery () {
      /*eslint-disable*/
      debugger
      this.$store.dispatch('updateSearchQuery', this.queryString);
      let query = {...this.$route.query, searchQuery: this.queryString }
      this.$router.push({ path: '/', query: query });
    }
  }
}
</script>

<style scoped>
input {
  height: 40px;
  border: 1px solid #ddd;
  padding: 0 10px;
  position: relative;
  width: 300px;
  outline: none;
  box-sizing: border-box;
  font-size: 16px;
}
.search_box input, .search_box img {
  display: inline-block;
  vertical-align: middle;
}
.search_box img {
  height: 40px;
  width: 40px;
  border: 1px solid #ddd;
  padding: 5px;
  box-sizing: border-box;
  background: #f5f5f5;
  cursor: pointer;
  opacity: 0.5;
}
.search_box img:hover {
  opacity: 0.8;
}
</style>
