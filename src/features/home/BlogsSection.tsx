import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import type { BlogPost } from '@/types'
import { site } from '@/content'
import { cn, useCarousel } from '@/lib'
import {
  ArrowUpRight,
  CarouselArrows,
  CarouselDots,
  InlineMediaHeading,
} from '@/components/ui'

const EASE = [0.22, 1, 0.36, 1] as const

function BlogCard({ post, featured }: { post: BlogPost; featured: boolean }) {
  return (
    <Link to={post.path} className="group flex flex-col gap-3">
      <div className="overflow-hidden rounded-lg">
        <img
          src={post.image.src}
          alt={post.image.alt}
          className="aspect-[351/177] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-[14px] font-semibold text-ink/60">{post.date}</p>
        <h3
          className={cn(
            'text-[16px] font-semibold uppercase leading-snug text-ink transition-colors group-hover:text-secondary',
            featured && 'lg:max-w-[506px]',
          )}
        >
          {post.title}
        </h3>
      </div>
    </Link>
  )
}

export function BlogsSection() {
  const { blogs } = site.home
  const posts: readonly BlogPost[] = blogs.posts
  const { index, setIndex, next, prev, pauseHandlers, reducedMotion } =
    useCarousel(posts.length)

  // The middle slot is the featured one, so the window starts one before.
  const window = Array.from(
    { length: Math.min(3, posts.length) },
    (_, slot) => posts[(index + slot - 1 + posts.length) % posts.length],
  )

  return (
    <section className="bg-white text-ink">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-12 sm:px-10 lg:gap-[32px] lg:px-[100px] lg:py-[75px]">
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

        <motion.div
          key={index}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[351fr_506fr_351fr] lg:items-start"
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.45, ease: EASE }}
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
        </motion.div>

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
      </div>
    </section>
  )
}
