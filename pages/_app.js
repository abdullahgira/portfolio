import {Fragment, useEffect} from "react"
import Aos from "aos"

import "aos/dist/aos.css"
import "tailwindcss/tailwind.css"
import "styles/globals.css"
import Navbar from "components/navbar"

function MyApp({Component, pageProps}) {
  useEffect(() => {
    Aos.init({duration: 700})
  }, [])

  return (
    <Fragment>
      <Navbar />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
