import { fireEvent, render, screen } from '@testing-library/react'
import Faq, { faq } from '@/components/Faq'

describe('Faq', () => {
  it('renders every question, with the first one open', () => {
    render(<Faq />)
    const buttons = faq.map((item) => screen.getByRole('button', { name: item.q }))
    expect(buttons[0]).toHaveAttribute('aria-expanded', 'true')
    expect(buttons[1]).toHaveAttribute('aria-expanded', 'false')
  })

  it('opens and closes an item', () => {
    render(<Faq />)
    const btn = screen.getByRole('button', { name: faq[2].q })
    fireEvent.click(btn)
    expect(btn).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('button', { name: faq[0].q })).toHaveAttribute('aria-expanded', 'true')
    fireEvent.click(btn)
    expect(btn).toHaveAttribute('aria-expanded', 'false')
  })
})
