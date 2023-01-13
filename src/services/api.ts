import { useInjectReducer } from 'redux-injectors'
import { BaseQueryFn, FetchArgs, createApi, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react'
import { ApiConfig } from '@/constants/ApiConfig'

const baseQuery = fetchBaseQuery({ baseUrl: ApiConfig.API_URL })

const baseQueryWithInterceptor: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  const result = await baseQuery(args, api, extraOptions)
  if (result.error && result.error.status === 401) {
    // TODO
  }
  return result
}

export const api = createApi({
  baseQuery: baseQueryWithInterceptor,
  endpoints: () => ({})
})

export const useApiSlice = () => {
  useInjectReducer({ key: api.reducerPath, reducer: api.reducer })
}
