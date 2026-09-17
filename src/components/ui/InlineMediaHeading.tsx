import type { InlineMediaHeadingSegment } from '@/types'
import { cn } from '@/lib'

type InlineMediaHeadingProps = {
  lines: readonly (readonly InlineMediaHeadingSegment[])[]
  as?: 'h2' | 'h3'
  className?: string
}

function HeadingSegment({ segment }: { segment: InlineMediaHeadingSegment }) {
  if (segment.type === 'image') {
    return (
      <span className="inline-block h-[30px] w-20 shrink-0 overflow-hidden rounded-full bg-white align-middle">
        <img
          src={segment.src}
          alt={segment.alt}
          className="h-full w-full object-cover"
          width={80}
          height={30}
        />
      </span>
    )
  }

  return (
    <span
      className={cn(
        'text-[32px] font-bold uppercase leading-none text-ink',
        segment.accent && 'text-secondary',
      )}
    >
      {segment.text}
    </span>
  )
}

export function InlineMediaHeading({
  lines,
  as: Tag = 'h2',
  className,
}: InlineMediaHeadingProps) {
  return (
    <Tag className={cn('flex flex-col items-start', className)}>
      {lines.map((line, lineIndex) => (
        <span
          key={lineIndex}
          className="flex flex-wrap items-center gap-2"
        >
          {line.map((segment, segmentIndex) => (
            <HeadingSegment
              key={`${lineIndex}-${segmentIndex}`}
              segment={segment}
            />
          ))}
        </span>
      ))}
    </Tag>
  )
}
