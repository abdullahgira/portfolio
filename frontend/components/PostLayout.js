import Link from "next/link"
import {useRouter} from "next/router"

import About from "./About"
import Post from "./Post"
import {PageSEO} from "./SEO"
import Subscribe from "./Subscribe"

export default function PostLayout({post}) {
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

        <footer>
          <hr className="mb-10" />
          <About />
          <Subscribe />
        </footer>
      </main>
    </>
  )
}
