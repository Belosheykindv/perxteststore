import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = 'https://test-frontend.dev.int.perx.ru/api/goods/'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductItem[], string[] | undefined>({
      query: (dealerIds) => {
        let url = BASE_URL
        if (dealerIds && dealerIds.length > 0) {
          url += `?dealers=${dealerIds.join(',')}`
        }
        return url
      },
    }),
  }),
})
export const { useGetProductsQuery } = productsApi
export default productsApi