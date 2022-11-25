import {PageSEO} from "components/SEO"
import React from "react"
import {useRouter} from "next/router"

export default function Home() {
  const router = useRouter()

  React.useEffect(() => {
    router.replace("/blog")
  }, [])

  return (
    <div>
      <PageSEO title="Abdullah Gira" description="Software Engineer" />
    </div>
  )
}
