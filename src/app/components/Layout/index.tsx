import React from 'react'
import tw, { css } from 'twin.macro'

interface Props {
  children: React.ReactNode
}

const overlayStyles = css`
  background-image: url(/images/bg_overlayy.png);
  background-size: 136.75rem 100%;
  height: 52.625rem;
`

export const PageWrapper: React.FC<Props> = props => {
  const { children } = props
  return (
    <div css={[tw`bg-background min-h-screen w-full h-full relative`]}>
      <div tw="block fixed top-0 bottom-0 left-0 inset-x-0 bg-gradient-to-b from-darkJungleGreen" />
      <div css={[tw`fixed top-0 bottom-0 left-0 inset-x-0 bg-top bg-no-repeat`, overlayStyles]} />
      <div tw="w-full px-6 mx-auto md:max-w-[640px] md:px-0 lg:max-w-[768px]">{children}</div>
    </div>
  )
}
