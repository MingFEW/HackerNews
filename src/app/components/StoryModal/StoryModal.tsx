import React, { memo, useCallback, useMemo } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'twin.macro'

// States
import { StoryTypes } from '@/state/stories/types'
import { useFetchComments } from '@/state/comments/hooks'
import { CommentTypes } from '@/state/comments/types'

// Components
import { Modal } from '../Modal'
import { SkeletonTheme } from '../Skeleton'
import { Comment } from './Comment'
import { StoryMetadata } from '../StoryCard/StoryMetadata'
import { StoryTitle } from '../StoryCard/StoryTitle'
import { LoadMoreButton } from './LoadMoreButton'

interface StoryModalProps {
  storySelected: StoryTypes
  onClose: () => void
}

export const StoryModal: React.FC<StoryModalProps> = memo(
  props => {
    /**
     * data from props
     */
    const { storySelected, onClose } = props
    const { kids, by, time, title, score, url } = storySelected

    /**
     * hooks get and process the data of comments
     */
    const { isLoading, data: flatCommentData, hasMore, handleFetchComments, onLoadStoryComments } = useFetchComments()

    /**
     * transform from flat comment data to nested comment data
     */
    const getChildrenComments = useCallback(
      (comment?: CommentTypes): CommentTypes[] => {
        if (!comment) {
          const rootComments = flatCommentData.filter(c => !c.path)
          return rootComments.map(m => ({
            ...m,
            children: getChildrenComments(m)
          }))
        }
        const children = flatCommentData.filter(
          c => c.path === (comment.path ? `${comment.path}/${comment.id}` : `${comment.id}`)
        )
        return children.map(m => ({ ...m, children: getChildrenComments(m) }))
      },
      [flatCommentData]
    )
    const nestedCommentData = useMemo(getChildrenComments, [getChildrenComments])

    return (
      <Modal isOpen>
        <Modal.Header title="Story" onClose={onClose} />
        <Modal.Content>
          <div>
            {/* story info */}
            <div>
              <div tw="mb-3">
                <StoryMetadata author={by} time={time} score={score} />
              </div>
              <StoryTitle url={url} title={title} />
            </div>

            {/* count total comments */}
            <div tw="border-y border-slate-700 my-8 py-3 w-full">
              <div tw="text-xs sm:text-sm sm:mb-[3px] text-textSecondary font-semibold transition-all">
                {kids?.length} Comments
              </div>
            </div>

            {/* comment list */}
            <div tw="flex flex-col gap-12 relative pb-10">
              {nestedCommentData.map((comment: CommentTypes) => {
                return <Comment key={comment.id} data={comment} onLoadMoreReplies={handleFetchComments} />
              })}
            </div>

            {/* show loading */}
            {isLoading ? (
              <div tw="flex flex-col gap-6">
                <SkeletonTheme>
                  <Skeleton count={3} />
                  <Skeleton count={3} />
                  <Skeleton count={3} />
                </SkeletonTheme>
              </div>
            ) : null}

            {/* load more button */}
            {hasMore && !isLoading ? (
              <LoadMoreButton
                onClick={async () => {
                  await onLoadStoryComments(kids)
                }}
              />
            ) : null}
          </div>
        </Modal.Content>
      </Modal>
    )
  },
  (prevProps, nextProps) => JSON.stringify(prevProps.storySelected) === JSON.stringify(nextProps.storySelected)
)
