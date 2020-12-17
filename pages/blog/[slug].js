import Layout from "../../components/layout"
import markdownToHtml from "../../lib/markdown"
import {getAllPosts, getPostBySlug} from "../../lib/posts"

export default function Doc({meta, content}) {
  return <Layout meta={meta}>{content}</Layout>
}

export async function getStaticProps({params}) {
  const doc = getPostBySlug(params.slug, ["content"])
  let content = await markdownToHtml(doc.content || "")
  content = mapImagesToPublicSlug(content, params.slug)

  return {
    props: {
      ...doc,
      content,
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

function mapImagesToPublicSlug(content, slug) {
  const re = /<img\s*src="([\w\W]+?)"/gm
  const found = content.matchAll(re)
  let match
  while ((match = re.exec(content)) !== null) {
    console.log(match[0])
    let x = match[1].slice(1)
    content = content.replace(match[1], "/" + slug + x)
  }
  return content
}
