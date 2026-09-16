import { animate, motion, useMotionValue, useMotionValueEvent } from 'motion/react'
import { useEffect, useState } from 'react'
import { heroStats } from './heroLayout'

const COLORIZE_EASE = [0.22, 1, 0.36, 1] as const
const AUTOPLAY_MS = 4000

type HeroStat = {
  value: number
  suffix: string
  label: string
  mobileLabel?: string
}

type HeroSlide = {
  src: string
  alt: string
}

type HeroStatsCarouselProps = {
  slides: readonly HeroSlide[]
  plotsReady: HeroStat
  startingPrice: HeroStat
  countActive: boolean
  reducedMotion: boolean
}

function StatValue({
  value,
  suffix,
  active,
}: {
  value: number
  suffix: string
  active: boolean
}) {
  const mv = useMotionValue(0)
  const [display, setDisplay] = useState('0')

  useMotionValueEvent(mv, 'change', (latest) => {
    setDisplay(String(Math.round(latest)))
  })

  useEffect(() => {
    if (!active) return
    const controls = animate(mv, value, { duration: 1.15, ease: COLORIZE_EASE })
    return () => controls.stop()
  }, [active, mv, value])

  return (
    <p className={heroStats.value}>
      {active ? `${display}${suffix}` : `0${suffix}`}
    </p>
  )
}

export function HeroStatsCarousel({
  slides,
  plotsReady,
  startingPrice,
  countActive,
  reducedMotion,
}: HeroStatsCarouselProps) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const slideCount = slides.length
  const priceLabel = startingPrice.mobileLabel ?? startingPrice.label

  useEffect(() => {
    if (reducedMotion || paused || slideCount < 2) return
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % slideCount)
    }, AUTOPLAY_MS)
    return () => window.clearInterval(id)
  }, [paused, reducedMotion, slideCount])

  const goNext = () => {
    if (slideCount < 2) return
    setIndex((current) => (current + 1) % slideCount)
  }

  return (
    <div className={heroStats.row}>
      <div className={heroStats.card}>
        <StatValue
          value={plotsReady.value}
          suffix={plotsReady.suffix}
          active={countActive}
        />
        <p className="w-full text-[12px] leading-tight font-semibold lg:text-[16px] lg:leading-normal">
          {plotsReady.label}
        </p>
      </div>

      <div
        className={heroStats.slide}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        <button
          type="button"
          className="absolute inset-0 z-[1] cursor-pointer"
          aria-label="Next slideshow image"
          onClick={goNext}
        />
        {slides.map((slide, i) => (
          <motion.img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className="absolute inset-0 size-full max-w-none object-cover"
            initial={false}
            animate={{ opacity: i === index ? 1 : 0 }}
            transition={{
              duration: reducedMotion ? 0 : 0.7,
              ease: COLORIZE_EASE,
            }}
          />
        ))}
        {slideCount > 1 ? (
          <div
            className="pointer-events-none absolute inset-x-0 bottom-2 z-[2] hidden justify-center gap-1.5 lg:flex"
            aria-hidden="true"
          >
            {slides.map((slide, i) => (
              <span
                key={slide.src}
                className={
                  i === index
                    ? 'size-1.5 rounded-full bg-white'
                    : 'size-1.5 rounded-full bg-white/40'
                }
              />
            ))}
          </div>
        ) : null}
      </div>

      <div className={heroStats.card}>
        <StatValue
          value={startingPrice.value}
          suffix={startingPrice.suffix}
          active={countActive}
        />
        <p className="w-full text-[12px] leading-tight font-medium lg:hidden">
          {priceLabel}
        </p>
        <p className="hidden w-full text-[14px] leading-normal font-medium lg:block">
          {startingPrice.label}
        </p>
      </div>
    </div>
  )
}
