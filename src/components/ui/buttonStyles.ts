/** Shared primary CTA pill styles (no fixed height — compose with h-12 / h-[45px] / py-3). */
export const primaryCtaBaseClass =
  'inline-flex items-center justify-center gap-1 rounded-full bg-secondary px-[25px] text-[16px] font-semibold text-paper transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary'

/** Default primary CTA — Link or submit button. */
export const primaryCtaClass = `${primaryCtaBaseClass} h-12`
