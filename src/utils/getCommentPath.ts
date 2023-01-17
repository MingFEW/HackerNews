import { CommentTypes } from '@/state/comments/types'

export const getCommentPath = (comment: CommentTypes, parentComment: CommentTypes): string | undefined => {
  if (parentComment?.id) {
    if (parentComment.path && parentComment.path === `${parentComment.parent}`) {
      return `${parentComment.path}/${parentComment.id}`
    }

    if (parentComment.path) {
      return `${parentComment.path}/${comment?.parent}`
    }

    return `${parentComment.id}`
  }

  return undefined
}
