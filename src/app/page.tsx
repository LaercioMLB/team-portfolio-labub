import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import ProofStrip from '@/components/ProofStrip'
import Problems from '@/components/Problems'
import ServiceList from '@/components/ServiceList'
import Method from '@/components/Method'
import Cases from '@/components/Cases'
import Team from '@/components/Team'
import Testimonials from '@/components/Testimonials'
import Faq from '@/components/Faq'
import Cta from '@/components/Cta'
import Footer from '@/components/Footer'

// Home v2 (labub.pen › 08–12): cara de consultoria, temas claro e escuro, sem cards.
export default function Home() {
  return (
    <div className="relative mx-auto w-full max-w-[1440px]">
      <Nav />
      <main>
        <Hero />
        <ProofStrip />
        <Problems />
        <ServiceList />
        <Method />
        <Cases />
        <Team />
        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}
