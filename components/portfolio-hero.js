import Link from "next/link"
import LinkedInIcon from "./icons/linkedin-icon"
import GithubIcon from "./icons/github-icon"
import EnvelopeIcon from "./icons/envelope-icon"
import PhoneIcon from "./icons/phone-icon"

export default function PortfolioHero() {
  return (
    <div className="flex flex-col items-center lg:flex-row lg:justify-between my-28">
      <div className="order-2 lg:order-1 text-center lg:text-left mt-10 lg:mt-0">
        <h3 className="text-lg mb-2 text-indigo-700">Hello 👋️</h3>
        <h1 className="text-3xl md:text-4xl font-bold mb-5">
          I'm Abdullah Gira
        </h1>
        <h2 className="text-lg md:text-xl mb-10 lg:w-4/5 text-gray-500 uppercase">
          I create full stack web applications using React and Node.js
        </h2>

        <div className="flex items-center gap-8  justify-center lg:justify-start flex-wrap">
          <Link
            as="https://www.linkedin.com/in/abdullah97/"
            href="https://www.linkedin.com/in/abdullah97/"
          >
            <a target="_blank" rel="noopener">
              <LinkedInIcon size="30" />
            </a>
          </Link>
          <Link
            as="https://github.com/abdullahgira"
            href="https://github.com/abdullahgira"
          >
            <a target="_blank" rel="noopener">
              <GithubIcon size="36" />
            </a>
          </Link>
          <Link
            as="mailto:abdullaho.gira@gmail.com"
            href="mailto:abdullaho.gira@gmail.com"
          >
            <a onClick={() => setShowEmail(true)}>
              <EnvelopeIcon size="36" />
            </a>
          </Link>
          <Link as="tel:+201115477547" href="tel:+201115477547">
            <a>
              <PhoneIcon size="36" />
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
