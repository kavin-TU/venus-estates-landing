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

export type ImageAsset = {
  src: string
  alt: string
}

export type ProjectCard = {
  /** Two-digit ordinal shown above the name, e.g. '01' */
  index: string
  name: string
  plots: string
  image: ImageAsset
  path: string
}

export type ReasonIcon =
  | 'transparent'
  | 'legal'
  | 'approved'
  | 'onTime'
  | 'location'

export type ReasonCard = {
  icon: ReasonIcon
  title: string
  body: string
  /** Set on the single featured card, which renders light-on-image */
  image?: ImageAsset
}

/** One run of mixed-emphasis copy: accent runs render orange, muted runs grey */
export type EmphasisRun = {
  text: string
  accent?: boolean
  muted?: boolean
}

export type Testimonial = {
  quote: string
  name: string
  rating: number
  avatar: ImageAsset
}

export type FaqItem = {
  question: string
  answer: string
}

export type BlogPost = {
  date: string
  title: string
  image: ImageAsset
  path: string
}

export type ProjectStatus = 'upcoming' | 'ongoing' | 'completed'

export type ProjectFilter = {
  id: ProjectStatus | 'all'
  label: string
}

/** A project on the /projects listing page (distinct from the home ProjectCard). */
export type ProjectListing = {
  name: string
  location: string
  status: ProjectStatus
  statusLabel: string
  image: ImageAsset
  path: string
}

export type PlotFacing = 'north' | 'south' | 'east' | 'west'

export type PlotFilterOption = {
  id: string
  label: string
}

/** A plot card on the /plots listing page. */
export type PlotListing = {
  slug: string
  name: string
  location: string
  facing: PlotFacing
  facingLabel: string
  sqft: number
  sqftLabel: string
  priceBand: string
  image: ImageAsset
  path: string
}

export type PlotStat = {
  value: string
  label: string
}

export type EnquiryField = {
  name: string
  label: string
  placeholder: string
}

/** One run of consent copy; runs with a path render as links */
export type ConsentRun = {
  text: string
  path?: string
}
