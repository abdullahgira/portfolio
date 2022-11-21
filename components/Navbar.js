import Link from "next/link"
import React from "react"

const Navbar = () => {
  return (
    <div className="flex justify-between px-8 py-4">
      <p className="text-lg font-bold">
        <Link href="/blog">
          <a>Abdullah Gira</a>
        </Link>
      </p>
      <p className="text-sm text-gray-400">Personal blog</p>
    </div>
  )
}

export default Navbar
