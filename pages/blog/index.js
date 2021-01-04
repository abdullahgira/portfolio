import Head from "next/head"
import Link from "next/link"
import PostPreview from "components/post-preview"
import {getAllPosts} from "lib/posts"

export default function BlogPage({allPosts}) {
  return (
    <main className="max-w-2xl mt-16 mb-10 mx-auto px-5">
      <Head>
        <title>Abdullah Gira blog</title>
      </Head>
      <section className="flex flex-col items-center justify-center">
        <img
          src="portfolio/me.jpg"
          className="w-28 bg-indigo-400 rounded-full mr-8"
        />
        <div>
          <p className="mt-2 text-center text-md w-96">
            I talk about the web and it's latest technologies and challenges.
          </p>
        </div>
      </section>
      <section className="mt-16">
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
