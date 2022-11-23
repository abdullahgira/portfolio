import Head from "next/head"
import Link from "next/link"
import {useRouter} from "next/router"

import Button from "./Button"
import DateFormatter from "./DateFormatter"

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
    <main className="px-5">
      <Head>
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta name="robots" content="follow, index" />
        <link href="/favicon.ico" rel="shortcut icon" />

        <title key="title">{meta.title}</title>
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:title" content={meta.title} key="og:title" />
        <meta name="twitter:site" content={meta.title} />
        <meta name="twitter:title" content={meta.title} key="twitter:title" />

        {meta.description ? (
          <>
            <meta content={meta.description} name="description" />
            <meta
              property="og:description"
              content={meta.description}
              key="og:description"
            />
            <meta
              name="twitter:description"
              content={meta.description}
              key="twitter:description"
            />
          </>
        ) : null}

        {meta.socialImage ? (
          <>
            <meta
              property="og:image"
              content={`https://abdullahgira.com${meta.socialImage}`}
              key="og:image"
            />
            <meta
              name="twitter:image"
              content={`https://abdullahgira.com${meta.socialImage}`}
              key="twitter:image"
            />
          </>
        ) : null}
      </Head>

      <div className="max-w-3xl mx-auto">
        <section className="my-4 sm:my-16">
          <div className="inline-block">
            <Link href="/blog">
              <a className="flex items-center gap-2 mb-2">
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

        <section className="my-16 flex items-center gap-4">
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
        </section>
      </div>
    </main>
  )
}
