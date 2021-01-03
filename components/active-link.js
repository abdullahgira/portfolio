import {useRouter} from "next/router"
import React from "react"

export default function ActiveLink({className, children, href, ...props}) {
  const router = useRouter()
  const styleClassName = `py-2 hover:text-gray-700 ${className} ${
    router?.pathname === href
      ? "text-gray-700 border-b-2 border-indigo-700"
      : "text-gray-500"
  }`

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  React.useEffect(() => {
    console.log(router.pathname)
    console.log("router.pathname")
  }, [router])

  return (
    <a href={href} {...props} onClick={handleClick} className={styleClassName}>
      {children}
    </a>
  )
}
