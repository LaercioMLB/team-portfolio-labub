import { metrics } from '@/data/metrics'

// Carrossel legível: números com opacidade total, pausa no hover e,
// com "reduzir movimento", vira uma grade parada (sem a cópia do loop).
function MetricItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center px-8 md:px-14 py-6 md:py-8">
      <span className="text-[32px] md:text-[44px] font-black tracking-[-2px] text-text leading-none whitespace-nowrap">
        {value}
      </span>
      <span className="text-micro md:text-eyebrow text-text-muted uppercase tracking-[1px] md:tracking-[1.5px] font-medium mt-2 whitespace-nowrap">
        {label}
      </span>
    </div>
  )
}

export default function Metrics() {
  return (
    <section
      aria-label="Números da Labub"
      className="group relative overflow-hidden marquee-fade mt-16 border-y border-border"
    >
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center">
        <ul className="flex motion-reduce:flex-wrap motion-reduce:justify-center">
          {metrics.map((m) => (
            <li key={m.label}>
              <MetricItem {...m} />
            </li>
          ))}
        </ul>
        {/* Cópia só para o loop contínuo: escondida de leitores de tela e de quem reduz movimento */}
        <ul className="flex motion-reduce:hidden" aria-hidden="true">
          {metrics.map((m) => (
            <li key={m.label}>
              <MetricItem {...m} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
