import {useEffect, Fragment} from "react"
import {useRouter} from "next/router"
import CookieConsent from "react-cookie-consent"

import * as gtag from "../lib/gtag"

import Navbar from "components/Navbar"

import "tailwindcss/tailwind.css"
import "styles/code.css"
import style from "../styles/backdrop.module.css"

function MyApp({Component, pageProps}) {
  const router = useRouter()

  useEffect(() => {
    // record the new page in google analytics
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
      <Navbar />

      <div className={style.backdrop1} />
      <div className={style.backdrop2} />

      <Component {...pageProps} />
      <CookieConsent
        style={{
          backgroundColor: 'black'
        }}
        buttonStyle={{
          backgroundColor: "white",
          borderRadius: "50px",
          padding: ".75rem 2rem",
          text: "black",
        }}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </Fragment>
  )
}

export default MyApp
