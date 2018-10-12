// import Vue from 'vue'
// import cloneDeep from 'lodash/cloneDeep'

export default {
  setListData(state, { value }) {
    state.list = {
      ...state.list,
      ...value
    };
    localStorage.setItem("productListPerPage", state.list.perPage);
  },

  setListFilter(state, { value }) {
    state.list.filter = {
      ...state.list.filter,
      ...value
    };
  },
  resetList(state) {
    const perPage = localStorage.getItem("productListPerPage");

    state.list = {
      total: 0,
      currentPage: 1,
      sortBy: "name",
      perPage: perPage ? Number(perPage) : 10,
      filter: {
        general: "",
        category: "",
        deal: undefined
      },
      items: []
    };
  },

  clearDetail(state) {
    state.detail = {
      product: {
        name: "",
        category: "",
        subCategory: "",
        description: "",
        images: [],
        price: 0,
        deal: false
      },
      modifiedProduct: {
        name: "",
        category: "",
        subCategory: "",
        description: "",
        images: [],
        price: 0,
        deal: false
      }
    };
  }
};
