import type { Testimonial } from '@/types'
import { site } from '@/content'
import { cn, useCarousel } from '@/lib'
import {
  CarouselArrows,
  CarouselDots,
  InlineMediaHeading,
  Quotes,
  Star,
} from '@/components/ui'

function TestimonialCard({
  item,
  active,
}: {
  item: Testimonial
  active: boolean
}) {
  return (
    <div className="relative w-full pt-[35px]">
      <div
        className={cn(
          'rounded-xl border px-6 pt-[54px] pb-6',
          active
            ? 'border-paper bg-secondary text-paper'
            : 'border-line bg-paper text-ink',
        )}
      >
        <p className="text-[16px] font-medium leading-normal">{item.quote}</p>

        <div className="mt-4 flex items-end justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            <p className="text-[16px] font-bold uppercase">{item.name}</p>
            <div className="flex gap-1.5" aria-label={`${item.rating} out of 5`}>
              {Array.from({ length: item.rating }, (_, i) => (
                <Star
                  key={i}
                  className={cn(
                    'h-[13px] w-[14px]',
                    active ? 'text-paper' : 'text-secondary',
                  )}
                />
              ))}
            </div>
          </div>
          <Quotes
            className={cn(
              'h-[43px] w-[59px] shrink-0',
              active ? 'text-paper/50' : 'text-line',
            )}
          />
        </div>
      </div>

      <div
        className={cn(
          'absolute top-0 left-1/2 size-[70px] -translate-x-1/2 rounded-full border p-1',
          active ? 'border-paper bg-secondary' : 'border-line bg-paper',
        )}
      >
        <img
          src={item.avatar.src}
          alt={item.avatar.alt}
          className="size-full rounded-full object-cover"
          width={60}
          height={60}
          loading="lazy"
        />
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  const { testimonials } = site.home
  const items: readonly Testimonial[] = testimonials.items
  const { index, setIndex, next, prev, pauseHandlers } = useCarousel(
    items.length,
  )

  const previous = items[(index - 1 + items.length) % items.length]
  const following = items[(index + 1) % items.length]

  return (
    <section className="bg-paper text-ink">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-12 sm:px-10 lg:gap-[50px] lg:px-[100px] lg:py-[75px]">
        <div className="flex items-center justify-between gap-6">
          <InlineMediaHeading
            lines={testimonials.heading.lines}
            className="text-ink"
          />
          <CarouselArrows
            onPrev={prev}
            onNext={next}
            label="testimonial"
            className="shrink-0"
          />
        </div>

        <div
          className="relative overflow-hidden lg:h-[343px]"
          {...pauseHandlers}
        >
          {/* Neighbouring reviews peek in from both edges on desktop */}
          <div
            className="pointer-events-none absolute top-[50px] hidden w-[500px] lg:-left-[250px] lg:block"
            aria-hidden="true"
          >
            <TestimonialCard item={previous} active={false} />
          </div>
          <div
            className="pointer-events-none absolute top-[50px] hidden w-[500px] lg:-right-[250px] lg:block"
            aria-hidden="true"
          >
            <TestimonialCard item={following} active={false} />
          </div>

          <div className="relative mx-auto w-full max-w-[500px]">
            <TestimonialCard item={items[index]} active />
          </div>
        </div>

        <CarouselDots
          count={items.length}
          activeIndex={index}
          onSelect={setIndex}
          label="Show review"
          className="justify-center"
        />
      </div>
    </section>
  )
}
