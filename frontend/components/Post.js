import Link from "next/link"

import DateFormatter from "./DateFormatter"
import Markdown from "./Markdown"
import ShareButtons from "./ShareButtons"

export default function Post({post}) {
  const {title, publishedAt: date, content, slug: postSlug} = post.attributes
  const slug = `/blog/${postSlug}`

  return (
    <article className="pb-5 mb-20">
      <p className="text-gray-400 mr-2 text-sm font-bold">
        <DateFormatter dateString={date} />
      </p>

      <h2 className="text-2xl font-bold mb-4">
        <Link href={slug}>
          <a className="hover:underline">{title}</a>
        </Link>
      </h2>

      <article className="prose prose-pre:py-2 prose-pre:shadow-md max-w-none">
        <Markdown content={content} />
      </article>
      <ShareButtons slug={slug} />
    </article>
  )
}
