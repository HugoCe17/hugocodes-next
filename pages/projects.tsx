import type { NextPage } from 'next'
import Head from 'next/head'

const posts = [
  {
    title: 'In the beginning',
    href: '#',
    category: { name: 'Sapient 2015', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '6 min',
    author: {
      name: 'Hugo Cedano',
      href: '#',
      imageUrl: 'https://avatars.githubusercontent.com/u/1256596?v=4',
    },
  },
  {
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '4 min',
    author: {
      name: 'Hugo Cedano',
      href: '#',
      imageUrl: 'https://avatars.githubusercontent.com/u/1256596?v=4',
    },
  },
  {
    title: 'Improve your customer experience',
    href: '#',
    category: { name: 'Case Study', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '11 min',
    author: {
      name: 'Hugo Cedano',
      href: '#',
      imageUrl: 'https://avatars.githubusercontent.com/u/1256596?v=4',
    },
  },
]

const Projects: NextPage = () => {
  return (
    <div className=" flex h-full  flex-col items-center justify-center">
      <Head>
        <title>hugocodes - projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex w-full flex-1 flex-col items-center text-center">
        <div className="bg-slate-50- relative">
          {/* <div className="absolute inset-0">
            <div className="h-1/3 bg-slate-700 sm:h-2/3" />
          </div> */}
          <div className="relative mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-400 sm:text-4xl">
                Projects
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-xl text-slate-500 sm:mt-4">
                Here & There...
              </p>
            </div>
            <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
              {posts.map((post) => (
                <div
                  key={post.title}
                  className="flex flex-col overflow-hidden rounded-lg  shadow-lg shadow-slate-800"
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
                          className="hover:underline"
                        >
                          {post.category.name}
                        </a>
                      </p>
                      <a href={post.href} className="mt-2 block">
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
                        <a href={post.author.href}>
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
