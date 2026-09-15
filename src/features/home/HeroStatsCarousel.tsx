import { animate, motion, useMotionValue, useMotionValueEvent } from 'motion/react'
import { useEffect, useState } from 'react'

const COLORIZE_EASE = [0.22, 1, 0.36, 1] as const
const AUTOPLAY_MS = 4000

type HeroStat = {
  value: number
  suffix: string
  label: string
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
    <p className="font-stat text-[40px] leading-[50px] font-semibold whitespace-nowrap text-white">
      {active ? `${display}${suffix}` : '0'}
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
    <div className="pointer-events-auto absolute top-[679px] left-[647px] flex h-[110px] items-end gap-4 max-lg:top-auto max-lg:right-4 max-lg:bottom-6 max-lg:left-4 max-lg:flex-wrap max-lg:justify-center">
      <div className="flex h-[110px] w-[190px] flex-col items-start justify-center gap-2 rounded-[15px] bg-glass px-5 text-white backdrop-blur-[8px]">
        <StatValue
          value={plotsReady.value}
          suffix={plotsReady.suffix}
          active={countActive}
        />
        <p className="w-full text-[16px] font-semibold leading-normal">{plotsReady.label}</p>
      </div>

      <div
        className="relative h-[150px] w-[300px] shrink-0 overflow-hidden rounded-lg bg-glass backdrop-blur-[25px]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
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
            className="pointer-events-none absolute inset-x-0 bottom-2 z-[2] flex justify-center gap-1.5"
            aria-hidden="true"
          >
            {slides.map((slide, i) => (
              <span
                key={slide.src}
                className={
                  i === index
                    ? 'h-1.5 w-1.5 rounded-full bg-white'
                    : 'h-1.5 w-1.5 rounded-full bg-white/40'
                }
              />
            ))}
          </div>
        ) : null}
      </div>

      <div className="flex h-[110px] w-[190px] flex-col items-start justify-center gap-2 rounded-[15px] bg-glass px-5 text-white backdrop-blur-[8px]">
        <StatValue
          value={startingPrice.value}
          suffix={startingPrice.suffix}
          active={countActive}
        />
        <p className="w-full text-[14px] font-medium leading-normal">{startingPrice.label}</p>
      </div>
    </div>
  )
}
