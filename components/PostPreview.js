import Link from "next/link"
import DateFormatter from "./DateFormatter"
import Post from "./Post"

export default function PostPreview({title, date, slug, content}) {
  return (
    <article className="pb-5 mt-5">
      <p className="text-gray-500 mr-2 text-sm">
        <DateFormatter dateString={date} />
      </p>

      <h4 className="text-2xl font-bold mb-2">
        <Link as={`/blog/${slug}`} href="/blog/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h4>

      <Post>{content}</Post>
    </article>
  )
}
