import '../styles/globals.css'
import React, {createContext} from 'react'

const DarkMode = createContext(true)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
