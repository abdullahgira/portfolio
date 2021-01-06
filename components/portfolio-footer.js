import EnvelopeIcon from "./icons/envelope-icon"
import GithubIcon from "./icons/github-icon"
import LinkIcon from "./icons/link-icon"
import PhoneIcon from "./icons/phone-icon"

export default function PortfolioFooter() {
  return (
    <div className="flex flex-col items-center justify-center py-24 bg-gray-50">
      <div>
        <img
          src="portfolio/me.webp"
          alt="my picture"
          className="w-20 rounded-full mb-3"
        />
      </div>
      <p className="text-lg font-semibold">Abdullah Osama</p>

      <div className="flex items-center justify-center gap-10 flex-wrap mt-8">
        <LinkIcon
          size="32"
          className="cursor-pointer text-gray-600 hover:text-gray-900"
        />
        <GithubIcon
          size="32"
          className="cursor-pointer text-gray-600 hover:text-gray-900"
        />
        <EnvelopeIcon
          size="32"
          className="cursor-pointer text-gray-600 hover:text-gray-900"
        />
        <PhoneIcon
          size="32"
          className="cursor-pointer text-gray-600 hover:text-gray-900"
        />
      </div>
    </div>
  )
}
