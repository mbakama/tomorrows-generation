import React from 'react'
import type { Metadata } from 'next'

// In app/music/layout.tsx
export const metadata: Metadata = {
  title: "Musique | Tomorrow's Generation",
  description: "Écoutez et téléchargez la musique de Tomorrow's Generation, avec des compositions originales et des arrangements de prières Baha'ies.",
}

export default function MusicLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}