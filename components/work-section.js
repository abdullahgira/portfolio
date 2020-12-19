import Link from "next/link"

export default function WorkSection() {
  return (
    <section className="my-20">
      <h2 className="text-2xl font-semibold text-center mb-16">Work</h2>

      <div className="flex justify-around flex-wrap">
        <div className="max-w-xs mb-10">
          <h3 className="text-3xl font-extrabold mb-4">Bug Tracker System</h3>
          <p className="mb-2">
            Real world project that helps manage teams and keep them on track,
            similar to Jira, Trello & Github Projects.
          </p>
          <Link
            as="https://itracker.netlify.app"
            href="https://itracker.netlify.app"
          >
            <a className="underline hover:text-black" target="_blank">
              🔗️ Visit the project
            </a>
          </Link>
        </div>

        <div className="max-w-xs">
          <h3 className="text-3xl font-extrabold mb-4">
            7odor - Attendance tracking system
          </h3>
          <p className="mb-2">
            Keeps track of employees attendance in an automated way that doesn't
            require the intervention of employees
          </p>
          <Link as="https://7odor.com" href="https://7odor.com">
            <a className="underline hover:text-black" target="_blank">
              🔗️ Visit the project
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}
