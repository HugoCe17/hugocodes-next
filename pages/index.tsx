import type { NextPage } from 'next'
import Head from 'next/head'
import ProfileVideo from '@/components/ProfileVideo'
const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center">
      <Head>
        <title>hugocodes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center">
        <ProfileVideo src="/ferry-ride.mp4" />

        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>
        <p className="mt-3 text-2xl">
          Get started by editing{' '}
          <code className="bg-slate-800 p-3 font-mono text-lg">
            pages/index.tsx
          </code>
        </p>
      </main>
    </div>
  )
}

export default Home
