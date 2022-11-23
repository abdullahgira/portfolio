import React from "react"
import Head from "next/head"

import {getAllPosts} from "lib/posts"

import PostPreview from "components/PostPreview"
import Subscribe from "components/Subscribe"
import About from "components/About"

export async function getStaticProps() {
  const allPosts = await getAllPosts()

  return {
    props: {allPosts: allPosts},
  }
}

export default function BlogPage({allPosts}) {
  return (
    <main className="max-w-3xl mx-auto px-5 mt-16 mb-10 relative">
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
          property="og:description"
          content="All my blog posts live here"
          key="og:description"
        />
        <meta
          property="twitter:description"
          content="All my blog posts live here"
          key="twitter:description"
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

      <section>
        <About />

        <div className="border-b border-black">
          <Subscribe />
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
