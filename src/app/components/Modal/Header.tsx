import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import tw from 'twin.macro'

interface Props {
  title: string
  onClose: () => void
}

const Header: React.FC<Props> = props => {
  const { title, onClose } = props
  return (
    <div css={[tw`bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500`, tw`flex items-center gap-4 p-4`]}>
      <button type="button" tw="cursor-pointer" onClick={onClose}>
        <BsArrowLeft tw="text-white text-2xl" />
      </button>
      <div tw="text-lg font-bold text-white">{title}</div>
    </div>
  )
}

export default Header
