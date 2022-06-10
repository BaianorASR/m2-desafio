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
}

export default getters
