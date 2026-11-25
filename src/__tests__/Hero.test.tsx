import { render, screen } from '@testing-library/react'
import Hero from '@/components/Hero'

describe('Hero', () => {
  it('renders badge, headline lines, and subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/Aceitando novos projetos/)).toBeInTheDocument()
    expect(screen.getByText('Construímos')).toBeInTheDocument()
    expect(screen.getByText('o digital que')).toBeInTheDocument()
    expect(screen.getByText('move negócios.')).toBeInTheDocument()
    expect(screen.getByText(/Do zero ao deploy, a gente cuida/)).toBeInTheDocument()
  })

  it('renders the "do zero ao deploy" stops as links', () => {
    render(<Hero />)
    // mapa (desktop) + fileira (celular): cada parada aparece nas duas versões
    for (const label of ['UX Design', 'Frontend', 'FullStack', 'DevOps']) {
      const links = screen.getAllByRole('link', { name: new RegExp(label) })
      expect(links.length).toBeGreaterThan(0)
      links.forEach((l) => expect(l).toHaveAttribute('href', '#servicos'))
    }
    expect(screen.getAllByRole('navigation', { name: 'Do zero ao deploy' })).toHaveLength(2)
  })
})
