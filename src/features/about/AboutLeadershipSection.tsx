import type { EmphasisRun } from '@/types'
import { site } from '@/content'
import logo from '@/assets/images/logo.png'
import { EmphasisText, MediaImage, SectionShell } from '@/components/ui'

function LogoBadge() {
  return (
    <span className="absolute right-4 top-4 z-10 flex size-10 items-center justify-center rounded-full bg-paper shadow-md sm:right-5 sm:top-5 sm:size-12">
      <img src={logo} alt="" className="h-6 w-auto object-contain sm:h-7" aria-hidden="true" />
    </span>
  )
}

export function AboutLeadershipSection() {
  const { leadership } = site.aboutPage
  const heading: readonly EmphasisRun[] = leadership.heading

  return (
    <section className="bg-paper text-ink">
      <SectionShell>
        <h2 className="text-center text-[24px] font-bold uppercase leading-[1.3125] sm:text-[28px] lg:text-[32px]">
          <EmphasisText runs={heading} />
        </h2>

        {leadership.profiles.map((profile) => (
          <div
            key={profile.index}
            className="relative flex flex-col overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.06)] sm:flex-row sm:items-stretch"
          >
            {/* Left — bio */}
            <div className="relative flex w-full flex-col bg-mist text-ink sm:w-1/2">
              <span className="absolute left-0 top-0 z-10 flex size-8 items-center justify-center bg-footer text-[14px] font-bold text-paper sm:size-9 sm:text-[16px]">
                {profile.index}
              </span>
              <LogoBadge />

              <div className="flex flex-1 flex-col gap-4 px-6 pb-6 pt-14 sm:gap-5 sm:px-10 sm:pb-8 sm:pt-16">
                <div>
                  <p className="font-display text-[20px] font-bold leading-snug text-footer sm:text-[24px]">
                    {profile.name}
                  </p>
                  <p className="text-[16px] font-semibold text-ink">{profile.title}</p>
                </div>

                <div className="flex flex-col gap-3">
                  {profile.body.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-[14px] font-medium leading-relaxed text-ink sm:text-[15px]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-3 pt-6">
                  <span className="shrink-0 font-display text-[14px] font-semibold text-footer">
                    {site.name}
                  </span>
                  <span className="h-px flex-1 bg-footer/40" aria-hidden="true" />
                </div>
              </div>
            </div>

            {/* Right — photo (uncut) */}
            <div className="relative w-full bg-mist sm:w-1/2">
              <MediaImage
                src={profile.photo.src}
                alt={profile.photo.alt}
                className="h-auto w-full object-contain object-top"
              />
              <LogoBadge />

              <span
                className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink/85 to-transparent"
                aria-hidden="true"
              />

              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 px-5 pb-5 pt-16 sm:px-6 sm:pb-6">
                <div className="flex items-end justify-between gap-4">
                  <div className="min-w-0 text-paper">
                    <p className="font-display text-[16px] font-bold leading-snug sm:text-[18px]">
                      {profile.name}
                    </p>
                    <p className="text-[13px] font-medium text-paper/90 sm:text-[14px]">
                      {profile.title}
                    </p>
                  </div>
                  <span className="shrink-0 text-[12px] font-medium text-paper sm:text-[14px]">
                    {site.name}
                  </span>
                </div>
                <span className="h-px w-full bg-paper/70" aria-hidden="true" />
              </div>
            </div>
          </div>
        ))}
      </SectionShell>
    </section>
  )
}
