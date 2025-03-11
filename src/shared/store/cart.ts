import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit'

export interface ResultItem extends ProductItem {
  count: number
}
type InitStateT = {
  items: ResultItem[]
}

const initialState: InitStateT = { items: [] }

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
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    clearCart: (state) => {
      state.items = []
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
