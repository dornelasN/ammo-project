<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
  input, .btn, .block-product {
    &:focus, &:active {
      box-shadow: none !important;
      outline: none !important;
    }
  }

  body {
    background-color: #f2e2dc !important;
    color: #473A38 !important;
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
    }
  }
</style>
