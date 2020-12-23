export default function SkillsSection() {
  return (
    <div>
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
        <div class="rounded-lg p-5 flex flex-col items-center">
          <img
            className="mb-5"
            src="portfolio/react.png"
            alt="react logo"
            width="128px"
            height="128px"
          />
          <h4>React</h4>
        </div>

        <div class="rounded-lg p-5 flex flex-col items-center">
          <img
            className="mb-5"
            src="portfolio/nodejs.png"
            alt="nodejs logo"
            width="128px"
            height="128px"
          />
          <h4>Node.js</h4>
        </div>

        <div class="rounded-lg p-5 flex flex-col items-center">
          <img
            className="mb-5"
            src="portfolio/mongodb.png"
            alt="mongodb logo"
            width="128px"
            height="128px"
          />
          <h4>MongoDB</h4>
        </div>

        <div class="rounded-lg p-5 flex flex-col items-center">
          <img
            className="mb-5"
            src="portfolio/redux.png"
            alt="redux logo"
            width="128px"
            height="128px"
          />
          <h4>Redux</h4>
        </div>
      </div>
    </div>
  )
}
