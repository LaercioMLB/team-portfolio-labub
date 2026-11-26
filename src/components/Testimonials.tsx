// Depoimento (home v2). Só existe um: citação grande e centrada, não um carrossel de um slide.
import { testimonials } from '@/data/testimonials'
import AreaIcon from './AreaIcon'
import Avatar from './Avatar'

export default function Testimonials() {
  const t = testimonials[0]
  if (!t) return null
  return (
    <section aria-label="Depoimento" className="border-y border-divider bg-fill-1 px-4 py-16 md:px-12 md:py-28">
      <figure className="mx-auto flex max-w-[880px] flex-col gap-6 md:items-center md:gap-8">
        <AreaIcon name="quote" className="h-7 w-7 text-accent-text md:h-8 md:w-8" />
        <blockquote className="text-[21px] font-semibold leading-[1.4] tracking-[-0.4px] text-text md:text-center md:text-title-lg md:leading-[1.35] md:tracking-[-0.8px]">
          {t.text}
        </blockquote>
        <figcaption className="flex items-center gap-3.5">
          <Avatar src={t.photo} name={t.name} size={48} />
          <span className="flex flex-col gap-0.5">
            <span className="text-[15px] font-bold text-text">{t.name}</span>
            <span className="text-caption text-text-muted">{t.role}</span>
          </span>
        </figcaption>
      </figure>
    </section>
  )
}
