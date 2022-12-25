import React from "react"

import About from "components/About"
import Pagination from "components/Pagination"
import Post from "components/Post"
import {PageSEO} from "components/SEO"
import Subscribe from "components/Subscribe"

import {getAllPosts, getPostBySlug} from "lib/posts"
import {POSTS_PER_PAGE} from ".."

export async function getStaticPaths() {
  const totalPosts = await getAllPosts()
  const totalPages = Math.ceil(totalPosts.length / POSTS_PER_PAGE)
  const paths = Array.from({length: totalPages}, (_, i) => ({
    params: {page: (i + 1).toString()},
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const {
    params: {page},
  } = context
  const pageNumber = parseInt(page)

  const posts = await getAllPosts()
  const perPage = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  let postsWithContent = []

  for (let post of perPage) {
    let content = await getPostBySlug(post.slug)
    postsWithContent.push(content)
  }

  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return {
    props: {posts: postsWithContent, pagination},
  }
}

const Page = ({posts, pagination}) => {
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

export default Page
