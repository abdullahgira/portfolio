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
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://abdullahgira.com/" />
        <meta property="og:title" content="Abdullah Gira" />
        <meta
          property="og:description"
          content="I’m a full-stack web developer who loves to build quality software"
        />
        <meta
          property="og:image"
          content="https://abdullahgira.com/social-media-profile-img.jpg"
        />

        {/* <!-- Twitter -->   */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://abdullahgira.com/" />
        <meta property="twitter:title" content="Abdullah Gira" />
        <meta
          property="twitter:description"
          content="I’m a full-stack web developer who loves to build quality software"
        />
        <meta
          property="twitter:image"
          content="https://abdullahgira.com/social-media-profile-img.jpg"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
