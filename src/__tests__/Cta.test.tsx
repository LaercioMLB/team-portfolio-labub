import { render, screen } from '@testing-library/react'
import Cta from '@/components/Cta'

describe('Cta', () => {
  it('offers WhatsApp and e-mail without a form', () => {
    render(<Cta />)
    expect(screen.getByRole('link', { name: /Chamar no WhatsApp/ })).toHaveAttribute('href', expect.stringContaining('whatsapp.com'))
    expect(screen.getByRole('link', { name: /Mandar um e-mail/ })).toHaveAttribute('href', 'mailto:lbubiak@hotmail.com')
    expect(screen.getByText(/resposta em até 24h/)).toBeInTheDocument()
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument()
  })
})
