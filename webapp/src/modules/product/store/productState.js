const perPage = localStorage.getItem('productListPerPage')

export default {
  list: {
    total: 0,
    currentPage: 1,
    perPage: perPage ? Number(perPage) : 10,
    filter: {
      general: '',
      category: '',
      subCategory: '',
      deal: undefined
    },
    items: []
  },
  detail: {
    product: {
      name: '',
      category: '',
      subCategory: '',
      description: '',
      images: [],
      price: 0,
      deal: false
    },
    modifiedProduct: {
      name: '',
      category: '',
      subCategory: '',
      description: '',
      images: [],
      price: 0,
      deal: false
    }
  }
}
