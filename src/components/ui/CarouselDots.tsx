import { cn } from '@/lib'

type CarouselDotsProps = {
  count: number
  activeIndex: number
  onSelect: (index: number) => void
  label?: string
  className?: string
}

/** Active slide reads as a ring, the rest as solid 10px dots. */
export function CarouselDots({
  count,
  activeIndex,
  onSelect,
  label = 'Choose slide',
  className,
}: CarouselDotsProps) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      {Array.from({ length: count }, (_, index) => {
        const active = index === activeIndex
        return (
          <button
            key={index}
            type="button"
            onClick={() => onSelect(index)}
            aria-label={`${label} ${index + 1}`}
            aria-current={active}
            className={cn(
              'flex items-center justify-center rounded-full transition-colors',
              'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary',
              active
                ? 'size-5 border-2 border-secondary'
                : 'size-2.5 bg-secondary hover:brightness-110',
            )}
          >
            {active ? (
              <span className="size-2.5 rounded-full bg-secondary" />
            ) : null}
          </button>
        )
      })}
    </div>
  )
}
