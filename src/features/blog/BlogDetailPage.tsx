import { Navigate, useParams } from 'react-router-dom'
import type { EmphasisRun } from '@/types'
import { site } from '@/content'
import { BlogArticleBody } from './BlogArticleBody'
import { BlogCard } from './BlogCard'

export function BlogDetailPage() {
  const { slug = '' } = useParams<{ slug: string }>()
  const post = site.blog.posts.find((item) => item.slug === slug)

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  const related = site.blog.posts.filter((item) => item.slug !== slug).slice(0, 3)
  const relatedHeading: readonly EmphasisRun[] = site.blog.relatedHeading

  return (
    <section className="bg-paper text-ink">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-10 sm:px-10 lg:gap-[50px] lg:px-[100px] lg:pb-[75px] lg:pt-10">
        <article className="flex flex-col gap-6 lg:gap-8">
          <div className="overflow-hidden rounded-lg">
            <img
              src={post.image.src}
              alt={post.image.alt}
              className="aspect-[1240/480] w-full object-cover"
              loading="eager"
            />
          </div>

          <header className="flex max-w-[820px] flex-col gap-2">
            <p className="text-[14px] font-semibold text-ink/60">{post.date}</p>
            <h1 className="text-[24px] font-bold uppercase leading-snug text-ink sm:text-[28px] lg:text-[32px]">
              {post.title}
            </h1>
          </header>

          <div className="max-w-[820px]">
            <BlogArticleBody blocks={post.body} />
          </div>
        </article>

        {related.length > 0 ? (
          <div className="flex flex-col gap-6 lg:gap-8">
            <h2 className="text-[24px] font-bold uppercase leading-[1.3125] text-ink sm:text-[28px] lg:text-[32px]">
              {relatedHeading.map((run, index) => (
                <span
                  key={index}
                  className={run.accent ? 'text-secondary' : undefined}
                >
                  {run.text}
                </span>
              ))}
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-5">
              {related.map((item) => (
                <BlogCard key={item.slug} post={item} showExcerpt />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}
