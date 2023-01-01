import React from "react"

import Post from "components/Post"
import About from "components/About"
import {PageSEO} from "components/SEO"
import {fetchAPI} from "lib/strapi"
import InfiniteScroll from "react-infinite-scroll-component"

const PAGE_SIZE = 6

export async function getStaticProps() {
  const {
    data: posts,
    meta: {pagination},
  } = await fetchAPI("/blogs", {
    pagination: {pageSize: PAGE_SIZE},
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
  const [loading, setLoading] = React.useState(false)
  const [posts, setPosts] = React.useState(initPosts)
  const [pagination, setPagination] = React.useState(initPagination)
  const {page, pageCount: totalPages} = pagination

  const loadMore = async () => {
    setLoading(true)
    fetchAPI("/blogs", {
      pagination: {page: page + 1, pageSize: PAGE_SIZE},
      sort: "createdAt:desc",
    })
      .then((res) => {
        setPosts([...posts, ...res.data])
        setPagination(res.meta.pagination)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <>
      <PageSEO
        title="Blog | Abdullah Gira"
        description="A software engineer who loves to talk about business."
      />

      <main className="max-w-prose mx-auto px-5 mt-16 mb-10 relative">
        <section>
          <About />
          <hr />
        </section>

        <section className="mt-10">
          <InfiniteScroll
            dataLength={posts.length}
            hasMore={page < totalPages}
            next={loadMore}
            loader="Loading..."
            endMessage="You've reached the end"
          >
            {posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </InfiniteScroll>
        </section>
      </main>
    </>
  )
}
