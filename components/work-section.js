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

      <div className="flex justify-center flex-wrap gap-8">
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
      </div>
    </section>
  )
}
