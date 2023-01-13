/* eslint-disable import/no-self-import */
/**
 * Asynchronously loads the component for HomePage
 */

import * as React from 'react'
import { css, styled } from 'twin.macro'
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

export const HomePage: React.FC = lazyLoad(
  () => import('./index'),
  module => module.HomePage,
  {
    fallback: (
      <LoadingWrapper>
        <div>Loading ...</div>
      </LoadingWrapper>
    )
  }
)
