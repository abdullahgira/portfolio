import Head from "next/head"
import PortfolioHero from "components/portfolio-hero"
import {AboutSection} from "components/about-section"

import SkillsSection from "components/skills-section"
import WorkSection from "components/work-section"
import BlogSection from "components/blog-section"
import {getAllPosts} from "lib/posts"

export default function Home({lastThreePosts}) {
  return (
    <div className="mb-10">
      <Head>
        <title>Abdullah Osama portfolio</title>
        <meta
          content="This portfolio shows my recent skills, projects and blog posts."
          name="description"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-5xl mx-auto px-2 md:px-8">
        <PortfolioHero />
      </div>

      <div className="max-w-5xl mx-auto py-28 px-2 md:px-8">
        <AboutSection />
      </div>

      <div className="bg-gray-50 skills-section">
        <div className="max-w-6xl mx-auto py-28 px-2 md:px-8">
          <SkillsSection />
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-28 px-2 md:px-8">
        <WorkSection />
      </div>

      <div className="max-w-5xl mx-auto py-28 px-2 md:px-8">
        <BlogSection lastThreePosts={lastThreePosts} />
      </div>

      <div className="flex flex-col items-center justify-center">
        <div>
          <img
            src="portfolio/me.jpg"
            alt="my picture"
            className="w-20 rounded-full mb-3"
          />
        </div>
        <p>Abdullah Osama</p>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const lastThreePosts = getAllPosts([
    "title",
    "date",
    "slug",
    "readTime",
  ]).slice(0, 3)

  return {
    props: {lastThreePosts},
  }
}
