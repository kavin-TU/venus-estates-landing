import { useEffect, useState, type ReactNode } from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib'

/** Shared with hero colorize — soft settle curve. */
export const REVEAL_EASE = [0.22, 1, 0.36, 1] as const

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  /** Fade only (no y) — prefer for LCP heroes / banners. */
  fadeOnly?: boolean
  as?: 'div' | 'section'
}

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

/** Scroll-into-view fade/slide; respects prefers-reduced-motion. */
export function Reveal({
  children,
  className,
  delay = 0,
  fadeOnly = false,
  as = 'div',
}: RevealProps) {
  const [reduced, setReduced] = useState(prefersReducedMotion)
  const MotionTag = as === 'section' ? motion.section : motion.div

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const y = fadeOnly || reduced ? 0 : 20
  const duration = reduced ? 0 : 0.5

  return (
    <MotionTag
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration, delay: reduced ? 0 : delay, ease: REVEAL_EASE }}
    >
      {children}
    </MotionTag>
  )
}

type PageFadeProps = {
  children: ReactNode
  /** Remount key — typically location.pathname. */
  pageKey: string
  className?: string
}

/** Short fade when the route changes (no exit fight with scroll). */
export function PageFade({ children, pageKey, className }: PageFadeProps) {
  const [reduced, setReduced] = useState(prefersReducedMotion)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <motion.div
      key={pageKey}
      className={className}
      initial={{ opacity: reduced ? 1 : 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: reduced ? 0 : 0.28, ease: REVEAL_EASE }}
    >
      {children}
    </motion.div>
  )
}
