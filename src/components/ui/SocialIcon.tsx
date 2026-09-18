import type { JSX } from 'react'
import type { SocialPlatform } from '@/types'
import { FacebookLogo, InstagramLogo, YoutubeLogo } from '@/components/ui/Icons'
import type { IconProps } from '@/components/ui/Icons'

const icons: Record<SocialPlatform, (props: IconProps) => JSX.Element> = {
  youtube: YoutubeLogo,
  facebook: FacebookLogo,
  instagram: InstagramLogo,
}

type SocialIconProps = IconProps & {
  platform: SocialPlatform
}

export function SocialIcon({ platform, className }: SocialIconProps) {
  const Icon = icons[platform]
  return <Icon className={className} />
}
