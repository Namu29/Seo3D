// src/pages/index.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeatureCard from '../components/FeatureCard';
import BusinessCard from '../components/BusinessCard';
import CountdownTimer from '../components/CountdownTimer';
import styles from '../styles/Home.module.css';

export default function Home() {
  const features = [
    {
      badge: "Nuevo",
      img: "/images/comparativa-filamentos.jpg",
      title: "Comparativa de Filamentos",
      description: "Descubre cuál es el mejor filamento para cada proyecto con nuestra guía actualizada con más de 30 materiales analizados.",
      link: "/comparativa"
    },
    {
      badge: "Top 2025",
      img: "/images/resenas-impresoras.jpg",
      title: "Reseñas de Impresoras",
      description: "Análisis detallados de las 20 mejores impresoras 3D del mercado para ayudarte a elegir la máquina perfecta.",
      link: "/resenas"
    },
    {
      badge: "Popular",
      img: "/images/tutoriales-impresion.jpg",
      title: "Tutoriales Paso a Paso",
      description: "Aprende técnicas avanzadas de impresión, calibración profesional y resolución de problemas.",
      link: "/tutoriales"
    },
    {
      badge: "Gratis",
      img: "/images/guia-tinkercad.jpg",
      title: "Domina Tinkercad en 1 Hora",
      description: "Diseña tus primeros modelos 3D con nuestra guía paso a paso + plantillas descargables.",
      link: "/tinkercad-guia"
    }
  ];

  const businessCases = [
    {
      title: "Venta de Figuras Personalizadas",
      description: "Juan transformó su hobby en un negocio que genera 400€/mes con un margen del 60% vendiendo figuras personalizadas.",
      stats: [
        { value: "400€", label: "Ingresos/mes" },
        { value: "60%", label: "Margen" }
      ]
    },
    {
      title: "Repuestos y Piezas Técnicas",
      description: "María atiende pedidos de repuestos industriales con su impresora, facturando 1.200€/mes con clientes recurrentes.",
      stats: [
        { value: "1.2k€", label: "Ingresos/mes" },
        { value: "75%", label: "Clientes recurrentes" }
      ]
    },
    {
      title: "Servicios de Impresión",
      description: "TechPrint ofrece servicios de impresión 3D a diseñadores locales, con un crecimiento del 30% trimestral.",
      stats: [
        { value: "30%", label: "Crecimiento" },
        { value: "50+", label: "Clientes" }
      ]
    }
  ];

  const events = [
    {
      day: "18",
      month: "NOV",
      title: "Formnext 2025",
      location: "Frankfurt, Alemania - La mayor feria de fabricación aditiva"
    },
    {
      day: "12",
      month: "SEP",
      title: "Madrid 3D Print Expo",
      location: "IFEMA Madrid - Innovación y tendencias en impresión 3D"
    },
    {
      day: "25",
      month: "OCT",
      title: "Webinar: Postprocesado Profesional",
      location: "Online - Técnicas avanzadas con expertos del sector"
    }
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Tecno3D Hub | Guía Definitiva de Impresión 3D en España</title>
        <meta name="description" content="Tu guía completa de impresión 3D. Comparativas de filamentos, reseñas de impresoras, tutoriales paso a paso y las mejores ofertas del mercado." />
        <meta name="keywords" content="impresión 3D, guía 3D, comparativa filamentos, reseña impresoras 3D, tutorial impresión 3D" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>La Guía Definitiva de Impresión 3D en Español</h1>
          <p>Descubre las mejores impresoras, filamentos y técnicas para dominar el mundo de la impresión 3D</p>
          <div className={styles.heroBtns}>
            <a href="#top-printers" className={`${styles.btn} ${styles.btnAccent}`}>TOP 5 Impresoras 2025</a>
            <a href="/tutoriales" className={styles.btn}>Tutoriales Paso a Paso</a>
          </div>
          <a href="https://t.me/+zYkoZ4YdD3gxZjQ0" className={styles.telegramBadge}>
            <i className="fab fa-telegram"></i> Únete a nuestro canal de ofertas en Telegram
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features} id="features">
        <div className="container">
          <h2 className={styles.sectionTitle}>Recursos Imprescindibles</h2>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className={styles.trustSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Colaboramos con los Mejores</h2>
          <div className={styles.trustLogos}>
            <img src="/images/addimat-logo.png" alt="ADDIMAT Partner" title="Asociación Española de Fabricación Aditiva" />
            <img src="/images/imfe-logo.png" alt="Formación IMFE Málaga" title="Instituto Municipal de Formación y Empleo de Málaga" />
            <img src="/images/3dnatives-logo.png" alt="3DNatives Partner" title="Medio de comunicación líder en impresión 3D" />
          </div>
        </div>
      </section>

      {/* Learn Section */}
      <section className={styles.learnSection} id="aprende">
        <div className="container">
          <div className={styles.learnContainer}>
            <div className={styles.learnContent}>
              <h2 className={styles.sectionTitle}>Aprende 3D desde Cero</h2>
              <p>Nuestro programa de formación te lleva desde los conceptos básicos hasta técnicas avanzadas con un enfoque práctico y aplicado.</p>
              
              <div className={styles.learnSteps}>
                <div className={styles.learnStep}>
                  <h4><span>1</span> Fundamentos de Modelado</h4>
                  <p>Domina Tinkercad y Fusion 360 con nuestras guías paso a paso y ejercicios prácticos.</p>
                </div>
                <div className={styles.learnStep}>
                  <h4><span>2</span> Configuración Avanzada</h4>
                  <p>Aprende a calibrar tu impresora como un profesional y optimizar tus slicers.</p>
                </div>
                <div className={styles.learnStep}>
                  <h4><span>3</span> Postprocesado Profesional</h4>
                  <p>Técnicas de lijado, pintura y acabado para resultados de calidad profesional.</p>
                </div>
                <div className={styles.learnStep}>
                  <h4><span>4</span> Certificación Final</h4>
                  <p>Obtén tu certificado al completar el programa y comparte tus logros.</p>
                </div>
              </div>
              
              <a href="#aprende" className={`${styles.btn} ${styles.btnWarning}`} style={{ marginTop: '30px' }}>
                <i className="fas fa-graduation-cap"></i> Comenzar Formación Gratis
              </a>
            </div>
            
            <div className={styles.learnImage}>
              <img src="/images/aprende-impresion.jpg" alt="Aprende impresión 3D" />
            </div>
          </div>
        </div>
      </section>

      {/* Business Section */}
      <section className={styles.businessSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Emprende en el Mundo 3D</h2>
          <p className={styles.centerText}>Descubre cómo convertir tu pasión por la impresión 3D en un negocio rentable con nuestros casos de éxito y estrategias comprobadas.</p>
          
          <div className={styles.businessCards}>
            {businessCases.map((business, index) => (
              <BusinessCard key={index} {...business} />
            ))}
          </div>
          
          <div className={styles.textCenter} style={{ marginTop: '50px' }}>
            <a href="#emprende" className={`${styles.btn} ${styles.btnAccent}`}>
              <i className="fas fa-chart-line"></i> Descubre Nuestra Guía para Emprendedores
            </a>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className={styles.eventsSection}>
        <div className="container">
          <div className={styles.eventsContainer}>
            <div className={styles.eventsContent}>
              <h2 className={styles.sectionTitle}>Agenda 3D 2025</h2>
              <p>No te pierdas los eventos más importantes del mundo de la impresión 3D en España y a nivel internacional.</p>
              
              <div className={styles.eventsList}>
                {events.map((event, index) => (
                  <div key={index} className={styles.eventItem}>
                    <div className={styles.eventDate}>
                      <div className={styles.eventDay}>{event.day}</div>
                      <div className={styles.eventMonth}>{event.month}</div>
                    </div>
                    <div className={styles.eventInfo}>
                      <h4>{event.title}</h4>
                      <p>{event.location}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <a href="#eventos" className={`${styles.btn} ${styles.btnWarning}`} style={{ marginTop: '30px' }}>
                <i className="fas fa-calendar-alt"></i> Ver Agenda Completa
              </a>
            </div>
            
            <div className={styles.eventsCountdown}>
              <h3>Próximo Evento Importante</h3>
              <div className={styles.countdownTitle}>Formnext 2025</div>
              
              <CountdownTimer targetDate="2025-11-18T00:00:00" />
              
              <p>Frankfurt, Alemania | 18-21 Noviembre 2025</p>
              <a href="#formnext" className={styles.btn} style={{ marginTop: '20px' }}>
                <i className="fas fa-info-circle"></i> Más Información
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className={styles.newsletter}>
        <div className="container">
          <h2>Únete a Nuestra Comunidad 3D</h2>
          <p>Recibe las últimas guías, comparativas, tutoriales y ofertas exclusivas directamente en tu correo</p>
          <form className={styles.newsletterForm}>
            <input type="email" placeholder="Tu correo electrónico" required />
            <button type="submit">Suscribirse</button>
          </form>
          <p className={styles.privacyNote}>Respetamos tu privacidad. Nunca compartiremos tu email.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}