import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'
import { CommentTypes } from '@/state/comments/types'

export default (build: EndpointBuilder<any, any, any>) =>
  build.query<CommentTypes, number>({
    query: commentId => `/item/${commentId}.json?print=pretty`
  })
