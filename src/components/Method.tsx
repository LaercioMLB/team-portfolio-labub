// Como trabalhamos · 4 etapas (labub.pen › Method step). Cada etapa diz o que você recebe.
import AreaIcon from './AreaIcon'
import SectionHead from './SectionHead'

const steps = [
  {
    title: 'Diagnóstico',
    desc: 'Uma conversa para entender o negócio, o problema e o prazo. Sem jargão.',
    get: ['Resumo do que a gente entendeu', 'Riscos e prioridades'],
  },
  {
    title: 'Proposta',
    desc: 'O time certo para o seu caso, com escopo, etapas e valor por escrito.',
    get: ['Escopo e etapas', 'Quem do time entra'],
  },
  {
    title: 'Execução',
    desc: 'Entregas por etapa, com atualizações constantes. Você vê o produto evoluir.',
    get: ['Versões para testar', 'Atualizações a cada etapa'],
  },
  {
    title: 'No ar e depois',
    desc: 'Deploy, monitoramento e o que mais o sistema precisar para seguir de pé.',
    get: ['Sistema publicado', 'Monitoramento e ajustes'],
  },
]

export default function Method() {
  return (
    <section
      id="metodo"
      aria-labelledby="metodo-titulo"
      className="flex flex-col gap-10 border-y border-divider bg-fill-1 px-4 py-16 md:gap-14 md:px-12 md:py-28"
    >
      <SectionHead
        id="metodo-titulo"
        eyebrow="Como trabalhamos"
        solid="Quatro etapas."
        faint="Tudo combinado antes."
        lead="Cada etapa termina com algo que você vê e aprova antes de seguir para a próxima."
      />
      <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s.title} className="flex flex-col gap-3.5 border-t-2 border-accent pt-6">
            <span className="text-[28px] font-black leading-none tracking-[-1.5px] text-accent-text md:text-heading" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="text-title font-bold tracking-[-0.4px] text-text">{s.title}</h3>
            <p className="text-body-sm leading-body-sm text-text-muted">{s.desc}</p>
            <div className="flex flex-col gap-2 pt-3">
              <p className="text-caption font-semibold text-text-soft">Você recebe</p>
              <ul className="flex flex-col gap-2">
                {s.get.map((g) => (
                  <li key={g} className="flex items-center gap-2 text-body-sm text-text-muted">
                    <AreaIcon name="check" className="h-3.5 w-3.5 text-accent-text" />
                    {g}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
