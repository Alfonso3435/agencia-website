import Navbar       from '@/components/Navbar'
import Hero         from '@/components/Hero'
import BeforeAfter  from '@/components/BeforeAfter'
import HowItWorks   from '@/components/HowItWorks'
import Services     from '@/components/Services'
import Stats        from '@/components/Stats'
import Pricing      from '@/components/Pricing'
import ContactForm  from '@/components/ContactForm'
import Footer       from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BeforeAfter />
      <HowItWorks />
      <Services />
      <Stats />
      <Pricing />
      <ContactForm />
      <Footer />
    </main>
  )
}
