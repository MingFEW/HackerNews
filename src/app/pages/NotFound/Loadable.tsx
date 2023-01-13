/* eslint-disable import/no-self-import */
/**
 * Asynchronously loads the component for HomePage
 */

import * as React from 'react'
import { styled, css } from 'twin.macro'
import { lazyLoad } from '@/utils/loadable'

const LoadingWrapper = styled.div`
  ${css`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`

export const NotFoundPage: React.FC = lazyLoad(
  () => import('./index'),
  module => module.NotFoundPage,
  {
    fallback: (
      <LoadingWrapper>
        <div>Loading ...</div>
      </LoadingWrapper>
    )
  }
)
