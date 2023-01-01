import Link from "next/link"

import About from "./About"
import Post from "./Post"
import {PageSEO} from "./SEO"

export default function PostLayout({post}) {
  return (
    <>
      <PageSEO
        title={post.attributes.title}
        description={post.attributes.type?.toUpperCase()}
      />

      <main className="max-w-prose mx-auto px-5 pb-10">
        <section className="my-4 sm:my-16">
          <div className="inline-block">
            <Link href="/blog">
              <a className="underline underline-offset-2">&larr; Back to blog</a>
            </Link>
          </div>

          <Post post={post} />
        </section>

        <footer>
          <About />
        </footer>
      </main>
    </>
  )
}
