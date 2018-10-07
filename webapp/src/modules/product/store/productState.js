const perPage = localStorage.getItem('productListPerPage')

export default {
  list: {
    total: 0,
    currentPage: 1,
    perPage: perPage ? Number(perPage) : 10,
    filter: {
      general: '',
      type: ''
    },
    items: []
  },
  detail: {
    product: {
      name: ''
    },
    modifiedProduct: {
      name: ''
    }
  }
}
