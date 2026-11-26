// Hero da home v2 (labub.pen › 08–11). Uma ação principal só: "Fale com a gente".
import HeroFlow from './HeroFlow'
import AreaIcon from './AreaIcon'

export default function Hero() {
  return (
    <section className="border-b border-divider px-4 pb-10 pt-12 md:px-12 md:pb-[88px] md:pt-24">
      <div className="grid items-center gap-10 xl:grid-cols-[minmax(0,1fr)_520px] xl:gap-16">
        <div className="flex w-full max-w-[560px] flex-col gap-6 md:gap-7">
          <p className="text-eyebrow font-semibold uppercase tracking-[2px] text-accent-text">
            Consultoria e time de tecnologia
          </p>

          <h1 className="text-[38px] font-black leading-[1.05] tracking-[-1.8px] md:text-display md:leading-[1.02] md:tracking-[-3px]">
            <span className="block text-text">Do zero ao deploy,</span>
            <span className="block text-text-faint">com um time só.</span>
          </h1>

          <p className="text-body leading-body text-text-muted md:text-[17px] md:leading-[1.65]">
            A gente entende o seu negócio, monta o plano e entrega o sistema no ar: frontend, backend, UX e
            DevOps no mesmo time. Você fala com quem faz, sem precisar saber de tecnologia.
          </p>

          <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:gap-3">
            <a
              href="#contato"
              className="inline-flex h-[52px] items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-6 text-body font-bold text-on-primary transition-colors duration-[var(--duration-quick)] hover:bg-primary-hover active:bg-primary-pressed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            >
              Fale com a gente
              <AreaIcon name="arrow-right" />
            </a>
            <a
              href="#metodo"
              className="inline-flex h-[52px] items-center justify-center gap-2 whitespace-nowrap rounded-md border border-border-strong px-6 text-body font-semibold text-text transition-colors duration-[var(--duration-quick)] hover:border-border-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            >
              Ver como trabalhamos
              <AreaIcon name="arrow-down" />
            </a>
          </div>

          <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-caption text-text-muted">
            <li className="flex items-center gap-1.5">
              <AreaIcon name="users" className="h-3.5 w-3.5" />7 especialistas no time
            </li>
            <li className="flex items-center gap-1.5">
              <AreaIcon name="timer" className="h-3.5 w-3.5" />
              Resposta em até 24h
            </li>
          </ul>

          {/* Até 1280px: o fluxo vem abaixo, compacto */}
          <div className="xl:hidden">
            <HeroFlow variant="row" />
          </div>
        </div>

        {/* A partir de 1280px: o fluxo à direita do texto */}
        <div className="hidden xl:block">
          <HeroFlow variant="map" />
        </div>
      </div>
    </section>
  )
}
