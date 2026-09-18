import { site } from '@/content'

export function AboutHeroSection() {
  const { hero } = site.aboutPage
  const [firstWord, ...rest] = hero.heading.split(' ')

  return (
    <section className="relative isolate bg-ink">
      <div className="relative aspect-[1440/820] overflow-hidden lg:aspect-auto lg:h-[820px]">
        <img
          src={hero.image.src}
          alt={hero.image.alt}
          className="size-full object-cover"
          loading="eager"
        />

        {/* Sits over the mosaic's blank tile: 4 cols x 3 rows, row 2 / col 1 */}
        <div className="absolute left-0 top-1/3 flex h-1/3 w-1/4 items-center justify-center">
          <h1 className="text-[18px] font-bold uppercase leading-none sm:text-[24px] lg:text-[28px]">
            <span className="text-secondary">{firstWord}</span>{' '}
            <span className="text-ink">{rest.join(' ')}</span>
          </h1>
        </div>
      </div>
    </section>
  )
}
