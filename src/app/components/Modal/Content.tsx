import React from 'react'
import { styled } from 'twin.macro'

interface Props {
  children: React.ReactNode
}

const StyledContent = styled.div`
  height: calc(100vh - 59px - 48px);
`

const Content: React.FC<Props> = ({ children }) => {
  return <StyledContent tw="p-4 bg-card overflow-auto">{children}</StyledContent>
}

export default Content
