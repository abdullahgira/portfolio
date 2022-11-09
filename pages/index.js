import Head from "next/head"
import {getAllPosts} from "lib/posts"
import React from "react"
import router from "next/router"

export default function Home({lastThreePosts}) {
  React.useEffect(() => {
    router.push(`/blog`)
  }, [])

  return (
    <div>
      <Head>
        <title key="title">Abdullah Gira</title>
        <meta
          content="I’m a full-stack web developer who loves to build quality software"
          name="description"
        />
        <meta property="og:title" content="Abdullah Gira" key="og:title" />
        <meta
          property="og:url"
          content="https://abdullahgira.com/"
          key="og:url"
        />
        <meta
          property="og:description"
          content="I’m a full-stack web developer who loves to build quality software"
          key="og:description"
        />
        <meta
          property="twitter:title"
          content="Abdullah Gira"
          key="twitter:title"
        />
        <meta
          property="twitter:url"
          content="https://abdullahgira.com/"
          key="twitter:url"
        />
        <meta
          property="twitter:description"
          content="I’m a full-stack web developer who loves to build quality software"
          key="twitter:description"
        />
      </Head>
    </div>
  )
}

export async function getStaticProps() {
  const lastThreePosts = getAllPosts([
    "title",
    "date",
    "slug",
    "readTime",
  ]).slice(0, 3)

  return {
    props: {lastThreePosts},
  }
}
