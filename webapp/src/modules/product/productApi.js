import axios from 'axios'
import qs from 'qs'

export default {
  list ({ page, limit, order, filter }) {
    return axios.get(
      `/products?${qs.stringify({ page, limit, order, filter })}`
    )
  },

  get ({ productId }) {
    return axios.get(`/products/${productId}`)
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
    return axios.put(`/products/${productId}`, {
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
    return axios.post(`/products/`, {
      category,
      subCategory,
      description,
      images,
      price,
      deal
    })
  },

  delete ({ productId }) {
    return axios.delete(`/products/${productId}`)
  }
}
