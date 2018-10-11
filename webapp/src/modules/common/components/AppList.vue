<template>
  <div class="app-list">
    <h4> {{ listTitle }} ({{ total }})</h4>

    <div class="row">
      <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">

        <div v-if="productList.items.length > 0">
          <block-product
            v-for="(product, index) in productList.items"
            :key="index"
            :product="product"
          />
        </div>
      </div>
    </div>

    <app-pagination
      :total="total"
      :per-page="perPage"
      :current-page="currentPage"
      :page-options="pageOptions"
      @update:perPage="(value) => $emit('update:perPage', value)"
      @update:currentPage="(value) => $emit('update:currentPage', value)"
    />
  </div>
</template>

<script>
import AppPagination from './AppPagination'
import BlockProduct from '@/modules/product/components/BlockProduct'
import { mapState } from 'vuex'

export default {
  components: { AppPagination, BlockProduct },
  props: {
    general: {
      type: String,
      required: true
    },
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
  computed: {
    ...mapState('product', { productList: state => state.list }),
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
.app-list {
  padding-right: 40px;
}
</style>
