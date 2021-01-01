import Head from "next/head"
import Link from "next/link"
import PostPreview from "components/post-preview"
import {getAllPosts} from "lib/posts"

export default function BlogPage({allPosts}) {
  return (
    <main className="max-w-2xl my-10 mx-auto px-5">
      <Head>
        <title>Abdullah Gira blog</title>
      </Head>
      <section className="flex items-start">
        <img
          src="portfolio/me.jpg"
          className="w-16 bg-indigo-400 rounded-full mr-8"
        />
        <div>
          <h3 className="text-md">
            Personal blog by{" "}
            <strong>
              <Link as="/" href="/">
                <a className="underline text-indigo-800">Abdullah Gira</a>
              </Link>
            </strong>
          </h3>
          <p className="text-sm mt-1 text-gray-700">
            I talk about the web, mostly about react.
          </p>
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
  const allPosts = getAllPosts(["title", "date", "slug", "readTime"])

  return {
    props: {allPosts},
  }
}
