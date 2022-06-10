export interface ICartProduct {
  id: string
  name: string
  price: number
  category: string
}

export const state = () => ({
  totalAmount: 99,
  items: [] as ICartProduct[],
})

export type CartState = ReturnType<typeof state>
