import React from 'react'
import 'twin.macro'

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
      tw="text-base font-bold text-white sm:text-xl hover:opacity-80 hover:no-underline"
    >
      {title}
    </a>
  )
}
