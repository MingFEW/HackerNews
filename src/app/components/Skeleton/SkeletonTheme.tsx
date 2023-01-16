import React from 'react'
import { SkeletonTheme as RSkeletonTheme } from 'react-loading-skeleton'

interface SkeletonThemeProps {
  children: React.ReactNode
  baseColor?: string
  highLightColor?: string
}

export const SkeletonTheme: React.FC<SkeletonThemeProps> = props => {
  const {
    children,
    baseColor = 'var(--color-skeleton-base)',
    highLightColor = 'var(--color-skeleton-highlight)'
  } = props
  return (
    <RSkeletonTheme baseColor={baseColor} highlightColor={highLightColor}>
      {children}
    </RSkeletonTheme>
  )
}
