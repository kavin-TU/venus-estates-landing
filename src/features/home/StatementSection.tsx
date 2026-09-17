import type { EmphasisRun } from '@/types'
import { site } from '@/content'

export function StatementSection() {
  const statement: readonly EmphasisRun[] = site.home.statement

  return (
    <section className="bg-white text-ink">
      <div className="mx-auto max-w-[1440px] px-6 py-12 sm:px-10 lg:py-[75px]">
        <p className="mx-auto max-w-[1066px] text-center text-[20px] font-semibold leading-[1.32] sm:text-[26px] lg:text-[32px]">
          {statement.map((run, index) => (
            <span key={index} className={run.muted ? 'text-ink/50' : undefined}>
              {run.text}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}
