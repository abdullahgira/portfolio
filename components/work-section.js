import Link from "next/link"

export default function WorkSection() {
  return (
    <section className="my-10">
      <div className="relative z-0 mb-36">
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
        <div className="w-20 h-1 bg-indigo-700 absolute -bottom-3 right-1/2 -mr-4"></div>
        <h2 className="text-3xl text-center font-bold">My Work</h2>
      </div>

      {/* <div className="flex justify-center flex-wrap gap-8">
        <div className="max-w-xs bg-indigo-900 p-8 text-white rounded-lg shadow-md border border-gray-50">
          <h3 className="text-3xl font-bold tracking-tighter mb-8">
            Bug Tracker System
          </h3>
          <h4 className="text-yellow-300 font-bold tracking-widest mb-2">
            Description
          </h4>
          <p className="mb-10 text-gray-100">
            Project planning system that helps manage teams and keep them on
            track, similar to Jira, Trello & Github Projects.
          </p>
          <Link
            as="https://itracker.netlify.app"
            href="https://itracker.netlify.app"
          >
            <a
              className="underline hover:text-black"
              target="_blank"
              rel="noopener"
            >
              🔗️ Visit the project
            </a>
          </Link>
        </div>

        <div className="max-w-xs p-8 rounded-lg border border-gray-300">
          <h3 className="text-3xl font-bold tracking-tighter mb-8">
            7odor - Attendance tracking system
          </h3>
          <h4 className="text-gray-500 font-bold tracking-widest mb-2">
            Description
          </h4>
          <p className="mb-10 text-gray-800">
            Keeps track of employees attendance in an automated way that doesn't
            require the intervention of employees
          </p>
          <Link as="https://7odor.com" href="https://7odor.com">
            <a
              className="underline hover:text-black"
              target="_blank"
              rel="noopener"
            >
              🔗️ Visit the project
            </a>
          </Link>
        </div>
      </div> */}
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
        </div>
      </ProjectContainer>
    </section>
  )
}

function ProjectContainer({children}) {
  return (
    <div className="flex flex-col content-center items-center lg:items-start lg:flex-row ">
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
      <h4 className="text-indigo-700 font-bold tracking-widest mb-3">
        Description
      </h4>
      <p className="text-gray-700 tracking-wide leading-relaxed">{children}</p>
    </div>
  )
}

function ProjectUtilized({children}) {
  return (
    <div className="mb-8">
      <h4 className="text-indigo-700 font-bold tracking-widest mb-3">
        Utilized
      </h4>
      <p className="text-gray-700 tracking-wide leading-relaxed">{children}</p>
    </div>
  )
}

function ProjectLinks({videoLink, projectLink}) {
  return (
    <div>
      {videoLink ? (
        <Link as={videoLink} href={videoLink}>
          <a>Watch the demo</a>
        </Link>
      ) : null}
      {projectLink ? (
        <Link as={projectLink} href={projectLink}>
          <a>Visit the project</a>
        </Link>
      ) : null}
    </div>
  )
}
