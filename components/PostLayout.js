import Link from "next/link"
import {useRouter} from "next/router"

import About from "./About"
import Button from "./Button"
import DateFormatter from "./DateFormatter"
import {PageSEO} from "./SEO"
import Subscribe from "./Subscribe"

export default function PostLayout({post, next, prev}) {
  const {content, ...postMeta} = post
  const router = useRouter()

  const meta = {
    title: "",
    description: "",
    socialImage: "",
    ...postMeta,
  }

  return (
    <>
      <PageSEO title={meta.title} />

      <main className="max-w-3xl mx-auto px-5">
        <section className="my-4 sm:my-16">
          <div className="inline-block mb-4">
            <Link href="/blog">
              <a className="flex items-center gap-2">
                <span className="pb-1">&larr;</span> <span>Back to blog</span>
              </a>
            </Link>
          </div>

          <div className="mb-10">
            <h1 className="text-3xl font-bold mb-2">{meta.title}</h1>
            <p className="text-gray-400 mr-2 text-sm font-bold">
              <DateFormatter dateString={meta.date} />
            </p>
          </div>

          <article
            className="prose"
            dangerouslySetInnerHTML={{__html: content}}
          />
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
