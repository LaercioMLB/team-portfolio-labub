import { fireEvent, render, screen } from '@testing-library/react'
import Nav from '@/components/Nav'

describe('Nav', () => {
  it('renders logo, section links, theme toggle and contact', () => {
    render(<Nav />)
    expect(screen.getByRole('img', { name: 'Labub' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Labub/ })).toHaveAttribute('href', '/')
    for (const [label, href] of [
      ['Serviços', '/servicos'],
      ['Como trabalhamos', '/#metodo'],
      ['Cases', '/#cases'],
      ['Time', '/#time'],
      ['Perguntas', '/#perguntas'],
    ]) {
      expect(screen.getByRole('link', { name: label })).toHaveAttribute('href', href)
    }
    expect(screen.getByRole('button', { name: /tema/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Fale com a gente/ })).toHaveAttribute('href', '#contato')
  })

  it('opens and closes the mobile menu', () => {
    render(<Nav />)
    const toggle = screen.getByRole('button', { name: 'Abrir menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(toggle)
    expect(screen.getByRole('button', { name: 'Fechar menu' })).toHaveAttribute('aria-expanded', 'true')
    expect(document.getElementById('menu-celular')).toBeInTheDocument()
    fireEvent.keyDown(window, { key: 'Escape' })
    expect(document.getElementById('menu-celular')).not.toBeInTheDocument()
  })
})
