import Link from "next/link"
import DateFormatter from "./date-formatter"

export default function PostPreview({title, date, slug, readTime}) {
  return (
    <article className="border-b border-gray-200 pb-5">
      <h4 className="text-2xl font-bold mb-2">
        <Link as={`/blog/${slug}`} href="/blog/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h4>
      <div className="flex gap-3 text-xs">
        <p className="text-gray-500">
          <DateFormatter dateString={date} />
        </p>
        <p>•</p>
        <p className="text-indigo-600">{readTime} Min Read</p>
      </div>
    </article>
  )
}
