export default function SkillsSection() {
  return (
    <div className="my-20">
      <h2 className="text-2xl font-semibold text-center mb-10">Skills</h2>
      <div className="flex flex-wrap justify-around">
        <div class="rounded-lg mb-8 p-5 flex flex-col items-center">
          <img
            className="mb-5"
            src="portfolio/react.png"
            alt="react logo"
            width="128px"
            height="128px"
          />
          <h4>React</h4>
        </div>

        <div class="rounded-lg mb-8 p-5 flex flex-col items-center">
          <img
            className="mb-5"
            src="portfolio/nodejs.png"
            alt="nodejs logo"
            width="128px"
            height="128px"
          />
          <h4>Node.js</h4>
        </div>

        <div class="rounded-lg mb-8 p-5 flex flex-col items-center">
          <img
            className="mb-5"
            src="portfolio/mongodb.png"
            alt="mongodb logo"
            width="128px"
            height="128px"
          />
          <h4>MongoDB</h4>
        </div>

        <div class="rounded-lg mb-8 p-5 flex flex-col items-center">
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
