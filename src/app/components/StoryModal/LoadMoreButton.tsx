import React from 'react'
import tw from 'twin.macro'

interface LoadMoreButtonProps {
  onClick: () => void
}

export const LoadMoreButton: React.FC<LoadMoreButtonProps> = props => {
  const { onClick } = props
  return (
    <div tw="flex items-center justify-center py-4 cursor-pointer">
      <button
        type="button"
        css={[
          tw`px-6 py-1 w-fit bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl`,
          tw`text-sm font-semibold text-white`
        ]}
        onClick={onClick}
      >
        Load more
      </button>
    </div>
  )
}
