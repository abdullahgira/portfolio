import {useEffect, Fragment, useState} from "react"
import {useRouter} from "next/router"
import CookieConsent from "react-cookie-consent"

import * as gtag from "../lib/gtag"

import Navbar from "components/Navbar"
import IconWrapper from "components/IconWrapper"
import IconLoading from "components/IconLoading"

import "tailwindcss/tailwind.css"
import "styles/global.css"

import "styles/code.css"
import style from "styles/backdrop.module.css"

function MyApp({Component, pageProps}) {
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsLoading(true)
    }

    const handleRouteChangeComplete = (url) => {
      setIsLoading(false)

      // record the new page in google analytics
      gtag.pageview(url)
    }

    router.events.on("routeChangeStart", handleRouteChangeStart)
    router.events.on("routeChangeComplete", handleRouteChangeComplete)

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart)
      router.events.off("routeChangeComplete", handleRouteChangeComplete)
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
          backgroundColor: "black",
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

      <div
        className={`fixed bottom-6 right-6 w-10 h-10 bg-black rounded-md shadow-md flex items-center justify-center ${
          isLoading ? "animate-in" : "animate-out"
        }`}
      >
        <IconWrapper className="w-5 text-white">
          <IconLoading />
        </IconWrapper>
      </div>
    </Fragment>
  )
}

export default MyApp
