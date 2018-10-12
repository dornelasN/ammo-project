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
  width: 100%;
  display: flex;
  justify-content: flex-start;
  background-color: white;

  -webkit-box-shadow: 0 5px 6px -4px black;
    -moz-box-shadow: 0 5px 6px -4px black;
        box-shadow: 0 5px 6px -4px black;

  margin-bottom: 30px;
}
</style>
