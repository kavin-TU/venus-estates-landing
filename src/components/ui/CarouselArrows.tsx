import { cn } from '@/lib'
import { ArrowLeft, ArrowRight } from './Icons'

type CarouselArrowsProps = {
  onPrev: () => void
  onNext: () => void
  label: string
  className?: string
}

export function CarouselArrows({
  onPrev,
  onNext,
  label,
  className,
}: CarouselArrowsProps) {
  const button =
    'flex size-8 items-center justify-center rounded-full text-ink transition-colors hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary'

  return (
    <div className={cn('flex items-center gap-6', className)}>
      <button
        type="button"
        onClick={onPrev}
        aria-label={`Previous ${label}`}
        className={button}
      >
        <ArrowLeft className="h-[21px] w-[25px]" />
      </button>
      <button
        type="button"
        onClick={onNext}
        aria-label={`Next ${label}`}
        className={button}
      >
        <ArrowRight className="h-[21px] w-[25px]" />
      </button>
    </div>
  )
}
