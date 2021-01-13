import Link from "next/link"

export default function PortfolioHero() {
  return (
    <div className="flex flex-col items-center lg:flex-row lg:justify-between my-28">
      <div className="order-2 lg:order-1 text-center lg:text-left mt-10 lg:mt-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-5">
          Hi, I'm Abdullah Gira
        </h2>
        <h2 className="text-lg md:text-xl mb-10 lg:w-4/5 text-gray-500 uppercase">
          I create quality full stack web applications using React and Node.js
        </h2>

        <div className="flex justify-center lg:justify-start flex-wrap gap-4">
          <Link as="/#MyWork" href="/#MyWork">
            <a className="bg-blue-700 text-white font-semibold shadow-md rounded-full py-2 px-8">
              My Work
            </a>
          </Link>
          <Link as="/#ContactMe" href="/#ContactMe">
            <a className="border border-gray-400 text-gray-500 rounded-full py-2 px-8">
              Contact Me
            </a>
          </Link>
        </div>
      </div>

      <div className="order-1 lg:order-2 ml-5 md:min-w-max">
        <img
          src="portfolio/developer.svg"
          alt="developer setting on his laptop"
        />
      </div>
    </div>
  )
}
