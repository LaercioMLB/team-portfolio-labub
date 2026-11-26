import { render, screen, within } from '@testing-library/react'
import ServicesBody from '@/components/ServicesBody'
import { serviceAreas } from '@/data/services'

describe('ServicesBody', () => {
  it('renders every area with its six services and descriptions', () => {
    render(<ServicesBody />)
    for (const area of serviceAreas) {
      const section = screen.getByRole('region', { name: area.label })
      expect(section).toHaveAttribute('id', area.slug)
      for (const item of area.items) {
        expect(within(section).getByText(item.title)).toBeInTheDocument()
        expect(within(section).getByText(item.desc)).toBeInTheDocument()
      }
      expect(within(section).getByRole('link', { name: `Falar sobre ${area.label}` })).toHaveAttribute('href', '#contato')
    }
  })

  it('has a desktop index with the first area marked', () => {
    render(<ServicesBody />)
    const index = screen.getByRole('navigation', { name: 'Frentes nesta página' })
    const links = within(index).getAllByRole('link')
    expect(links.map((l) => l.getAttribute('href'))).toEqual(serviceAreas.map((a) => `#${a.slug}`))
    expect(links[0]).toHaveAttribute('aria-current', 'location')
  })
})
