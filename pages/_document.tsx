import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="flex justify-center  bg-slate-900  p-5 text-slate-300">
      <Head />
      <body className="  max-w-screen-2xl overflow-y-auto">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
