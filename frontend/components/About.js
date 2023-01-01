import React from "react"

import Avatar from "./Avatar"
import EmailIcon from "./IconEmail"
import IconGithub from "./IconGithub"
import IconLinkedIn from "./IconLinkedIn"
import IconTwitter from "./IconTwitter"
import IconWrapper from "./IconWrapper"
import Newsletter from "./Newsletter"

const About = () => {
  return (
    <section className="pb-5">
      <div
        className="border-black p-1.5 rounded-full inline-block"
        style={{border: "2px solid"}}
      >
        <Avatar />
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold">ABDULLAH GIRA</h3>
        <p>A software engineer who loves to talk about business.</p>

        <div className="mt-4 flex items-end gap-6">
          <IconWrapper link="mailto:abdullaho.gira@gmail.com">
            <EmailIcon />
          </IconWrapper>

          <IconWrapper link="https://linkedin.com/in/abdullahgira">
            <IconLinkedIn />
          </IconWrapper>

          <IconWrapper link="https://twitter.com/abdullah_gira">
            <IconTwitter />
          </IconWrapper>

          {/* <IconWrapper link="https://github.com/abdullahgira">
            <IconGithub />
          </IconWrapper> */}
        </div>
      </div>
      {/* <Newsletter /> */}
    </section>
  )
}

export default About
