'use client'

// Foto redonda do time. Sem foto, ou se a foto falhar, mostra as iniciais no mesmo tamanho.
import Image from 'next/image'
import { useState } from 'react'

function initials(name: string) {
  const parts = name.trim().split(/\s+/)
  return ((parts[0]?.[0] ?? '') + (parts.length > 1 ? parts[parts.length - 1][0] : '')).toUpperCase()
}

export default function Avatar({ src, name, size = 56 }: { src?: string; name: string; size?: number }) {
  const [failed, setFailed] = useState(false)
  const box = 'shrink-0 overflow-hidden rounded-full border border-border'
  if (!src || failed) {
    return (
      <span
        className={`${box} flex items-center justify-center bg-accent-bg text-[16px] font-bold text-accent-soft`}
        style={{ width: size, height: size }}
        aria-hidden="true"
      >
        {initials(name)}
      </span>
    )
  }
  return (
    <span className={box} style={{ width: size, height: size }}>
      <Image src={src} alt="" width={size} height={size} onError={() => setFailed(true)} className="h-full w-full object-cover" />
    </span>
  )
}
