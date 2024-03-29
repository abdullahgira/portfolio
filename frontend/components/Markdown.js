import React from "react"
import ReactMarkdown from "react-markdown"

import remarkGfm from "remark-gfm"

const Markdown = ({content}) => {
  return (
    <ReactMarkdown
      children={content}
      remarkPlugins={[[remarkGfm, {singleTilde: false}]]}
    />
  )
}

export default Markdown
