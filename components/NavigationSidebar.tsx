import { Fragment, useState, ReactNode } from 'react'
import type { AppProps } from 'next/app'
import Image from 'next/image'
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
import { classNames } from '@/util/index'
export type NavigationItem = {
  name: string
  href: string
  current: boolean
  icon: any
}

type Props = {
  navigation: NavigationItem[]
}

export default function NavigationSidebar(props: Props) {
  const { navigation } = props
  const [docked, setDocked] = useState(true)

  return (
    <div className="flex h-full  flex-col bg-slate-900">
      <div className="sticky top-0 z-10 bg-slate-900">
        <button
          type="button"
          className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-slate-300 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          onClick={() => setDocked(!docked)}
        >
          <span className="sr-only">Open sidebar</span>
          <MenuIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <Transition.Root show={docked} as={Fragment}>
        <Dialog
          as="div"
          className="sticky top-0 z-10 bg-slate-900"
          onClose={setDocked}
        >
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="-translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="-translate-x-0"
            leaveTo="translate-x-full"
          >
            <div className="fixed top-5 right-0 flex h-full max-w-xs bg-slate-900">
              <nav className="mt-5 h-full space-y-1 px-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-slate-900 text-white'
                        : 'text-slate-300 hover:bg-slate-700 hover:text-white',
                      'group flex items-center rounded-md px-2 py-2 text-sm font-medium'
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? 'text-slate-300'
                          : 'text-slate-400 group-hover:text-slate-300',
                        'mr-3 h-6 w-6 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          </Transition.Child>
          {/* <div className="w-14 flex-shrink-0"></div> */}
        </Dialog>
      </Transition.Root>
    </div>
  )
}
