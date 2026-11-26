'use client'

// Frentes de atuação · lista que abre (labub.pen › Service row; escolhida em 26/11/2026).
// Hover: uma linha índigo de 2px corre da esquerda (350ms; volta em 250ms), o título sai do
// cinza e o botão vira seta. Clique ou Enter: a linha abre (altura em 350ms) e os serviços
// entram em cascata de 30ms; o botão vira "−" índigo. Uma frente aberta por vez.
// A URL guarda a frente aberta (#frontend), e as paradas do hero abrem a frente certa
// (evento "labub:service-area"). Com "reduzir movimento", abre e fecha sem animação.
import { useCallback, useEffect, useState } from 'react'
import { serviceAreas } from '@/data/services'
import AreaIcon from './AreaIcon'
import SectionHead from './SectionHead'

export default function ServiceList() {
  const [openKey, setOpenKey] = useState<string | null>(serviceAreas[0].key)

  const openArea = useCallback((key: string, scroll = false) => {
    const area = serviceAreas.find((a) => a.key === key)
    if (!area) return
    setOpenKey(key)
    if (scroll) {
      requestAnimationFrame(() =>
        document.getElementById(`frente-${area.slug}`)?.scrollIntoView({ block: 'start' })
      )
    }
  }, [])

  useEffect(() => {
    // Chegada por link direto (#frontend, #ux-design…), depois do primeiro quadro.
    const raf = requestAnimationFrame(() => {
      const fromHash = serviceAreas.find((a) => `#${a.slug}` === window.location.hash)
      if (fromHash) openArea(fromHash.key, true)
    })

    // Paradas do hero ("Do zero ao deploy")
    const onSelect = (e: Event) => openArea((e as CustomEvent<string>).detail)
    window.addEventListener('labub:service-area', onSelect)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('labub:service-area', onSelect)
    }
  }, [openArea])

  function toggle(key: string, slug: string) {
    const next = openKey === key ? null : key
    setOpenKey(next)
    try {
      history.replaceState(null, '', next ? `#${slug}` : '#servicos')
    } catch {}
  }

  return (
    <section
      id="servicos"
      aria-labelledby="servicos-titulo"
      className="flex flex-col gap-8 border-t border-divider px-4 py-16 md:gap-14 md:px-12 md:py-28"
    >
      <SectionHead id="servicos-titulo" eyebrow="Frentes de atuação" solid="Quatro frentes." faint="Um time só." />

      <ul className="border-t border-border-strong">
        {serviceAreas.map((area, i) => {
          const open = openKey === area.key
          const panelId = `frente-${area.slug}-servicos`
          return (
            <li key={area.key} id={`frente-${area.slug}`} className="group/row relative border-b border-border-strong">
              {/* Linha de luz: corre da esquerda no hover; inteira quando aberta */}
              <span
                aria-hidden="true"
                className={`absolute inset-x-0 -top-px h-0.5 origin-left bg-accent transition-transform ease-[var(--ease)] motion-reduce:transition-none ${
                  open
                    ? 'scale-x-100 duration-[var(--duration-medium)]'
                    : 'scale-x-0 duration-[var(--duration-fast)] group-hover/row:scale-x-100 group-hover/row:duration-[var(--duration-medium)]'
                }`}
              />
              <h3>
                <button
                  type="button"
                  onClick={() => toggle(area.key, area.slug)}
                  aria-expanded={open}
                  aria-controls={panelId}
                  className="flex w-full items-start gap-3.5 rounded-md py-5 text-left transition-[background-color,padding] duration-[var(--duration-fast)] ease-[var(--ease)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus motion-reduce:transition-none md:items-center md:gap-8 md:py-8 md:hover:bg-tint-hover md:hover:px-2"
                >
                  <span
                    className={`w-6 shrink-0 pt-1 text-[13px] font-semibold transition-colors duration-[var(--duration-fast)] md:w-12 md:pt-0 md:text-[15px] ${
                      open ? 'text-accent-text' : 'text-text-faint group-hover/row:text-accent-text'
                    }`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="flex min-w-0 flex-1 flex-col gap-1.5 md:flex-row md:items-center md:gap-8">
                    <span
                      className={`text-[28px] font-extrabold leading-none tracking-[-1px] transition-colors duration-[var(--duration-fast)] md:w-[360px] md:shrink-0 md:text-[44px] md:tracking-[-2px] ${
                        open ? 'text-text' : 'text-text-soft group-hover/row:text-text'
                      }`}
                    >
                      {area.label}
                    </span>
                    <span className="text-body-sm leading-[1.6] text-text-muted md:text-body">{area.summary}</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-colors duration-[var(--duration-fast)] ${
                      open
                        ? 'border-accent bg-accent text-on-accent'
                        : 'border-border-strong text-text-muted group-hover/row:border-accent group-hover/row:text-accent-text'
                    }`}
                  >
                    {open ? (
                      <AreaIcon name="minus" className="h-[18px] w-[18px]" />
                    ) : (
                      <>
                        <AreaIcon name="plus" className="h-[18px] w-[18px] group-hover/row:hidden" />
                        <AreaIcon name="arrow-down-right" className="hidden h-[18px] w-[18px] group-hover/row:block" />
                      </>
                    )}
                  </span>
                </button>
              </h3>

              {/* Altura animada com grid 0fr → 1fr: o conteúdo não pula */}
              <div
                id={panelId}
                role="region"
                aria-label={`Serviços de ${area.label}`}
                className={`grid transition-[grid-template-rows] duration-[var(--duration-medium)] ease-[var(--ease)] motion-reduce:transition-none ${
                  open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
                inert={!open}
              >
                <div className="overflow-hidden">
                  <div className="flex flex-col gap-5 pb-6 pl-[38px] md:pb-9 md:pl-20">
                    <ul className="grid md:grid-cols-3 md:gap-x-8">
                      {area.items.map((item, k) => (
                        <li
                          key={item.title}
                          style={{ transitionDelay: open ? `${k * 30}ms` : '0ms' }}
                          className={`flex items-center gap-2.5 border-t border-divider py-3 transition-[opacity,translate] duration-[var(--duration-medium)] ease-[var(--ease)] motion-reduce:transition-none md:py-3.5 ${
                            open ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                          }`}
                        >
                          <span className="text-caption font-semibold text-accent-text">{String(k + 1).padStart(2, '0')}</span>
                          <span className="text-[14px] font-medium text-text md:text-[15px]">{item.title}</span>
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
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
