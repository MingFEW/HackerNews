import React from 'react'
import 'twin.macro'

interface Props {
  children: React.ReactNode
}

const Content: React.FC<Props> = ({ children }) => {
  return <div tw="p-4 overflow-auto bg-card [height: calc(100vh - 59px - 48px)]">{children}</div>
}

export default Content
