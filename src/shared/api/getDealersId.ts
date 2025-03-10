import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { DEALERS_URL, BASE_URL } from '../constants/settings'

export const dealersIdApi = createApi({
  reducerPath: 'productsIdApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL + DEALERS_URL }),
  endpoints: (builder) => ({
    getDealers: builder.query<string[], void>({
      query: () => '',
    }),
  }),
})
export const { useGetDealersQuery } = dealersIdApi
export default dealersIdApi