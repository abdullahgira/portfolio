import {fetchAPI} from "lib/strapi"
import PostLayout from "../../components/PostLayout"

export default function Doc({post}) {
  console.log({post})
  return <PostLayout post={post} />
}

export async function getStaticPaths() {
  const articlesRes = await fetchAPI("/blogs", {
    fields: ["slug"],
    pagination: {pageSize: 5}, // only prerender the first 5 posts
    sort: "createdAt:desc",
  })

  return {
    paths: articlesRes.data.map((article) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: "blocking",
  }
}

export async function getStaticProps({params}) {
  const articlesRes = await fetchAPI("/blogs", {
    filters: {
      slug: params.slug,
    },
  })

  return {
    props: {post: articlesRes.data[0]},
    revalidate: 60,
  }
}
