// Cabeçalho de seção da home v2: eyebrow + título em duas cores (segunda metade apagada).
export default function SectionHead({
  eyebrow,
  solid,
  faint,
  lead,
  id,
}: {
  eyebrow: string
  solid: string
  faint?: string
  lead?: string
  id?: string
}) {
  return (
    <div className="flex flex-col gap-3 md:gap-3.5">
      <p className="text-eyebrow font-semibold uppercase tracking-[2px] text-accent-text">{eyebrow}</p>
      <h2 id={id} className="text-[26px] font-extrabold leading-[1.15] tracking-[-1px] text-text md:text-heading md:leading-heading md:tracking-[-1.5px]">
        {solid}
        {faint && (
          <>
            {' '}
            <span className="block text-text-faint md:inline">{faint}</span>
          </>
        )}
      </h2>
      {lead && <p className="max-w-[640px] text-body leading-body text-text-muted">{lead}</p>}
    </div>
  )
}
