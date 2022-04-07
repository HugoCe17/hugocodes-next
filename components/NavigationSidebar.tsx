import { Fragment, useState, ReactNode } from 'react'
import type { AppProps } from 'next/app'
import Link from 'next/link'
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

const transitionDelayClasses = [
  'delay-150',
  'delay-200',
  'delay-300',
  'delay-500',
  'delay-700',
  'delay-1000',
]
type Props = {
  navigation: NavigationItem[]
}
export default function NavigationSidebar(props: Props) {
  const { navigation } = props
  const [docked, setDocked] = useState(true)

  return (
    <div
      className={classNames(
        'flex h-full  flex-1 flex-col bg-slate-800 p-2 shadow-md shadow-slate-800 md:divide-y md:divide-slate-700  '
      )}
    >
      <div className={classNames('sticky top-0 z-10 hidden md:flex')}>
        <button
          type="button"
          className=" inline-flex h-12 w-12 items-center justify-center text-slate-300 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          onClick={() => setDocked(!docked)}
        >
          <span className="sr-only">Open sidebar</span>
          <MenuIcon className="h-10 w-10" aria-hidden="true" />
        </button>
      </div>
      <Transition.Root
        show={docked}
        as="nav"
        className={classNames(
          'flex h-full flex-col justify-center space-y-1 overflow-hidden px-4 '
        )}
      >
        {navigation.map((item, i, items) => {
          return (
            <Transition.Child
              key={i}
              as="div"
              enter={classNames(
                'transition duration-500 ease-in-out transform',
                transitionDelayClasses[i]
              )}
              enterFrom="translate-x-full opacity-0"
              enterTo="-translate-x-0 opacity-100"
              leave={classNames(
                `transition duration-500 ease-in-out transform`,
                transitionDelayClasses[i]
              )}
              leaveFrom="-translate-x-0 opacity-100"
              leaveTo="translate-x-full opacity-0"
            >
              <Link href={item.href} passHref>
                <div
                  className={classNames(
                    item.current
                      ? 'bg-slate-800 text-white'
                      : 'text-slate-300 hover:bg-slate-700 hover:text-white',
                    'group flex items-center px-2 py-2 text-sm font-medium'
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
                </div>
              </Link>
            </Transition.Child>
          )
        })}
      </Transition.Root>
    </div>
  )
}
