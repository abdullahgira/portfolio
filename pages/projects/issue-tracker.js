import Plyr from "plyr-react"
import "plyr-react/dist/plyr.css"

export default function IssueTracker() {
  return (
    <div className="max-w-4xl m-auto my-4 sm:my-16">
      <h1 className="text-4xl font-bold text-center my-20">
        iTracker - Issue Tracking System
      </h1>
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

      <FeatureSection>
        <FeatureImg>
          <img
            className="shadow-sm rounded-lg"
            src="/projects/itracker/your-work-glance.png"
            alt="your work page with some issues present"
          />
        </FeatureImg>
        <FeatureDescription>
          <h3 className="text-xl font-semibold mb-10 lg:w-96 mt-10 lg:mt-0">
            Your work at a glance
          </h3>

          <p className="text-gray-500">
            See the issues assigned to you with their priorities from all the
            projects, so you could effortlessly decide which issue to start
            working on.
          </p>
        </FeatureDescription>
      </FeatureSection>
    </div>
  )
}

const FeatureSection = ({children}) => (
  <div className="flex flex-col content-center items-center lg:items-start lg:flex-row mb-32 lg:mb-48">
    {children}
  </div>
)

const FeatureImg = ({children}) => (
  <div className="max-w-xl mx-auto lg:max-w-none lg:w-3/5 lg:mr-20">
    {children}
  </div>
)

const FeatureDescription = ({children}) => (
  <div className="max-w-xs sm:max-w-sm">{children}</div>
)
