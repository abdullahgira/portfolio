import Link from "next/link"
import React from "react"

const IconWrapper = ({className, link = "", children}) => {
  return (
    <div className={`w-5 ${className}`}>
      <Link href={link}>
        <a target="_blank" rel="noopener">
          {children}
        </a>
      </Link>
    </div>
  )
}

export default IconWrapper
