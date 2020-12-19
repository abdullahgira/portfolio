import React from "react"
import Link from "next/link"

export default function PortfolioHero() {
  const [showEmail, setShowEmail] = React.useState(false)

  return (
    <div className="flex flex-col items-center md:flex-row md:justify-between my-20">
      <div className="order-2 md:order-1 text-center md:text-left mt-10 md:mt-0">
        <h3 className="text-lg mb-2 text-blue-700">Hello 👋️</h3>
        <h1 className="text-4xl font-bold mb-5">I'm Abdullah Osama</h1>
        <h2 className="text-3xl mb-10 md:w-2/3">
          I create full stack web applications using React and Node.js
        </h2>

        {/* <button className="py-2 px-3 rounded-xl bg-black hover:bg-gray-700 text-white font-semibold">
          Contact me
        </button> */}

        <div className="flex justify-center md:justify-start">
          <Link as="/blog" href="/blog">
            <a className="py-2 px-3 rounded-lg mr-4 border border-black hover:bg-black hover:text-white font-semibold">
              Blog
            </a>
          </Link>
          <Link
            as="https://www.linkedin.com/in/abdullah97/"
            href="https://www.linkedin.com/in/abdullah97/"
          >
            <a
              className="py-2 px-3 rounded-lg mr-4 border border-black hover:bg-black hover:text-white font-semibold"
              target="_blank"
            >
              Linkedin
            </a>
          </Link>
          <Link as="https://github.com/xayden" href="https://github.com/xayden">
            <a
              className="py-2 px-3 rounded-lg mr-4 border border-black hover:bg-black hover:text-white font-semibold"
              target="_blank"
            >
              Github
            </a>
          </Link>
          <Link
            as="mailto:abdullah.osama.abdelmajeed@gmail.com"
            href="mailto:abdullah.osama.abdelmajeed@gmail.com"
          >
            <a
              className="py-2 px-3 rounded-lg mr-4 border border-black hover:bg-black hover:text-white font-semibold"
              onClick={() => setShowEmail(true)}
            >
              Email
            </a>
          </Link>
        </div>
        {showEmail ? (
          <p className="my-4">abdullah.osama.abdelmajeed@gmail.com</p>
        ) : null}
      </div>

      {/* <div className="order-1 md:order-2 ml-5">
        <div className="h-72 w-56 bg-yellow-400 shadow-lg rounded-lg"></div>
      </div> */}
    </div>
  )
}
