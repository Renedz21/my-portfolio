import Title from '@/components/Title'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='scroll-smooth'>
      <Head />
      <title>Portfolio | Edzon</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
