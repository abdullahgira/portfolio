import Head from "next/head"
import DateFormatter from "./date-formatter"

export default function PostLayout({children, meta: pageMeta}) {
  const meta = {
    title: "",
    description: "",
    socialImage: "",
    ...pageMeta,
  }

  return (
    <div className="px-5">
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

      <div>
        <section className="max-w-2xl m-auto my-4 sm:my-16">
          <div className="mb-10">
            <h1 className="text-5xl font-bold mb-4">{meta.title}</h1>
            <div className="flex ">
              <p className="mr-2">
                <DateFormatter dateString={meta.date} />
              </p>
              <p className="mr-2">•</p>
              <p className="text-blue-700">{meta.readTime} Min Read</p>
            </div>
          </div>

          <article
            className="prose"
            dangerouslySetInnerHTML={{__html: children}}
          />
        </section>
      </div>
    </div>
  )
}
