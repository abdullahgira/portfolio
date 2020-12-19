import Link from "next/link"
import DateFormatter from "./date-formatter"

export default function BlogSection({lastThreePosts = []}) {
  return (
    <div className="my-20">
      <div className="mb-16 text-center">
        <h2 className="text-2xl font-semibold mb-3">Blog</h2>
        <Link as="/blog" href="/blog">
          <a className="underline hover:text-black mt-3">📖️ View all posts</a>
        </Link>
      </div>

      <div className="flex justify-around flex-wrap">
        {lastThreePosts.map((post) => (
          <div key={post.date} className="max-w-xs mb-10">
            <h3 className="text-3xl font-extrabold mb-4">{post.title}</h3>
            <p className="mb-2">
              <DateFormatter dateString={post.date} />
            </p>
            <Link as={`blog/${post.slug}`} href={`blog/${post.slug}`}>
              <a className="underline hover:text-black">🔗️ Read more</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
