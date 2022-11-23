import Link from "next/link"
import DateFormatter from "./DateFormatter"
import Post from "./Post"

export default function PostPreview({title, date, slug, content}) {
  return (
    <article className="pb-5 mt-10">
      <p className="text-gray-400 mr-2 text-sm font-bold">
        <DateFormatter dateString={date} />
      </p>

      <h2 className="text-3xl font-bold mb-2">
        <Link href={`/blog/${slug}`}>
          <a className="hover:underline">{title}</a>
        </Link>
      </h2>

      <Post>{content}</Post>
    </article>
  )
}
