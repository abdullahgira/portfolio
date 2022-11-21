import PostLayout from "../../components/PostPage"
import {formatSlug, getAllPosts} from "../../lib/posts"

export default function Doc({content, ...meta}) {
  return <PostLayout meta={meta}>{content}</PostLayout>
}

export async function getStaticProps({params}) {
  const allPosts = await getAllPosts()
  const postIndex = allPosts.findIndex(
    (post) => formatSlug(post.slug) === params.slug.join("/")
  )
  const post = allPosts[postIndex]
  const content = mapImagesToPublicSlug(post.content, params.slug.join("/"))

  return {
    props: {
      ...post,
      content,
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
