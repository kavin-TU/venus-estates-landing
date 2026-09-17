import { site } from '@/content'

export function ContactHeroSection() {
  const { hero } = site.contactPage

  return (
    <section className="relative isolate bg-ink">
      <div className="relative aspect-[1440/700] overflow-hidden lg:aspect-auto lg:h-[700px]">
        <img
          src={hero.image.src}
          alt={hero.image.alt}
          className="size-full object-cover"
          loading="eager"
        />

        <div className="absolute bottom-6 left-6 max-w-[360px] rounded-xl bg-ink/70 px-5 py-4 text-white backdrop-blur-sm sm:bottom-10 sm:left-10 lg:bottom-14 lg:left-[100px]">
          <p className="text-[16px] font-semibold text-secondary">{hero.locationHeading}</p>
          <p className="mt-2 text-[14px] font-medium leading-relaxed text-white/90">
            {hero.locationBody}
          </p>
        </div>
      </div>
    </section>
  )
}
