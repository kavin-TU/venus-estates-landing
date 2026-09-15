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

export type SiteAddress = {
  company: string
  lines: readonly string[]
}

export type SiteContact = {
  phoneDisplay: string
  phoneHref: string
  email: string
}
