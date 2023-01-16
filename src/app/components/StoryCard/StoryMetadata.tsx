import React from 'react'
import { BsFillStarFill } from 'react-icons/bs'
import 'twin.macro'

// Utils
import { formatTime } from '@/utils/formatTime'

interface StoryMetadataProps {
  author: string
  time: number
  score: number
}

export const StoryMetadata: React.FC<StoryMetadataProps> = props => {
  const { author, time, score } = props
  return (
    <div tw="flex items-center justify-between">
      <div tw="text-xs text-textGrey">
        Posted by {author} • {formatTime(time as number)}
      </div>
      <div tw="flex items-center">
        <BsFillStarFill color="gold" tw="mr-[6px]" />
        <div tw="text-xs sm:text-sm text-white font-semibold mt-[2px]">{score}</div>
      </div>
    </div>
  )
}
