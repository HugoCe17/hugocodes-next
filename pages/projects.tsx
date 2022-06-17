import type { NextPage } from 'next'
import Head from 'next/head'
import posts from '@/fixtures/projects'

const Projects: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>hugocodes - projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center text-center">
        <div className="bg-slate-50- relative ">
          {/* <div className="absolute inset-0">
            <div className="h-1/3 bg-slate-700 sm:h-2/3" />
          </div> */}
          <div className="relative mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-400 sm:text-4xl">
                Projects
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-xl text-slate-500 sm:mt-4">
                WIP...
              </p>
            </div>
            <div className="mx-auto grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
              {posts.map((post) => (
                <div
                  key={post.title}
                  className="flex   flex-col  overflow-hidden  shadow-lg shadow-slate-800"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover"
                      src={post.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between bg-slate-700 p-6">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-amber-400">
                        <a
                          href={post.category.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {post.category.name}
                        </a>
                      </p>
                      <a
                        href={post.href}
                        className="mt-2 block"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p className="text-xl font-semibold text-slate-400">
                          {post.title}
                        </p>
                        <p className="mt-3 text-base text-slate-500">
                          {post.description}
                        </p>
                      </a>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        <a
                          href={post.author.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="sr-only">{post.author.name}</span>
                          <img
                            className="h-10 w-10 rounded-full"
                            src={post.author.imageUrl}
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-slate-400">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={post.author.href}
                            className="hover:underline"
                          >
                            {post.author.name}
                          </a>
                        </p>
                        <div className="flex space-x-1 text-sm text-slate-500">
                          <time dateTime={post.datetime}>{post.date}</time>
                          <span aria-hidden="true">&middot;</span>
                          <span>{post.readingTime} read</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Projects
