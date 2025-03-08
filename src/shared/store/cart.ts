import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit'

type InitStateT = {
  items: ProductItem[]
}
const storedCartItems: ProductItem[] = (() => {
  const storedData = sessionStorage.getItem('cartData')

  if (storedData) {
    try {
      return JSON.parse(storedData) as ProductItem[]
    } catch (error) {
      console.error('Error parsing dealersData from sessionStorage:', error)
      return []
    }
  }
  return []
})()

const initialState: InitStateT =
  storedCartItems.length > 0
    ? {
        items: storedCartItems,
      }
    : { items: [] }

export const cartSlice: Slice<InitStateT> = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ProductItem>) => {
      state.items.push(action.payload)
    },
    removeItem: (state, action: PayloadAction<Pick<ProductItem, 'name'>>) => {
      state.items = state.items.filter(
        (item) => item.name !== action.payload.name,
      )
    },
    clearCart: (state) => {
      state.items = []
      sessionStorage.removeItem('cartData');
    },
  },
})

export const { addItem, removeItem, clearCart } = cartSlice.actions

export default cartSlice.reducer
