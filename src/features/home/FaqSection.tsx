import type { FaqItem } from '@/types'
import { site } from '@/content'
import { cn } from '@/lib'
import { Accordion, InlineMediaHeading } from '@/components/ui'

/**
 * The Figma node crops a 64% vertical band of the source starting 25.5% down,
 * then fades both edges into the sand ground with two linear gradients.
 *
 * `className` must supply the positioning: `cn()` does not merge conflicting
 * utilities, so a `relative` baked in here would beat a caller's `absolute`.
 */
function Sketch({ className }: { className?: string }) {
  const { image } = site.home.faq
  return (
    <div className={cn('overflow-hidden', className)} aria-hidden="true">
      <img
        src={image.src}
        alt=""
        className="size-full object-cover object-[50%_57.5%]"
        loading="lazy"
      />
      <span className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-sand to-transparent" />
      <span className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-sand to-transparent" />
    </div>
  )
}

export function FaqSection() {
  const { faq } = site.home
  const items: readonly FaqItem[] = faq.items

  return (
    <section className="bg-paper text-ink">
      {/* White strips above and below the sand band */}
      <div className="lg:py-[50px]">
        {/* min-height keeps the full sketch (top 150 + 397 tall) revealed even
            when every accordion item is collapsed and the grid is short. */}
        <div className="relative overflow-hidden bg-sand lg:min-h-[547px]">
          {/* Sits behind the grid: -135px from the 1440 container's left edge */}
          <Sketch className="absolute top-[150px] left-[calc(50%-855px)] hidden h-[397px] w-[931px] lg:block" />

          <div className="relative mx-auto max-w-[1440px] px-6 py-12 sm:px-10 lg:px-[100px] lg:py-[50px]">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-[50px]">
              <div className="flex flex-col gap-2.5">
                <InlineMediaHeading
                  lines={faq.heading.lines}
                  className="text-ink"
                />
                <p className="text-[16px] font-medium text-ink">
                  {faq.subheading}
                </p>
                <Sketch className="relative mt-4 h-[220px] w-full rounded-lg sm:h-[300px] lg:hidden" />
              </div>

              <Accordion items={items} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
