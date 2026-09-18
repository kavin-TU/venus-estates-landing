import { Link } from 'react-router-dom'
import type { BlogPost } from '@/types'
import { site } from '@/content'
import { cn, useCarousel } from '@/lib'
import {
  ArrowUpRight,
  CarouselArrows,
  CarouselDots,
  InlineMediaHeading,
  Reveal,
} from '@/components/ui'
import { BlogCard } from '@/features/blog'

export function BlogsSection() {
  const { blogs } = site.home
  const posts: readonly BlogPost[] = blogs.posts
  const { index, setIndex, next, prev, pauseHandlers } = useCarousel(
    posts.length,
  )

  // The middle slot is the featured one, so the window starts one before.
  const window = Array.from(
    { length: Math.min(3, posts.length) },
    (_, slot) => posts[(index + slot - 1 + posts.length) % posts.length],
  )

  return (
    <section className="bg-paper text-ink">
      <Reveal className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-12 sm:px-10 lg:gap-[32px] lg:px-[100px] lg:py-[75px]">
        <div className="flex items-start justify-between gap-6">
          <InlineMediaHeading
            lines={blogs.heading.lines}
            className="max-w-[640px] text-ink"
          />
          <CarouselArrows
            onPrev={prev}
            onNext={next}
            label="article"
            className="shrink-0 lg:mt-[52px]"
          />
        </div>

        <div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[351fr_506fr_351fr] lg:items-start"
          {...pauseHandlers}
        >
          {window.map((post, slot) => (
            <div
              key={`${index}-${slot}`}
              className={cn(slot !== 1 && 'max-sm:hidden')}
            >
              <BlogCard post={post} featured={slot === 1} />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between gap-6">
          <Link
            to={blogs.cta.path}
            className="inline-flex items-center gap-1 text-[16px] font-semibold text-secondary underline underline-offset-4 hover:brightness-110"
          >
            {blogs.cta.label}
            <ArrowUpRight className="size-5" />
          </Link>
          <CarouselDots
            count={posts.length}
            activeIndex={index}
            onSelect={setIndex}
            label="Show article"
          />
        </div>
      </Reveal>
    </section>
  )
}
