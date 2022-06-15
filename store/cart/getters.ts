import { GetterTree } from 'vuex/types/index'

import { CartState } from '.'

const getters: GetterTree<CartState, CartState> = {
  getTotalPriceOfCart: (state) => {
    return state.items
      .reduce((acc, item) => {
        return acc + item.price / 100
      }, 0)
      .toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      })
  },

  getTotalItemsOfCart: (state) => {
    return state.items.length
  },

  getInternetPlanAlreadySelected: (state) => {
    return state.items.some((item) => item.category === 'internet')
  },

  getProductsOfCart: (state) => {
    return state.items
  },
}

export default getters
