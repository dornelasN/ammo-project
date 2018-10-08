<template>
  <div class="app-list">
    <h4> {{ listTitle }} </h4>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    general: {
      type: String,
      required: true
    }
  },
  data () {
    return {}
  },
  computed: {
    listTitle () {
      if (this.general) return this.general
      return 'Lista de Produtos'
    }
  },
  watch: {},

  methods: {}
}
</script>

<style lang="stylus" scoped>
</style>
