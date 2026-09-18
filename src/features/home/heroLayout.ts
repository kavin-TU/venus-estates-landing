import { cn } from '@/lib'

/** Hero bg + cutout image framing */
export const heroMediaFrame = cn(
  // shared
  'absolute max-w-none',
  // mobile (<768)
  'max-md:top-[38%] max-md:left-[21%] max-md:h-auto max-md:w-[270%] max-md:-translate-x-1/2 max-md:-translate-y-1/2',
  // tablet (768–1023)
  'md:max-lg:top-[42%] md:max-lg:left-[30%] md:max-lg:h-auto md:max-lg:w-[180%] md:max-lg:-translate-x-1/2 md:max-lg:-translate-y-1/2',
  // desktop (≥1024)
  'lg:inset-0 lg:size-full lg:translate-x-0 lg:translate-y-0 lg:object-cover lg:object-[center_12%]',
)

/** About + Explore block */
export const heroAbout = cn(
  // shared
  'pointer-events-auto absolute inset-x-4 bottom-auto flex w-auto max-w-[346px] flex-col items-start gap-5 text-left max-lg:mx-0',
  // mobile
  'top-[42%]',
  // tablet
  'md:max-lg:top-[36%]',
  // desktop
  'lg:inset-x-auto lg:top-[369px] lg:left-[183px] lg:w-[346px] lg:gap-[30px]',
)

/** VENUS watermark — base styles + transform transition (CSS owns breakpoint Y) */
export const heroWatermark = cn(
  // shared
  'pointer-events-none absolute top-0 left-1/2 z-[1] -translate-x-1/2 font-display leading-none font-extrabold tracking-tight whitespace-nowrap text-paper select-none',
  'transition-transform duration-[1150ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none',
  // mobile + tablet type
  'text-[clamp(48px,16vw,88px)]',
  // desktop type
  'lg:text-[min(280px,18vw)]',
)

/** Intro: above viewport */
export const heroWatermarkIntro = '-translate-y-[95%]'

/** Settled Y — Tailwind breakpoints (no JS resize listener) */
export const heroWatermarkSettled = cn(
  // mobile
  'translate-y-[125%]',
  // tablet
  'md:max-lg:translate-y-[80%]',
  // desktop
  'lg:translate-y-[18%]',
)

/** Stats carousel layout */
export const heroStats = {
  row: cn(
    // shared
    'pointer-events-auto absolute inset-x-4 top-auto left-4 right-4 flex h-auto items-stretch justify-between gap-2',
    // mobile
    'bottom-56',
    // tablet
    'md:max-lg:bottom-24',
    // desktop
    'lg:inset-x-auto lg:top-[679px] lg:right-auto lg:bottom-auto lg:left-[647px] lg:h-[110px] lg:items-end lg:justify-start lg:gap-4',
  ),
  card: cn(
    // shared
    'flex min-w-0 flex-1 flex-col items-start justify-between gap-2 rounded-[12px] bg-glass px-3 py-3 text-paper backdrop-blur-[8px]',
    // mobile
    'min-h-[72px]',
    // tablet
    'md:max-lg:min-h-[88px]',
    // desktop
    'lg:h-[110px] lg:min-h-0 lg:w-[190px] lg:flex-none lg:justify-center lg:gap-2 lg:rounded-[15px] lg:px-5 lg:py-0',
  ),
  slide: cn(
    // shared
    'relative shrink-0 self-end overflow-hidden rounded-lg bg-glass backdrop-blur-[25px]',
    // mobile
    'h-[72px] w-[100px]',
    // tablet
    'md:max-lg:h-[100px] md:max-lg:w-[140px]',
    // desktop
    'lg:h-[150px] lg:w-[300px]',
  ),
  value: cn(
    // shared
    'font-stat leading-none font-semibold whitespace-nowrap text-paper',
    // mobile
    'text-[22px]',
    // tablet
    'md:max-lg:text-[28px]',
    // desktop
    'lg:text-[40px] lg:leading-[50px]',
  ),
} as const
