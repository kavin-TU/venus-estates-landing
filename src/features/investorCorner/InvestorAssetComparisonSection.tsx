import type { AssetComparisonColumn, EmphasisRun } from '@/types'
import { site } from '@/content'
import { cn } from '@/lib'
import { EmphasisText } from '@/components/ui'

function Column({ column }: { column: AssetComparisonColumn }) {
  const { highlighted } = column

  return (
    <div
      className={cn(
        'flex min-w-[220px] flex-1 flex-col',
        highlighted && 'relative rounded-2xl bg-secondary px-5 py-5 text-paper',
      )}
    >
      {column.badge ? (
        <span className="absolute right-5 top-5 rounded-full bg-paper px-3 py-1 text-[12px] font-semibold text-secondary">
          {column.badge}
        </span>
      ) : null}

      <h3
        className={cn(
          'text-[13px] font-semibold uppercase leading-snug',
          highlighted ? 'pr-20 text-paper' : 'text-secondary',
        )}
      >
        {column.label}
      </h3>

      <span
        className={cn('ml-[3px] mt-2 block h-6 w-px', highlighted ? 'bg-paper/40' : 'bg-ink/20')}
        aria-hidden="true"
      />

      <ul className="flex flex-col">
        {column.values.map((value, index) => {
          const isFirst = index === 0
          const isLast = index === column.values.length - 1

          return (
            <li key={index} className="relative flex flex-col gap-3 pl-6">
              <span
                className={cn(
                  'absolute left-0 top-1 rounded-full',
                  isFirst
                    ? cn('size-[7px] border-2', highlighted ? 'border-ink bg-paper' : 'border-secondary bg-paper')
                    : cn('size-[7px]', highlighted ? 'bg-ink' : 'bg-secondary'),
                )}
                aria-hidden="true"
              />
              {!isLast ? (
                <span
                  className={cn(
                    'absolute left-[3px] top-2 bottom-0 w-px',
                    highlighted ? 'bg-paper/40' : 'bg-ink/20',
                  )}
                  aria-hidden="true"
                />
              ) : null}

              <p className={cn('pb-6 text-[15px] font-medium', highlighted ? 'text-paper' : 'text-ink')}>
                {value}
              </p>
              {!isLast ? (
                <span
                  className={cn(
                    '-mt-6 mb-0 h-px w-full',
                    highlighted ? 'bg-paper/25' : 'bg-ink/10',
                  )}
                  aria-hidden="true"
                />
              ) : null}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export function InvestorAssetComparisonSection() {
  const { assetComparison } = site.investorCorner
  const heading: readonly EmphasisRun[] = assetComparison.heading

  return (
    <section className="bg-paper text-ink">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 py-12 sm:px-10 lg:gap-[50px] lg:px-[100px] lg:py-[75px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-[50px]">
          <h2 className="text-[24px] font-bold uppercase leading-[1.3125] sm:text-[28px] lg:w-[420px] lg:shrink-0 lg:text-[32px]">
            <EmphasisText runs={heading} />
          </h2>

          <p className="text-[16px] font-medium leading-[21px] text-ink lg:pt-1">
            {assetComparison.body}
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="flex min-w-[900px] gap-6">
            {assetComparison.columns.map((column, index) => (
              <Column key={index} column={column} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
