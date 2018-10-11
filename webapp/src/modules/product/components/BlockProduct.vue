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
      <span class="product-description">Detalhes: {{ product.description }}</span>
    </div>
    <div class="product-price">
      {{ product.price}}
    </div>
  </div>
</template>

<script>
import { productFilters } from '@/modules/common/filters'
import BlockProductImages from './BlockProductImages'

export default {
  components: { BlockProductImages },
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

  .product-images {
    width: 230px;
    margin-right: 10px;
  }

  .product-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-size: 1.1em;

    .product-name {
      font-size: 1.5em;
    }
  }
}
</style>
