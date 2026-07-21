// src/data/testimonials.ts
export type Testimonial = {
  name: string
  role: string
  photo: string   // path suffix for randomuser.me
  text: string
}

export const testimonials: Testimonial[] = [

  {
    name: 'Clói Rotta',
    role: 'CEO | Founder, SOSCONSTRUIR',
    photo: '/testimonials/cloi-sos.png',
    text: 'Ter frontend, backend e UX no mesmo time foi o diferencial. Comunicação sempre clara, produto de altíssima qualidade e zero dor de cabeça.',
  },
]
