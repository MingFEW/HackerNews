import React, { memo } from 'react'
import Skeleton from 'react-loading-skeleton'
import tw from 'twin.macro'

import { StoryTypes } from '@/state/stories/types'

// Components
import { StoryMetadata } from './StoryMetadata'
import { StoryTitle } from './StoryTitle'
import { CommentButton } from './CommentButton'
import { Tag } from '../Tag'
import { SkeletonTheme } from '../Skeleton'

interface StoryCardProps {
  loading?: boolean
  data?: StoryTypes
  onCommentClick?: (story: StoryTypes) => void
}

export const StoryCard: React.FC<StoryCardProps> = memo(props => {
  const { loading, data, onCommentClick } = props
  const { title, by, type, url, score, kids, time } = (data as StoryTypes) || {}

  return (
    <div
      css={[tw`bg-card/40 backdrop-blur rounded-2xl`, tw`transition-all border border-border hover:border-slate-600`]}
    >
      <div tw="flex-1 flex flex-col gap-3 p-6 relative">
        {loading ? (
          <SkeletonTheme>
            <Skeleton width="100%" />
            <Skeleton width="70%" />
            <Skeleton width="50%" />
            <Skeleton width="30%" />
          </SkeletonTheme>
        ) : (
          <>
            <StoryMetadata author={by} time={time} score={score} />
            <div tw="flex mb-6">
              <Tag tw="mr-3" title={type} />
              <StoryTitle url={url} title={title} />
            </div>
            <CommentButton
              count={`${kids?.length || 0}`}
              onClick={() => onCommentClick && onCommentClick(data as StoryTypes)}
            />
          </>
        )}
      </div>
    </div>
  )
})
