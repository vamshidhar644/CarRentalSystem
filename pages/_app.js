import '../styles/globals.css'
import Layout from '../Components/Layout'
import React from 'react'
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
