// src/components/Logo.tsx
// Logo oficial Labub (horizontal, versão para fundo escuro).
// Inline SVG: zero requisições extras, nítido em qualquer densidade de tela
// e escalável via className (ex.: "h-7 md:h-9 w-auto").
type LogoProps = {
  className?: string
  title?: string
}

export default function Logo({ className, title = 'Labub' }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="30 30 674 194"
      className={className}
      role="img"
      aria-label={title}
      focusable="false"
    >
      <title>{title}</title>
      <path
        fill="#6366F1"
        d="M86 100 a44 44 0 1 1 0 88 a44 44 0 1 1 0 -88Z M86 122 a22 22 0 1 0 0 44 a22 22 0 1 0 0 -44Z M170 100 a44 44 0 1 1 0 88 a44 44 0 1 1 0 -88Z M170 122 a22 22 0 1 0 0 44 a22 22 0 1 0 0 -44Z"
      />
      <path
        fill="#6366F1"
        d="M42 42 L64 64 V144 H42Z M214 42 L192 64 V144 H214Z M128 176 L141 189 L128 211.5 L115 189Z M86 135 a11 11 0 1 1 0 22 a11 11 0 1 1 0 -22Z M170 135 a11 11 0 1 1 0 22 a11 11 0 1 1 0 -22Z"
      />
      <g transform="translate(254 -12)">
        <path
          fill="#F0F0F0"
          d="M0 60 L22 82 V200 H0Z M84 112 a44 44 0 1 1 0 88 a44 44 0 1 1 0 -88Z M84 134 a22 22 0 1 0 0 44 a22 22 0 1 0 0 -44Z M106 112 H128 V200 H106Z"
        />
        <path
          fill="#6366F1"
          d="M144 60 L166 82 V156 H144Z M188 112 a44 44 0 1 1 0 88 a44 44 0 1 1 0 -88Z M188 134 a22 22 0 1 0 0 44 a22 22 0 1 0 0 -44Z M350 60 L372 82 V156 H350Z M394 112 a44 44 0 1 1 0 88 a44 44 0 1 1 0 -88Z M394 134 a22 22 0 1 0 0 44 a22 22 0 1 0 0 -44Z"
        />
        <path
          fill="#6366F1"
          d="M246 112 V156 A44 44 0 0 0 334 156 V112 H312 V156 A22 22 0 0 1 268 156 V112Z"
        />
      </g>
    </svg>
  )
}
