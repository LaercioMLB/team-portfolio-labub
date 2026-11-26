import { render, screen } from '@testing-library/react'
import Testimonials from '@/components/Testimonials'

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} />
  ),
}))

describe('Testimonials', () => {
  it('renders the quote and its author', () => {
    render(<Testimonials />)
    expect(screen.getByText('Clói Rotta')).toBeInTheDocument()
    expect(screen.getByText(/zero dor de cabeça/)).toBeInTheDocument()
  })
})
