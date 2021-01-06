import Head from "next/head"
import PostPreview from "components/post-preview"
import {getAllPosts} from "lib/posts"

export default function BlogPage({allPosts}) {
  return (
    <main className="max-w-2xl mt-16 mb-10 mx-auto px-5">
      <Head>
        <title>Abdullah Gira blog</title>
      </Head>
      <section className="flex flex-col items-center justify-center1">
        <img
          src="portfolio/me.webp"
          className="w-20 bg-blue-700 rounded-full"
        />
        <div>
          <p className="mt-5 text-gray-500 text-center text-md md:w-3/4 mx-auto">
            I talk about the web and its latest technologies and the challenges
            it solves
          </p>
        </div>
      </section>
      <section className="mt-20">
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
