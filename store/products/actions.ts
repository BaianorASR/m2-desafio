import { ActionTree } from 'vuex/types/index'

import { RootState } from '..'

const actions: ActionTree<RootState, RootState> = {
  async fetchProducts({ commit }) {
    const { data } = await this.$axios.get('http://localhost:5000/plans')
    // console.log(data)
    commit('SET_PRODUCTS', data)
  },
}

export default actions
