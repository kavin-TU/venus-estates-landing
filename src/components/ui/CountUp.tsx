import { useEffect, useState } from 'react'
import {
  animate,
  useInView,
  useMotionValue,
  useMotionValueEvent,
} from 'motion/react'
import { useRef } from 'react'
import { cn } from '@/lib'
import { REVEAL_EASE } from './Reveal'

type CountUpProps = {
  /** Target integer (e.g. 10 or 5). */
  value: number
  suffix?: string
  /** Zero-pad display width (e.g. 2 → "05"). */
  pad?: number
  className?: string
  suffixClassName?: string
}

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

function formatCount(n: number, pad?: number) {
  const rounded = String(Math.round(n))
  return pad && pad > 0 ? rounded.padStart(pad, '0') : rounded
}

/** Scroll-triggered count-up; runs once when first in view. */
export function CountUp({
  value,
  suffix,
  pad,
  className,
  suffixClassName,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const reduced = prefersReducedMotion()
  const mv = useMotionValue(0)
  const [display, setDisplay] = useState(() =>
    reduced ? formatCount(value, pad) : formatCount(0, pad),
  )

  useMotionValueEvent(mv, 'change', (latest) => {
    setDisplay(formatCount(latest, pad))
  })

  useEffect(() => {
    if (!inView) return
    if (reduced) {
      setDisplay(formatCount(value, pad))
      return
    }
    const controls = animate(mv, value, {
      duration: 1.15,
      ease: REVEAL_EASE,
    })
    return () => controls.stop()
  }, [inView, mv, pad, reduced, value])

  return (
    <span ref={ref} className={cn(className)}>
      {display}
      {suffix ? <span className={suffixClassName}>{suffix}</span> : null}
    </span>
  )
}
