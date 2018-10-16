<template>
  <div class="sidebar-filter">
    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <h6> Encontre o produto dos seus sonhos </h6>
      <div class="name-search">
        <b-input-group>
          <b-input-group-text slot="prepend">
            <font-awesome-icon icon="search" />
          </b-input-group-text>
          <b-form-input
            placeholder="Pesquisar produtos por nome..."
            :value="general"
            type="text"
            class="list-search-input"
            @input.native="(e) => onFilter(e.target.value)"
          />
        </b-input-group>
      </div>
      <div class="category-search">
        <b-button
          v-b-toggle.categoryCollapse
          @click="collapsed = !collapsed"
          class="category-collapse-button"
        >Categorias
        <font-awesome-icon :icon="caret" />
        </b-button>
        <b-collapse visible id="categoryCollapse" class="category-collapse">
          <b-button
            v-for="(item, index) in categories"
            :key="index"
            :value="item"
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
        > Veja nossas ofertas exclusivas!
        </b-button>
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
    caret() {
      return this.collapsed ? 'caret-up' : 'caret-down';
    }
  },
  watch: {},

  methods: {
    onFilter: debounce(function (value) {
      this.$emit('update:filterGeneral', value)
    }, 400),
    toggleSelectCategory (e) {
      let selected = e.target.value;
      if (selected === this.category) selected = ''
      this.$emit('update:filterCategory', selected)
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

    h6 {
      text-align: left;
    }

    .name-search {
      display: flex;
      align-items: center;
      margin-bottom: 15px;

      .input-group {
        .input-group-prepend {
          margin-bottom: 0;

          .input-group-text {
            background-color: #FFF;
            border: 1px solid #ced4da;
            border-right: 0;
          }
        }
      }

      .list-search-input {
        flex-grow: 1;
        border-left: 0;

        &:focus, &:active {
          border: 1px solid #ced4da;
          border-left: 0;
        }
      }
    }

    .category-search {
      flex-grow: 1;
      margin-bottom: 15px;

      .category-collapse-button {
        width: 100%;
        background-color: #B39990;
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

        .category-collapse-options {
          width: 100%;
          background-color: #f2e2dc;
          color: black;
          border: 0;
          border-radius: 0;
          text-align: left;

          &.category-selected {
            background-color: #B39990;
            color: white;
          }
        }
      }
    }

    .deal-filter-button {
      width: 100%;
      background-color: #f2e2dc;
      color: black;
      border: 0;
      border-radius: 5px;
      margin-bottom: 15px;
      text-align: left;
      font-weight: 600;
    }

    .dealSelected {
      background-color: #B39990;
      color: white;
    }
  }
</style>
