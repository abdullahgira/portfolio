import React from "react"
import Link from "next/link"
import ActiveLink from "./active-link"
import {useRouter} from "next/router"

export default function Navbar() {
  const router = useRouter()
  console.log(router)

  return (
    <nav className="mb-10 bg-white">
      <div className="max-w-5xl mx-auto px-2 md:px-8">
        <div className="flex justify-between items-center">
          <div className="py-2 mr-auto">
            <Link as="/" href="/">
              <a>
                <span className="text-lg font-bold tracking-tight">
                  Abdullah Gira
                </span>
                <span className="text-3xl text-indigo-700">.</span>
              </a>
            </Link>
          </div>
          <ul className="flex text-sm">
            <ActiveLink href="/" className="mr-8">
              <li>Home</li>
            </ActiveLink>
            <ActiveLink href="/blog">
              <li>Blog</li>
            </ActiveLink>
          </ul>
        </div>
      </div>
    </nav>
  )
}
