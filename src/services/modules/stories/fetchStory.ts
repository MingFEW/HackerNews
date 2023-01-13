import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'
import { StoryTypes } from '@/state/stories/types'

export default (build: EndpointBuilder<any, any, any>) =>
  build.query<StoryTypes, number>({
    query: storyId => `/item/${storyId}.json?print=pretty`
  })
