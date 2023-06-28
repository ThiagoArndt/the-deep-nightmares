import { useLayoutEffect, useState } from "react"

export enum Adaptive {
  xs = 'xs',
  s = 's',
  m = 'm',
  l = 'l',
   xl = 'xl'
}

interface UseAdaptiveTriggersProps {
  onExtraSmallEnter?: () => void
  onSmallEnter?: () => void
  onMediumEnter?: () => void
  onLargeEnter?: () => void
  onExtraLargeEnter?: () => void
}

export const useAdaptiveTriggers = ({
  onExtraSmallEnter,
  onSmallEnter,
  onMediumEnter,
  onLargeEnter,
  onExtraLargeEnter
}: UseAdaptiveTriggersProps): Adaptive => {
  const [width, setWidth] = useState<Adaptive>(Adaptive.xs)
  useLayoutEffect(() => {
    const handleResize = () => {
      if (window?.innerWidth < 640) {
        onExtraSmallEnter?.()
        return setWidth(Adaptive.xs)
      }
      if (window?.innerWidth < 768) {
        onSmallEnter?.()
        return setWidth(Adaptive.s)
      }
      if (window?.innerWidth < 1024) {
        onMediumEnter?.()
        return setWidth(Adaptive.m)
      }
      if (window?.innerWidth < 1280) {
        onLargeEnter?.()
        return setWidth(Adaptive.l)
      }
      onExtraLargeEnter?.()
      return setWidth(Adaptive.xl)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [
    onSmallEnter,
    onMediumEnter,
    onLargeEnter,
    onExtraLargeEnter,
    onExtraSmallEnter
  ])
  return width
}


export interface PageConfig {
  offset: number
  speed: number
}

export interface LayoutConfig {
  pages: number
}

export const ParallaxConfig: Record<
  Adaptive,Record<any, number> & LayoutConfig
> = {
  [Adaptive.xs]: {
    pages: 12,
  },
  [Adaptive.s]: {
    pages: 11,
  },
  [Adaptive.m]: {
    pages: 9,
  },
  [Adaptive.l]: {
    pages: 7.5,
  },
  [Adaptive.xl]: {
    pages: 6.3,
  },
}