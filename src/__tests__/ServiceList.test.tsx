import { act, fireEvent, render, screen } from '@testing-library/react'
import ServiceList from '@/components/ServiceList'
import { serviceAreas } from '@/data/services'

describe('ServiceList', () => {
  it('starts with the first area open and one area open at a time', () => {
    render(<ServiceList />)
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(serviceAreas.length)
    expect(buttons[0]).toHaveAttribute('aria-expanded', 'true')
    fireEvent.click(buttons[3])
    expect(buttons[3]).toHaveAttribute('aria-expanded', 'true')
    expect(buttons[0]).toHaveAttribute('aria-expanded', 'false')
    expect(window.location.hash).toBe(`#${serviceAreas[3].slug}`)
    fireEvent.click(buttons[3])
    expect(buttons[3]).toHaveAttribute('aria-expanded', 'false')
  })

  it('lists the six services of each area and opens from the hero event', () => {
    render(<ServiceList />)
    for (const area of serviceAreas) {
      expect(screen.getByRole('region', { name: `Serviços de ${area.label}`, hidden: true })).toBeInTheDocument()
    }
    act(() => {
      window.dispatchEvent(new CustomEvent('labub:service-area', { detail: 'ux' }))
    })
    expect(screen.getByRole('button', { name: /UX Design/ })).toHaveAttribute('aria-expanded', 'true')
  })

  it('links to the full services page', () => {
    render(<ServiceList />)
    expect(screen.getByRole('link', { name: /Ver todos os serviços/ })).toHaveAttribute('href', '/servicos')
    const details = screen.getAllByRole('link', { name: /Ver detalhes/, hidden: true })
    expect(details.map((d) => d.getAttribute('href'))).toEqual(serviceAreas.map((a) => `/servicos#${a.slug}`))
  })
})
