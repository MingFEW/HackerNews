import { api } from '@/services/api'
import fetchStory from './fetchStory'
import fetchTopStories from './fetchTopStories'

export const storyApi = api.injectEndpoints({
  endpoints: build => ({
    fetchTopStories: fetchTopStories(build),
    fetchStory: fetchStory(build)
  }),
  overrideExisting: false
})

export const { useLazyFetchTopStoriesQuery, useLazyFetchStoryQuery } = storyApi
