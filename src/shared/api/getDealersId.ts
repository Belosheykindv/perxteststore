import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const DEALERS_URL = 'https://test-frontend.dev.int.perx.ru/api/dealers/'

export const dealersIdApi = createApi({
  reducerPath: 'productsIdApi',
  baseQuery: fetchBaseQuery({ baseUrl: DEALERS_URL }),
  endpoints: (builder) => ({
    getDealers: builder.query<string[], void>({
      query: () => '',
    }),
  }),
})
export const { useGetDealersQuery } = dealersIdApi
export default dealersIdApi