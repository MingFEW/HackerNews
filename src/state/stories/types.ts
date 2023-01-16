export interface StoriesState {
  stories: StoryTypes[]
  storySelected: StoryTypes | null
}

export type StoryTypes = {
  by: string
  descendants: number
  id: number
  kids: number[]
  score: number
  time: number
  title: string
  type: string
  url: string
}
