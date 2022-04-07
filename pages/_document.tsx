import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="flex h-full w-full justify-center bg-slate-900 !p-0 text-slate-300">
      <Head />
      <body className="absolute h-full max-w-screen-2xl overflow-y-auto">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
