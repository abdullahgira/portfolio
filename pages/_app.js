import React from "react"

import "tailwindcss/tailwind.css"
import "styles/globals.css"
import Navbar from "components/navbar"
import Head from "next/head"

function MyApp({Component, pageProps}) {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp
