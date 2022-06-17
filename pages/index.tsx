import type { NextPage } from 'next'
import Head from 'next/head'
import ProfileVideo from '@/components/ProfileVideo'
const Home: NextPage = () => {
  return (
    <div className="w-full">
      <Head>
        <title>hugocodes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center">
        <ProfileVideo src="/ferry-ride.mp4" />
        <h1 className="text-6xl font-bold">Bienvenidos!</h1>
        WIP
        {/* <p className="mt-3 text-2xl">
          Get started by editing{' '}
          <code className="bg-slate-800 p-3 font-mono text-lg">
            pages/index.tsx
          </code>
        </p> */}
      </main>
    </div>
  )
}

export default Home
