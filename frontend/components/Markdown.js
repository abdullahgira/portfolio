import React from "react"
import ReactMarkdown from "react-markdown"

import remarkGfm from "remark-gfm"

const Markdown = ({content}) => {
  return (
    <ReactMarkdown
      children={content}
      remarkPlugins={[[remarkGfm, {singleTilde: false}]]}
      components={{
        input: ({...props}) => <input {...props} className="!my-0" />,
      }}
    />
  )
}

export default Markdown
