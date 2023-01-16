import React, { memo } from 'react'
import { BiComment } from 'react-icons/bi'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import tw, { css } from 'twin.macro'
import moment from 'moment'

// Comps
import Star from './Star'
import Title from './Title'
// Types
import { StoryTypes } from '@/state/stories/types'

interface StoryCardProps {
  loading?: boolean
  data: StoryTypes | null
}

/**
 * Styles
 */
const commentStyles = css`
  &:hover {
    .comment__icon,
    .comment_count {
      ${tw`text-white`}
    }
  }
`

const StoryCard: React.FC<StoryCardProps> = memo(props => {
  const { loading, data } = props
  const { title, by, type, url, score, kids, time } = data || {}
  const formatTime = moment((time as number) * 1000).fromNow()

  return (
    <div tw="bg-card/40 backdrop-blur rounded-2xl border border-border transition-all hover:border-slate-600">
      <div tw="flex-1 flex flex-col gap-3 p-6 relative">
        {loading ? (
          <SkeletonTheme baseColor="var(--color-skeleton-base)" highlightColor="var(--color-skeleton-highlight)">
            <Skeleton width="100%" />
            <Skeleton width="70%" />
            <Skeleton width="50%" />
            <Skeleton width="30%" />
          </SkeletonTheme>
        ) : (
          <>
            <div tw="flex items-center justify-between">
              {/* Author & date */}
              <div tw="text-xs text-textGrey">
                Posted by {by} • {formatTime}
              </div>
              <Star score={score} />
            </div>

            <Title type={type} title={title} url={url} />

            {/* Comments */}
            <div css={[tw`flex items-center cursor-pointer w-fit`, commentStyles]}>
              <BiComment className="comment__icon" tw="text-textSecondary mr-3 transition-all" size={24} />
              <div className="comment_count" tw="text-sm text-textSecondary font-semibold mb-[3px] transition-all">
                {kids?.length || 0} Comments
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
})

export default StoryCard
