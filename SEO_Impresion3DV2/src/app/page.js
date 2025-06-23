import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import TrustSection from '@/components/TrustSection'
import LearnSection from '@/components/LearnSection'
import BusinessSection from '@/components/BusinessSection'
import EventsSection from '@/components/EventsSection'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <TrustSection />
        <LearnSection />
        <BusinessSection />
        <EventsSection />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}