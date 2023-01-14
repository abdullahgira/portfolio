import {fetchAPI} from "lib/strapi"
import PostLayout from "../../components/PostLayout"

export default function Doc({post}) {
  return <PostLayout post={post} />
}

export async function getStaticPaths() {
  const articlesRes = await fetchAPI("/posts", {
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
  const articlesRes = await fetchAPI("/posts", {
    filters: {
      slug: params.slug,
    },
  })

  return {
    notFound: !articlesRes.data[0],
    props: {post: articlesRes.data[0] || null},
    revalidate: 60,
  }
}
