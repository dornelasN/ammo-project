<template>
  <header class="title-header">
    <img v-if="brandMmartan === true" src="@/assets/images/brand/mmartan-logo.png" width="200px" height="75px" />
  </header>
</template>

<script>
export default {
  components: {},
  props: {
    brandMmartan: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},

  methods: {}
}
</script>

<style lang="stylus" scoped>
.title-header {
  width: 100vw;
  margin: 0 -15px 30px;
  display: flex;
  justify-content: flex-start;
  background-color: white;

  -webkit-box-shadow: 0 5px 10px -2px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0 5px 10px -2px rgba(0, 0, 0, 0.25);
        box-shadow: 0 5px 10px -2px rgba(0, 0, 0, 0.25);
}
</style>
