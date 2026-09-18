import { Link } from 'react-router-dom'
import { site } from '@/content'
import { ArrowUpRight, SocialIcon } from '@/components/ui'

export function Footer() {
  const {
    nameUpper,
    about,
    address,
    contact,
    quickLinks,
    legalLinks,
    socialLinks,
    cta,
    footer,
  } = site

  return (
    <footer className="bg-footer text-paper">
      <div className="mx-auto max-w-[1440px] px-4 pt-14 pb-6 sm:px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <p className="font-display text-lg font-extrabold tracking-[0.12em]">{nameUpper}</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/85">{about}</p>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-sm font-semibold tracking-[0.14em]">{footer.quickLinksHeading}</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-paper/90">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="transition hover:text-paper">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-sm font-semibold tracking-[0.14em]">{footer.addressHeading}</h2>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/90">
              {address.company}
              <br />
              {address.lines.join(' ')}
            </p>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:justify-between lg:col-span-4 lg:flex-col lg:gap-6 xl:flex-row">
            <div>
              <h2 className="text-sm font-semibold tracking-[0.14em]">{footer.contactHeading}</h2>
              <a
                href={contact.phoneHref}
                className="mt-4 block text-sm text-paper/90 transition hover:text-paper"
              >
                {contact.phoneDisplay}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="mt-1 inline-block text-sm text-paper underline underline-offset-4"
              >
                {contact.email}
              </a>
            </div>

            <div className="max-w-[220px]">
              <p className="text-sm font-semibold leading-snug tracking-[0.06em]">
                {footer.assistancePrompt}
              </p>
              <Link
                to={cta.connect.path}
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-paper px-5 py-2 text-sm font-medium transition hover:bg-paper/10"
              >
                {cta.connect.label}
                <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-paper/40 pt-8">
          <div className="flex justify-center gap-4">
            {socialLinks.map(({ id, label, href }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="inline-flex size-10 items-center justify-center rounded-full border border-paper/80 text-paper transition hover:bg-paper/10"
              >
                <SocialIcon platform={id} />
              </a>
            ))}
          </div>

          <p className="mt-5 text-center text-sm text-paper/90">
            {legalLinks.map((link, index) => (
              <span key={link.path}>
                {index > 0 ? <span className="mx-2 text-paper/50">|</span> : null}
                <Link to={link.path} className="transition hover:text-paper">
                  {link.label}
                </Link>
              </span>
            ))}
          </p>
        </div>

        <div className="mt-10 overflow-hidden pb-2">
          <p
            className="font-display select-none text-center text-[clamp(2.75rem,14vw,11rem)] font-extrabold leading-none tracking-[0.02em] text-paper"
            aria-hidden="true"
          >
            {nameUpper}
          </p>
        </div>
      </div>
    </footer>
  )
}
