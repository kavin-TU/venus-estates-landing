import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { ImageAsset } from '@/types'
import { ArrowUpRight } from './ArrowUpRight'

type MediaListingCardProps = {
  to: string
  image: ImageAsset
  title: string
  subtitle: string
  badge: ReactNode
  ariaLabel: string
}

/** Shared plots / gallery / projects listing card chrome. */
export function MediaListingCard({
  to,
  image,
  title,
  subtitle,
  badge,
  ariaLabel,
}: MediaListingCardProps) {
  return (
    <Link
      to={to}
      aria-label={ariaLabel}
      className="group relative isolate block aspect-[608/404] overflow-hidden rounded-xl"
    >
      <img
        src={image.src}
        alt={image.alt}
        className="absolute inset-0 -z-10 size-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <span className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-ink/20" />

      <div className="absolute top-0 right-0 flex h-10 min-w-[211px] items-center justify-center gap-3 bg-secondary px-4 text-[14px] font-semibold text-paper sm:text-[16px]">
        {badge}
      </div>

      <div className="absolute inset-x-[30px] bottom-[30px] flex items-end justify-between gap-4">
        <div className="flex min-w-0 flex-col">
          <span className="truncate text-[20px] font-semibold uppercase text-paper lg:text-[24px]">
            {title}
          </span>
          <span className="truncate text-[16px] font-medium capitalize text-paper">
            {subtitle}
          </span>
        </div>

        <span className="flex size-[50px] shrink-0 items-center justify-center rounded-full bg-paper/15 text-paper backdrop-blur-[8px] transition-colors group-hover:bg-secondary">
          <ArrowUpRight className="size-6" />
        </span>
      </div>
    </Link>
  )
}
