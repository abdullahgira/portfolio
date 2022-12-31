import React from "react"

import Post from "components/Post"
import Subscribe from "components/Subscribe"
import About from "components/About"
import {PageSEO} from "components/SEO"
import {fetchAPI} from "lib/strapi"
import Button from "components/Button"
import InfiniteScroll from "react-infinite-scroll-component"

export async function getStaticProps() {
  const {
    data: posts,
    meta: {pagination},
  } = await fetchAPI("/blogs", {
    pagination: {pageSize: 6},
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
      pagination: {page: page + 1, pageSize: 6},
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
          <Subscribe />
          <hr />
        </section>

        <section className="mt-10">
          <InfiniteScroll
            dataLength={posts.length}
            hasMore={page < totalPages}
            next={loadMore}
            loader="Loading..."
            endMessage={
              <div className="text-center">You've reached the end</div>
            }
          >
            {posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </InfiniteScroll>
        </section>

        {/* <div className="text-center">
          {page < totalPages ? (
            <Button onClick={loadMore} loading={loading}>
              Load more
            </Button>
          ) : (
            "You have reached the end."
          )}
        </div> */}
      </main>
    </>
  )
}
