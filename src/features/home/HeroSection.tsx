import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import heroBgImage from '@/assets/hero-bg-image.png'
import heroBgCutout from '@/assets/hero-bg-image-cutout.png'
import aboutConnector from '@/assets/images/hero/about-connector.svg'
import arrowDownRight from '@/assets/images/icons/arrow-down-right.svg'
import { site } from '@/content'
import { HeroStatsCarousel } from './HeroStatsCarousel'
import { useHeroIntro } from './useHeroIntro'

/** Base layer BW: sat min + cool/dim (approx of temp cool) */
const BASE_BW = 'grayscale(1) saturate(0) brightness(0.92) contrast(1)'
/** Cutout BW: sat min + high contrast/highlights */
const CUTOUT_BW = 'grayscale(1) saturate(0) contrast(1.85) brightness(1.2)'
const FILTER_IDENTITY = 'grayscale(0) saturate(1) contrast(1) brightness(1)'

const COLORIZE_EASE = [0.22, 1, 0.36, 1] as const

export function HeroSection() {
  const { hero } = site.home
  const { colorize, textSettled, showAbout, countActive, reducedMotion } = useHeroIntro()

  const settled = textSettled || reducedMotion
  const colored = colorize || reducedMotion
  const aboutOn = showAbout || reducedMotion
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
