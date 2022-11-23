import Link from "next/link"

import {PageSEO} from "components/SEO"

export default function Home() {
  return (
    <div>
      <PageSEO title="Abdullah Gira" description="Software Engineer" />

      <main className="w-screen h-80 md:h-96 flex items-end justify-center px-5">
        <div className="pb-0">
          <h1 className="text-5xl text-black mb-4 font-bold">Abdullah Gira</h1>
          <p className="mb-10 text-gray-500">Software Engineer</p>

          <Link href="/blog">
            <a>Go to blog &rarr;</a>
          </Link>
        </div>
      </main>
    </div>
  )
}
