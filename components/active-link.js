import {useRouter} from "next/router"

export default function ActiveLink({className, children, href, ...props}) {
  const router = useRouter()
  const styleClassName = `py-2 hover:text-gray-700 ${className} ${
    router?.pathname === href
      ? "text-gray-700 border-b-2 border-blue-700 font-bold"
      : "text-gray-500"
  }`

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} {...props} onClick={handleClick} className={styleClassName}>
      {children}
    </a>
  )
}
