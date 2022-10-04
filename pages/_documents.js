// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" 
      rel="stylesheet"/>
      <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
      