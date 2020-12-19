import Link from "next/link"
import DateFormatter from "./date-formatter"

export default function PostPreview({title, date, slug}) {
  return (
    <article className="border-b border-gray-200 pb-5">
      <h4 className="text-2xl font-bold mb-2">
        <Link as={`/blog/${slug}`} href="/blog/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h4>
      <p className="text-gray-500 text-xs">
        <DateFormatter dateString={date} />
      </p>
    </article>
  )
}
