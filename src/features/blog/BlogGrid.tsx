import type { BlogArticle } from '@/types'
import { BlogCard } from './BlogCard'

export function BlogGrid({ posts }: { posts: readonly BlogArticle[] }) {
  if (posts.length === 0) {
    return (
      <p className="py-16 text-center text-[16px] font-medium text-ink/60">
        No articles yet.
      </p>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-10">
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} showExcerpt />
      ))}
    </div>
  )
}
