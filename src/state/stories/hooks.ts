/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useMemo, useState } from 'react'

import { useAppDispatch, useAppSelector } from '@/store/hooks'

// Service
import { useLazyFetchStoryQuery, useLazyFetchTopStoriesQuery } from '@/services/modules/stories'

import { StoryTypes } from './types'
import { storiesActions } from './reducer'

export const useSelectStories = (): StoryTypes[] => {
  return useAppSelector(state => state.stories.stories)
}

export const useSelectStorySelected = (): StoryTypes | null => {
  return useAppSelector(state => state.stories.storySelected)
}

export const useStorySelected = (): {
  storySelected: StoryTypes | null
  setStorySelected: (story: StoryTypes | null) => void
} => {
  const dispatch = useAppDispatch()
  const storySelected = useSelectStorySelected()

  const setStorySelected = useCallback((story: StoryTypes | null): void => {
    dispatch(storiesActions.setStorySelected(story))
  }, [])

  return {
    storySelected,
    setStorySelected
  }
}

export const PAGE_SIZE = 10
export const useFetchStories = (): {
  isLoading: boolean
  hasMore: boolean
  data: StoryTypes[]
  error: unknown
  onLoadmore: () => Promise<void>
} => {
  /**
   * hooks from redux
   */
  const dispatch = useAppDispatch()
  const stories = useSelectStories()

  /**
   * hooks get data from api
   */
  const [fetchTopStories, { data: topStoriesData, isFetching: isFetchingTopStories, error: fetchTopStoriesError }] =
    useLazyFetchTopStoriesQuery()
  const [fetchStory] = useLazyFetchStoryQuery()

  /**
   * state management
   */
  const [storyIdList, setStoryIdList] = useState<number[]>([])
  const [page, setPage] = useState<number>(0)
  const [isFetchingStories, setIsFetchingStories] = useState<boolean>(true)
  const [fetchStoriesError, setFetchStoriesError] = useState<unknown>(null)

  /**
   * hooks handle the check, calculate...
   */
  const hasMore = useMemo((): boolean => page * PAGE_SIZE < storyIdList?.length, [page, storyIdList])

  useEffect((): void => {
    fetchTopStories(null, true)
  }, [])

  useEffect((): void => {
    if (topStoriesData?.length) {
      // take only 100 ids
      setStoryIdList(topStoriesData.slice(0, 100))
    }
  }, [topStoriesData])

  /**
   * Once you have 100 ids -> get the story data for the first 10 items
   */
  useEffect((): void => {
    if (storyIdList?.length) {
      handleFetchStories().then(() => setIsFetchingStories(false))
    }
  }, [storyIdList])

  /**
   * handle logic related to getting stories data
   */
  const handleFetchStories = useCallback(async (): Promise<void> => {
    try {
      const preparePromises = storyIdList
        .slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE)
        .map((id: number) => fetchStory(id))

      const data = await Promise.all(preparePromises)
      const transformData = data.map(o => o.data)

      dispatch(storiesActions.setStories(transformData as StoryTypes[]))
      setPage(page + 1)
    } catch (error) {
      setFetchStoriesError(error)
    }
  }, [page, storyIdList])

  /**
   * handle logic loadmore
   */
  const onLoadmore = useCallback(async (): Promise<void> => {
    await handleFetchStories()
  }, [handleFetchStories])

  return {
    isLoading: isFetchingStories || isFetchingTopStories,
    hasMore,
    data: stories,
    error: fetchStoriesError || fetchTopStoriesError,
    onLoadmore
  }
}
