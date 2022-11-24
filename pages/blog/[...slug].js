import PostLayout from "../../components/PostLayout"
import {formatSlug, getAllPosts} from "../../lib/posts"

export default function Doc({post, next, prev}) {
  return <PostLayout post={post} next={next} prev={prev} /> // {post.content}</PostLayout>
}

export async function getStaticProps({params}) {
  const allPosts = await getAllPosts()
  const postIndex = allPosts.findIndex(
    (post) => formatSlug(post.slug) === params.slug.join("/")
  )
  const prev = allPosts[postIndex + 1] || null
  const next = allPosts[postIndex - 1] || null
  const post = allPosts[postIndex]

  return {
    props: {
      post,
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

function mapImagesToPublicSlug(content, slug) {
  const re = /<img\s*src="([\w\W]+?)"/gm
  let match
  while ((match = re.exec(content)) !== null) {
    content = content.replace(match[1], `/blog/${slug}/${match[1]}`)
  }
  return content
}
