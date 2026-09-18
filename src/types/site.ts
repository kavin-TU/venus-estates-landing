export type NavLink = {
  label: string
  path: string
  /** Sub-pages shown in a dropdown (desktop) / indented list (mobile) under this link. */
  children?: readonly NavLink[]
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

/** One block of long-form article copy on a blog detail page. */
export type BlogBodyBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: readonly string[] }

/** Full article used by /blog listing + /blog/:slug (home teasers reuse a subset). */
export type BlogArticle = {
  slug: string
  date: string
  title: string
  excerpt: string
  image: ImageAsset
  path: string
  body: readonly BlogBodyBlock[]
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

/** An album card on the /gallery listing page. */
export type GalleryAlbum = {
  slug: string
  name: string
  location: string
  imageCountLabel: string
  cover: ImageAsset
  path: string
  images: readonly ImageAsset[]
}

export type EnquiryField = {
  name: string
  label: string
  placeholder: string
}

/** One numbered item in a "why Salem" growth-stat row, shared by the NRI and Investor corner pages. */
export type GrowthStat = {
  /** Two-digit ordinal shown above the value, e.g. '01' */
  index: string
  value: string
  label: string
}

export type NriCredentialTone = 'primary' | 'accent'

export type NriCredentialCard = {
  tone: NriCredentialTone
  icon: ImageAsset
  /** Large low-opacity icon in the card's bottom-right corner; only set on some cards. */
  watermark?: ImageAsset
  title: string
}

/** One column of the Investor Corner asset-class comparison table. */
export type AssetComparisonColumn = {
  label: string
  highlighted?: boolean
  badge?: string
  /** Exactly 4 rows, in the same fixed order for every column. */
  values: readonly string[]
}

export type CapitalGrowthCard = {
  icon: ImageAsset
  title: string
  body: string
}

/** One numbered step in the Contact page's "What To Expect?" row. */
export type ContactStep = {
  index: string
  title: string
  body: string
}

/** One run of consent copy; runs with a path render as links */
export type ConsentRun = {
  text: string
  path?: string
}

export type AboutFocusCard = {
  icon: ImageAsset
  title: string
  body: string
}

export type AboutStat = {
  value: string
  label: string
}

export type LeaderProfile = {
  index: string
  name: string
  title: string
  body: readonly string[]
  photo: ImageAsset
}
