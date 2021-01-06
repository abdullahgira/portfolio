import React from "react"
import Link from "next/link"
import ActiveLink from "./active-link"
import {useRouter} from "next/router"

export default function Navbar() {
  const router = useRouter()

  return (
    <nav className="mb-10 border-t-4 border-blue-700">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <div className="flex justify-between items-center">
          <div className="py-2 mr-auto -mt-1">
            <Link as="/" href="/">
              <a>
                <span className="text-lg font-bold tracking-tight">
                  Abdullah Gira
                </span>
                <span className="text-4xl text-blue-700">.</span>
              </a>
            </Link>
          </div>
          <ul className="flex text-sm">
            <li>
              <ActiveLink href="/" className="mr-8">
                Home
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/blog">Blog</ActiveLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
