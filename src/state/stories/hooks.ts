/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useMemo, useState } from 'react'

import { useAppDispatch, useAppSelector } from '@/store/hooks'

// Service
import { useLazyFetchStoryQuery, useLazyFetchTopStoriesQuery } from '@/services/modules/stories'

import { StoryTypes } from './types'
import { storiesActions } from './reducer'

export const PAGE_SIZE = 10

export const useSelectStories = (): StoryTypes[] => {
  return useAppSelector(state => state.stories.stories)
}

export const useFetchStories = (): {
  isLoading: boolean
  data: StoryTypes[]
  hasMore: boolean
  onLoadmore: () => Promise<void>
} => {
  const dispatch = useAppDispatch()
  const stories = useSelectStories()

  const [fetchTopStories, { data: topStoriesData, isFetching: isFetchingTopStories }] = useLazyFetchTopStoriesQuery()
  const [fetchStory] = useLazyFetchStoryQuery()

  const [storyIdList, setStoryIdList] = useState<number[]>([])
  const [page, setPage] = useState<number>(0)
  const [isFetchingStories, setIsFetchingStories] = useState<boolean>(true)

  const hasMore = useMemo((): boolean => page * PAGE_SIZE < storyIdList?.length, [page, storyIdList])

  useEffect((): void => {
    fetchTopStories(null, true)
  }, [])

  useEffect((): void => {
    if (topStoriesData?.length) {
      // take only 100 id
      setStoryIdList(topStoriesData.slice(0, 100))
    }
  }, [topStoriesData])

  /**
   * Once you have 100 ids -> get the story data for the first 10 items
   */
  useEffect((): void => {
    if (storyIdList?.length) {
      handleFetchStory().then(() => setIsFetchingStories(false))
    }
  }, [storyIdList])

  /**
   * handle logic related to getting story data
   */
  const handleFetchStory = useCallback(async (): Promise<void> => {
    try {
      const preparePromises = storyIdList
        .slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE)
        .map((id: number) => fetchStory(id))

      const data = await Promise.all(preparePromises)
      const transformData = data.map(o => o.data)

      dispatch(storiesActions.setStories(transformData as StoryTypes[]))
      setPage(page + 1)
    } catch (error) {
      console.log('error', error)
    }
  }, [page, storyIdList])

  /**
   * handle logic loadmore
   */
  const onLoadmore = useCallback(async (): Promise<void> => {
    await handleFetchStory()
  }, [handleFetchStory])

  return {
    isLoading: isFetchingStories || isFetchingTopStories,
    data: stories,
    hasMore,
    onLoadmore
  }
}
