// src/components/Hero.tsx
import HeroFlow from './HeroFlow'

export default function Hero() {
  return (
    <section className="relative px-4 md:px-12 pt-12 md:pt-24 pb-0 lg:pb-12 overflow-hidden">
      {/* Grid decorativo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(var(--color-accent-grid) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-accent-grid) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Glow radial */}
      <div className="absolute pointer-events-none -top-32 -left-24 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,var(--color-accent-glow)_0%,transparent_65%)]" />

      <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_520px]">
      <div className="w-full max-w-3xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-accent-bg border border-accent-border px-3.5 py-1.5 rounded-full mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[var(--glow-accent)]" />
          <span className="text-eyebrow text-accent-soft font-medium tracking-wide">
            Aceitando novos projetos em 2026
          </span>
        </div>

        {/* Headline 3 linhas */}
        <h1 className="text-[36px] md:text-[64px] font-black tracking-[-2px] md:tracking-[-3px] leading-none mb-4 md:mb-6">
          <span className="block text-text">Construímos</span>
          <span className="block text-outline">o digital que</span>
          <span className="block text-gradient">move negócios.</span>
        </h1>

        {/* Subtítulo */}
        <p className="text-[14px] md:text-body-lg text-text-muted leading-[1.7] max-w-full md:max-w-[460px]">
          A Labub é um time completo de{' '}
          <strong className="text-text-soft font-medium">frontend, backend, UX e DevOps</strong>.
          Do zero ao deploy, a gente cuida do que você não quer se preocupar.
        </p>

        <a
          href="#contato"
          className="inline-flex items-center gap-2 mt-8 text-body font-bold text-on-primary bg-primary px-6 py-3.5 rounded-md hover:bg-primary-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        >
          Fale com a gente
          <span aria-hidden="true">→</span>
        </a>

        {/* Celular e tablet: o fluxo vem abaixo do botão, compacto */}
        <div className="mt-10 lg:hidden">
          <HeroFlow variant="row" />
        </div>
      </div>

      {/* Desktop: o fluxo à direita do texto */}
      <div className="hidden lg:block">
        <HeroFlow variant="map" />
      </div>
      </div>
    </section>
  )
}
