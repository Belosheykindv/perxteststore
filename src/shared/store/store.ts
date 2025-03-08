import { configureStore } from '@reduxjs/toolkit'
import { productsApi } from '../api/getProducts'
import { dealersIdApi } from '../api/getDealersId'

import cartReducer from './cart'

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [dealersIdApi.reducerPath]: dealersIdApi.reducer,
    cart: cartReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware, dealersIdApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
