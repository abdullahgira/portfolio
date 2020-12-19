import Head from "next/head"
import PortfolioHero from "components/portfolio-hero"
import {
  PortfolioSection,
  PortfolioSectionTitle,
  PortfolioSectionImage,
  PortfolioSectionContent,
} from "components/protfolio-about-section"

import SkillsSection from "components/skills-section"

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-10">
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
    </div>
  )
}
