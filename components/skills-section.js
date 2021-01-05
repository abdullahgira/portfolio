export default function SkillsSection() {
  return (
    <div className="my-20">
      <div className="relative z-0 mb-36">
        <img
          src="portfolio/elipse.svg"
          alt="decorating elipse"
          className="absolute w-32 -top-12 right-1/2 -mr-2 -z-1"
        />
        <img
          src="portfolio/fewer-circles.svg"
          alt="decorating small circles"
          className="absolute w-16 -top-5 right-1/2 mr-20 -z-1"
        />
        <div className="w-20 h-1 bg-indigo-700 absolute -bottom-3 right-1/2 -mr-4"></div>
        <h2 className="text-3xl text-center font-bold">My Skills</h2>
      </div>

      <div class="flex flex-wrap gap-8 justify-around">
        <Skill logo="portfolio/react.svg">
          <h3 className="font-bold text-2xl tracking-tighter mb-2">React</h3>
          <p>
            I use react.js library for building high perfromance user interface.
          </p>
        </Skill>

        <Skill logo="portfolio/nodejs.svg">
          <h3 className="font-bold text-2xl tracking-tighter mb-2">Node.js</h3>
          <p>I use node.js for the backend for all of my projects.</p>
        </Skill>

        <Skill logo="portfolio/mongodb.svg">
          <h3 className="font-bold text-2xl tracking-tighter mb-2">MongoDB</h3>
          <p>
            Is my go to database without a second thought because of it's high
            perfromance
          </p>
        </Skill>

        <Skill logo="portfolio/redux.svg">
          <h3 className="font-bold text-2xl tracking-tighter mb-2">Redux</h3>
          <p>
            I only use it when global state in react is a must to acheive the
            goals of the app.
          </p>
        </Skill>
      </div>
    </div>
  )
}

function Skill({logo, children}) {
  return (
    <div className="bg-white rounded-xl flex items-start p-5 shadow-xl max-w-md">
      <div className="p-6 rounded-xl bg-indigo-900 shadow-xl inline-block mr-5 flex-none">
        <img className="w-20" src={logo} alt="skill logo" />
      </div>
      <div className="mt-2 inline-block">{children}</div>
    </div>
  )
}
