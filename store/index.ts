import { CartState } from './cart'
import { ProductsState } from './products'

export interface RootState {
  cart: CartState
  products: ProductsState
}
