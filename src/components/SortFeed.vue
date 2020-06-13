<template>
  <div>
    <select name="sort" v-model="sortVal" @change="changeSortBy()">
      <option value="">- Sort by -</option>
      <option v-for="(label, option) in sortOptions" :key="`option-${option}`" :value="option">{{label}}</option>
    </select>
  </div>
</template>


<script>
import { mapState } from 'vuex';
export default {
  data () {
    return {
      sortVal: '',
      sortOptions: { title: "Title", dateLastEdited: "Last Edited" }
    }
  },
  created () {
    if (this.$route.query.sortBy) {
      this.sortVal = this.$route.query.sortBy;
    }
  },
  computed: {
    ...mapState(['sortBy'])
  },
  methods: {
    changeSortBy () {
      this.$store.dispatch('updateSortBy', this.sortVal);
      let query = {...this.$route.query, sortBy: this.sortVal }
      this.$router.push({ path: '/', query: query });
    }
  }
}
</script>

<style scoped>
select {
  height: 40px;
  border: 1px solid #ddd;
  padding: 0 10px;
  position: relative;
  outline: none;
  box-sizing: border-box;
  font-size: 16px;
}
</style>
