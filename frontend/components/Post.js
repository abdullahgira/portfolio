import Link from "next/link"
import {useRouter} from "next/router"

import DateFormatter from "./DateFormatter"
import Markdown from "./Markdown"
import ShareButtons from "./ShareButtons"

import {titleCase} from "utils/string"

export default function Post({post}) {
  const router = useRouter()

  const {
    title,
    publishedAt: date,
    content,
    slug: postSlug,
    type,
    description,
  } = post.attributes

  const slug = `/blog/${postSlug}`
  const isPostPath = router.asPath === slug
  const renderMarkdown =
    type === "thought" || (type !== "thoguth" && isPostPath)

  return (
    <article className="pb-5 mb-14">
      <h2 className="text-2xl font-bold mb-4">
        {isPostPath ? (
          title
        ) : (
          <Link href={slug}>
            <a className="hover:underline">{title}</a>
          </Link>
        )}
      </h2>

      {renderMarkdown ? (
        <article className="prose prose-pre:py-2 prose-pre:shadow-md max-w-none">
          <Markdown content={content} />
        </article>
      ) : (
        <>
          <p className="mb-2">{description}</p>
          <Link href={slug}>
            <a className="underline underline-offset-2">Read more &rarr;</a>
          </Link>
        </>
      )}

      <hr className="mt-5 mb-3" />

      <div className="flex items-center justify-between">
        <p className="text-gray-600 mr-2 text-sm">
          <DateFormatter dateString={date} /> • {titleCase(type)}
        </p>
        <ShareButtons slug={slug} />
      </div>
    </article>
  )
}
