/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from 'react'
import { Helmet } from 'react-helmet-async'
import InfiniteScroll from 'react-infinite-scroll-component'
import 'twin.macro'

// Constants
import { HomePageMeta } from '@/constants/AppConfig'

// States
import { PAGE_SIZE, useFetchStories, useStorySelected } from '@/state/stories/hooks'
import { useResetComments } from '@/state/comments/hooks'
import { StoryTypes } from '@/state/stories/types'

// Components
import { StoryCard } from '@/components/StoryCard'
import { StoryModal } from '@/components/StoryModal'

export const HomePage: React.FC = () => {
  /**
   * hooks get and process the data of stories
   */
  const { isLoading, hasMore, data, onLoadmore } = useFetchStories()
  const { storySelected, setStorySelected } = useStorySelected()
  const { resetComments } = useResetComments()

  /**
   * open or close story modal (reset story selected)
   */
  const onCloseStoryModal = useCallback((): void => {
    setStorySelected(null)
    resetComments()
  }, [storySelected])

  /**
   * rendering loading for story card
   */
  const renderStoryCardLoading = useCallback(
    (): JSX.Element[] => Array.from({ length: PAGE_SIZE }, (_, i: number) => <StoryCard key={`${i}`} loading />),
    []
  )

  return (
    <>
      <Helmet>
        <title>{HomePageMeta.title}</title>
        <meta name="description" content={HomePageMeta.description} />
      </Helmet>
      <InfiniteScroll
        dataLength={data?.length}
        next={onLoadmore}
        scrollThreshold="100px"
        hasMore={hasMore}
        loader={
          <div tw="mb-6">
            <StoryCard loading />
          </div>
        }
      >
        <div tw="flex flex-col gap-6 py-6">
          {isLoading
            ? renderStoryCardLoading()
            : data.map((story: StoryTypes) => (
                <StoryCard key={`${story.id}`} data={story} onCommentClick={setStorySelected} />
              ))}
        </div>
      </InfiniteScroll>
      {storySelected && <StoryModal storySelected={storySelected} onClose={onCloseStoryModal} />}
    </>
  )
}
