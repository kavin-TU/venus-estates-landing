import type { FaqItem } from '@/types'
import { site } from '@/content'
import { Accordion, InlineMediaHeading } from '@/components/ui'

export function FaqSection() {
  const { faq } = site.home
  const items: readonly FaqItem[] = faq.items

  return (
    <section className="overflow-hidden bg-sand text-ink">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-12 sm:px-10 lg:grid-cols-2 lg:gap-[50px] lg:px-[100px] lg:py-[75px]">
        <div className="flex flex-col gap-4">
          <InlineMediaHeading lines={faq.heading.lines} className="text-ink" />
          <p className="text-[16px] font-medium text-ink">{faq.subheading}</p>

          {/* Sketch bleeds past the container on desktop, as in the design */}
          <img
            src={faq.image.src}
            alt={faq.image.alt}
            className="mt-2 w-full max-w-[560px] object-contain mix-blend-multiply lg:mt-6 lg:w-[931px] lg:max-w-none lg:-ml-[235px]"
            loading="lazy"
          />
        </div>

        <Accordion items={items} className="lg:self-start" />
      </div>
    </section>
  )
}
