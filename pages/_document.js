import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

export default function Document() {
  return (
    <Html>
      <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/> 
            <link href="https://fonts.googleapis.com/css2?family=Carter+One&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Michroma&display=swap" rel="stylesheet"/> 
            <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet"/> 
            <link href="https://fonts.googleapis.com/css2?family=Nerko+One&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet"/> 
            <link href="https://fonts.googleapis.com/css2?family=Finger+Paint&display=swap" rel="stylesheet"/> 
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
