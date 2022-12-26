import {fetchAPI} from "lib/strapi"
import PostLayout from "../../components/PostLayout"

export default function Doc({post, next, prev}) {
  return <PostLayout post={post} next={false} prev={false} />
}

export async function getStaticPaths() {
  const articlesRes = await fetchAPI("/blogs", {
    fields: ["slug"],
    pagination: {pageSize: 10},
    sort: "createdAt:desc",
  })

  return {
    paths: articlesRes.data.map((article) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: 'blocking',
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
