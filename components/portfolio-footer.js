import Link from "next/link"
import EnvelopeIcon from "./icons/envelope-icon"
import GithubIcon from "./icons/github-icon"
import LinkedInIcon from "./icons/linkedin-icon"
import PhoneIcon from "./icons/phone-icon"

export default function PortfolioFooter() {
  return (
    <div
      className="flex flex-col items-center justify-center py-24 bg-gray-50"
      id="ContactMe"
    >
      <div>
        <img
          src="portfolio/me.webp"
          alt="my picture"
          className="w-20 rounded-full mb-3"
        />
      </div>
      <p className="text-lg font-semibold">Abdullah Osama</p>

      <div className="flex items-center justify-center gap-10 flex-wrap mt-8 text-gray-500">
        <Link
          as="https://www.linkedin.com/in/abdullahgira/"
          href="https://www.linkedin.com/in/abdullahgira/"
        >
          <a target="_blank" rel="noopener" className="hover:text-gray-700">
            <span className="sr-only">LinkedIn</span>
            <LinkedInIcon size="30" />
          </a>
        </Link>
        <Link
          as="https://github.com/abdullahgira"
          href="https://github.com/abdullahgira"
        >
          <a target="_blank" rel="noopener" className="hover:text-gray-700">
            <span className="sr-only">Github</span>
            <GithubIcon size="36" />
          </a>
        </Link>
        <Link
          as="mailto:abdullaho.gira@gmail.com"
          href="mailto:abdullaho.gira@gmail.com"
        >
          <a className="hover:text-gray-700">
            <span className="sr-only">Email</span>
            <EnvelopeIcon size="36" />
          </a>
        </Link>
        <Link as="tel:+201115477547" href="tel:+201115477547">
          <a className="hover:text-gray-700">
            <span className="sr-only">Phone</span>
            <PhoneIcon size="36" />
          </a>
        </Link>
      </div>
    </div>
  )
}
