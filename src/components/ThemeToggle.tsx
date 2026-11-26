'use client'

// Seletor de tema (design-system/labub.pen › Theme toggle). Botão redondo de 44px.
// No claro mostra a lua (vai para o escuro); no escuro, o sol. O ícone certo vem do CSS
// ([data-theme] no <html>, definido antes do primeiro quadro), então não pisca na hidratação.
import { useEffect, useSyncExternalStore } from 'react'
import AreaIcon from './AreaIcon'

type Theme = 'light' | 'dark'
const KEY = 'labub-theme'

function readTheme(): Theme {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
}

// O tema mora no atributo data-theme do <html>; o React só observa.
function subscribe(onChange: () => void) {
  const obs = new MutationObserver(onChange)
  obs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
  return () => obs.disconnect()
}

function setTheme(next: Theme, remember: boolean) {
  document.documentElement.dataset.theme = next
  if (!remember) return
  try {
    localStorage.setItem(KEY, next)
  } catch {}
}

export default function ThemeToggle({ className = '' }: { className?: string }) {
  const theme = useSyncExternalStore<Theme | null>(subscribe, readTheme, () => null)

  // Sem escolha guardada, acompanha o sistema quando ele muda.
  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-color-scheme: light)')
    if (!mq) return
    const onChange = (e: MediaQueryListEvent) => {
      let stored: string | null = null
      try {
        stored = localStorage.getItem(KEY)
      } catch {}
      if (!stored) setTheme(e.matches ? 'light' : 'dark', false)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const label = theme === 'light' ? 'Usar tema escuro' : theme === 'dark' ? 'Usar tema claro' : 'Trocar tema'

  return (
    <button
      type="button"
      onClick={() => setTheme(readTheme() === 'light' ? 'dark' : 'light', true)}
      aria-label={label}
      title={label}
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border-strong text-text-muted transition-colors duration-[var(--duration-quick)] hover:border-border-hover hover:text-text active:bg-tint-pressed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus ${className}`}
    >
      <span className="theme-icon-moon">
        <AreaIcon name="moon" className="h-[18px] w-[18px]" />
      </span>
      <span className="theme-icon-sun">
        <AreaIcon name="sun" className="h-[18px] w-[18px]" />
      </span>
    </button>
  )
}
