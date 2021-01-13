import {useEffect, Fragment} from "react"
import Head from "next/head"
import {useRouter} from "next/router"
import * as gtag from "../lib/gtag"
import Navbar from "components/navbar"

import "tailwindcss/tailwind.css"
import "styles/globals.css"

function MyApp({Component, pageProps}) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  return (
    <Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
