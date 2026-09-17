import { useCallback, useEffect, useState } from 'react'
import { useReducedMotion } from './useReducedMotion'

const AUTOPLAY_MS = 4000

/**
 * Index state + autoplay shared by the testimonial and blog carousels.
 * Autoplay stops while the user hovers or touches, and never starts under
 * reduced motion.
 */
export function useCarousel(count: number, autoplayMs = AUTOPLAY_MS) {
  const reducedMotion = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (reducedMotion || paused || count < 2) return
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % count)
    }, autoplayMs)
    return () => window.clearInterval(id)
  }, [autoplayMs, count, paused, reducedMotion])

  const next = useCallback(() => {
    if (count < 2) return
    setIndex((current) => (current + 1) % count)
  }, [count])

  const prev = useCallback(() => {
    if (count < 2) return
    setIndex((current) => (current - 1 + count) % count)
  }, [count])

  const pauseHandlers = {
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
    onTouchStart: () => setPaused(true),
    onTouchEnd: () => setPaused(false),
  }

  return { index, setIndex, next, prev, pauseHandlers, reducedMotion }
}
