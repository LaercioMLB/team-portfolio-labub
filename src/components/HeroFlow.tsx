'use client'

// Hero da home · "Do zero ao deploy" (desenho: design-system/labub.pen › Home · Hero).
// Entrada única e rápida (400ms por parada), descanso em "No ar". Depois, hover ou Tab
// numa parada leva a luz até ela (350ms) e volta ao descanso ao sair (250ms).
// Cada parada é link: nada reage a hover se não for clicável (regras de interação).
import { useEffect, useLayoutEffect, useState } from 'react'
import AreaIcon, { type AreaIconName } from './AreaIcon'

type Stop = { icon: AreaIconName; label: string; short: string; sub: string; href: string; area?: string }

export const STOPS: Stop[] = [
  { icon: 'message-circle', label: 'Ideia', short: 'Ideia', sub: 'Você conta o que precisa', href: '#contato' },
  { icon: 'pen-tool', label: 'UX Design', short: 'UX', sub: 'Pesquisa e protótipo', href: '#servicos', area: 'ux' },
  { icon: 'monitor', label: 'Frontend', short: 'Front', sub: 'Interfaces rápidas', href: '#servicos', area: 'frontend' },
  { icon: 'layers', label: 'FullStack', short: 'Full', sub: 'APIs e dados', href: '#servicos', area: 'fullstack' },
  { icon: 'cloud', label: 'DevOps', short: 'DevOps', sub: 'Deploy e nuvem', href: '#servicos', area: 'devops' },
  { icon: 'circle-check', label: 'No ar', short: 'No ar', sub: 'Seu produto rodando', href: '#contato' },
]

const LAST = STOPS.length - 1
const STEP_MS = 400
const W = 520
const H = 470
const PTS = STOPS.map((_, i) => [i % 2 === 0 ? 60 : 290, 32 + i * 81] as const)
const PATH =
  `M ${PTS[0][0]} ${PTS[0][1]} ` +
  PTS.slice(1)
    .map(([x, y], i) => `C ${PTS[i][0]} ${PTS[i][1] + 42} ${x} ${y - 42} ${x} ${y}`)
    .join(' ')

// Abre a frente certa na lista de serviços da home (ServiceList escuta este evento).
export function selectServiceArea(area?: string) {
  if (area) window.dispatchEvent(new CustomEvent('labub:service-area', { detail: area }))
}

const useIsoLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect

function stopState(i: number, active: number) {
  if (i === active) return i === LAST ? 'live' : 'current'
  return i < active ? 'done' : 'next'
}

// Fundo sempre opaco: o tom translúcido (accent-bg, success-bg) vai por cima de --color-bg.
// Assim a linha do caminho passa por baixo do círculo e termina, visualmente, na borda.
// (Classes escritas por extenso: o Tailwind só gera o que aparece literal no código.)
const nodeClass = {
  live: 'bg-bg bg-[linear-gradient(var(--color-success-bg),var(--color-success-bg))] border-success text-success shadow-[0_0_18px_var(--color-success-bg)]',
  current: 'bg-bg bg-[linear-gradient(var(--color-accent-bg),var(--color-accent-bg))] border-accent text-accent-soft shadow-[0_0_18px_var(--color-accent-glow)]',
  done: 'bg-surface border-accent-border text-accent-text',
  next: 'bg-bg border-border text-text-muted',
} as const

export default function HeroFlow({ variant }: { variant: 'map' | 'row' }) {
  if (variant === 'row') return <HeroFlowRow />
  return <HeroFlowMap />
}

function HeroFlowMap() {
  // No servidor (e sem JS) o mapa já vem completo, em descanso.
  const [lit, setLit] = useState(LAST)
  const [introDone, setIntroDone] = useState(true)
  const [hover, setHover] = useState<number | null>(null)

  useIsoLayoutEffect(() => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    setIntroDone(false)
    setLit(0)
    let i = 0
    const t = window.setInterval(() => {
      i += 1
      setLit(i)
      if (i >= LAST) {
        window.clearInterval(t)
        setIntroDone(true)
      }
    }, STEP_MS)
    return () => window.clearInterval(t)
  }, [])

  const active = introDone && hover !== null ? hover : lit
  const lightDuration = !introDone
    ? 'duration-[400ms]'
    : hover !== null
      ? 'duration-[var(--duration-medium)]'
      : 'duration-[var(--duration-fast)]'

  return (
    <nav aria-label="Do zero ao deploy">
      {/* Desktop: o caminho em curvas */}
      <div
        className="relative"
        style={{ width: W, height: H }}
        onMouseLeave={() => setHover(null)}
      >
        <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H} className="absolute inset-0" aria-hidden="true">
          <path d={PATH} fill="none" stroke="var(--color-border-strong)" strokeWidth={1.5} strokeDasharray="4 6" />
          <path
            d={PATH}
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth={2}
            pathLength={100}
            strokeDasharray="100 100"
            strokeDashoffset={100 - (active / LAST) * 100}
            className={`transition-[stroke-dashoffset] ease-[var(--ease)] motion-reduce:transition-none ${lightDuration}`}
            style={{ filter: 'drop-shadow(0 0 4px var(--color-accent))' }}
          />
        </svg>

        <ol>
          {STOPS.map((s, i) => {
            const state = stopState(i, active)
            const showHint = introDone && hover === i
            const [x, y] = PTS[i]
            return (
              <li key={s.label} className="absolute" style={{ left: x - 22, top: y - 22 }}>
                <a
                  href={s.href}
                  onClick={() => selectServiceArea(s.area)}
                  onMouseEnter={() => setHover(i)}
                  onFocus={() => setHover(i)}
                  onBlur={() => setHover(null)}
                  aria-current={i === active ? 'step' : undefined}
                  className="group flex min-h-11 items-start gap-3 rounded-full focus-visible:outline-none"
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-colors duration-[var(--duration-fast)] group-focus-visible:outline-2 group-focus-visible:outline-offset-2 group-focus-visible:outline-focus ${nodeClass[state]}`}
                  >
                    <AreaIcon name={s.icon} className="h-[18px] w-[18px]" />
                  </span>
                  <span className="relative w-[180px] pt-1">
                    <span className={`block text-body-sm font-semibold ${state === 'next' ? 'text-text-soft' : 'text-text'}`}>
                      {s.label}
                    </span>
                    <span className="block text-caption text-text-muted">{s.sub}</span>
                    {/* Dica em posição absoluta: aparecer não empurra nada */}
                    <span
                      className={`absolute left-0 top-full flex items-center gap-1 pt-1 text-caption font-semibold text-accent-text transition-opacity duration-[var(--duration-fast)] ${showHint ? 'opacity-100' : 'opacity-0'}`}
                      aria-hidden={!showHint}
                    >
                      {s.area ? 'Ver serviços' : 'Falar com a gente'} <span aria-hidden="true">→</span>
                    </span>
                  </span>
                </a>
              </li>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}

// Celular e tablet: fileira compacta, mapa completo em descanso, toque abre o link.
function HeroFlowRow() {
  return (
    <nav aria-label="Do zero ao deploy">
      <div>
        <p className="mb-3 text-micro font-semibold uppercase tracking-caps-sm text-text-muted">
          Do zero ao deploy
        </p>
        <ol className="flex justify-between">
          {STOPS.map((s, i) => (
            <li key={s.label}>
              <a
                href={s.href}
                onClick={() => selectServiceArea(s.area)}
                aria-label={`${s.label}: ${s.sub}`}
                className="group flex min-h-11 w-[52px] flex-col items-center gap-1.5 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
              >
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-full border ${i === LAST ? nodeClass.live : nodeClass.done}`}
                >
                  <AreaIcon name={s.icon} />
                </span>
                <span className="text-micro font-semibold text-text">{s.short}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
