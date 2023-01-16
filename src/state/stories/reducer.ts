import { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@/utils/@reduxjs/toolkit'
import { useInjectReducer } from '@/utils/redux-injectors'
import { StoriesState, StoryTypes } from './types'

export const initialState: StoriesState = {
  stories: [],
  storySelected: null
}

const slice = createSlice({
  name: 'stories',
  initialState,
  reducers: {
    setStories(state: StoriesState, action: PayloadAction<StoryTypes[]>) {
      state.stories = [...state.stories, ...action.payload]
    },
    setStorySelected(state: StoriesState, action: PayloadAction<StoryTypes | null>) {
      state.storySelected = action.payload
    }
  }
})

export const { actions: storiesActions, reducer } = slice

export const useStoriesSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer })
  return { actions: slice.actions }
}
