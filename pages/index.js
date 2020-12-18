import Head from "next/head"
import PortfolioHero from "components/portfolio-hero"
import {
  PortfolioSection,
  PortfolioSectionTitle,
  PortfolioSectionImage,
  PortfolioSectionContent,
} from "components/protfolio-section"

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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only.
          </p>
        </PortfolioSectionContent>
      </PortfolioSection>
    </div>
  )
}
