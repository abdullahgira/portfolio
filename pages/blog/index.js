import Head from "next/head"
import PostPreview from "components/post-preview"
import {getAllPosts} from "lib/posts"

export default function BlogPage({allPosts}) {
  return (
    <main className="max-w-2xl mt-16 mb-10 mx-auto px-5">
      <Head>
        <title key="title">Blog | Abdullah Gira</title>
        <meta content="All my blog posts live here" name="description" />
        <meta
          property="og:url"
          content="https://abdullahgira.com/blog"
          key="og:url"
        />
        <meta
          property="og:title"
          content="Blog | Abdullah Gira"
          key="og:title"
        />
        <meta
          property="twitter:url"
          content="https://abdullahgira.com/blog"
          key="twitter:url"
        />
        <meta
          property="twitter:title"
          content="Blog | Abdullah Gira"
          key="twitter:title"
        />
      </Head>
      <section className="flex flex-col items-center justify-center1">
        <img
          src="portfolio/me.webp"
          className="w-20 bg-blue-700 rounded-full"
          alt="my profile picture"
        />
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
