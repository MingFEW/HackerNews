import { CommentTypes } from '@/state/comments/types'
import { getCommentPath } from '../getCommentPath'
import { comment, parentComment } from '../../../internals/testing/getCommentPath.mock'

describe('getCommentPath', () => {
  it('should return undefined if parentComment does not exist', () => {
    expect(getCommentPath(comment as CommentTypes, {} as CommentTypes)).toBeUndefined()
  })

  it('should return parentCommentPath/parentCommentId if parentComment exists and field path equal to field parent', () => {
    expect(getCommentPath(comment as CommentTypes, { ...parentComment, path: '34408123' } as CommentTypes)).toBe(
      '34408123/34409077'
    )
  })

  it('should return  parentComment exists with field path', () => {
    expect(getCommentPath(comment as CommentTypes, { ...parentComment, path: '34408123' } as CommentTypes)).toBe(
      '34408123/34409077'
    )
  })

  it('should return parentId if parentComment exists but no path field', () => {
    expect(getCommentPath(comment as CommentTypes, parentComment as CommentTypes)).toBe('34409077')
  })
})
