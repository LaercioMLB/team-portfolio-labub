'use client'

// Itens do FAQ com movimento (labub.pen › FAQ item), na mesma linguagem da lista de serviços.
// Abrir: altura em 350ms (grid 0fr → 1fr) e a resposta sobe 8px com fade, 60ms depois.
// Fechar é mais rápido (250ms). O "+" vira "−": a barra vertical recolhe enquanto o ícone gira meia volta.
// Vários itens podem ficar abertos; o primeiro começa aberto. "Reduzir movimento": sem animação.
import { useState } from 'react'

export default function FaqList({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<Set<number>>(() => new Set([0]))

  function toggle(i: number) {
    setOpen((prev) => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })
  }

  return (
    <div className="border-t border-divider">
      {items.map((item, i) => {
        const isOpen = open.has(i)
        const id = `faq-${i}`
        return (
          <div key={item.q} className="group/faq border-b border-divider">
            <h3>
              <button
                type="button"
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
                aria-controls={id}
                className="flex w-full items-center justify-between gap-4 rounded-md py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
              >
                <span className="text-[17px] font-semibold leading-[1.4] tracking-[-0.2px] text-text">{item.q}</span>
                <span
                  aria-hidden="true"
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-[var(--duration-quick)] group-hover/faq:bg-tint-hover ${
                    isOpen ? 'text-accent-text' : 'text-text-muted group-hover/faq:text-text'
                  }`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    className={`h-[18px] w-[18px] transition-transform ease-[var(--ease)] motion-reduce:transition-none ${
                      isOpen ? 'rotate-180 duration-[var(--duration-medium)]' : 'rotate-0 duration-[var(--duration-fast)]'
                    }`}
                  >
                    <path d="M5 12h14" />
                    <path
                      d="M12 5v14"
                      style={{ transformOrigin: '12px 12px' }}
                      className={`transition-transform ease-[var(--ease)] motion-reduce:transition-none ${
                        isOpen ? 'scale-y-0 duration-[var(--duration-medium)]' : 'scale-y-100 duration-[var(--duration-fast)]'
                      }`}
                    />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id={id}
              role="region"
              aria-label={item.q}
              inert={!isOpen}
              className={`grid ease-[var(--ease)] transition-[grid-template-rows] motion-reduce:transition-none ${
                isOpen ? 'grid-rows-[1fr] duration-[var(--duration-medium)]' : 'grid-rows-[0fr] duration-[var(--duration-fast)]'
              }`}
            >
              <div className="overflow-hidden">
                <p
                  className={`pb-6 pr-12 text-body leading-body text-text-muted transition-[opacity,translate] ease-[var(--ease)] motion-reduce:transition-none ${
                    isOpen
                      ? 'translate-y-0 opacity-100 delay-[60ms] duration-[var(--duration-medium)]'
                      : '-translate-y-2 opacity-0 duration-[var(--duration-quick)]'
                  }`}
                >
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
