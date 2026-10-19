export default function OpenSource() {
  return (
    <section
      id="opensource"
      aria-labelledby="opensource-title"
      className="px-4 md:px-12 py-16 md:py-[120px]"
    >
      <p className="text-[11px] text-accent uppercase tracking-[2px] font-semibold mb-3">
        O que inventamos
      </p>
      <h2
        id="opensource-title"
        className="text-[24px] md:text-[36px] font-extrabold tracking-[-1px] md:tracking-[-1.5px] text-[#f0f0f0] mb-8 md:mb-12"
      >
        Projetos OpenSource,{' '}
        <span className="text-[#444]">utilize como quiser!</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <article
          className="block bg-card border border-white/[0.06] rounded-xl overflow-hidden hover:border-accent/[0.3] transition-colors"
        >
          <a
            href="https://www.codequestions.dev/pt"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver projeto Codequestions"
            className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
          >
            <div className="h-[140px] flex items-center justify-center bg-gradient-to-br from-[#0a0a0a] to-[#1f2937]">
              {/* eslint-disable-next-line @next/next/no-img-element -- local SVG wordmark, no optimization needed */}
              <img
                src="/cases/codequestions.svg"
                alt="Codequestions"
                width={256}
                height={40}
                className="h-10 w-auto max-w-full"
              />
            </div>

            <div className="p-5">
              <p className="text-[10px] text-accent font-semibold uppercase tracking-[1px] mb-2">
                Código aberto · Entrevistas técnicas
              </p>
              <h3 className="text-[15px] font-bold text-[#e0e0e0] tracking-tight">
                Codequestions
              </h3>
              <p className="text-[12px] text-[#555] mt-1.5 leading-[1.5]">
                Plataforma de código aberto para ajudar na preparação para entrevistas
                técnicas em todas as áreas de TI. Pratique com perguntas, respostas
                explicadas e flashcards, e acompanhe sua evolução para chegar mais
                confiante à próxima oportunidade.
              </p>
              <div className="flex gap-1.5 flex-wrap mt-3.5">
                {['Open Source', 'Perguntas e respostas', 'Flashcards'].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] text-[#444] border border-[#1e1e1e] px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
          <div className="px-5 pb-5">
            <a
              href="https://github.com/dionbiancha/codequestions"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver repositório do Codequestions no GitHub"
              className="inline-flex items-center gap-2 rounded-lg border border-white/[0.1] bg-white/[0.04] px-3.5 py-2 text-[12px] font-semibold text-[#e0e0e0] hover:border-accent/40 hover:bg-accent/10 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card"
            >
              Ver no GitHub
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}
