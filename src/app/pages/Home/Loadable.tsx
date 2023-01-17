/**
 * Asynchronously loads the component for HomePage
 */
import * as React from 'react'
import 'twin.macro'

import { lazyLoad } from '@/utils/loadable'

export const HomePage: React.FC = lazyLoad(
  () => import('./index'),
  module => module.HomePage,
  {
    fallback: (
      <div tw="w-full h-screen flex items-center justify-center">
        <div>Loading ...</div>
      </div>
    )
  }
)
