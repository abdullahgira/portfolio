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
        <meta charSet="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="Abdullah Gira" key="og:title" />
        <meta
          property="og:image"
          content="https://abdullahgira.com/social-media-profile-img.jpg"
          key="og:image"
        />

        {/* <!-- Twitter -->   */}
        <meta
          property="twitter:card"
          content="summary_large_image"
          key="twitter:type"
        />
        <meta
          property="twitter:title"
          content="Abdullah Gira"
          key="twitter:title"
        />
        <meta
          property="twitter:image"
          content="https://abdullahgira.com/social-media-profile-img.jpg"
          key="twitter:image"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
