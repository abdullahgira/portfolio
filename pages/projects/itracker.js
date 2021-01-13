import LinkIcon from "components/icons/link-icon"
import Head from "next/head"
import Link from "next/link"
import Plyr from "plyr-react"
import "plyr-react/dist/plyr.css"

export default function IssueTracker() {
  return (
    <div>
      <Head>
        <title key="title">iTracker - Issue Tracking System</title>
        <meta
          content="A project planning system that helps manage teams and keep them on
          track"
          name="description"
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta
          property="og:url"
          content="https://abdullahgira.com/projects/itracker"
          key="og:url"
        />
        <meta
          property="og:title"
          content="iTracker - Issue Tracking System"
          key="og:title"
        />
        <meta
          property="og:description"
          content="A project planning system that helps manage teams and keep them on track"
          key="og:description"
        />
        <meta
          property="og:image"
          content="https://abdullahgira.com/projects/itracker/macbook-itracker-social.jpg"
          key="og:image"
        />

        {/* <!-- Twitter -->   */}
        <meta
          property="twitter:url"
          content="https://abdullahgira.com/projects/itracker"
          key="twitter:url"
        />
        <meta
          property="twitter:title"
          content="iTracker - Issue Tracking System"
          key="twitter:title"
        />
        <meta
          property="twitter:description"
          content="A project planning system that helps manage teams and keep them on track"
          key="twitter:description"
        />
        <meta
          property="twitter:image"
          content="https://abdullahgira.com/projects/itracker/macbook-itracker-social.webp"
          key="twitter:image"
        />
      </Head>
      <div className="max-w-3xl m-auto mt-4 mb-10 px-8">
        <h1 className="text-4xl font-bold text-center mt-20">
          iTracker - Issue Tracking System
        </h1>
        <div className="flex justify-center">
          <Link href="https://itracker.netlify.app">
            <a
              className="mt-5 mb-10 text-blue-700 border-b-2 border-blue-700 hover:text-blue-900 flex gap-3"
              target="_blank"
              rel="noopener"
            >
              <LinkIcon size="24" />
              <span>Visit the project</span>
            </a>
          </Link>
        </div>
        <Plyr
          source={{
            title: "itracker demo",
            type: "video",
            sources: [
              {
                src: "/projects/itracker/itracker-demo.mp4",
                provider: "html5",
                type: "video/mp4",
                size: 720,
              },
            ],
            // poster: "/projects/itracker-thumbnail.png",
          }}
          options={
            {
              // autoplay: true,
            }
          }
        />

        <h2 className="text-2xl font-bold text-center my-20">Features</h2>

        <ProjectSection>
          <ProjectSectionImg>
            <img
              className="shadow-sm rounded-lg"
              src="/projects/itracker/your-work-glance.png"
              alt="your work page with some issues present"
            />
          </ProjectSectionImg>
          <ProjectSectionDescription>
            <h3 className="text-xl font-semibold mb-5 text-center">
              Your work at a glance
            </h3>

            <p className="text-gray-500">
              See the issues assigned to you with their priorities from all the
              projects, so you could effortlessly decide which issue to start
              working on.
            </p>
          </ProjectSectionDescription>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionImg isOdd>
            <img
              className="shadow-sm rounded-lg"
              src="/projects/itracker/project-dashboard.png"
              alt="project general information and progress"
            />
          </ProjectSectionImg>
          <ProjectSectionDescription isOdd>
            <h3 className="text-xl font-semibold mb-5 text-center">
              Overall progress of the project and the team members
            </h3>

            <p className="text-gray-500">
              See how many projects are open, in-progress, or closed, of what
              priority are they, and of what type. You can also see the overall
              progress of your team members based on the issues assigned to
              them.
            </p>
          </ProjectSectionDescription>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionImg>
            <img
              className="shadow-sm rounded-lg"
              src="/projects/itracker/comments-and-history.png"
              alt="your work page with some issues present"
            />
          </ProjectSectionImg>
          <ProjectSectionDescription>
            <h3 className="text-xl font-semibold mb-5 text-center">
              Comments and history of changes for each issue
            </h3>

            <p className="text-gray-500">
              Keep track of issue subtasks in the form of comments, and see all
              the changes that happened to the issue.
            </p>
          </ProjectSectionDescription>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionImg>
            <img
              className="shadow-sm rounded-lg"
              src="/projects/itracker/role-management.png"
              alt="project general information and progress"
            />
          </ProjectSectionImg>
          <ProjectSectionDescription>
            <h3 className="text-xl font-semibold mb-5 text-center">
              Role management system
            </h3>

            <p className="text-gray-500">
              Manage the roles of each one of your team members. With 3
              different roles, leader, submitter, and developer. Leader role can
              only be assigned from the Project Settings page.
            </p>
          </ProjectSectionDescription>
        </ProjectSection>

        <h2 className="text-2xl font-bold text-center my-20">
          Obstacles I Overcame
        </h2>

        <div className="max-w-lg flex flex-col mx-auto">
          <div className="p-5 bg-indigo-100 rounded-lg shadow-md mb-5">
            <h3 className="text-xl">Auto refreshing the access token</h3>
          </div>

          <div className="p-5 bg-yellow-100 rounded-lg shadow-md mb-5">
            <h3 className="text-xl">Building the backend for scalability</h3>
          </div>

          <div className="p-5 bg-red-100 rounded-lg shadow-md mb-5">
            <h3 className="text-xl">Making of the editable header</h3>
          </div>

          <div className="p-5 bg-green-100 rounded-lg shadow-md">
            <h3 className="text-xl">
              Architecting the frontend for minimum re-rendering of the
              components.
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

const ProjectSection = ({children}) => (
  <div className="flex flex-col content-center items-center mb-32">
    {children}
  </div>
)

const ProjectSectionImg = ({children, isOdd}) => (
  <div className={`max-w-xl mx-auto lg:max-w-none lg:w-3/4`}>{children}</div>
)

const ProjectSectionDescription = ({children, isOdd}) => (
  <div className={`max-w-lg mt-10`}>{children}</div>
)
