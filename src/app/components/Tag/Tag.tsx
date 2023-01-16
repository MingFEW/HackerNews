import React from 'react'
import tw from 'twin.macro'

import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter'

interface TagProps {
  title: string
}

export const Tag: React.FC<TagProps> = props => {
  const { title, ...rest } = props
  return (
    <div
      css={[
        tw`flex items-center justify-center h-8 px-3 rounded-2xl`,
        tw`bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500`
      ]}
      {...rest}
    >
      <div tw="text-xs sm:text-sm text-white font-bold mb-[2px]">{capitalizeFirstLetter(title)}</div>
    </div>
  )
}
