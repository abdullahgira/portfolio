import React from "react"

import {getAllPosts, getPostBySlug} from "lib/posts"

import Post from "components/Post"
import Subscribe from "components/Subscribe"
import About from "components/About"
import {PageSEO} from "components/SEO"
import Pagination from "components/Pagination"

export const POSTS_PER_PAGE = 6

export async function getStaticProps() {
  const posts = await getAllPosts()
  const perPage = posts.slice(0, POSTS_PER_PAGE)
  let postsWithContent = []

  for (let post of perPage) {
    let content = await getPostBySlug(post.slug)
    postsWithContent.push(content)
  }

  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return {
    props: {posts: postsWithContent, pagination},
  }
}

export default function BlogPage({posts, pagination}) {
  return (
    <>
      <PageSEO
        title="Blog | Abdullah Gira"
        description="A software engineer who loves to talk about business."
      />

      <main className="max-w-3xl mx-auto px-5 mt-16 mb-10 relative">
        <section>
          <About />
          <Subscribe />
          <hr />
        </section>

        <section className="mt-10">
          {posts.map((post, i) => (
            <Post key={post.date + i} {...post} />
          ))}
        </section>

        <Pagination {...pagination} />
      </main>
    </>
  )
}
