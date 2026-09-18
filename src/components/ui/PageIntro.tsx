import type { EmphasisRun } from '@/types'
import { EmphasisText } from './EmphasisText'

type PageIntroProps = {
  heading: readonly EmphasisRun[]
  body: string
  /** Default h1; projects listing uses h2 under a banner. */
  as?: 'h1' | 'h2'
}

/** Shared listing-page intro: narrow heading + justified body. */
export function PageIntro({ heading, body, as = 'h1' }: PageIntroProps) {
  const Heading = as

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-[50px]">
      <Heading className="text-[24px] font-bold uppercase leading-[1.3125] text-ink sm:text-[28px] lg:w-[292px] lg:shrink-0 lg:text-[32px]">
        <EmphasisText runs={heading} />
      </Heading>

      <p className="text-[16px] font-medium leading-[21px] text-ink lg:w-[598px] lg:text-justify">
        {body}
      </p>
    </div>
  )
}
