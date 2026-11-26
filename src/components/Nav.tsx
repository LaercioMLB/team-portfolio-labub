'use client'

// Nav da home v2 (labub.pen › 08–11 e 12 · menu do celular aberto).
// Desktop: links, seletor de tema e "Fale com a gente" secundário (o principal fica no hero).
// Celular: seletor de tema e botão de menu; o menu cobre a página abaixo da nav e fecha
// no X, no Esc ou ao tocar num link.
import { useEffect, useState } from 'react'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'
import AreaIcon from './AreaIcon'

export const navLinks = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Como trabalhamos', href: '#metodo' },
  { label: 'Cases', href: '#cases' },
  { label: 'Time', href: '#time' },
  { label: 'Perguntas', href: '#perguntas' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <nav
        className="sticky top-0 z-50 flex h-[60px] items-center justify-between border-b border-divider bg-nav px-4 backdrop-blur-md md:h-[76px] md:px-12"
        aria-label="Navegação principal"
      >
        <a href="#" className="flex h-11 shrink-0 items-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus" aria-label="Labub — voltar ao início">
          <Logo className="h-7 w-auto md:h-9" />
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-sm text-body-sm font-medium text-text-muted transition-colors duration-[var(--duration-quick)] hover:text-text focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 md:gap-3">
          <ThemeToggle />
          <a
            href="#contato"
            className="hidden h-11 items-center gap-2 rounded-md border border-border-strong px-4 text-body-sm font-semibold text-text transition-colors duration-[var(--duration-quick)] hover:border-border-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus md:inline-flex"
          >
            Fale com a gente
            <AreaIcon name="arrow-right" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-celular"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border-strong text-text transition-colors duration-[var(--duration-quick)] hover:border-border-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus lg:hidden"
          >
            <AreaIcon name={open ? 'x' : 'menu'} className="h-[18px] w-[18px]" />
          </button>
        </div>

      </nav>

      {/* Fora da <nav>: o backdrop-blur dela prenderia um painel fixo dentro dela. */}
      {open && (
        <div
          id="menu-celular"
          className="fixed inset-x-0 bottom-0 top-[60px] z-50 flex flex-col bg-bg px-4 pb-6 pt-4 md:top-[76px] md:px-12 lg:hidden"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex h-[52px] items-center justify-between border-b border-divider text-[17px] font-semibold text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
                >
                  {link.label}
                  <AreaIcon name="arrow-right" className="h-4 w-4 text-text-muted" />
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="mt-auto flex h-[52px] items-center justify-center gap-2 rounded-md bg-primary text-body font-bold text-on-primary transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
          >
            Fale com a gente
            <AreaIcon name="arrow-right" />
          </a>
        </div>
      )}
    </>
  )
}
