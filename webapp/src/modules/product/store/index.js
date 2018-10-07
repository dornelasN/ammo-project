import mutations from './productMutations'
import actions from './productActions'
import state from './productState'
import getters from './productGetters'

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
