import { render, screen } from '@testing-library/react'
import Cases from '@/components/Cases'

describe('Cases', () => {
  it('renders each case as a link with challenge, solution and result', () => {
    render(<Cases />)
    for (const name of ['SOS Construir', 'FixeCRM', 'Organizadin']) {
      expect(screen.getByRole('link', { name: new RegExp(name) })).toHaveAttribute('target', '_blank')
    }
    expect(screen.getAllByText('Desafio')).toHaveLength(3)
    expect(screen.getAllByText('Resultado')).toHaveLength(3)
    expect(screen.getByText(/Open Finance/)).toBeInTheDocument()
  })
})
