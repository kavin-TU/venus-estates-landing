import { Link } from 'react-router-dom'
import { animate, motion, useMotionValue, useMotionValueEvent } from 'motion/react'
import { useEffect, useState } from 'react'
import heroBgImage from '@/assets/hero-bg-image.png'
import heroBgCutout from '@/assets/hero-bg-image-cutout.png'
import thumbBefore from '@/assets/images/hero/thumb-before.png'
import thumbAfter from '@/assets/images/hero/thumb-after.png'
import aboutConnector from '@/assets/images/hero/about-connector.svg'
import arrowDownRight from '@/assets/images/icons/arrow-down-right.svg'
import { site } from '@/content'
import { useHeroIntro } from './useHeroIntro'

/** Base layer BW: sat min + cool/dim (approx of temp cool) */
const BASE_BW = 'grayscale(1) saturate(0) brightness(0.92) contrast(1)'
/** Cutout BW: sat min + high contrast/highlights */
const CUTOUT_BW = 'grayscale(1) saturate(0) contrast(1.85) brightness(1.2)'
const FILTER_IDENTITY = 'grayscale(0) saturate(1) contrast(1) brightness(1)'

const COLORIZE_EASE = [0.22, 1, 0.36, 1] as const

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

export function HeroSection() {
  const { hero } = site.home
  const { colorize, textSettled, showAbout, afterThumb, countActive, reducedMotion } =
    useHeroIntro()

  const settled = textSettled || reducedMotion
  const colored = colorize || reducedMotion
  const aboutOn = showAbout || reducedMotion
  const thumbAfterOn = afterThumb || reducedMotion
  const counting = countActive || reducedMotion
  const filterTransition = {
    duration: reducedMotion ? 0 : 1.15,
    ease: COLORIZE_EASE,
  }

  return (
    <section className="relative h-[min(873px,100dvh)] w-full overflow-hidden bg-ink lg:h-[873px]">
      {/* Media stack — full bleed to top; object-position drops gate/horse so nav sits in sky */}
      <div className="absolute inset-0">
        {/* 1. Base plate — full-bleed, BW → color */}
        <motion.img
          src={heroBgImage}
          alt={hero.imageAlt}
          className="absolute inset-0 size-full max-w-none object-cover object-[center_12%]"
          initial={false}
          animate={{ filter: colored ? FILTER_IDENTITY : BASE_BW }}
          transition={filterTransition}
        />

        {/* 2. VENUS watermark — between base and cutout; travels top → seat */}
        <motion.p
          className="pointer-events-none absolute top-0 left-1/2 z-[1] font-display text-[min(280px,18vw)] leading-none font-extrabold tracking-tight whitespace-nowrap text-white select-none"
          initial={false}
          animate={{
            x: '-50%',
            y: settled ? '10%' : '-95%',
            opacity: settled ? 0.32 : 0.55,
          }}
          transition={{ duration: reducedMotion ? 0 : 1.15, ease: COLORIZE_EASE }}
          aria-hidden="true"
        >
          {hero.watermark}
        </motion.p>

        {/* 3. Gate cutout — aligned over base, above watermark */}
        <motion.img
          src={heroBgCutout}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[2] size-full max-w-none object-cover object-[center_12%]"
          initial={false}
          animate={{ filter: colored ? FILTER_IDENTITY : CUTOUT_BW }}
          transition={filterTransition}
        />
      </div>

      {/* 4–5. UI overlays on centered 1440 rail */}
      <div className="pointer-events-none absolute inset-0 z-10 mx-auto max-w-[1440px]">
        {/* About project — after only */}
        <motion.div
          className="pointer-events-auto absolute top-[369px] left-[183px] hidden w-[346px] flex-col gap-[30px] lg:flex"
          initial={false}
          animate={{
            opacity: aboutOn ? 1 : 0,
            y: aboutOn ? 0 : 18,
          }}
          transition={{ duration: reducedMotion ? 0 : 0.7, ease: COLORIZE_EASE, delay: 0.08 }}
        >
          <div className="relative w-full text-white">
            <img
              src={aboutConnector}
              alt=""
              className="pointer-events-none absolute top-[7px] left-[169px] h-[14px] w-[214px]"
            />
            <div className="flex flex-col gap-2.5">
              <h2 className="text-[20px] font-black leading-normal">{hero.projectName}</h2>
              <p className="text-[16px] font-semibold leading-normal text-white/95">
                {hero.projectBlurb}
              </p>
            </div>
          </div>

          <Link
            to={hero.explorePath}
            className="relative h-10 w-[200px] overflow-hidden rounded-full border-2 border-white"
          >
            <span className="absolute top-1/2 left-[calc(50%-29px)] -translate-y-1/2 text-[16px] font-semibold text-white">
              {hero.exploreLabel}
            </span>
            <span className="absolute top-[3px] right-[3px] flex size-[30px] items-center justify-center rounded-full bg-white p-2.5">
              <img
                src={arrowDownRight}
                alt=""
                className="h-[14px] w-[14px] -scale-y-100 brightness-0"
                width={14}
                height={14}
              />
            </span>
          </Link>
        </motion.div>

        {/* Bottom glass stats — Figma left 647 / top 679 */}
        <div className="pointer-events-auto absolute top-[679px] left-[647px] flex h-[110px] items-end gap-4 max-lg:top-auto max-lg:right-4 max-lg:bottom-6 max-lg:left-4 max-lg:flex-wrap max-lg:justify-center">
          <div className="flex h-[110px] w-[190px] flex-col items-start justify-center gap-2 rounded-[15px] bg-glass px-5 text-white backdrop-blur-[8px]">
            <StatValue
              value={hero.plotsReady.value}
              suffix={hero.plotsReady.suffix}
              active={counting}
            />
            <p className="w-full text-[16px] font-semibold leading-normal">
              {hero.plotsReady.label}
            </p>
          </div>

          <div className="relative h-[150px] w-[300px] shrink-0 overflow-hidden rounded-lg bg-glass backdrop-blur-[25px]">
            <img
              src={thumbBefore}
              alt=""
              className="absolute inset-0 size-full max-w-none object-cover"
            />
            <motion.img
              src={thumbAfter}
              alt=""
              className="absolute inset-0 size-full max-w-none object-cover"
              initial={false}
              animate={{ opacity: thumbAfterOn ? 1 : 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.8, ease: COLORIZE_EASE }}
            />
          </div>

          <div className="flex h-[110px] w-[190px] flex-col items-start justify-center gap-2 rounded-[15px] bg-glass px-5 text-white backdrop-blur-[8px]">
            <StatValue
              value={hero.startingPrice.value}
              suffix={hero.startingPrice.suffix}
              active={counting}
            />
            <p className="w-full text-[14px] font-medium leading-normal">
              {hero.startingPrice.label}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
