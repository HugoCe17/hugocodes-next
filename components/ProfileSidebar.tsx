import { Fragment, useState, ReactNode } from 'react'
import type { AppProps } from 'next/app'

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

export default function ProfileSidebar(props: Props) {
  const { navigation } = props
  return (
    <div className="flex min-h-0 flex-1 flex-col bg-gray-800">
      <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
        <div className="flex flex-shrink-0 items-center px-4">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
            alt="Workflow"
          />
        </div>
        <nav className="mt-5 flex-1 space-y-1 px-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'group flex items-center rounded-md px-2 py-2 text-sm font-medium'
              )}
            >
              <item.icon
                className={classNames(
                  item.current
                    ? 'text-gray-300'
                    : 'text-gray-400 group-hover:text-gray-300',
                  'mr-3 h-6 w-6 flex-shrink-0'
                )}
                aria-hidden="true"
              />
              {item.name}
            </a>
          ))}
        </nav>
      </div>
      <div className="flex flex-shrink-0 bg-gray-700 p-4">
        <a href="#" className="group block w-full flex-shrink-0">
          <div className="flex items-center">
            <div>
              <img
                className="inline-block h-9 w-9 rounded-full"
                src="https://avatars.githubusercontent.com/u/1256596?v=4"
                alt=""
              />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-white">Hugo Cedano</p>
              <p className="text-xs font-medium text-gray-300 group-hover:text-gray-200">
                View profile
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}
