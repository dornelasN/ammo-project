<template>
  <div class="block-product">
    <div class="product-images">
      <block-product-images :images="product.images"/>
    </div>
    <div class="product-info">
      <div class="title">
        <span class="product-name"><strong>{{ product.name }}</strong></span>
      </div>
      <span class="product-category"><strong>Categoria: </strong>{{ productCategory }} | {{ product.subCategory }}</span>
      <span class="product-description">{{ product.description }}</span>
    </div>
    <div class="product-price">
      <block-product-price :isDeal="product.deal" :price="product.price"/>
    </div>
  </div>
</template>

<script>
import { productFilters } from '@/modules/common/filters'
import BlockProductImages from './BlockProductImages'
import BlockProductPrice from './BlockProductPrice'

export default {
  components: { BlockProductImages, BlockProductPrice },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  },
  computed: {
    productCategory () {
      return productFilters.category(this.product.category).text
    }
  },
  watch: {},

  methods: {}
}
</script>

<style lang="stylus" scoped>
.block-product {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 15px;
  background-color: #f2e2dc;
  border-radius: 5px;

  // box shadow
  -webkit-box-shadow: 0 5px 6px -4px black;
    -moz-box-shadow: 0 5px 6px -4px black;
        box-shadow: 0 5px 6px -4px black;

  .product-images {
    max-width: 220px;
    flex-grow: 0;
    flex-shrink: 00;
  }

  .product-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-size: 1.1em;
    flex-grow: 1;
    flex-shrink: 1;

    .product-name {
      font-size: 1.4em;
    }
  }
}
</style>
