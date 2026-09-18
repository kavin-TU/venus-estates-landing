import type { EmphasisRun } from '@/types'

type EmphasisTextProps = {
  runs: readonly EmphasisRun[]
}

/** Renders emphasis runs; accent runs use the brand secondary color. */
export function EmphasisText({ runs }: EmphasisTextProps) {
  return runs.map((run, index) => (
    <span key={index} className={run.accent ? 'text-secondary' : undefined}>
      {run.text}
    </span>
  ))
}
