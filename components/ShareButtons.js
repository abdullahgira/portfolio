import siteMetadata from "data/siteMetadata"
import React from "react"
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share"

import IconFacebook from "./IconFacebook"
import IconLinkedIn from "./IconLinkedIn"
import IconTwitter from "./IconTwitter"
import IconWrapper from "./IconWrapper"

const ShareButtons = ({slug}) => {
  const url = `${siteMetadata.siteUrl}/blog/${slug}`

  return (
    <div className="flex items-center gap-4">
      <p className="mb-2">Share</p>

      <div className="flex items-center gap-2">
        <TwitterShareButton url={url}>
          <IconWrapper>
            <IconTwitter />
          </IconWrapper>
        </TwitterShareButton>

        <FacebookShareButton url={url}>
          <IconWrapper>
            <IconFacebook />
          </IconWrapper>
        </FacebookShareButton>

        <LinkedinShareButton url={url}>
          <IconWrapper>
            <IconLinkedIn />
          </IconWrapper>
        </LinkedinShareButton>
      </div>
    </div>
  )
}

export default ShareButtons
