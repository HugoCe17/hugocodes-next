import '../styles/globals.css'
import { Fragment, useState } from 'react'
import type { AppProps } from 'next/app'
// import Image from 'next/image'
import { Dialog, Transition } from '@headlessui/react'
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuIcon,
  UsersIcon,
  XIcon,
} from '@heroicons/react/outline'
import ProfileSidebar from '@/components/ProfileSidebar'
import NavigationSidebar from '@/components/NavigationSidebar'

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '#', icon: InboxIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
]

export default function MyApp({ Component, pageProps }: AppProps) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)

  return (
    <>
      <div className="h-full">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-40 flex md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-slate-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex w-full max-w-xs flex-1 flex-col bg-slate-900">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <ProfileSidebar />
              </div>
            </Transition.Child>
            <div className="w-14 flex-shrink-0"></div>
          </Dialog>
        </Transition.Root>

        <div className="sticky top-0 z-10 w-full bg-slate-900 md:hidden">
          <button
            type="button"
            className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-slate-300 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="sticky top-0 flex h-full flex-1 p-5">
          <div className="hidden py-5 md:absolute md:inset-y-0 md:flex md:w-72 md:flex-col">
            <ProfileSidebar />
          </div>
          <main className="flex-1 md:pl-72">
            <Component {...pageProps} />
          </main>

          <div className=" hidden md:relative  md:flex  md:flex-col">
            <NavigationSidebar navigation={navigation} />
          </div>
        </div>
      </div>
    </>
  )
}
