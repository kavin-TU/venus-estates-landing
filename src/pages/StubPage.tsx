import { site } from '@/content'

type StubPageProps = {
  title: string
  description?: string
}

export function StubPage({ title, description }: StubPageProps) {
  return (
    <section className="mx-auto flex min-h-[50vh] max-w-[1440px] flex-col justify-center px-4 py-20 sm:px-6 lg:px-10">
      <p className="text-sm font-medium tracking-[0.2em] text-accent">{site.nameUpper}</p>
      <h1 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
      <p className="mt-3 max-w-lg text-white/70">
        {description ?? 'This page is ready for content. The shared navbar and footer stay in place.'}
      </p>
    </section>
  )
}
