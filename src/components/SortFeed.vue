<template>
  <div>
    <select name="sort" v-model="sortBy" @change="changeSortBy()">
      <option value="">- Sort by -</option>
      <option v-for="(label, option) in sortOptions" :key="`option-${option}`" :value="option">{{label}}</option>
    </select>
  </div>
</template>


<script>
export default {
  data () {
    return {
      sortBy: '',
      sortOptions: { title: "Title", dateLastEdited: "Last Edited" }
    }
  },
  methods: {
    changeSortBy () {
      this.$store.dispatch('updateSortBy', this.sortBy)
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
