export default function SkillsSection() {
  return (
    <div className="my-10">
      <div className="relative z-0 mb-36">
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

      <div className="flex flex-wrap justify-around relative z-0">
        <Skill>
          <img className="w-32" src="portfolio/react.svg" alt="react logo" />
          <h4 className="mb-4">React</h4>
          <p>
            I use react.js library for building high perfromance user interface.
          </p>
        </Skill>

        <Skill>
          <img className="w-32" src="portfolio/nodejs.svg" alt="nodejs logo" />
          <h4 className="mb-4">Node.js</h4>
          <p>I use node.js for the backend for all of my projects.</p>
        </Skill>

        <Skill>
          <img
            className="w-32"
            src="portfolio/mongodb.svg"
            alt="mongodb logo"
          />
          <h4 className="mb-4">MongoDB</h4>
          <p>Is my go to database without a second thought.</p>
        </Skill>

        <img
          src="portfolio/circles-colored.svg"
          className="w-24 absolute -top-14 right-4 md:-right-8"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        <Skill>
          <img className="w-32" src="portfolio/redux.svg" alt="redux logo" />
          <h4 className="mb-4">Redux</h4>
          <p>
            I only use it when global state in react is a must to acheive the
            goals of the app.
          </p>
        </Skill>

        <Skill>
          <img
            className="h-32"
            src="portfolio/html-css-js.svg"
            alt="html, css and javascript logos"
          />
          <h4 className="mb-4">HTML, CSS & Javascript</h4>
          <p>The basic building blocks for my frontend.</p>
        </Skill>
      </div>
    </div>
  )
}

function Skill({children}) {
  return (
    <div className="skill rounded-lg border border-indigo-800 mb-14 px-5 py-12 w-80 flex flex-col items-center text-center">
      {children}
    </div>
  )
}
