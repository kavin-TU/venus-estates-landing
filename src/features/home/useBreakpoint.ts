import { useEffect, useState } from 'react'

export type Breakpoint = 'phone' | 'tablet' | 'desktop'

function getBreakpoint(): Breakpoint {
  if (typeof window === 'undefined') return 'desktop'
  if (window.matchMedia('(min-width: 1024px)').matches) return 'desktop'
  if (window.matchMedia('(min-width: 768px)').matches) return 'tablet'
  return 'phone'
}

export function useBreakpoint(): Breakpoint {
  const [bp, setBp] = useState(getBreakpoint)

  useEffect(() => {
    const mqLg = window.matchMedia('(min-width: 1024px)')
    const mqMd = window.matchMedia('(min-width: 768px)')
    const onChange = () => setBp(getBreakpoint())
    onChange()
    mqLg.addEventListener('change', onChange)
    mqMd.addEventListener('change', onChange)
    return () => {
      mqLg.removeEventListener('change', onChange)
      mqMd.removeEventListener('change', onChange)
    }
  }, [])

  return bp
}
