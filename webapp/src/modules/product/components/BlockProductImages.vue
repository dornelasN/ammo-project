<template>
  <div class="image-block">
    <div class="row">
      <div v-for="(image, index) in images" :key="index" class="image">
        <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
          <img :src="image" height="80px" width="80px"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    images: {
      type: Array,
      default: () => []
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
.image-block {
  padding: 15px;

  .image {
    padding: 5px 0;
    margin: 0;
  }
}
</style>
