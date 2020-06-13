<template>
  <div id="app">
    <Header />
    <Home />
  </div>
</template>

<script>
import Header from './layouts/Header.vue'
import Home from './components/Home.vue'
import './assets/styles/common.css'

export default {
  name: 'App',
  components: {
    Header,
    Home
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}
body {
  margin: 0;
}
</style>
