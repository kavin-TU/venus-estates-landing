export type NavLink = {
  label: string
  path: string
}

export type SocialPlatform = 'youtube' | 'facebook' | 'instagram'

export type SocialLink = {
  id: SocialPlatform
  label: string
  href: string
}

export type CtaLink = {
  label: string
  path: string
}

export type InlineMediaHeadingSegment =
  | { type: 'text'; text: string; accent?: boolean }
  | { type: 'image'; src: string; alt: string }

export type StatItem = {
  value: string
  suffix?: string
  label: string
}

export type SiteAddress = {
  company: string
  lines: readonly string[]
}

export type SiteContact = {
  phoneDisplay: string
  phoneHref: string
  email: string
}
