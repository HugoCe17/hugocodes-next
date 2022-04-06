import { render, screen } from '@testing-library/react'
// import Home from '@/pages/index'
import ProfileSidebar from '../ProfileSidebar'

describe('ProfileSidebar', () => {
  it('renders a heading', () => {
    render(<ProfileSidebar />)
    // TODO: refactor and test against props
    expect(screen.getByText(/hugo cedano/i)).toHaveTextContent('Hugo Cedano')
    expect(screen.getByText(/Fullstack/i)).toHaveTextContent('Fullstack')
    expect(screen.getByText(/Web 2.5/i)).toHaveTextContent('Web 2.5')
    expect(screen.getByText(/Coding/i)).toHaveTextContent('Coding')
  })
})
