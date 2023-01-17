import React from 'react'
import 'twin.macro'

export const Header: React.FC = () => {
  return (
    <div tw="fixed w-screen backdrop-blur z-[2] border-b border-solid border-white/20">
      <div className="header" tw="px-6 py-4 mx-auto md:max-w-[640px] md:px-0 lg:max-w-[768px]">
        <h1 tw="text-white text-xl font-bold">Hacker Top Stories</h1>
        <p tw="text-textGrey text-xs">Made by MingFEW</p>
      </div>
    </div>
  )
}
