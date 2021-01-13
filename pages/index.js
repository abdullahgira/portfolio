import Head from "next/head"
import PortfolioHero from "components/portfolio-hero"
import {AboutSection} from "components/about-section"

import SkillsSection from "components/skills-section"
import WorkSection from "components/work-section"
import BlogSection from "components/blog-section"
import {getAllPosts} from "lib/posts"
import PortfolioFooter from "components/portfolio-footer"

export default function Home({lastThreePosts}) {
  return (
    <div>
      <Head>
        <title key="title">Abdullah Gira</title>
        <meta
          content="I’m a full-stack web developer who loves to build quality software"
          name="description"
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://abdullahgira.com/" />
        <meta property="og:title" content="Abdullah Gira" />
        <meta
          property="og:description"
          content="I’m a full-stack web developer who loves to build quality software"
        />
        <meta
          property="og:image"
          content="https://abdullahgira.com/social-media-profile-img.jpg"
        />

        {/* <!-- Twitter -->   */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://abdullahgira.com/" />
        <meta property="twitter:title" content="Abdullah Gira" />
        <meta
          property="twitter:description"
          content="I’m a full-stack web developer who loves to build quality software"
        />
        <meta
          property="twitter:image"
          content="https://abdullahgira.com/social-media-profile-img.jpg"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <PortfolioHero />
      </div>

      <div className="max-w-5xl mx-auto py-28 px-4 md:px-8">
        <AboutSection />
      </div>

      <div className="bg-gray-50">
        <div className="max-w-5xl mx-auto py-28 px-4 md:px-8">
          <SkillsSection />
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-28 px-4 md:px-8">
        <WorkSection />
      </div>

      <div className="max-w-5xl mx-auto py-28 px-4 md:px-8">
        <BlogSection lastThreePosts={lastThreePosts} />
      </div>

      <PortfolioFooter />
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
