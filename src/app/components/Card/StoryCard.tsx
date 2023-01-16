import React, { memo } from 'react'
import { BiComment } from 'react-icons/bi'
import { BsFillStarFill } from 'react-icons/bs'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import tw, { css } from 'twin.macro'
import moment from 'moment'

// Types
import { StoryTypes } from '@/state/stories/types'

// Utils
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter'

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

export const StoryCard: React.FC<StoryCardProps> = memo(props => {
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
            {/* Author & date */}
            <div tw="flex items-center justify-between">
              <div tw="text-xs text-textGrey">
                Posted by {by} • {formatTime}
              </div>
              <div tw="flex items-center">
                <BsFillStarFill color="gold" tw="mr-[6px]" />
                <div tw="text-white font-semibold text-sm mt-[2px]">{score}</div>
              </div>
            </div>

            {/* Title */}
            <div tw="sm:flex mb-6">
              <div
                css={[
                  tw`w-fit flex items-center justify-center rounded-2xl h-5 sm:h-8 px-3 mb-1 sm:mr-3 sm:mb-0`,
                  tw`bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500`
                ]}
              >
                <div tw="text-white text-xs sm:text-sm font-bold mb-[2px]">{capitalizeFirstLetter(type as string)}</div>
              </div>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                tw="text-white text-base sm:text-xl font-bold cursor-pointer hover:opacity-80 hover:no-underline"
              >
                {capitalizeFirstLetter(title as string)}
              </a>
            </div>

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
