import Link from "next/link"
import PostPreview from "components/post-preview"
import {getAllPosts} from "lib/posts"

export default function BlogPage({allPosts}) {
  return (
    <main className="max-w-2xl my-10 mx-auto">
      <section className="flex items-center">
        <div className="h-16 w-16 bg-green-400 rounded-full mr-8"></div>
        <div>
          <h3 className="text-md">
            Personal blog by{" "}
            <strong>
              <Link as="/" href="/">
                <a className="underline">Abdullah Osama</a>
              </Link>
            </strong>
          </h3>
          <p className="text-sm mt-1 text-gray-700">I'm hooked to react.</p>
        </div>
      </section>
      <section className="mt-10">
        {allPosts.length > 0
          ? allPosts.map((post) => <PostPreview key={post.date} {...post} />)
          : null}
      </section>
    </main>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts(["title", "date", "slug"])

  return {
    props: {allPosts},
  }
}
