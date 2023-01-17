/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useLazyFetchCommentQuery } from '@/services/modules/comments'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { CommentTypes } from './types'
import { commentsActions } from './reducer'
import { useStorySelected } from '../stories/hooks'
import { getCommentPath } from '@/utils/getCommentPath'

export const useSelectComments = (): CommentTypes[] => {
  return useAppSelector(state => state.comments.comments)
}

export const useSelectFetchingCommentId = (): number | null => {
  return useAppSelector(state => state.comments.fetchingCommentId)
}

export const useResetComments = (): {
  resetComments: () => void
} => {
  const dispatch = useAppDispatch()

  const resetComments = useCallback((): void => {
    dispatch(commentsActions.setComments([]))
  }, [])

  return { resetComments }
}

const PAGE_SIZE = 3
export const useFetchComments = (): {
  isLoading: boolean
  hasMore: boolean
  data: CommentTypes[]
  error: unknown
  handleFetchComments: (commentIds: number[], parentComment?: CommentTypes) => Promise<void>
  onLoadStoryComments: (commentIds: number[]) => Promise<void>
} => {
  /**
   * hooks from redux
   */
  const dispatch = useAppDispatch()
  const comments = useSelectComments()
  const { storySelected } = useStorySelected()

  /**
   * hooks get data from api
   */
  const [fetchComment] = useLazyFetchCommentQuery()

  /**
   * state management
   */
  const [page, setPage] = useState<number>(0)
  const [isFetchingComments, setIsFetchingComments] = useState<boolean>(true)
  const [fetchCommentsError, setFetchCommentsError] = useState<unknown>(null)

  /**
   * calculate can load more
   */
  const hasMore = useMemo(
    (): boolean => page * PAGE_SIZE < (storySelected?.kids?.length as number),
    [page, storySelected]
  )

  /**
   * get the comment data for the first 2 items
   */
  useEffect((): void => {
    if (storySelected) {
      handleFetchComments(storySelected?.kids).then(() => setIsFetchingComments(false))
    }
  }, [storySelected])

  /**
   * handle logic related to getting comments data
   */
  const handleFetchComments = useCallback(
    async (commentIds: number[], parentComment?: CommentTypes): Promise<void> => {
      try {
        // Used for displaying loading when viewing more replies
        if (parentComment) dispatch(commentsActions.setFetchingCommentId(parentComment.id))

        // Handle how many comments can be loaded at a time
        const skip = parentComment ? parentComment.childLoaded : page * PAGE_SIZE
        const limit = skip + PAGE_SIZE

        const preparePromises = commentIds.slice(skip, limit).map((id: number) => fetchComment(id))

        const data = await Promise.all(preparePromises)

        const transformData = data.map(item => ({
          ...item.data,
          path: getCommentPath(item.data as CommentTypes, parentComment as CommentTypes),
          childLoaded: 0
        }))

        const cloneComments: CommentTypes[] = [...comments]
        const findParentIndex = cloneComments.findIndex(c => c.id === parentComment?.id)

        if (findParentIndex > -1) {
          cloneComments[findParentIndex] = {
            ...cloneComments[findParentIndex],
            childLoaded:
              limit > (parentComment?.kids?.length as number) ? (parentComment?.kids?.length as number) : limit
          }
        }

        dispatch(commentsActions.setComments([...cloneComments, ...(transformData as CommentTypes[])]))
        if (parentComment) dispatch(commentsActions.setFetchingCommentId(null))
        if (!parentComment) setPage(page + 1)
      } catch (error) {
        setFetchCommentsError(error)
      }
    },
    [comments, page, storySelected]
  )

  const onLoadStoryComments = useCallback(
    async (commentIds: number[]): Promise<void> => {
      setIsFetchingComments(true)
      await handleFetchComments(commentIds)
      setIsFetchingComments(false)
    },
    [handleFetchComments]
  )

  return {
    isLoading: isFetchingComments,
    hasMore,
    data: comments,
    error: fetchCommentsError,
    handleFetchComments,
    onLoadStoryComments
  }
}
