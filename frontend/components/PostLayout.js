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
              <a className="flex items-center gap-2">
                <span className="pb-1">&larr;</span> <span>Back to blog</span>
              </a>
            </Link>
          </div>

          <Post post={post} />
        </section>

        <footer>
          <hr className="mb-10" />
          <About />
        </footer>
      </main>
    </>
  )
}
