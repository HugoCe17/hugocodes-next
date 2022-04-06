import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="max-w-1/3  flex h-full justify-center bg-slate-800 text-slate-300">
      <Head />
      <body className="h-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
