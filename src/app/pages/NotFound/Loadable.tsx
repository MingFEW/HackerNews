/* eslint-disable import/no-self-import */
/**
 * Asynchronously loads the component for HomePage
 */

import * as React from 'react'
import tw, { styled } from 'twin.macro'
import { lazyLoad } from '@/utils/loadable'

const StyledWrapper = styled.div`
  ${tw`flex items-center justify-center w-full h-screen`}
`

export const NotFoundPage: React.FC = lazyLoad(
  () => import('./index'),
  module => module.NotFoundPage,
  {
    fallback: (
      <StyledWrapper>
        <div>Loading ...</div>
      </StyledWrapper>
    )
  }
)
