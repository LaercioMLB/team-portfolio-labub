// Faixa de prova (labub.pen › 08–11). Só o que o site comprova: os clientes dos cases
// (nome em texto: logos coloridos não funcionam nos dois temas) e números que batem
// com as seções Time, Serviços e Cases.
import { cases } from '@/data/cases'
import { team } from '@/data/team'
import { serviceAreas } from '@/data/services'

export default function ProofStrip() {
  const facts = [
    { value: team.length, label: 'especialistas' },
    { value: serviceAreas.length, label: 'frentes de atuação', short: 'frentes' },
    { value: cases.length, label: 'produtos no ar' },
  ]

  return (
    <section
      aria-label="Prova"
      className="flex flex-col gap-5 border-b border-divider bg-surface px-4 py-7 md:flex-row md:items-center md:justify-between md:gap-12 md:px-12 md:py-8"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-8">
        <p className="text-caption text-text-muted">Sistemas no ar para</p>
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-1 md:gap-x-8">
          {cases.map((c) => (
            <li key={c.name} className="text-[15px] font-extrabold tracking-[-0.3px] text-text-soft md:text-[17px] md:tracking-[-0.4px]">
              {c.client}
            </li>
          ))}
        </ul>
      </div>
      <dl className="flex justify-between border-t border-divider pt-4 md:gap-10 md:border-0 md:pt-0">
        {facts.map((f) => (
          <div key={f.label} className="flex flex-col gap-0.5 md:flex-row md:items-center md:gap-2">
            <dt className="order-2 text-caption text-text-muted md:text-body-sm">
              <span className="md:hidden">{f.short ?? f.label}</span>
              <span className="hidden md:inline">{f.label}</span>
            </dt>
            <dd className="order-1 text-[24px] font-extrabold tracking-[-1px] text-text md:text-[28px]">{f.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
