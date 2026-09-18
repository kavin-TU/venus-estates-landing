import { cn } from '@/lib'

/**
 * Card strip. Desktop lays 4 cards edge-to-edge with no gutter, exactly as the
 * 1440 frame does; below that it becomes a snap-scrolling rail.
 */
export const projectsRail = cn(
  // shared
  'flex',
  // mobile — snap rail, cards peek at the right edge
  'snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-2',
  // tablet — two per row
  'md:max-lg:grid md:max-lg:grid-cols-2 md:max-lg:gap-4 md:max-lg:overflow-visible md:max-lg:px-10',
  // desktop — flush 4-up, full bleed
  'lg:grid lg:grid-cols-4 lg:gap-0 lg:overflow-visible lg:px-0',
)

/** One project card. */
export const projectsCard = cn(
  // shared
  'group relative isolate block overflow-hidden',
  // mobile
  'w-[280px] shrink-0 snap-start rounded-xl',
  // tablet
  'md:max-lg:w-auto',
  // desktop — fixed 360x607 tile, square corners, no gutter
  'lg:h-[607px] lg:w-full lg:rounded-none',
)

/** Aspect ratio placeholder so mobile cards keep the design's proportion. */
export const projectsCardRatio = cn(
  // shared
  'aspect-[360/607]',
  // desktop — height is fixed instead
  'lg:aspect-auto lg:h-full',
)

/** "50+ Plots", set sideways so it reads bottom-to-top up the left edge. */
export const projectsPlots = cn(
  // shared
  'absolute bottom-5 left-5 z-10 text-[16px] font-semibold whitespace-nowrap text-paper',
  '[writing-mode:vertical-rl] rotate-180',
)
