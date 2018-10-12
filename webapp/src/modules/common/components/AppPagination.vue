<template>
  <div class="list-pagination">
    <b-button-group size="sm">
      <b-button
        v-for="(item, index) in pageOptions"
        :key="index"
        :variant="perPage === item ? 'primary' : 'link'"
        @click="$emit('update:perPage', item)"
      >
        {{ item }}
      </b-button>
    </b-button-group>

    <b-pagination
      :total-rows="total"
      :per-page="perPage"
      :value="currentPage"
      class="mb-0"
      size="sm"
      hide-goto-end-buttons
      @input="(value) => $emit('update:currentPage', value)"
    />
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    pageOptions: {
      type: Array,
      required: false,
      default: () => [10, 25, 50, 100]
    },
    total: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: true
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

<style lang="scss" scoped>
.list-pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  padding-right: 40px;
}
</style>
