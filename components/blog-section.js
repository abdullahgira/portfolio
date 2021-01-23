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
          <div className="w-20 h-1 bg-blue-700 absolute -bottom-3 right-1/2 -mr-6 md:-mr-5"></div>
          <h2 className="text-3xl text-center font-bold">My Blog</h2>
        </div>
        <p className="md:w-2/5 mx-auto">
          These are my recent posts, you can also visit my blog page to{" "}
          <Link as="/blog" href="/blog">
            <a className="text-blue-700 hover:text-blue-900 mt-3 pb-1 border-b-2 border-blue-700">
              view all the posts 📖️
            </a>
          </Link>
        </p>
      </div>

      <div className="flex justify-center flex-wrap gap-8">
        {lastThreePosts.map((post) => (
          <div
            key={post.date}
            className="max-w-sm shadow-lg px-8 py-5 rounded-xl border border-gray-200 relative flex flex-col"
          >
            <p className="text-gray-500 mb-1">
              <DateFormatter dateString={post.date} />
            </p>
            <Link as={`blog/${post.slug}`} href={`blog/${post.slug}`}>
              <a className="text-2xl font-bold stretched-link hover:underline">
                {post.title}
              </a>
            </Link>

            <p className="text-blue-700 mt-auto">{post.readTime} Min Read</p>
          </div>
        ))}
      </div>
    </div>
  )
}
