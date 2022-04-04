import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="flex h-full justify-center bg-gray-100">
      <Head />
      <body className="max-w-2/3 h-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
