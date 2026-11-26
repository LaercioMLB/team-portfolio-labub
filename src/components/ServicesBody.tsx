'use client'

// Corpo da /servicos v2 (labub.pen › 13–17).
// Desktop: índice fixo à esquerda (peça Index item); a marca índigo segue a frente que ocupa
// o topo da tela e desliza em 250ms. Celular: sumário no topo; quando ele sai da tela, uma
// faixa fixa abaixo da nav mostra a frente atual e leva de volta ao sumário.
// Chegada por /servicos#devops: o navegador rola até a frente (scroll-padding da nav) e o
// índice já marca DevOps. "Reduzir movimento": sem deslize nem rolagem suave.
// Chegada de cada frente (escolhida em 26/11/2026): ver AreaSection, no fim do arquivo.
import { useEffect, useRef, useState } from 'react'
import { serviceAreas, type ServiceArea } from '@/data/services'
import AreaIcon from './AreaIcon'

const ITEM_H = 44

export default function ServicesBody() {
  const [active, setActive] = useState(0)
  const [showBar, setShowBar] = useState(false)
  const summaryRef = useRef<HTMLDivElement>(null)
  const areasRef = useRef<HTMLDivElement>(null)

  // Frente ativa: a última cujo topo já passou da linha logo abaixo da nav.
  useEffect(() => {
    const sections = serviceAreas.map((a) => document.getElementById(a.slug)).filter(Boolean) as HTMLElement[]
    let raf = 0
    const update = () => {
      raf = 0
      const line = window.innerWidth >= 768 ? 140 : 120
      let idx = 0
      sections.forEach((s, i) => {
        if (s.getBoundingClientRect().top - line <= 0) idx = i
      })
      setActive(idx)

      const summary = summaryRef.current
      const areas = areasRef.current
      if (summary && areas) {
        const pastSummary = summary.getBoundingClientRect().bottom < 60
        const inAreas = areas.getBoundingClientRect().bottom > 120
        setShowBar(pastSummary && inAreas)
      }
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  function scrollBehavior(): ScrollBehavior {
    return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
  }

  function goTo(e: React.MouseEvent, slug: string) {
    const el = document.getElementById(slug)
    if (!el) return
    e.preventDefault()
    el.scrollIntoView({ behavior: scrollBehavior(), block: 'start' })
    try {
      history.replaceState(null, '', `#${slug}`)
    } catch {}
  }

  const current = serviceAreas[active]

  return (
    <div className="px-4 pb-16 md:px-12 md:pb-28">
      {/* Celular: faixa fixa com a frente atual */}
      <div
        aria-hidden={!showBar}
        className={`fixed inset-x-0 top-[60px] z-40 border-b border-divider bg-nav backdrop-blur-md transition-[transform,opacity] duration-[var(--duration-fast)] ease-[var(--ease)] motion-reduce:transition-none md:hidden ${
          showBar ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-full opacity-0'
        }`}
      >
        <a
          href="#sumario"
          tabIndex={showBar ? 0 : -1}
          onClick={(e) => {
            e.preventDefault()
            summaryRef.current?.scrollIntoView({ behavior: scrollBehavior(), block: 'start' })
          }}
          className="flex h-11 items-center gap-2.5 px-4 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus"
        >
          <span className="text-caption font-semibold text-accent-text">{String(active + 1).padStart(2, '0')}</span>
          <span className="flex-1 text-body-sm font-semibold text-text">{current.label}</span>
          <span className="flex items-center gap-1 text-caption font-semibold text-text-muted">
            Sumário
            <AreaIcon name="arrow-down" className="h-3.5 w-3.5 rotate-180" />
          </span>
        </a>
      </div>

      {/* Celular: sumário no topo */}
      <div ref={summaryRef} id="sumario" className="flex flex-col gap-3 pt-8 md:hidden">
        <p className="text-micro font-semibold uppercase tracking-[1.5px] text-text-muted">Nesta página</p>
        <ul className="border-t border-divider">
          {serviceAreas.map((a, i) => (
            <li key={a.key}>
              <a
                href={`#${a.slug}`}
                onClick={(e) => goTo(e, a.slug)}
                className="flex h-[52px] items-center gap-3.5 border-b border-divider focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus"
              >
                <span className="text-caption font-semibold text-accent-text">{String(i + 1).padStart(2, '0')}</span>
                <span className="flex-1 text-[16px] font-semibold text-text">{a.label}</span>
                <AreaIcon name="arrow-down" className="h-4 w-4 text-text-muted" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-16 pt-10 md:pt-[72px]">
        {/* Desktop: índice fixo */}
        <nav aria-label="Frentes nesta página" className="hidden w-[220px] shrink-0 md:block">
          <div className="sticky top-[108px] flex flex-col gap-3">
            <p className="text-micro font-semibold uppercase tracking-[1.5px] text-text-muted">Nesta página</p>
            <ul className="relative border-l border-border-strong">
              <span
                aria-hidden="true"
                className="absolute -left-px top-0 w-0.5 bg-accent transition-transform duration-[var(--duration-fast)] ease-[var(--ease)] motion-reduce:transition-none"
                style={{ height: ITEM_H, transform: `translateY(${active * ITEM_H}px)` }}
              />
              {serviceAreas.map((a, i) => {
                const on = i === active
                return (
                  <li key={a.key}>
                    <a
                      href={`#${a.slug}`}
                      onClick={(e) => goTo(e, a.slug)}
                      aria-current={on ? 'location' : undefined}
                      className={`flex h-11 items-center gap-3 rounded-r-md px-3 text-body-sm font-semibold transition-colors duration-[var(--duration-quick)] hover:bg-tint-hover active:bg-tint-pressed focus-visible:outline-2 focus-visible:outline-focus ${
                        on ? 'text-text' : 'text-text-muted hover:text-text-soft'
                      }`}
                    >
                      <span className={`text-caption ${on ? 'text-accent-text' : 'text-text-muted'}`}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {a.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </nav>

        {/* As 4 frentes */}
        <div ref={areasRef} className="flex min-w-0 flex-1 flex-col gap-14 md:gap-24">
          {serviceAreas.map((a, i) => (
            <AreaSection key={a.key} area={a} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

// A frente se apresenta ao chegar (labub.pen › 17 · estados; opção A da exploração de 26/11).
// Quando ela entra na tela: a linha do topo se desenha em índigo da esquerda (350ms) e volta
// ao cinza; número e título sobem 8px com fade; os 6 serviços entram em cascata de 30ms.
// Uma vez só por frente. O conteúdo nasce visível (sem JS e no servidor); só as frentes que
// ainda estão abaixo da tela ficam esperando. "Reduzir movimento": nada some, nada anima.
type Arrival = 'static' | 'pending' | 'arrived'

function AreaSection({ area, index }: { area: ServiceArea; index: number }) {
  const ref = useRef<HTMLElement>(null)
  const [state, setState] = useState<Arrival>('static')

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return
    let observer: IntersectionObserver | undefined
    const raf = requestAnimationFrame(() => {
      // Já na tela ao carregar (ou chegada por #frente): fica como está, sem animar.
      if (el.getBoundingClientRect().top < window.innerHeight * 0.85) return
      setState('pending')
      observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return
          setState('arrived')
          observer?.disconnect()
        },
        { rootMargin: '0px 0px -15% 0px' }
      )
      observer.observe(el)
    })
    return () => {
      cancelAnimationFrame(raf)
      observer?.disconnect()
    }
  }, [])

  const hidden = state === 'pending'
  const enter = `transition-[opacity,translate] duration-[var(--duration-medium)] ease-[var(--ease)] ${
    hidden ? 'translate-y-2 opacity-0' : 'translate-y-0 opacity-100'
  }`

  return (
    <section
      ref={ref}
      id={area.slug}
      aria-labelledby={`${area.slug}-titulo`}
      className="relative flex scroll-mt-11 flex-col gap-6 border-t border-border-strong pt-7 md:scroll-mt-0 md:gap-8"
    >
      {state === 'arrived' && (
        <span
          aria-hidden="true"
          className="absolute inset-x-0 -top-px h-0.5 origin-left bg-accent"
          style={{ animation: 'line-arrive 1100ms var(--ease) forwards' }}
        />
      )}
      <div className={`flex flex-col gap-3.5 ${enter}`}>
        <div className="flex items-center gap-4 md:gap-5">
          <span className="text-[13px] font-semibold text-accent-text md:text-[15px]">{String(index + 1).padStart(2, '0')}</span>
          <h2
            id={`${area.slug}-titulo`}
            className="text-[30px] font-extrabold leading-none tracking-[-1.2px] text-text md:text-[44px] md:tracking-[-2px]"
          >
            {area.label}
          </h2>
        </div>
        <p className="max-w-[640px] text-body leading-body text-text-muted md:text-body-lg md:leading-body-lg">{area.summary}</p>
      </div>

      <ul className="grid md:grid-cols-2 md:gap-x-10">
        {area.items.map((item, k) => (
          <li
            key={item.title}
            style={state === 'arrived' ? { transitionDelay: `${120 + k * 30}ms` } : undefined}
            className={`flex flex-col gap-2 border-t border-divider pb-6 pt-5 ${enter}`}
          >
            <h3 className="flex items-start gap-2.5 text-[16px] font-semibold leading-[1.35] tracking-[-0.2px] text-text">
              <span className="w-5 shrink-0 pt-0.5 text-caption font-semibold text-accent-text">{String(k + 1).padStart(2, '0')}</span>
              {item.title}
            </h3>
            <p className="pl-[30px] text-body-sm leading-body-sm text-text-muted md:pl-0">{item.desc}</p>
          </li>
        ))}
      </ul>

      <a
        href="#contato"
        className="inline-flex min-h-11 w-fit items-center gap-1.5 rounded-sm text-body-sm font-semibold text-accent-text hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
      >
        Falar sobre {area.label}
        <AreaIcon name="arrow-right" className="h-3.5 w-3.5" />
      </a>
    </section>
  )
}
