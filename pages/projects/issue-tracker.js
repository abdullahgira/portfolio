import Plyr from "plyr-react"
import "plyr-react/dist/plyr.css"

export default function IssueTracker() {
  return (
    <div className="max-w-2xl m-auto my-4 sm:my-16">
      <h1 className="text-4xl font-bold text-center mb-20">Issue Tracker</h1>
      <Plyr
        source={{
          title: "itracker demo",
          type: "video",
          sources: [
            {
              src: "/projects/itracker-demo.mp4",
              provider: "html5",
              type: "video/mp4",
              size: 720,
            },
          ],
          // poster: "/projects/itracker-thumbnail.png",
        }}
        options={{
          autoplay: true,
        }}
      />
    </div>
  )
}
