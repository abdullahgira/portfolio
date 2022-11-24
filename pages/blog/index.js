import React from "react"

import {getAllPosts} from "lib/posts"

import Post from "components/Post"
import Subscribe from "components/Subscribe"
import About from "components/About"
import {PageSEO} from "components/SEO"

export async function getStaticProps() {
  const allPosts = await getAllPosts()

  return {
    props: {allPosts: allPosts},
  }
}

export default function BlogPage({allPosts}) {
  return (
    <>
      <PageSEO title="Blog | Abdullah Gira" description="Personal Blog" />

      <main className="max-w-3xl mx-auto px-5 mt-16 mb-10 relative">
        <section>
          <About />
          <Subscribe />
          <hr />
        </section>

        <section className="mt-10">
          {allPosts.length > 0
            ? allPosts.map((post) => <Post key={post.date} {...post} />)
            : null}
        </section>
      </main>
    </>
  )
}
