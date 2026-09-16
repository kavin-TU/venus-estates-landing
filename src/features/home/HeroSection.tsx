import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import heroBgImage from '@/assets/images/hero/bg.png'
import heroBgCutout from '@/assets/images/hero/cutout.png'
import aboutConnector from '@/assets/images/hero/about-connector.svg'
import arrowUpRight from '@/assets/images/icons/arrow-up-right.svg'
import { site } from '@/content'
import { HeroStatsCarousel } from './HeroStatsCarousel'
import { useHeroIntro } from './useHeroIntro'

/** Base layer BW: sat min + cool/dim (approx of temp cool) */
const BASE_BW = 'grayscale(1) saturate(0) brightness(0.92) contrast(1)'
/** Cutout BW: sat min + high contrast/highlights */
const CUTOUT_BW = 'grayscale(1) saturate(0) contrast(1.85) brightness(1.2)'
const FILTER_IDENTITY = 'grayscale(0) saturate(1) contrast(1) brightness(1)'

const COLORIZE_EASE = [0.22, 1, 0.36, 1] as const

/** Phone (<md): width-first framing. Tablet (md–lg): milder zoom. Desktop (lg+): full-bleed cover. */
const HERO_MEDIA_FRAME =
  'absolute max-w-none max-md:top-[38%] max-md:left-[21%] max-md:h-auto max-md:w-[270%] max-md:-translate-x-1/2 max-md:-translate-y-1/2 md:max-lg:top-[42%] md:max-lg:left-[30%] md:max-lg:h-auto md:max-lg:w-[180%] md:max-lg:-translate-x-1/2 md:max-lg:-translate-y-1/2 lg:inset-0 lg:size-full lg:translate-x-0 lg:translate-y-0 lg:object-cover lg:object-[center_12%]'

function useBreakpoint() {
  const get = () => {
    if (typeof window === 'undefined') return 'desktop' as const
    if (window.matchMedia('(min-width: 1024px)').matches) return 'desktop' as const
    if (window.matchMedia('(min-width: 768px)').matches) return 'tablet' as const
    return 'phone' as const
  }

  const [bp, setBp] = useState(get)

  useEffect(() => {
    const mqLg = window.matchMedia('(min-width: 1024px)')
    const mqMd = window.matchMedia('(min-width: 768px)')
    const onChange = () => setBp(get())
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

export function HeroSection() {
  const { hero } = site.home
  const { colorize, textSettled, showAbout, countActive, reducedMotion } = useHeroIntro()
  const bp = useBreakpoint()

  const settled = textSettled || reducedMotion
  const colored = colorize || reducedMotion
  const aboutOn = showAbout || reducedMotion
  const counting = countActive || reducedMotion
  const filterTransition = {
    duration: reducedMotion ? 0 : 1.15,
    ease: COLORIZE_EASE,
  }
  const settledY = bp === 'desktop' ? '10%' : bp === 'tablet' ? '80%' : '125%'

  return (
    <section className="relative h-[min(873px,100dvh)] w-full overflow-hidden bg-ink lg:h-[873px]">
      {/* Media stack — full bleed to top */}
      <div className="absolute inset-0">
        <motion.img
          src={heroBgImage}
          alt={hero.imageAlt}
          className={HERO_MEDIA_FRAME}
          initial={false}
          animate={{ filter: colored ? FILTER_IDENTITY : BASE_BW }}
          transition={filterTransition}
        />

        {/* VENUS watermark — between base and cutout; smaller/lower on mobile */}
        <motion.p
          className="pointer-events-none absolute top-0 left-1/2 z-[1] font-display text-[clamp(48px,16vw,88px)] leading-none font-extrabold tracking-tight whitespace-nowrap text-white select-none lg:text-[min(280px,18vw)]"
          initial={false}
          animate={{
            x: '-50%',
            y: settled ? settledY : '-95%',
            opacity: settled ? 0.3 : 0.55,
          }}
          transition={{ duration: reducedMotion ? 0 : 1.15, ease: COLORIZE_EASE }}
          aria-hidden="true"
        >
          {hero.watermark}
        </motion.p>

        <motion.img
          src={heroBgCutout}
          alt=""
          aria-hidden="true"
          className={`pointer-events-none z-[2] ${HERO_MEDIA_FRAME}`}
          initial={false}
          animate={{ filter: colored ? FILTER_IDENTITY : CUTOUT_BW }}
          transition={filterTransition}
        />
      </div>

      {/* UI overlays */}
      <div className="pointer-events-none absolute inset-0 z-10 mx-auto max-w-[1440px]">
        {/* About + Explore — left-aligned on mobile, absolute rail on desktop */}
        <motion.div
          className="pointer-events-auto absolute inset-x-4 top-[42%] bottom-auto flex w-auto max-w-[346px] flex-col items-start gap-5 text-left max-lg:mx-0 md:max-lg:top-[36%] lg:inset-x-auto lg:top-[369px] lg:left-[183px] lg:w-[346px] lg:gap-[30px]"
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
              className="pointer-events-none absolute top-[7px] left-[169px] hidden h-[14px] w-[214px] lg:block"
            />
            <div className="flex flex-col gap-2.5">
              <h2 className="text-[18px] font-black leading-normal lg:text-[20px]">
                {hero.projectName}
              </h2>
              <p className="text-[14px] font-semibold leading-snug text-white/95 lg:text-[16px] lg:leading-normal">
                {hero.projectBlurb}
              </p>
            </div>
          </div>

          <Link
            to={hero.explorePath}
            className="relative h-10 w-[200px] shrink-0 overflow-hidden rounded-full border-2 border-white"
          >
            <span className="absolute top-1/2 left-[calc(50%-29px)] -translate-y-1/2 text-[16px] font-semibold text-white">
              {hero.exploreLabel}
            </span>
            <span className="absolute top-[3px] right-[3px] flex size-[30px] items-center justify-center rounded-full bg-white p-2.5">
              <img
                src={arrowUpRight}
                alt=""
                className="h-[14px] w-[14px] brightness-0"
                width={14}
                height={14}
              />
            </span>
          </Link>
        </motion.div>

        <HeroStatsCarousel
          slides={hero.slides}
          plotsReady={hero.plotsReady}
          startingPrice={hero.startingPrice}
          countActive={counting}
          reducedMotion={reducedMotion}
        />
      </div>
    </section>
  )
}
