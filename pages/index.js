import Head from "next/head"
import PortfolioHero from "components/portfolio-hero"

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-10">
      <Head>
        <title>Abdullah Osama portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PortfolioHero />
    </div>
  )
}
