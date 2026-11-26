// Contato final (labub.pen › 08–11). Único bloco emoldurado da página.
// WhatsApp e e-mail como secundários: a ação principal da tela fica no hero.
import AreaIcon from './AreaIcon'
import { team } from '@/data/team'

export const whatsappUrl =
  'https://api.whatsapp.com/send/?phone=554598592126&text=Ol%C3%A1+Laercio%2C+gostaria+de+falar+com+voc%C3%AA%21&type=phone_number&app_absent=0'
export const contactEmail = 'lbubiak@hotmail.com'

const btn =
  'inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-md border border-border-strong px-6 text-body font-semibold text-text transition-colors duration-[var(--duration-quick)] hover:border-border-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus'

export default function Cta() {
  return (
    <section id="contato" aria-labelledby="contato-titulo" className="px-4 pb-16 md:px-12 md:pb-28">
      <div className="flex flex-col gap-8 rounded-xl border border-accent-border bg-surface p-7 md:p-16 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <div className="flex max-w-[580px] flex-col gap-4">
          <p className="text-eyebrow font-semibold uppercase tracking-[2px] text-accent-text">Vamos conversar</p>
          <h2 id="contato-titulo" className="text-[26px] font-black leading-[1.1] tracking-[-1.2px] md:text-heading-xl md:leading-heading-xl md:tracking-[-2px]">
            <span className="block text-text">Conta o que você precisa.</span>
            <span className="block text-text-faint">A gente monta o time.</span>
          </h2>
          <p className="text-caption text-text-muted md:text-body-sm">
            {team.length} especialistas no time · resposta em até 24h
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 lg:w-[300px]">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={btn}>
            Chamar no WhatsApp
            <AreaIcon name="message-circle" />
          </a>
          <a href={`mailto:${contactEmail}`} className={btn}>
            Mandar um e-mail
            <AreaIcon name="mail" />
          </a>
        </div>
      </div>
    </section>
  )
}
