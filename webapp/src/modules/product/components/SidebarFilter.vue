<template>
  <div class="sidebar-filter">
    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <h4> Pesquisa </h4>
      <div class="name-search">
        <font-awesome-icon icon="search" />
        <input
          placeholder="Pesquisar produtos..."
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
        <b-btn
          v-b-toggle.categoryCollapse
          class="category-collapse-button"
        >Categorias
        </b-btn>
        <b-collapse id="categoryCollapse" class="category-collapse">
          <b-btn
            v-for="(category, index) in categories"
            :key="index"
            :value="category"
            :pressed="false"
            :class="{categorySelected: checkCategorySelected(category)}"
            class="category-collapse-options"
            @click="toggleSelectCategory"
          >{{ categoryText(category) }}
          </b-btn>
        </b-collapse>
      </div>
      <div class="deal-search">
        <b-btn
          class="deal-filter-button"
          :class="{dealSelected: deal}"
          @click="toggleDealFilter"
        > Promoções
        </b-btn>
      </div>
    </div>
  </div>
</template>

<script>
import debounce from 'lodash/debounce'
import { productFilters } from '@/modules/common/filters'

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
  computed: {},
  watch: {},

  methods: {
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
      else this.$emit('update:filterDeal', false)
    }
  }
}
</script>

<style lang="stylus" scoped>
.sidebar-filter {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  div {
    margin-bottom: 15px;
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
      background-color: #d6f5f5;
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

      .categorySelected {
        background-color: #2cbaba;
      }

      .category-collapse-options {
        width: 100%;
        background-color: #eafafa;
        color: black;
        border: 0;
        border-radius: 0;
        border-left: 2px solid black;
      }
    }
  }

  .deal-filter-button {
    width: 100%;
    background-color: #d6f5f5;
    color: black;
    border: 0;
    border-radius: 0;
  }

  .dealSelected {
    background-color: #2cbaba;
  }
}
</style>
