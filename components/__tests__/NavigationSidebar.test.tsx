import { render, screen } from '@testing-library/react'
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from '@heroicons/react/outline'
import NavigationSidebar from '../NavigationSidebar'

describe('NavigationSidebar', () => {
  it('renders a heading', () => {
    const navigation = [
      { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
      { name: 'Team', href: '#', icon: UsersIcon, current: false },
      { name: 'Projects', href: '#', icon: FolderIcon, current: false },
      { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
      { name: 'Documents', href: '#', icon: InboxIcon, current: false },
      { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
    ]
    render(<NavigationSidebar navigation={navigation} />)
    // TODO: refactor and test against props
    expect(screen.getByText(/Dashboard/i)).toHaveTextContent('Dashboard')
  })
})
