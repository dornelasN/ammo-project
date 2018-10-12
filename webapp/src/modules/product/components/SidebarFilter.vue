<template>
  <div class="sidebar-filter">
    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <h4> Pesquisa </h4>
      <div class="name-search">
        <font-awesome-icon icon="search" />
        <input
          placeholder="Pesquisar produtos por nome..."
          :value="general"
          type="text"
          class="list-search-input"
          @input="onFilter"
        />
        <!-- <font-awesome-icon
          v-if="general"
          icon="timesCircle"
          @click="$emit('update:filterGeneral', '')"
        /> -->
      </div>
      <div class="category-search">
        <b-button
          v-b-toggle.categoryCollapse
          class="category-collapse-button"
        >Categorias
        </b-button>
        <b-collapse visible id="categoryCollapse" class="category-collapse">
          <b-button
            v-for="(item, index) in categories"
            :key="index"
            :value="item"
            :pressed="false"
            :class="{'category-selected': item === category}"
            class="category-collapse-options"
            @click="toggleSelectCategory"
          >{{ categoryText(item) }}
          </b-button>
        </b-collapse>
      </div>
      <div class="deal-search">
        <b-button
          class="deal-filter-button"
          :class="{'dealSelected': deal}"
          @click="toggleDealFilter"
        > Promoções
        </b-button>
      </div>
      <div class="list-sort-by">
        <span> Ordenar por: </span>
        <span class="clickable" :class="{'sort-by-selected': sortBy === 'name' }" @click="orderBy('name')"> nome </span> - 
        <span class="clickable" :class="{'sort-by-selected': sortBy === 'category' }" @click="orderBy('category')"> categoria </span> -
        <span class="clickable" :class="{'sort-by-selected': sortBy === 'price' }" @click="orderBy('price')"> preço original </span>
      </div>
    </div>
  </div>
</template>

<script>
import debounce from 'lodash/debounce'
import { productFilters } from '@/modules/common/filters'
import { mapState } from 'vuex'

export default {
  components: {},
  props: {
    general: {
      type: String,
      required: true
    },
    category: {
      type: String,
      default: undefined
    },
    deal: {
      type: Boolean,
      default: undefined
    }
  },
  data () {
    return {
      collapsed: true,
      categories: [
        'BED',
        'BATH',
        'DECORATION',
        'KIDS',
        'BABY',
        'SCENT',
        'KITCHEN',
        'OTHER'
      ]
    }
  },
  computed: {
    ...mapState('product', { sortBy: state => state.list.sortBy })
  },
  watch: {},

  methods: {
    orderBy (value) {
      this.$emit('update:sortBy', value);
    },
    onFilter: debounce(function (e) {
      this.$emit('update:filterGeneral', e.target.value)
    }, 400),
    toggleSelectCategory (e) {
      this.$emit('update:filterCategory', e.target.value)
    },
    checkCategorySelected (category) {
      if (this.category === category) return true
      return false
    },
    categoryText (category) {
      if (category) return productFilters.category(category).text
      else return ''
    },
    toggleDealFilter () {
      if (!this.deal) this.$emit('update:filterDeal', true)
      else this.$emit('update:filterDeal', undefined)
    }
  }
}
</script>

<style lang="stylus" scoped>
.sidebar-filter {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;

  div {
    margin-bottom: 15px;
  }

  .clickable {
    cursor: pointer;
  }

  .sort-by-selected {
    font-weight: bold;
  }

  .name-search {
    display: flex;
    align-items: center;

    .list-search-input {
      margin-left: 5px;
      flex-grow: 1
    }
  }

  .category-search {
    flex-grow: 1;
    .category-collapse-button {
      width: 100%;
      background-color: #e0b9aa;
      color: black;
      border: 0;
      border-radius: 0;
    }

    .category-collapse {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      flex-grow: 1;
      width: 100%;
      border: 0;

      .category-selected {
        background-color: #e0b9aa;
      }

      .category-collapse-options {
        width: 100%;
        background-color: #f2e2dc;
        color: black;
        border: 0;
        border-radius: 0;
      }
    }
  }

  .deal-filter-button {
    width: 100%;
    background-color: #f2e2dc
    color: black;
    border: 0;
    border-radius: 5px;
  }

  .dealSelected {
    background-color: #e0b9aa;
  }
}
</style>
