import Link from "next/link"
import Head from "next/head"
import {useState} from "react"
import DateFormatter from "./date-formatter"

export default function PostLayout({children, meta: pageMeta}) {
  const [theme, setTheme] = useState("okaidia")
  const meta = {
    title: "",
    description: "",
    socialImage: "",
    ...pageMeta,
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="robots" content="follow, index" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta content={meta.description} name="description" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.socialImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vercel" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.socialImage} />
        <link
          rel="preload"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css"
          as="script"
        />
        <link
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css"
          rel="stylesheet"
        />
      </Head>
      <nav>
        <a href="#skip" className="sr-only focus:not-sr-only">
          Skip to content
        </a>
        <div className="flex justify-around items-center mt-8 mb-5 sm:-mb-5">
          <Link href="/blog">
            <a className="no-underline font-semibold flex items-center justify-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              <span>Back to blog</span>
            </a>
          </Link>
        </div>
      </nav>
      <div id="skip">
        <section className="max-w-2xl m-auto my-4 sm:my-16">
          <div className="mb-10">
            <h1 className="text-4xl font-extrabold mb-4">{meta.title}</h1>
            <div className="flex gap-3 font-semibold">
              <p>
                <DateFormatter dateString={meta.date} />
              </p>
              <p>•</p>
              <p className="text-indigo-500">
                {meta.readTime}{" "}
                {meta.readTime > 1 ? "Minutes Read" : "Minute Read"}
              </p>
            </div>
          </div>

          <article
            className="prose"
            dangerouslySetInnerHTML={{__html: children}}
          />
        </section>
      </div>
    </>
  )
}
