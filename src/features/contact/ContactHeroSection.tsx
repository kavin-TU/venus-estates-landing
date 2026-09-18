import { MediaImage, Reveal } from '@/components/ui'
import { site } from '@/content'

export function ContactHeroSection() {
  const { hero } = site.contactPage

  return (
    <Reveal as="section" fadeOnly className="relative isolate bg-ink">
      <div className="relative aspect-[1440/700] overflow-hidden lg:aspect-auto lg:h-[700px]">
        <MediaImage
          src={hero.image.src}
          alt={hero.image.alt}
          loading="eager"
          className="size-full object-cover"
        />

        <div className="absolute bottom-6 left-6 max-w-[360px] rounded-xl bg-ink/70 px-5 py-4 text-paper backdrop-blur-sm sm:bottom-10 sm:left-10 lg:bottom-14 lg:left-[100px]">
          <p className="text-[16px] font-semibold text-secondary">{hero.locationHeading}</p>
          <p className="mt-2 text-[14px] font-medium leading-relaxed text-paper/90">
            {hero.locationBody}
          </p>
        </div>
      </div>
    </Reveal>
  )
}
