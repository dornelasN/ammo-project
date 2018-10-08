import Api from '@/services/Api'
// import qs from 'qs'

export default {
  list ({ page, limit, order, filter }) {
    return Api().get(
      `/products`, { page, limit, order, filter }
    )
  },

  get ({ productId }) {
    return Api().get(`/products/${productId}`)
  },

  update ({
    productId,
    status,
    category,
    subCategory,
    description,
    images,
    price,
    deal
  }) {
    return Api().put(`/products/${productId}`, {
      status,
      category,
      subCategory,
      description,
      images,
      price,
      deal
    })
  },

  create ({ category, subCategory, description, images, price, deal }) {
    return Api().post(`/products/`, {
      category,
      subCategory,
      description,
      images,
      price,
      deal
    })
  },

  delete ({ productId }) {
    return Api().delete(`/products/${productId}`)
  }
}
