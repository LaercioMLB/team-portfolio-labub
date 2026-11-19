// src/components/Nav.tsx
import Logo from './Logo'

const links = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Time',     href: '#time' },
  { label: 'Cases',    href: '#cases' },
  { label: 'Contato',  href: '#contato' },
]

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-4 md:px-12 py-3 md:py-5 border-b border-white/[0.06] bg-[rgba(8,8,8,0.85)] backdrop-blur-md" aria-label="Navegação principal">
      {/* Logo */}
      <a href="#" className="flex items-center shrink-0" aria-label="Labub — voltar ao início">
        <Logo className="h-7 md:h-9 w-auto" />
      </a>

      {/* Links */}
      <ul className="hidden md:flex items-center gap-7">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="text-[13px] text-[#888] hover:text-white transition-colors">
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#contato"
        className="text-[13px] font-bold text-bg bg-white px-3 md:px-[18px] py-2 md:py-2.5 rounded-lg hover:bg-white/90 transition-colors"
      >
        Fale conosco →
      </a>
    </nav>
  )
}
