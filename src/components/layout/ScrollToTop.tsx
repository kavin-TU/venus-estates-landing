import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useReducedMotion } from '@/lib'

/** Smoothly scrolls to top on client-side route changes (instant if reduced motion). */
export function ScrollToTop() {
  const { pathname, search } = useLocation()
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: reducedMotion ? 'auto' : 'smooth',
    })
  }, [pathname, search, reducedMotion])

  return null
}
