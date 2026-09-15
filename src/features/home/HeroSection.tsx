import { Link } from 'react-router-dom'
import { animate, motion, useMotionValue, useMotionValueEvent } from 'motion/react'
import { useEffect, useState } from 'react'
import metroCityBw from '@/assets/images/hero/metro-city-bw.png'
import metroCityColor from '@/assets/images/hero/metro-city-color.png'
import metroCityTransparent from '@/assets/images/hero/metro-city-transparent.png'
import thumbBefore from '@/assets/images/hero/thumb-before.png'
import thumbAfter from '@/assets/images/hero/thumb-after.png'
import aboutConnector from '@/assets/images/hero/about-connector.svg'
import arrowDownRight from '@/assets/images/icons/arrow-down-right.svg'
import { site } from '@/content'
import { useHeroIntro } from './useHeroIntro'

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
    const controls = animate(mv, value, { duration: 1.15, ease: [0.22, 1, 0.36, 1] })
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

  return (
    <section className="relative mx-auto h-[min(873px,100dvh)] w-full max-w-[1440px] overflow-hidden bg-ink lg:h-[873px]">
      {/* 1. Base plates — B&W → color dusk */}
      <div className="absolute inset-0">
        <img
          src={metroCityBw}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 size-full max-w-none object-cover object-bottom"
        />
        <motion.img
          src={metroCityColor}
          alt={hero.imageAlt}
          className="absolute inset-0 size-full max-w-none object-cover object-bottom"
          initial={false}
          animate={{ opacity: colored ? 1 : 0 }}
          transition={{ duration: reducedMotion ? 0 : 1.15, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      {/* 2. VENUS watermark — between base and cutout */}
      <motion.p
        className="pointer-events-none absolute top-0 left-[113px] z-[1] font-display text-[280px] leading-[300px] font-extrabold tracking-tight whitespace-nowrap text-white select-none max-lg:left-[4vw] max-lg:text-[18vw] max-lg:leading-none"
        initial={false}
        animate={{
          y: settled ? -304 : -620,
          opacity: settled ? 0.4 : 0.65,
        }}
        transition={{ duration: reducedMotion ? 0 : 1.15, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden="true"
      >
        {hero.watermark}
      </motion.p>

      {/* 3. Transparent gate cutout — sits above watermark */}
      <div className="pointer-events-none absolute inset-0 z-[2]">
        <img
          src={metroCityTransparent}
          alt=""
          className="absolute inset-0 size-full max-w-none object-cover object-bottom"
        />
      </div>

      {/* 4. About project — after only */}
      <motion.div
        className="absolute top-[369px] left-[183px] z-10 hidden w-[346px] flex-col gap-[30px] lg:flex"
        initial={false}
        animate={{
          opacity: aboutOn ? 1 : 0,
          y: aboutOn ? 0 : 18,
        }}
        transition={{ duration: reducedMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
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

      {/* 5. Bottom glass stats — Figma left 647 / top 679 */}
      <div className="absolute top-[679px] left-[647px] z-10 flex h-[110px] items-end gap-4 max-lg:top-auto max-lg:right-4 max-lg:bottom-6 max-lg:left-4 max-lg:flex-wrap max-lg:justify-center">
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
            transition={{ duration: reducedMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
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
    </section>
  )
}
