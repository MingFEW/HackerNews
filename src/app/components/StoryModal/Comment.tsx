import React from 'react'
import tw, { css } from 'twin.macro'
import { useTranslation } from 'react-i18next'

import { CommentTypes } from '@/state/comments/types'
import { useSelectFetchingCommentId } from '@/state/comments/hooks'

import { formatTime } from '@/utils/formatTime'

import { messages } from './messages'

interface CommentProps {
  data: CommentTypes
  onLoadMoreReplies?: (replyIds: number[], parentComment: CommentTypes) => Promise<void>
}

/**
 * Styles
 */
const depthStyles = css`
  margin-left: 40px;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0px;
  }
`

export const Comment: React.FC<CommentProps> = props => {
  const { t } = useTranslation()
  const fetchingCommentId = useSelectFetchingCommentId()

  const { data, onLoadMoreReplies } = props
  const { id, by, path, text, deleted, time, kids, childLoaded, children } = data
  const totalMoreReplies = kids?.length - childLoaded
  const depth = path ? path.split('/').length : 0

  return (
    <div
      css={[
        tw`flex flex-col gap-3.5 relative`,
        depth > 0 && depthStyles,
        totalMoreReplies && tw`pb-10`,
        depth === 0 && tw`pb-10`
      ]}
    >
      {/* Comment info */}
      <div tw="flex items-start gap-3">
        <div tw="w-8 h-8 rounded-full bg-slate-700 z-10" />
        <div tw="flex-1 overflow-hidden">
          <div tw="text-white font-semibold text-sm mb-1">
            {deleted ? 'Deleted' : `${by}`}
            <span tw="text-xs font-normal text-textGrey">{` • ${formatTime(time)}`}</span>
          </div>
          <div
            tw="text-textSecondary text-sm break-all"
            dangerouslySetInnerHTML={{ __html: deleted ? 'Reply deleted' : text }}
          />
        </div>
      </div>

      {/* Comment line */}
      <div tw="absolute left-4 h-full">
        <div tw="flex flex-col h-full items-start justify-start relative">
          <div tw="h-full w-[1px] bg-slate-700" />
          {totalMoreReplies ? (
            <div
              css={[
                tw`absolute -bottom-5 -left-1`,
                css`
                  display: -webkit-box;
                `
              ]}
            >
              <div tw="text-textSecondary mr-2">•</div>
              <div
                role="button"
                tabIndex={0}
                css={[
                  tw`flex items-center justify-center w-[105px] cursor-pointer bg-textSecondary rounded-xl`,
                  tw`text-xs font-semibold text-card`
                ]}
                onClick={() => {
                  if (onLoadMoreReplies) onLoadMoreReplies(kids, data)
                }}
              >
                {fetchingCommentId === id
                  ? t(messages.loading())
                  : t(messages.totalMoreReplies(), { total: totalMoreReplies })}
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {children.map(reply => (
        <Comment key={reply.id} data={reply} onLoadMoreReplies={onLoadMoreReplies} />
      ))}
    </div>
  )
}
