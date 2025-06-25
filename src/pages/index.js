import Head from 'next/head';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import TrustSection from '../components/TrustSection';
import LearnSection from '../components/LearnSection';
import BusinessSection from '../components/BusinessSection';
import EventsSection from '../components/EventsSection';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <SEO 
        schemaType="WebSite"
        image="https://seo3d.netlify.app/images/og-home.jpg"
      />
      <Head>
        <title>Tecno3D Hub | Guía Definitiva de Impresión 3D en España</title>
        <meta
          name="description"
          content="Tu guía completa de impresión 3D. Comparativas de filamentos, reseñas de impresoras, tutoriales paso a paso y las mejores ofertas del mercado."
        />
        <meta
          name="keywords"
          content="impresión 3D, guía 3D, comparativa filamentos, reseña impresoras 3D, tutorial impresión 3D, ofertas impresión 3D, filamentos 3D, impresoras 3D"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </Head>

      <Header />
      <Hero />
      <Features />
      <TrustSection />
      <LearnSection />
      <BusinessSection />
      <EventsSection />
      <Newsletter />
      <Footer />
    </>
  );
}