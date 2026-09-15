import { useEffect, useState } from 'react'

export type HeroIntroPhase = 'idle' | 'travel' | 'colorize' | 'done'

type UseHeroIntroResult = {
  phase: HeroIntroPhase
  reducedMotion: boolean
  /** Watermark has reached settled seat */
  textSettled: boolean
  /** Full-bleed image is color dusk */
  colorize: boolean
  /** Bottom glass row visible (before + after) */
  showStats: boolean
  /** About + Explore visible (after only) */
  showAbout: boolean
  /** Middle thumb uses after (horse) asset */
  afterThumb: boolean
  /** Counters animate to targets */
  countActive: boolean
}

const HOLD_MS = 280
const TRAVEL_MS = 1200
const COLORIZE_MS = 1000

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

export function useHeroIntro(): UseHeroIntroResult {
  const [reducedMotion, setReducedMotion] = useState(prefersReducedMotion)
  const [phase, setPhase] = useState<HeroIntroPhase>(() =>
    prefersReducedMotion() ? 'done' : 'idle',
  )

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => {
      const next = mq.matches
      setReducedMotion(next)
      if (next) setPhase('done')
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (reducedMotion) return

    const timers: number[] = []
    timers.push(window.setTimeout(() => setPhase('travel'), HOLD_MS))
    timers.push(window.setTimeout(() => setPhase('colorize'), HOLD_MS + TRAVEL_MS * 0.4))
    timers.push(
      window.setTimeout(() => setPhase('done'), HOLD_MS + TRAVEL_MS + COLORIZE_MS * 0.45),
    )

    return () => {
      timers.forEach((id) => window.clearTimeout(id))
    }
  }, [reducedMotion])

  const textSettled = phase === 'travel' || phase === 'colorize' || phase === 'done'
  const colorize = phase === 'colorize' || phase === 'done'
  const showStats = true
  const showAbout = phase === 'colorize' || phase === 'done'
  const afterThumb = phase === 'colorize' || phase === 'done'
  const countActive = phase === 'colorize' || phase === 'done'

  return {
    phase,
    reducedMotion,
    textSettled,
    colorize,
    showStats,
    showAbout,
    afterThumb,
    countActive,
  }
}
