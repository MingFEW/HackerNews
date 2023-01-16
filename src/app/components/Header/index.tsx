import React from 'react'
import tw, { css } from 'twin.macro'

const headerWrap = css`
  z-index: 2;
  border-bottom: 1px solid #ffffff20;
`

export const Header: React.FC = () => {
  return (
    <div css={[tw`fixed w-screen backdrop-blur`, headerWrap]}>
      <div className="header" tw="px-6 py-4 mx-auto md:max-w-[640px] md:px-0 lg:max-w-[768px]">
        <h1 tw="text-white text-xl font-bold">Hacker Top Stories</h1>
        <p tw="text-textGrey text-xs">Made by MingFEW</p>
      </div>
    </div>
  )
}
