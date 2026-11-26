// Cases · Desafio / Solução / Resultado (labub.pen › Case card). Sem moldura: linha de 1px
// no topo, que vira índigo de 2px no hover. O case inteiro é o link para o site do cliente.
import { cases } from '@/data/cases'
import AreaIcon from './AreaIcon'
import SectionHead from './SectionHead'

const blocks = [
  { key: 'challenge', label: 'Desafio' },
  { key: 'solution', label: 'Solução' },
  { key: 'result', label: 'Resultado' },
] as const

export default function Cases() {
  return (
    <section id="cases" aria-labelledby="cases-titulo" className="flex flex-col gap-8 px-4 py-16 md:gap-12 md:px-12 md:py-28">
      <SectionHead id="cases-titulo" eyebrow="Cases" solid="Projetos no ar." faint="Com gente usando." />
      <ul className="grid gap-10 md:gap-8 lg:grid-cols-3">
        {cases.map((c) => (
          <li key={c.name} className="flex">
            <a
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${c.client} (abre o site em nova aba)`}
              className="group/case relative flex w-full flex-col gap-6 rounded-md pt-7 focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-focus"
            >
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-border-strong" />
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-[var(--duration-fast)] ease-[var(--ease)] group-hover/case:scale-x-100 group-hover/case:duration-[var(--duration-medium)] motion-reduce:transition-none"
              />
              <span className="flex items-center gap-3.5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-border bg-fill-2 text-[14px] font-extrabold text-text-soft" aria-hidden="true">
                  {c.initials}
                </span>
                <span className="flex flex-col gap-1">
                  <span className="text-title font-bold tracking-[-0.4px] text-text">{c.client}</span>
                  <span className="text-caption leading-caption text-text-muted">{c.sector}</span>
                </span>
              </span>

              <span className="flex flex-col gap-4">
                {blocks.map((b) => (
                  <span
                    key={b.key}
                    className={`flex flex-col gap-1.5 border-l-2 pl-3.5 ${b.key === 'result' ? 'border-accent' : 'border-border-strong'}`}
                  >
                    <span className="text-eyebrow font-semibold uppercase tracking-[2px] text-accent-text">{b.label}</span>
                    <span className={`text-body-sm leading-body-sm ${b.key === 'result' ? 'text-text-soft' : 'text-text-muted'}`}>
                      {c[b.key]}
                    </span>
                  </span>
                ))}
              </span>

              <span className="mt-auto flex items-center justify-between border-t border-divider pt-4">
                <span className="text-caption text-text-muted">{c.stack.join(' · ')}</span>
                <span className="flex items-center gap-1.5 text-caption font-semibold text-text-soft transition-colors duration-[var(--duration-quick)] group-hover/case:text-accent-text">
                  Ver o site
                  <AreaIcon name="arrow-up-right" className="h-3.5 w-3.5" />
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
