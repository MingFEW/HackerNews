import { api } from '@/services/api'
import fetchComment from './fetchComment'

export const storyApi = api.injectEndpoints({
  endpoints: build => ({
    fetchComment: fetchComment(build)
  }),
  overrideExisting: false
})

export const { useLazyFetchCommentQuery } = storyApi
