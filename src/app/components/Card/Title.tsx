import React from 'react'
import tw from 'twin.macro'

// Utils
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter'

interface TitleProps {
  type?: string
  title?: string
  url?: string
}

const Title: React.FC<TitleProps> = ({ type, title, url }) => {
  return (
    <div tw="sm:flex mb-6">
      {type && (
        <div
          css={[
            tw`w-fit flex items-center justify-center rounded-2xl h-5 sm:h-8 px-3 mb-1 sm:mr-3 sm:mb-0`,
            tw`bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500`
          ]}
        >
          <div tw="text-white text-xs sm:text-sm font-bold mb-[2px]">{capitalizeFirstLetter(type as string)}</div>
        </div>
      )}
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        tw="text-white text-base sm:text-xl font-bold cursor-pointer hover:opacity-80 hover:no-underline"
      >
        {capitalizeFirstLetter(title as string)}
      </a>
    </div>
  )
}

export default Title
