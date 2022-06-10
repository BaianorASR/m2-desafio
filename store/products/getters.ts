import { GetterTree } from 'vuex/types/index'

import { RootState } from '..'

const getters: GetterTree<RootState, RootState> = {
  getProducts: (state) => state.products,
}

export default getters
