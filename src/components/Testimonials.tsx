// src/components/Testimonials.tsx
import Image from 'next/image'
import { testimonials } from '@/data/testimonials'

export default function Testimonials() {
  return (
    <section className="px-4 md:px-12 py-16 md:py-[120px]">
      <p className="text-eyebrow text-accent-text uppercase tracking-[2px] font-semibold mb-3">
        O que dizem sobre a gente
      </p>
      <h2 className="text-[24px] md:text-[36px] font-extrabold tracking-[-1px] md:tracking-[-1.5px] text-text mb-8 md:mb-12">
        Clientes que{' '}
        <span className="text-text-faint">confiaram na Labub.</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-surface border border-border rounded-lg p-5 md:p-7">
            <div className="text-text-soft tracking-[2px] text-sm mb-3.5">★★★★★</div>
            <p className="text-body text-text-soft leading-[1.7]">
              <span className="text-accent-text text-2xl leading-none align-[-4px] mr-1">&ldquo;</span>
              {t.text}
            </p>
            <div className="flex items-center gap-3 mt-5">
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={`${t.photo}`}
                  alt={t.name}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover contrast-[1.05]"
                />
              </div>
              <div>
                <p className="text-body-sm font-bold text-text">{t.name}</p>
                <p className="text-eyebrow text-text-muted mt-0.5">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
