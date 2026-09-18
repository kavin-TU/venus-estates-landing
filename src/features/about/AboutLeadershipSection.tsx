import type { EmphasisRun } from '@/types'
import { site } from '@/content'
import logo from '@/assets/images/logo.png'

function LogoBadge() {
  return (
    <span className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-white shadow-md sm:size-12">
      <img src={logo} alt="" className="h-6 w-auto object-contain sm:h-7" aria-hidden="true" />
    </span>
  )
}

export function AboutLeadershipSection() {
  const { leadership } = site.aboutPage
  const heading: readonly EmphasisRun[] = leadership.heading

  return (
    <section className="bg-white text-ink">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-12 sm:px-10 lg:gap-[50px] lg:px-[100px] lg:py-[75px]">
        <h2 className="text-center text-[24px] font-bold uppercase leading-[1.3125] sm:text-[28px] lg:text-[32px]">
          {heading.map((run, index) => (
            <span key={index} className={run.accent ? 'text-secondary' : undefined}>
              {run.text}
            </span>
          ))}
        </h2>

        {leadership.profiles.map((profile) => (
          <div
            key={profile.index}
            className="relative flex flex-col overflow-hidden rounded-2xl border border-ink/10 sm:flex-row"
          >
            <span className="absolute left-6 top-0 z-10 flex h-12 w-9 items-end justify-center rounded-b-md bg-footer pb-2 text-[16px] font-bold text-white sm:left-10">
              {profile.index}
            </span>

            <div className="relative flex w-full flex-col gap-4 bg-sand p-6 pt-16 sm:w-1/2 sm:p-10 sm:pt-16">
              <LogoBadge />
              <div>
                <p className="text-[20px] font-bold leading-snug text-secondary sm:text-[24px]">
                  {profile.name}
                </p>
                <p className="text-[16px] font-semibold text-ink">{profile.title}</p>
              </div>
              <div className="flex flex-col gap-3">
                {profile.body.map((paragraph, index) => (
                  <p key={index} className="text-[14px] font-medium leading-relaxed text-ink/80">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="relative w-full sm:w-1/2">
              <img
                src={profile.photo.src}
                alt={profile.photo.alt}
                className="h-[320px] w-full object-cover sm:h-full"
                loading="lazy"
              />
              <LogoBadge />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent px-6 py-5" />
              <div className="absolute inset-x-0 bottom-0 px-6 py-5 text-white">
                <p className="text-[16px] font-bold leading-snug">{profile.name}</p>
                <p className="text-[14px] font-medium text-white/85">{profile.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
