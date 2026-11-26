import { render, screen } from '@testing-library/react'
import Hero from '@/components/Hero'

describe('Hero', () => {
  it('renders headline, one primary action and proof', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Do zero ao deploy,com um time só.')
    expect(screen.getByRole('link', { name: /Fale com a gente/ })).toHaveAttribute('href', '#contato')
    expect(screen.getByRole('link', { name: /Ver como trabalhamos/ })).toHaveAttribute('href', '#metodo')
    expect(screen.getByText('7 especialistas no time')).toBeInTheDocument()
  })

  it('renders the "do zero ao deploy" stops as links', () => {
    render(<Hero />)
    for (const label of ['UX Design', 'Frontend', 'FullStack', 'DevOps']) {
      const links = screen.getAllByRole('link', { name: new RegExp(label) })
      expect(links.length).toBeGreaterThan(0)
      links.forEach((l) => expect(l).toHaveAttribute('href', '#servicos'))
    }
    expect(screen.getAllByRole('navigation', { name: 'Do zero ao deploy' })).toHaveLength(2)
  })
})
