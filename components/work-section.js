import Link from "next/link"
import MoviePlayIcon from "./icons/movie-play-icon"
import LinkIcon from "./icons/link-icon"

export default function WorkSection() {
  return (
    <section className="my-10">
      <div className="relative z-0 mb-48">
        <img
          src="portfolio/elipse.svg"
          alt="decorating elipse"
          className="absolute w-32 -top-12 left-1/2 -ml-12 -z-1"
        />
        <img
          src="portfolio/fewer-circles.svg"
          alt="decorating small circles"
          className="absolute w-16 -top-5 left-1/2 ml-10 -z-1"
        />
        <div className="w-20 h-1 bg-blue-700 absolute -bottom-3 right-1/2 -mr-6 md:-mr-4"></div>
        <h2 className="text-3xl text-center font-bold heading" id="MyWork">
          My Work
        </h2>
      </div>

      <ProjectContainer>
        <ProjectImage
          src="/portfolio/macbook-itracker.png"
          alt="issue tracker dashboard"
          className="lg:mr-20"
        />
        <div className="max-w-xs sm:max-w-sm">
          <ProjectTitle>iTracker - Issue Tracking System</ProjectTitle>
          <ProjectDescription>
            Project planning system that helps manage teams and keep them on
            track, similar to Jira, Trello & Github Projects.
          </ProjectDescription>
          <ProjectUtilized>
            React, Node.js, MongoDB, JWT, Firebase Storage, Email service
          </ProjectUtilized>
          <ProjectLinks
            projectLink="https://itracker.netlify.app"
            videoLink="/projects/issue-tracker"
          />
        </div>
      </ProjectContainer>

      <ProjectContainer>
        <ProjectImage
          src="/portfolio/macbook-7odor.png"
          alt="7odor dashboard"
          className="lg:ml-20 order-1 lg:order-2"
        />
        <div className="max-w-xs sm:max-w-sm order-2 lg:order-1">
          <ProjectTitle>7odor - Attendance Tracking System (WIP)</ProjectTitle>
          <ProjectDescription>
            Multilingual application that tracks employees attendance and
            estimate their salaries and overtime hours.
          </ProjectDescription>
          <ProjectUtilized>React, Tailwind CSS, Jest</ProjectUtilized>
        </div>
      </ProjectContainer>

      <ProjectContainer noMarginBottom>
        <ProjectImage
          src="/portfolio/macbook-portfolio.png"
          alt="my portfolio"
          className="lg:mr-20"
        />
        <div className="max-w-xs sm:max-w-sm">
          <ProjectTitle>My Portfolio</ProjectTitle>
          <ProjectDescription>
            My personal portfolio where I share my latest works and blog about
            web technologies.
          </ProjectDescription>
          <ProjectUtilized>
            React, Next.js, Tailwind CSS, Github pages, Cloudflare CDN, Google
            AMP Optimizated, Markdown
          </ProjectUtilized>
        </div>
      </ProjectContainer>
    </section>
  )
}

function ProjectContainer({children, noMarginBottom}) {
  return (
    <div
      className={`flex flex-col content-center items-center lg:items-start lg:flex-row ${
        noMarginBottom ? "" : "mb-32 lg:mb-48"
      }`}
    >
      {children}
    </div>
  )
}

function ProjectImage({src, alt, className}) {
  return (
    <div className={`max-w-xl mx-auto lg:max-w-none lg:w-3/5 ${className}`}>
      <img src={src} alt={alt} />
    </div>
  )
}

function ProjectTitle({children}) {
  return (
    <h3 className="text-3xl font-bold tracking-tighter mb-14 lg:w-96 mt-10 lg:mt-0">
      {children}
    </h3>
  )
}

function ProjectDescription({children}) {
  return (
    <div className="mb-8">
      <h4 className="text-blue-700 font-bold tracking-widest mb-3">
        Description
      </h4>
      <p className="text-gray-700 tracking-wide leading-relaxed">{children}</p>
    </div>
  )
}

function ProjectUtilized({children}) {
  return (
    <div className="mb-8">
      <h4 className="text-blue-700 font-bold tracking-widest mb-3">Utilized</h4>
      <p className="text-gray-700 tracking-wide leading-relaxed">{children}</p>
    </div>
  )
}

function ProjectLinks({videoLink, projectLink}) {
  return (
    <div className="flex flex-wrap gap-4 lg:gap-10">
      {videoLink ? (
        <Link as={videoLink} href={videoLink}>
          <a className="text-blue-700 border-b-2 border-blue-700 hover:text-blue-900 flex items-center gap-3">
            <MoviePlayIcon size="24" />
            <span>Watch the demo</span>
          </a>
        </Link>
      ) : null}
      {projectLink ? (
        <Link as={projectLink} href={projectLink}>
          <a
            className="text-blue-700 border-b-2 border-blue-700 hover:text-blue-900 flex items-center gap-3"
            target="_blank"
            rel="noopener"
          >
            <LinkIcon size="24" />
            <span>Visit the project</span>
          </a>
        </Link>
      ) : null}
    </div>
  )
}
