// "O que a gente resolve" (labub.pen › Problem card): a dor na voz do cliente e a resposta.
// Sem moldura: cada item começa com uma linha de 1px no topo.
import AreaIcon, { type AreaIconName } from './AreaIcon'
import SectionHead from './SectionHead'

const problems: { icon: AreaIconName; problem: string; answer: string }[] = [
  {
    icon: 'lightbulb',
    problem: '“Tenho a ideia, mas não sei por onde começar.”',
    answer: 'A gente transforma a ideia em escopo, protótipo e plano de entrega antes de escrever código.',
  },
  {
    icon: 'gauge',
    problem: '“Meu sistema é lento ou cai quando mais preciso.”',
    answer: 'Diagnóstico do código e da infraestrutura, depois as correções em ordem de impacto.',
  },
  {
    icon: 'users',
    problem: '“Preciso de um time, mas não quero contratar agora.”',
    answer: 'Frontend, backend, UX e DevOps entram juntos no projeto e saem quando ele estiver de pé.',
  },
  {
    icon: 'cloud',
    problem: '“A conta da nuvem só aumenta.”',
    answer: 'Revisão da arquitetura e dos recursos para pagar pelo que o sistema usa de verdade.',
  },
]

export default function Problems() {
  return (
    <section aria-labelledby="problemas-titulo" className="flex flex-col gap-8 px-4 py-16 md:gap-12 md:px-12 md:py-28">
      <SectionHead
        id="problemas-titulo"
        eyebrow="O que a gente resolve"
        solid="Você traz o problema."
        faint="A gente monta a saída."
        lead="A maioria chega aqui com uma dessas situações. Nenhuma exige que você saiba de tecnologia."
      />
      <ul className="grid gap-7 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        {problems.map((p) => (
          <li key={p.problem} className="flex flex-col gap-3.5 border-t border-border-strong pt-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-accent-bg text-accent-text">
              <AreaIcon name={p.icon} className="h-5 w-5" />
            </span>
            <p className="text-title font-bold leading-title tracking-[-0.4px] text-text">{p.problem}</p>
            <p className="text-body-sm leading-body-sm text-text-muted">{p.answer}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
