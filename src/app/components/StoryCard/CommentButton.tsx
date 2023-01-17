import React from 'react'
import { useTranslation } from 'react-i18next'
import { BiComment } from 'react-icons/bi'
import tw, { css } from 'twin.macro'
import { messages } from './messages'

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

interface CommentButtonProps {
  onClick: () => void
  count: string
}

export const CommentButton: React.FC<CommentButtonProps> = props => {
  const { t } = useTranslation()
  const { onClick, count, ...rest } = props
  return (
    <div
      role="button"
      tabIndex={0}
      css={[tw`flex items-center cursor-pointer w-fit`, commentStyles]}
      onClick={onClick}
      {...rest}
    >
      <BiComment className="comment__icon" tw="text-textSecondary mr-3 transition-all text-xl sm:text-2xl" />
      <div
        className="comment_count"
        css={[tw`text-xs font-semibold sm:text-sm text-textSecondary`, tw`sm:mb-[3px] transition-all`]}
      >
        {t(messages.totalComments(), { total: count })}
      </div>
    </div>
  )
}
