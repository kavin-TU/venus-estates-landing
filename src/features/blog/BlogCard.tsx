import { Link } from 'react-router-dom'
import type { BlogArticle } from '@/types'
import { cn } from '@/lib'

type BlogCardProps = {
  post: Pick<BlogArticle, 'date' | 'title' | 'image' | 'path'> & {
    excerpt?: string
  }
  featured?: boolean
  showExcerpt?: boolean
}

export function BlogCard({
  post,
  featured = false,
  showExcerpt = false,
}: BlogCardProps) {
  return (
    <Link to={post.path} className="group flex flex-col gap-3">
      <div className="overflow-hidden rounded-lg">
        <img
          src={post.image.src}
          alt={post.image.alt}
          className={cn(
            'w-full object-cover transition-transform duration-500 group-hover:scale-105',
            featured ? 'aspect-[506/280]' : 'aspect-[351/177]',
          )}
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-[14px] font-semibold text-ink/60">{post.date}</p>
        <h3
          className={cn(
            'text-[16px] font-semibold uppercase leading-snug text-ink transition-colors group-hover:text-secondary',
            featured && 'lg:max-w-[506px]',
          )}
        >
          {post.title}
        </h3>
        {showExcerpt ? (
          <p className="text-[14px] font-medium leading-5 text-ink/70 line-clamp-2">
            {post.excerpt}
          </p>
        ) : null}
      </div>
    </Link>
  )
}
