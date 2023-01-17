import React from 'react'
import 'twin.macro'
import { Header } from '../Header'

interface Props {
  children: React.ReactNode
}

export const PageWrapper: React.FC<Props> = props => {
  const { children } = props
  return (
    <div tw="relative w-full h-full min-h-screen bg-background">
      <Header />
      <div tw="w-full pt-20 px-6 mx-auto md:max-w-[640px] md:px-0 lg:max-w-[768px] relative z-[1]">{children}</div>
      <div className="site-background">
        <div tw="z-0 block fixed top-0 bottom-0 left-0 inset-x-0 bg-gradient-to-b from-darkJungleGreen" />
        <div
          tw="fixed inset-x-0 top-0 bottom-0 left-0 z-0 bg-top bg-no-repeat 
              [background-image: url(/images/bg_overlayy.png)] [background-size: 136.75rem 100%] h-[52.625em]"
        />
      </div>
    </div>
  )
}
