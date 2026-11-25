// src/components/Cta.tsx
export default function Cta() {
  return (
    <section id="contato" className="px-4 md:px-12 py-16 md:py-[120px] text-center relative overflow-hidden">
      {/* Glow central */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.08),transparent_60%)]" />

      <div className="relative z-10">
        <p className="text-eyebrow text-accent-text uppercase tracking-[2px] font-semibold mb-4">
          Pronto para começar?
        </p>
        <h2 className="text-[28px] md:text-[48px] font-black tracking-[-1.5px] md:tracking-[-2.5px] leading-[1.0] text-text mb-3">
          A gente cuida do seu{' '}
          <em className="not-italic text-outline">
            digital.
          </em>
          <br />
          Você foca no negócio.
        </h2>
        <p className="text-body text-text-muted mb-8 md:mb-12">
          Sem compromisso. A gente responde em até 24h.
        </p>

        {/* Contatos */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
          <div className="px-6 md:px-14 text-center">
            <p className="text-micro text-text-muted uppercase tracking-[2px] font-semibold mb-2.5">
              Email
            </p>
            <a
              href="mailto:lbubiak@hotmail.com"
              className="text-[18px] md:text-[20px] font-extrabold tracking-tight text-text hover:text-text transition-colors"
            >
              lbubiak@hotmail.com
            </a>
            <p className="text-eyebrow text-text-muted mt-2">Resposta em até 24h</p>
          </div>

          <div className="hidden md:block w-px h-16 bg-border" aria-hidden="true" />

          <div className="px-6 md:px-14 text-center">
            <p className="text-micro text-text-muted uppercase tracking-[2px] font-semibold mb-2.5">
              WhatsApp
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=554598592126&text=Ol%C3%A1+Laercio%2C+gostaria+de+falar+com+voc%C3%AA%21&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[18px] md:text-[20px] font-extrabold tracking-tight text-ext-whatsapp hover:text-text transition-colors"
            >
              Chamar no WhatsApp
            </a>
            <p className="text-eyebrow text-text-muted mt-2">Resposta imediata</p>
          </div>
        </div>
      </div>
    </section>
  )
}
