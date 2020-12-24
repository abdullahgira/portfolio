export default function SkillsSection() {
  return (
    <div className="my-10">
      <div className="relative z-0 mb-28">
        <img
          src="portfolio/elipse.svg"
          className="absolute w-32 -top-12 right-1/2 -mr-2 -z-1"
        />
        <img
          src="portfolio/fewer-circles.svg"
          className="absolute w-16 -top-5 right-1/2 mr-20 -z-1"
        />
        <div className="w-20 h-1 bg-indigo-700 absolute -bottom-3 right-1/2 -mr-2"></div>
        <h2 className="text-3xl text-center font-bold">My Skills</h2>
      </div>

      <div className="flex flex-wrap justify-around">
        <Skill>
          <img
            className="mb-5 w-24"
            src="portfolio/react.png"
            alt="react logo"
            width="128px"
            height="128px"
          />
          <h4 className="mb-4">React</h4>
          <p>
            I use react.js library for building high perfromance user interface.
          </p>
        </Skill>

        <Skill>
          <img
            className="mb-5 w-24"
            src="portfolio/nodejs.png"
            alt="nodejs logo"
            width="128px"
            height="128px"
          />
          <h4 className="mb-4">Node.js</h4>
          <p>I use node.js for the backend for all of my projects.</p>
        </Skill>

        <Skill>
          <img
            className="mb-5 w-24"
            src="portfolio/mongodb.png"
            alt="mongodb logo"
            width="128px"
            height="128px"
          />
          <h4 className="mb-4">MongoDB</h4>
          <p>Is my go to database without a second thought.</p>
        </Skill>

        <Skill>
          <img
            className="mb-5 w-24"
            src="portfolio/redux.png"
            alt="redux logo"
            width="128px"
            height="128px"
          />
          <h4 className="mb-4">Redux</h4>
          <p>
            I only use it when global state in react is a must to acheive the
            goals of the app.
          </p>
        </Skill>
      </div>
    </div>
  )
}

function Skill({children}) {
  return (
    <div class="rounded-lg border border-indigo-800 mb-5 p-5 w-56 flex flex-col items-center">
      {children}
    </div>
  )
}
