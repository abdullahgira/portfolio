import Link from "next/link"
import React from "react"

import Avatar from "./Avatar"
import EnvelopeIcon from "./icons/envelope-icon"
import GithubIcon from "./icons/github-icon"
import LinkedIn from "./icons/linkedin-icon"

const About = () => {
  return (
    <>
      <div className="border border-black p-1 rounded-full shadow-md inline-block">
        <Avatar />
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold">ABDULLAH GIRA</h3>
        <p>Software Engineer who loves to talk about business.</p>
        <div className="mt-4 flex gap-4">
          <Link href="mailto:abdullaho.gira@gmail.com">
            <a href="mailto:abdullaho.gira@gmail.com">
              <EnvelopeIcon className="w-6" />
            </a>
          </Link>
          <Link href="mailto:abdullaho.gira@gmail.com">
            <a href="mailto:abdullaho.gira@gmail.com">
              <GithubIcon className="w-6" />
            </a>
          </Link>
          <Link href="mailto:abdullaho.gira@gmail.com">
            <a href="mailto:abdullaho.gira@gmail.com">
              <LinkedIn className="w-6" />
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}

export default About
