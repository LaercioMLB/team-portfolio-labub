import { metrics } from '@/data/metrics'

export default function Metrics() {
  return (
    <section aria-label="Números da Labub" className="px-4 md:px-12 mt-16">
      <dl className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 md:gap-y-10 border-y border-white/[0.06] py-8 md:py-10">
        {metrics.map((m) => (
          <div key={m.label} className="flex flex-col items-center text-center">
            <dt className="order-2 text-[10px] md:text-[11px] text-body uppercase tracking-[1px] md:tracking-[1.5px] font-medium mt-1.5 text-balance">
              {m.label}
            </dt>
            <dd className="order-1 text-[32px] md:text-[44px] font-black tracking-[-2px] text-[#f0f0f0] leading-none whitespace-nowrap">
              {m.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
