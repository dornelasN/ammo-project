<template>
  <div class="app-list">
    <div class="row list-title">
      <h2><strong> {{ listTitle }}</strong><small> ({{ total }})</small></h2>

      <div class="list-sort-by">
        <span><strong> Ordenar por: </strong></span><br>
        <span class="clickable" :class="{'sort-by-selected': sortBy === 'name' }" @click="orderBy('name')"> nome </span> - 
        <span class="clickable" :class="{'sort-by-selected': sortBy === 'category' }" @click="orderBy('category')"> categoria </span> -
        <span class="clickable" :class="{'sort-by-selected': sortBy === 'price' }" @click="orderBy('finalPrice')"> preço </span>
      </div>
    </div>

    <div class="row selected-filters">
      <div 
        class="filter-badges"
        v-for="(filter, index) in selectedFilters"
        :key="index"
      >
        <h5> <b-badge class="badge">{{ filter }}</b-badge></h5>
      </div>
    </div>

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
import { productFilters } from '@/modules/common/filters'
 
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
    },
  },
  data () {
    return {}
  },
  computed: {
    ...mapState('product', { 
      productList: state => state.list,
      sortBy: state => state.list.sortBy
    }),
    listTitle () {
      if (this.general) return this.general
      return 'Lista de Produtos'
    },
    selectedFilters () {
      let filterBadges = [];
      const filters = Object.entries(this.productList.filter);
      const selectedFilters = filters.filter(item => item[0] !== 'general' && item[1]);
      
      filterBadges = selectedFilters.map(item => {
        if (item[0] === 'category') {
          if (item[1])
            return productFilters.category(item[1]).text;
        } else {
          if (item[1]) 
            return 'Promoções';
        }
      });

      return filterBadges;
    },
  },
  watch: {},

  methods: {
    orderBy (value) {
      this.$emit('update:sortBy', value);
    },
  }
}
</script>

<style lang="stylus" scoped>
.app-list {
  padding-right: 15px;
  margin-top: 0;

  .list-title {
    display: flex;
    justify-content: space-between;
    font-size: 1.5em;
    text-align: left;

    small {
      font-size: 70%;
    }
    
    .list-sort-by {
      font-size: 70%;
      text-align: right;
      align-self: center;

      .clickable {
        cursor: pointer;
      }

      .sort-by-selected {
        font-weight: bold;
      }
    }
  }

  

  .selected-filters {
    min-height: 35px;
    padding-left: 15px;
    margin-bottom: 10px;

    .filter-badges {
      margin-right: 10px;
      
      .badge {
        width: 110px;
        color: white;
        background-color: #E23121;
        -webkit-box-shadow: 0 5px 6px -4px rgba(0, 0, 0, 0.5);
          -moz-box-shadow: 0 5px 6px -4px rgba(0, 0, 0, 0.5);
              box-shadow: 0 5px 6px -4px rgba(0, 0, 0, 0.5);
      }
    }
  }
}
</style>
