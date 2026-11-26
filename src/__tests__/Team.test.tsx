import { render, screen } from '@testing-library/react'
import Team from '@/components/Team'

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} />
  ),
}))

describe('Team', () => {
  it('renders every member with area, tagline and skills', () => {
    render(<Team />)
    for (const name of ['Laercio Bubiak', 'Dionei Bianchati', 'Vinicios Engelage', 'Riad Younes', 'Gustavo Gamarra']) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
    expect(screen.getByText('DevOps · Cloud Infrastructure')).toBeInTheDocument()
    expect(screen.getByText('Deixa qualquer interface rápida mesmo em conexão fraca.')).toBeInTheDocument()
    expect(screen.getByText('Automation AI')).toBeInTheDocument()
  })

  it('shows only the links that exist', () => {
    render(<Team />)
    expect(screen.getByLabelText('LinkedIn de Dionei Bianchati')).toHaveAttribute('href', 'https://www.linkedin.com/in/dionbiancha')
    expect(screen.getByLabelText('Portfólio de Laercio Bubiak')).toHaveAttribute('href', 'https://www.laercio.me/')
    expect(screen.queryByLabelText('LinkedIn de Riad Younes')).not.toBeInTheDocument()
    expect(screen.queryByLabelText('Portfólio de Donizeti Junior')).not.toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn de Donizeti Junior')).toBeInTheDocument()
  })
})
