import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Cta from '@/components/Cta'
import Footer from '@/components/Footer'
import ServicesBody from '@/components/ServicesBody'
import AreaIcon from '@/components/AreaIcon'
import { team } from '@/data/team'

export const metadata: Metadata = {
  title: 'Serviços — Labub',
  description: 'Frontend, FullStack, UX Design e DevOps: as quatro frentes da Labub e o que cada uma entrega.',
}

// /servicos v2 (labub.pen › 13–17): topo, índice que acompanha a rolagem, as 4 frentes
// com os 6 serviços descritos e o contato final. Uma ação principal só: "Fale com a gente".
export default function ServicosPage() {
  return (
    <div className="relative mx-auto w-full max-w-[1440px]">
      <Nav />
      <main>
        <section className="flex flex-col gap-5 border-b border-divider px-4 pb-10 pt-12 md:gap-6 md:px-12 md:pb-[72px] md:pt-24">
          <p className="text-eyebrow font-semibold uppercase tracking-[2px] text-accent-text">Serviços</p>
          <h1 className="text-[38px] font-black leading-[1.05] tracking-[-1.8px] md:text-display md:leading-[1.02] md:tracking-[-3px]">
            <span className="block text-text">Quatro frentes.</span>
            <span className="block text-text-faint">Um time só.</span>
          </h1>
          <p className="max-w-[620px] text-body leading-body text-text-muted md:text-[17px] md:leading-[1.65]">
            Frontend, backend, UX e DevOps num time que fala a mesma língua. Você conta o que precisa e a gente
            monta quem faz, do zero ao deploy.
          </p>
          <div className="flex flex-col gap-4 pt-0 md:flex-row md:items-center md:gap-5 md:pt-2">
            <a
              href="#contato"
              className="inline-flex h-[52px] items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-6 text-body font-bold text-on-primary transition-colors duration-[var(--duration-quick)] hover:bg-primary-hover active:bg-primary-pressed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            >
              Fale com a gente
              <AreaIcon name="arrow-right" />
            </a>
            <p className="text-caption text-text-muted md:text-body-sm">
              {team.length} especialistas no time · resposta em até 24h
            </p>
          </div>
        </section>

        <ServicesBody />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}
