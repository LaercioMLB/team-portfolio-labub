// Perguntas frequentes (labub.pen › FAQ item). Itens com movimento em FaqList.
// Respostas em rascunho: revisar antes de publicar (DESIGN.md › Open questions).
import AreaIcon from './AreaIcon'
import { whatsappUrl } from './Cta'
import FaqList from './FaqList'

export const faq = [
  {
    q: 'Preciso saber de tecnologia para contratar?',
    a: 'Não. Você conta o problema do jeito que conseguir; a gente traduz em escopo e explica cada decisão sem jargão.',
  },
  {
    q: 'Quanto custa um projeto com a Labub?',
    a: 'Depende do tamanho e do prazo. Depois da primeira conversa, a gente manda uma proposta com escopo, etapas e valor. Você decide com tudo na mesa.',
  },
  {
    q: 'Quanto tempo leva?',
    a: 'Depende do escopo. O prazo entra na proposta, dividido por etapas, antes de qualquer linha de código.',
  },
  {
    q: 'Vocês pegam projeto que já começou?',
    a: 'Sim. Começa com um diagnóstico do que existe (código, infraestrutura e custos) para decidir o que vale manter.',
  },
  {
    q: 'Como eu acompanho o andamento?',
    a: 'Com entregas por etapa e atualizações constantes. Você vê o produto evoluir, não só um relatório.',
  },
  {
    q: 'E depois que o sistema vai ao ar?',
    a: 'A gente pode seguir cuidando da infraestrutura, do monitoramento e das melhorias. Isso também entra na proposta.',
  },
]

export default function Faq() {
  return (
    <section
      id="perguntas"
      aria-labelledby="perguntas-titulo"
      className="grid gap-6 px-4 py-16 md:px-12 md:py-28 lg:grid-cols-[360px_minmax(0,1fr)] lg:gap-16"
    >
      <div className="flex flex-col gap-5">
        <p className="text-eyebrow font-semibold uppercase tracking-[2px] text-accent-text">Perguntas frequentes</p>
        <h2 id="perguntas-titulo" className="text-[26px] font-extrabold leading-[1.15] tracking-[-1px] text-text md:text-heading md:leading-heading md:tracking-[-1.5px]">
          O que costumam perguntar antes de falar com a gente.
        </h2>
        <p className="hidden text-body leading-body text-text-muted lg:block">Não achou a sua? Pergunta direto pra gente.</p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden min-h-11 w-fit items-center gap-1.5 rounded-sm text-body-sm font-semibold text-accent-text hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus lg:inline-flex"
        >
          Chamar no WhatsApp
          <AreaIcon name="arrow-right" className="h-3.5 w-3.5" />
        </a>
      </div>

      <div className="flex flex-col gap-6">
        <FaqList items={faq} />
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 w-fit items-center gap-1.5 rounded-sm text-body-sm font-semibold text-accent-text hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus lg:hidden"
        >
          Não achou a sua? Chamar no WhatsApp
          <AreaIcon name="arrow-right" className="h-3.5 w-3.5" />
        </a>
      </div>
    </section>
  )
}
