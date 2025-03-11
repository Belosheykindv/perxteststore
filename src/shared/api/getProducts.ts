import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { v1 as uuidv1 } from 'uuid'

import { PRODUCTS_URL } from 'shared/constants/settings'


export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: PRODUCTS_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductItem[], string[] | undefined>({
      query: (dealerIds) => {
        let url = PRODUCTS_URL
        if (dealerIds && dealerIds.length > 0) {
          url += `?dealers=${dealerIds.join(',')}`
        }
        return url
      },
      transformResponse: (response: ProductItem[]) => {
        return response.map((item) => ({ ...item, id: uuidv1() }))
      },
    }),
  }),
})

export const { useGetProductsQuery } = productsApi
export default productsApi
