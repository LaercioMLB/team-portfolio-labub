// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="px-4 md:px-12 py-4 md:py-6 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0 border-t border-divider">
      <span className="text-caption text-text-muted">
        © 2026 Labub. Todos os direitos reservados.
      </span>
      <span className="text-caption text-text-muted">
        Frontend · Backend · UX · DevOps
      </span>
    </footer>
  )
}
