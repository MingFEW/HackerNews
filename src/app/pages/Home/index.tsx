import * as React from 'react'
import { Helmet } from 'react-helmet-async'
import InfiniteScroll from 'react-infinite-scroll-component'
import 'twin.macro'

// State
import { PAGE_SIZE, useFetchStories } from '@/state/stories/hooks'

// Components
import StoryCard from '@/components/Card'
import { StoryTypes } from '@/state/stories/types'

export const HomePage: React.FC = () => {
  /**
   * Hooks handling data with api
   */
  const { isLoading, hasMore, data, onLoadmore } = useFetchStories()

  return (
    <>
      <Helmet>
        <title>Hacker Top Stories | Home Page</title>
        <meta name="description" content="Hacker Top Stories | Home Page" />
      </Helmet>

      <InfiniteScroll
        dataLength={data?.length}
        next={onLoadmore}
        scrollThreshold="100px"
        hasMore={hasMore}
        loader={
          <div tw="mb-6">
            <StoryCard loading data={null} />
          </div>
        }
      >
        <div tw="flex flex-col gap-6 py-6">
          {isLoading
            ? Array.from({ length: PAGE_SIZE }, (_, i: number) => <StoryCard loading key={`${i}`} data={null} />)
            : data.map((story: StoryTypes) => <StoryCard key={`${story.id}`} data={story} />)}
        </div>
      </InfiniteScroll>
    </>
  )
}
