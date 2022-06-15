import { MutationTree } from 'vuex/types/index'

import { CartState, ICartProduct } from '.'

const mutations: MutationTree<CartState> = {
  ADD_ITEM(state, payload: ICartProduct) {
    const ProductAlreadyExists = state.items.find(
      ({ category }) => category === payload.category
    )

    if (ProductAlreadyExists) {
      state.items = state.items.map((item) => {
        if (item.category === payload.category) {
          return payload
        }
        return item
      })
      return
    }

    state.items = [...state.items, payload]
  },

  REMOVE_ITEM(state, payload: string) {
    state.items = state.items.filter((item) => item.id !== payload)
  },
}

export default mutations
