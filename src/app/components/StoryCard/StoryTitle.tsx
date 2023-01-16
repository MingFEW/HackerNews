import React from 'react'
import tw from 'twin.macro'

interface StoryTitleProps {
  url: string
  title: string
}

export const StoryTitle: React.FC<StoryTitleProps> = props => {
  const { url, title } = props
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      css={[tw`text-base font-bold text-white sm:text-xl`, tw`hover:opacity-80 hover:no-underline`]}
    >
      {title}
    </a>
  )
}
