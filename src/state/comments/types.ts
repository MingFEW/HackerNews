export interface CommentsState {
  comments: CommentTypes[]
}

export type CommentTypes = {
  id: number
  by: string
  deleted?: boolean
  kids: number[]
  children: CommentTypes[]
  path?: string
  parent: number
  text: string
  time: number
  type: string
  childLoaded: number
}
