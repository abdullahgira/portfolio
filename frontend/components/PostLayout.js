import Link from "next/link"
import {useRouter} from "next/router"

import About from "./About"
import Button from "./Button"
import Post from "./Post"
import {PageSEO} from "./SEO"
import Subscribe from "./Subscribe"

export default function PostLayout({post, next, prev}) {
  const router = useRouter()

  return (
    <>
      <PageSEO title={post.attributes.title} />

      <main className="max-w-3xl mx-auto px-5 pb-10">
        <section className="my-4 sm:my-16">
          <div className="inline-block">
            <Link href="/blog">
              <a className="flex items-center gap-2">
                <span className="pb-1">&larr;</span> <span>Back to blog</span>
              </a>
            </Link>
          </div>

          <Post post={post} />
        </section>

        <aside className="my-16 flex items-center gap-4">
          {prev && (
            <Button
              className="flex items-center gap-2"
              onClick={() => router.push(prev.slug)}
            >
              <span className="pb-1">&larr;</span> Previous post
            </Button>
          )}

          {next && (
            <Button
              className="flex items-center gap-2"
              onClick={() => router.push(next.slug)}
            >
              Next post <span className="pb-1">&rarr;</span>
            </Button>
          )}
        </aside>

        <footer>
          <hr className="mb-10" />
          <About />
          <Subscribe />
        </footer>
      </main>
    </>
  )
}
