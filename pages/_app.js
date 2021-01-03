import React from "react"

import "tailwindcss/tailwind.css"
import "styles/globals.css"
import Navbar from "components/navbar"

function MyApp({Component, pageProps}) {
  return (
    <React.Fragment>
      <Navbar />
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp
