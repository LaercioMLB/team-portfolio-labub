// Time (labub.pen › Team card). Mantém a frase e as competências de cada pessoa; sem moldura,
// linha de 1px no topo. Links rotulados só quando existem (nada de link vazio).
// No desktop, o espaço que sobra na última linha vira a chamada "O time certo para o seu projeto".
import { team } from '@/data/team'
import AreaIcon from './AreaIcon'
import Avatar from './Avatar'
import SectionHead from './SectionHead'

const linkClass =
  'inline-flex h-11 items-center gap-1.5 rounded-full border border-border-strong px-3 text-caption font-semibold text-text-muted transition-colors duration-[var(--duration-quick)] hover:border-border-hover hover:text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus'

export default function Team() {
  return (
    <section id="time" aria-labelledby="time-titulo" className="flex flex-col gap-8 border-t border-divider px-4 py-16 md:gap-12 md:px-12 md:py-28">
      <SectionHead id="time-titulo" eyebrow="Quem faz acontecer" solid="O time da Labub." faint="Você fala com quem faz." />

      <ul className="grid gap-10 md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
        {team.map((m) => {
          const hasLinks = Boolean(m.linkedinUrl || m.portfolioUrl)
          return (
            <li key={m.lead} className="flex flex-col gap-4 border-t border-border-strong pt-6">
              <div className="flex items-center gap-3.5">
                <Avatar src={m.photo} name={m.lead} />
                <div className="flex min-w-0 flex-col gap-1">
                  <p className="text-micro font-semibold uppercase tracking-[1.2px] text-accent-text">
                    {m.area.replace(/\s*\|\s*/g, ' · ')}
                  </p>
                  <p className="text-body-lg font-bold tracking-[-0.3px] text-text">{m.lead}</p>
                </div>
              </div>

              <p className="text-body-sm leading-body-sm text-text-soft">{m.tagline}</p>

              <ul className="flex flex-wrap gap-1.5" aria-label={`Competências de ${m.lead}`}>
                {m.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-sm border border-accent-border bg-accent-bg px-2 py-1 text-micro font-semibold text-accent-soft"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              {hasLinks && (
                <div className="mt-auto flex gap-2 pt-1">
                  {m.linkedinUrl && (
                    <a href={m.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn de ${m.lead}`} className={linkClass}>
                      <AreaIcon name="linkedin" className="h-3.5 w-3.5" />
                      LinkedIn
                    </a>
                  )}
                  {m.portfolioUrl && (
                    <a href={m.portfolioUrl} target="_blank" rel="noopener noreferrer" aria-label={`Portfólio de ${m.lead}`} className={linkClass}>
                      <AreaIcon name="globe" className="h-3.5 w-3.5" />
                      Portfólio
                    </a>
                  )}
                </div>
              )}
            </li>
          )
        })}

        <li className="flex flex-col justify-start gap-4 border-t-2 border-accent pt-7 md:col-span-1 lg:col-span-2 lg:pl-16">
          <p className="text-[24px] font-extrabold leading-title-lg tracking-[-1px] text-text md:text-title-lg">
            O time certo para o seu projeto.
          </p>
          <p className="max-w-[460px] text-body leading-body text-text-muted">
            Na proposta você vê quem do time entra no seu projeto e o que cada pessoa faz.
          </p>
          <a
            href="#contato"
            className="inline-flex h-11 w-fit items-center gap-2 rounded-md border border-border-strong px-4 text-body-sm font-semibold text-text transition-colors duration-[var(--duration-quick)] hover:border-border-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
          >
            Montar meu time
            <AreaIcon name="arrow-right" />
          </a>
        </li>
      </ul>
    </section>
  )
}
