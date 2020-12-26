import Link from "next/link"
import DateFormatter from "./date-formatter"

export default function BlogSection({lastThreePosts = []}) {
  return (
    <div className="my-10">
      <div className="mb-16 text-center">
        <div className="relative mb-28">
          <img
            src="portfolio/triangle.svg"
            alt="decorating triangle"
            className="absolute w-40 -top-20 left-1/2 -ml-8 -z-10"
          />
          <img
            src="portfolio/fewer-circles.svg"
            alt="decorating small circles"
            className="absolute w-16 -top-3 left-1/2 ml-10 -z-10"
          />
          <div className="w-20 h-1 bg-indigo-700 absolute -bottom-3 right-1/2 -mr-5"></div>
          <h2 className="text-3xl text-center font-bold">My Blog</h2>
        </div>
        <p>
          These are my latest three blog posts, you can also visit the blog to{" "}
          <Link as="/blog" href="/blog">
            <a className="underline hover:text-black mt-3">
              view all the posts 📖️
            </a>
          </Link>
        </p>
      </div>

      <div className="flex justify-center flex-wrap gap-8">
        {lastThreePosts.map((post) => (
          <div
            key={post.date}
            className="max-w-sm mb-10 p-8 rounded-lg border border-gray-100 relative"
          >
            <Link as={`blog/${post.slug}`} href={`blog/${post.slug}`}>
              <a className="text-3xl font-extrabold tracking-tighter stretched-link hover:underline">
                {post.title}
              </a>
            </Link>
            <div className="flex flex-wrap gap-3 mt-4">
              <p className="text-gray-500">
                <DateFormatter dateString={post.date} />
              </p>
              <p>•</p>
              <p className="text-indigo-600">{post.readTime} Min Read</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
