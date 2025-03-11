import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit'

export interface ResultItem extends ProductItem {
  count: number
}
type InitStateT = {
  items: ResultItem[]
}
const storedCartItems: ResultItem[] = (() => {
  const storedData = sessionStorage.getItem('cartData')

  if (storedData) {
    try {
      return JSON.parse(storedData) as ResultItem[]
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
    addItem: (state, action: PayloadAction<ResultItem>) => {
      const existingItem = state.items.find(
        (item) => item.name === action.payload.name,
      )
      if (existingItem) {
        existingItem.count += 1
      } else {
        state.items.push({ ...action.payload, count: 1 })
      }
      sessionStorage.setItem('cartData', JSON.stringify(state.items))
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
      sessionStorage.setItem('cartData', JSON.stringify(state.items))
    },
    clearCart: (state) => {
      state.items = []
      sessionStorage.removeItem('cartData')
    },
    incCount: (state, action: PayloadAction<string>) => {
      const activeItem = state.items.find(
        (item) => item.name === action.payload,
      )
      if (activeItem) {
        activeItem.count += 1
      }
    },
    decCount: (state, action: PayloadAction<string>) => {
      const activeItem = state.items.find(
        (item) => item.name === action.payload,
      )
      if (activeItem && activeItem.count > 0) {
        activeItem.count -= 1
      }
    },
  },
})

export const { addItem, removeItem, clearCart, incCount, decCount } =
  cartSlice.actions

export default cartSlice.reducer
