import productApi from '@/modules/product/productApi'

export default {
  updateListData ({ commit }, value) {
    commit({ type: 'setListData', value })
  },

  updateListFilter ({ commit }, value) {
    commit({ type: 'setListFilter', value })
  },

  resetList ({ commit }) {
    commit('resetList')
  },

  clearDetail ({ commit }) {
    commit('clearDetail')
  },

  async getList ({ commit, state }) {
    try {
      const filter = { ...state.list.filter }
      const order = state.list.sortBy || 'name';
      Object.keys(filter).forEach(key => {
        if (filter[key] === undefined) return
        if (filter[key] === '' || filter[key] === null) delete filter[key]
      })
      const list = await productApi.list({
        page: state.list.currentPage,
        limit: state.list.perPage,
        order,
        filter
      })
      commit({
        type: 'setListData',
        value: { items: list.items, total: list.total }
      })
    } catch (error) {
      throw error
    }
  }
}
