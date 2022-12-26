import React from "react"

import Post from "components/Post"
import Subscribe from "components/Subscribe"
import About from "components/About"
import {PageSEO} from "components/SEO"
import Pagination from "components/Pagination"
import {fetchAPI} from "lib/strapi"
import Button from "components/Button"

export async function getStaticProps() {
  const {
    data: posts,
    meta: {pagination},
  } = await fetchAPI("/blogs", {
    pagination: {pageSize: 10},
    sort: "createdAt:desc",
  })

  return {
    props: {posts, pagination},
    revalidate: 60,
  }
}

export default function BlogPage({
  posts: initPosts,
  pagination: initPagination,
}) {
  const [posts, setPosts] = React.useState(initPosts)
  const [pagination, setPagination] = React.useState(initPagination)
  const {page, pageCount} = pagination

  const loadMore = async () => {
    fetchAPI("/blogs", {
      pagination: {page: page + 1, pageSize: 10},
      sort: "createdAt:desc",
    }).then((res) => {
      setPosts([...posts, ...res.data])
      setPagination(res.meta.pagination)
    })
  }

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
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </section>

        {/* <Pagination {...pagination} /> */}
        {page < pageCount ? (
          <Button onClick={loadMore}>Load more</Button>
        ) : (
          `You've reached the end`
        )}
      </main>
    </>
  )
}
