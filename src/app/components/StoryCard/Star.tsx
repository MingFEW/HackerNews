import React from 'react'
import { BsFillStarFill } from 'react-icons/bs'
import 'twin.macro'

interface StarProps {
  score?: number
}

const Star: React.FC<StarProps> = ({ score }) => {
  return (
    <div tw="flex items-center">
      <BsFillStarFill color="gold" tw="mr-[6px]" />
      <div tw="text-white font-semibold text-sm mt-[2px]">{score || 0}</div>
    </div>
  )
}

export default Star
