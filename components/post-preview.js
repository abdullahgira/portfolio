import Link from "next/link"
import DateFormatter from "./date-formatter"

export default function PostPreview({title, date, slug, readTime}) {
  return (
    <article className="border-b border-gray-200 pb-5 mt-5">
      <h4 className="text-2xl font-bold mb-2">
        <Link as={`/blog/${slug}`} href="/blog/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h4>
      <div className="flex text-xs">
        <p className="text-gray-500 mr-2">
          <DateFormatter dateString={date} />
        </p>
        <p className="mr-2">•</p>
        <p className="text-blue-700">{readTime} Min Read</p>
      </div>
    </article>
  )
}
