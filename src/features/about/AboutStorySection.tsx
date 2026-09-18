import { site } from '@/content'

export function AboutStorySection() {
  const { story } = site.aboutPage

  return (
    <section className="relative isolate overflow-hidden bg-sand text-ink">
      <div className="mx-auto grid max-w-[1440px] gap-8 px-6 pt-12 sm:grid-cols-2 sm:gap-x-12 sm:px-10 lg:gap-x-16 lg:px-[100px] lg:pt-[75px]">
        <div className="flex flex-col gap-6">
          {story.paragraphsLeft.map((paragraph, index) => (
            <p key={index} className="text-[16px] font-medium leading-[26px] text-ink">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="flex flex-col gap-6">
          {story.paragraphsRight.map((paragraph, index) => (
            <p key={index} className="text-[16px] font-medium leading-[26px] text-ink">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* Full-bleed sketch under the copy; sand shows through via multiply */}
      <div className="relative mt-10 w-full overflow-hidden lg:mt-14">
        <img
          src={story.watermark.src}
          alt=""
          aria-hidden="true"
          className="relative left-1/2 block h-auto w-screen max-w-none -translate-x-1/2 scale-[1.2] origin-bottom object-cover object-bottom mix-blend-multiply [mask-image:linear-gradient(to_bottom,transparent_0%,black_22%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_22%)]"
          loading="lazy"
        />
      </div>
    </section>
  )
}
