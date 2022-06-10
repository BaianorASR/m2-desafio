import { ActionTree } from 'vuex/types/index'

import { ProductsState } from '../products'

const actions: ActionTree<ProductsState, ProductsState> = {
  addItemToCart(context, selectedProduct) {
    context.commit('ADD_ITEM', selectedProduct)
  },
}

export default actions
