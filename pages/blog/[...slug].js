import PostLayout from "../../components/PostLayout"
import {formatSlug, getAllPosts, getPostBySlug} from "../../lib/posts"

export default function Doc({post, next, prev}) {
  return <PostLayout post={post} next={next} prev={prev} />
}

export async function getStaticProps({params}) {
  const allPosts = await getAllPosts()
  const postIndex = allPosts.findIndex(
    (post) => formatSlug(post.slug) === params.slug.join("/")
  )
  const prev = allPosts[postIndex + 1] || null
  const next = allPosts[postIndex - 1] || null
  const post = allPosts[postIndex]
  const postContent = await getPostBySlug(post.slug)

  return {
    props: {
      post: postContent,
      next,
      prev,
    },
  }
}

export async function getStaticPaths() {
  const posts = await getAllPosts()

  return {
    paths: posts.map((p) => {
      return {
        params: {
          slug: formatSlug(p.slug).split("/"),
        },
      }
    }),
    fallback: false,
  }
}
