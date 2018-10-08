<template>
  <div class="product-list">
    <Header />
    <div class="row">
      <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-3">
        <sidebar-filter
          :general="filterGeneral"
          :category="filterCategory"
          :deal="filterDeal"
          @update:filterGeneral="(val) => filterGeneral = val"
          @update:filterCategory="(val) => filterCategory = val"
          @update:filterDeal="(val) => filterDeal = val"
        />
      </div>
      <div class="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-9">
        <app-list
          :general="filterGeneral"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/modules/common/components/Header'
import AppList from '@/modules/common/components/AppList'
import SidebarFilter from '@/modules/product/components/SidebarFilter'
import get from 'lodash/get'

function generateFilter (propName) {
  return {
    get () {
      return get(this.$store.state, `product.list.filter.${propName}`)
    },
    set (value) {
      this.$store.dispatch('product/updateListFilter', { [propName]: value })
    }
  }
}
export default {
  components: { Header, SidebarFilter, AppList },
  props: {},
  data () {
    return {}
  },
  computed: {
    filterGeneral: (() => generateFilter('general'))(),
    filterCategory: (() => generateFilter('category'))(),
    filterDeal: (() => generateFilter('deal'))()
  },
  watch: {},
  async created () {
    await this.$store.dispatch('product/resetList')

    await this.$store.dispatch('product/getList')
  },
  methods: {}
}
</script>

<style lang="stylus" scoped>
.product-list {
  height: 100px;
}
</style>
