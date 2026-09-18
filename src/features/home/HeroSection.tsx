import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import heroBgImage from '@/assets/images/hero/bg.png'
import heroBgCutout from '@/assets/images/hero/cutout.png'
import aboutConnector from '@/assets/images/hero/about-connector.svg'
import arrowUpRight from '@/assets/images/icons/arrow-up-right.svg'
import { site } from '@/content'
import { cn } from '@/lib'
import {
  heroAbout,
  heroMediaFrame,
  heroWatermark,
  heroWatermarkIntro,
  heroWatermarkSettled,
} from './heroLayout'
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
      {/* Media stack — full bleed to top */}
      <div className="absolute inset-0">
        <motion.img
          src={heroBgImage}
          alt={hero.imageAlt}
          className={heroMediaFrame}
          initial={false}
          animate={{ filter: colored ? FILTER_IDENTITY : BASE_BW }}
          transition={filterTransition}
        />

        {/* VENUS watermark — CSS owns breakpoint Y; Motion only opacity */}
        <motion.p
          className={cn(
            heroWatermark,
            settled ? heroWatermarkSettled : heroWatermarkIntro,
            reducedMotion && 'duration-0',
          )}
          initial={false}
          animate={{ opacity: settled ? 0.3 : 0.55 }}
          transition={{ duration: reducedMotion ? 0 : 1.15, ease: COLORIZE_EASE }}
          aria-hidden="true"
        >
          {hero.watermark}
        </motion.p>

        <motion.img
          src={heroBgCutout}
          alt=""
          aria-hidden="true"
          className={cn('pointer-events-none z-[2]', heroMediaFrame)}
          initial={false}
          animate={{ filter: colored ? FILTER_IDENTITY : CUTOUT_BW }}
          transition={filterTransition}
        />
      </div>

      {/* UI overlays */}
      <div className="pointer-events-none absolute inset-0 z-10 mx-auto max-w-[1440px]">
        <motion.div
          className={heroAbout}
          initial={false}
          animate={{
            opacity: aboutOn ? 1 : 0,
            y: aboutOn ? 0 : 18,
          }}
          transition={{ duration: reducedMotion ? 0 : 0.7, ease: COLORIZE_EASE, delay: 0.08 }}
        >
          <div className="relative w-full text-paper">
            <img
              src={aboutConnector}
              alt=""
              className="pointer-events-none absolute top-[7px] left-[169px] hidden h-[14px] w-[214px] lg:block"
            />
            <div className="flex flex-col gap-2.5">
              <h2 className="text-[18px] font-black leading-normal lg:text-[20px]">
                {hero.projectName}
              </h2>
              <p className="text-[14px] font-semibold leading-snug text-paper/95 lg:text-[16px] lg:leading-normal">
                {hero.projectBlurb}
              </p>
            </div>
          </div>

          <Link
            to={hero.explorePath}
            className="relative h-10 w-[200px] shrink-0 overflow-hidden rounded-full border-2 border-paper"
          >
            <span className="absolute top-1/2 left-[calc(50%-29px)] -translate-y-1/2 text-[16px] font-semibold text-paper">
              {hero.exploreLabel}
            </span>
            <span className="absolute top-[3px] right-[3px] flex size-[30px] items-center justify-center rounded-full bg-paper p-2.5">
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
