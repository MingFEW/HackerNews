import { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@/utils/@reduxjs/toolkit'
import { useInjectReducer } from '@/utils/redux-injectors'
import { CommentTypes, CommentsState } from './types'

export const initialState: CommentsState = {
  comments: [],
  fetchingCommentId: null
}

const slice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setComments(state: CommentsState, action: PayloadAction<CommentTypes[]>) {
      state.comments = action.payload
    },
    setFetchingCommentId(state: CommentsState, action: PayloadAction<number | null>) {
      state.fetchingCommentId = action.payload
    }
  }
})

export const { actions: commentsActions, reducer } = slice

export const useCommentsSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer })
  return { actions: slice.actions }
}
