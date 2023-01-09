import About from "components/About"
import Post from "components/Post"
import {PageSEO} from "components/SEO"
import {fetchAPI} from "lib/strapi"
import Link from "next/link"
import {useRouter} from "next/router"
import React from "react"
import {titleCase} from "utils/string"

const Preview = () => {
  const [post, setPost] = React.useState(null)
  const router = useRouter()

  React.useEffect(() => {
    fetchAPI("/posts", {
      filters: {
        slug: router.query.slug,
      },
      publicationState: "preview",
    }).then((res) => setPost(res.data[0]))
  }, [])

  console.log({post})
  return (
    <>
      <PageSEO
        title={post?.attributes.title}
        description={titleCase(post?.attributes.type)}
      />

      <main className="max-w-prose mx-auto px-5 pb-10">
        <section className="my-4 sm:my-16">
          <div className="inline-block mb-4">
            <Link href="/blog">
              <a className="underline underline-offset-2">
                &larr; Back to blog
              </a>
            </Link>
          </div>

          {post && <Post post={post} />}
        </section>

        <footer>
          <About />
        </footer>
      </main>
    </>
  )
}

export default Preview
