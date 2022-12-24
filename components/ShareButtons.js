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
    <div className="flex items-center justify-end gap-4 mt-5 text-gray-500">
      <p className="text-sm">Share:</p>

      <div className="flex items-center gap-4">
        <TwitterShareButton url={url}>
          <IconWrapper className='w-4 hover:text-gray-800'>
            <IconTwitter />
          </IconWrapper>
        </TwitterShareButton>

        <FacebookShareButton url={url}>
          <IconWrapper className='w-4 hover:text-gray-800'>
            <IconFacebook />
          </IconWrapper>
        </FacebookShareButton>

        <LinkedinShareButton url={url}>
          <IconWrapper className='w-4 hover:text-gray-800'>
            <IconLinkedIn />
          </IconWrapper>
        </LinkedinShareButton>
      </div>
    </div>
  )
}

export default ShareButtons
