import { MutationTree } from 'vuex/types/index'

import { ProductsState } from '.'

const mutations: MutationTree<ProductsState> = {
  SET_PRODUCTS(state, products) {
    state.products = products
  },
}

export default mutations
