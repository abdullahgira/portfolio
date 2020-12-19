import Head from "next/head"
import PortfolioHero from "components/portfolio-hero"
import {
  PortfolioSection,
  PortfolioSectionTitle,
  PortfolioSectionImage,
  PortfolioSectionContent,
} from "components/protfolio-about-section"

import SkillsSection from "components/skills-section"
import WorkSection from "components/work-section"
import BlogSection from "components/blog-section"
import {getAllPosts} from "lib/posts"

export default function Home({lastThreePosts}) {
  return (
    <div className="max-w-5xl mx-auto mb-10">
      <Head>
        <title>Abdullah Osama portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PortfolioHero />
      <PortfolioSection>
        <PortfolioSectionImage src="/portfolio/about.jpg" />
        <PortfolioSectionContent>
          <PortfolioSectionTitle>About me</PortfolioSectionTitle>
          <p>
            I graduated from college with a BSc in computer science. I started
            programming in Node.js 3+ years ago and then jumped to React 2+
            years ago to help me create user interfaces for my projects. I
            usually do my projects using the MERN stack (MongoDB, Express,
            React, Node.js).
          </p>
        </PortfolioSectionContent>
      </PortfolioSection>

      <SkillsSection />
      <WorkSection />
      <BlogSection lastThreePosts={lastThreePosts} />

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
  const lastThreePosts = getAllPosts(["title", "date", "slug"]).slice(0, 3)

  return {
    props: {lastThreePosts},
  }
}
