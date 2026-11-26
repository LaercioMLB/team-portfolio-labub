import { fireEvent, render, screen } from '@testing-library/react'
import ThemeToggle from '@/components/ThemeToggle'

describe('ThemeToggle', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.dataset.theme = 'dark'
  })

  it('switches between dark and light and remembers the choice', async () => {
    render(<ThemeToggle />)
    fireEvent.click(screen.getByRole('button', { name: 'Usar tema claro' }))
    expect(document.documentElement.dataset.theme).toBe('light')
    expect(localStorage.getItem('labub-theme')).toBe('light')
    fireEvent.click(await screen.findByRole('button', { name: 'Usar tema escuro' }))
    expect(document.documentElement.dataset.theme).toBe('dark')
    expect(await screen.findByRole('button', { name: 'Usar tema claro' })).toBeInTheDocument()
  })
})
