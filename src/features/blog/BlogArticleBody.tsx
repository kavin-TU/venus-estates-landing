import type { BlogBodyBlock } from '@/types'

export function BlogArticleBody({ blocks }: { blocks: readonly BlogBodyBlock[] }) {
  return (
    <div className="flex flex-col gap-6 text-ink">
      {blocks.map((block, index) => {
        if (block.type === 'heading') {
          return (
            <h2
              key={index}
              className="text-[20px] font-bold uppercase leading-snug text-ink sm:text-[24px]"
            >
              {block.text}
            </h2>
          )
        }

        if (block.type === 'list') {
          return (
            <ul
              key={index}
              className="list-disc space-y-2 pl-5 text-[16px] font-medium leading-[21px] text-ink"
            >
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )
        }

        return (
          <p
            key={index}
            className="text-[16px] font-medium leading-[21px] text-ink lg:text-justify"
          >
            {block.text}
          </p>
        )
      })}
    </div>
  )
}
