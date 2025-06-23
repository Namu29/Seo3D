'use client';
import { useEffect } from 'react';
import Link from 'next/link';

export default function HomePage() {
  useEffect(() => {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const mainMenu = document.getElementById('mainMenu');
    if (menuToggle && mainMenu) {
      menuToggle.addEventListener('click', () => {
        mainMenu.classList.toggle('show');
        const icon = menuToggle.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-times');
        } else {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      });
    }

    // Sticky header on scroll
    const header = document.getElementById('header');
    const onScroll = () => {
      if (window.scrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll);

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
          });
          // Close mobile menu if open
          if (mainMenu && mainMenu.classList.contains('show')) {
            mainMenu.classList.remove('show');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
          }
        }
      });
    });

    // Initialize header state
    if (window.scrollY > 100 && header) {
      header.classList.add('scrolled');
    }

    // Simple countdown for events
    function updateCountdown() {
      document.getElementById('days').textContent = Math.floor(Math.random() * 100);
      document.getElementById('hours').textContent = Math.floor(Math.random() * 24);
      document.getElementById('minutes').textContent = Math.floor(Math.random() * 60);
      document.getElementById('seconds').textContent = Math.floor(Math.random() * 60);
    }
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => {
      window.removeEventListener('scroll', onScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>La Guía Definitiva de Impresión 3D en Español</h1>
          <p>Descubre las mejores impresoras, filamentos y técnicas para dominar el mundo de la impresión 3D</p>
          <div className="hero-btns">
            <a href="#top-printers" className="btn btn-accent">TOP 5 Impresoras 2025</a>
            <Link href="/tutoriales" className="btn">Tutoriales Paso a Paso</Link>
          </div>
          <a href="https://t.me/+zYkoZ4YdD3gxZjQ0" className="telegram-badge" target="_blank" rel="noopener">
            <i className="fab fa-telegram"></i> Únete a nuestro canal de ofertas en Telegram
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="container">
          <h2 className="section-title">Recursos Imprescindibles</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-badge">Nuevo</div>
              <div className="feature-img">
                <img src="https://images.unsplash.com/photo-1621330396171-4abe32736bd3?ixlib=rb-4.0.3" alt="Comparativa de filamentos 3D" />
              </div>
              <div className="feature-content">
                <h3>Comparativa de Filamentos</h3>
                <p>Descubre cuál es el mejor filamento para cada proyecto con nuestra guía comparativa actualizada con más de 30 materiales analizados.</p>
                <Link href="/comparativa" className="btn">Ver Comparativa</Link>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-badge">Top 2025</div>
              <div className="feature-img">
                <img src="https://images.unsplash.com/photo-1581093458799-7a2570106b8b?ixlib=rb-4.0.3" alt="Reseñas de impresoras 3D" />
              </div>
              <div className="feature-content">
                <h3>Reseñas de Impresoras</h3>
                <p>Análisis detallados de las 20 mejores impresoras 3D del mercado para ayudarte a elegir la máquina perfecta para tus necesidades.</p>
                <Link href="/resenas" className="btn">Ver Reseñas</Link>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-badge">Popular</div>
              <div className="feature-img">
                <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3" alt="Tutoriales de impresión 3D" />
              </div>
              <div className="feature-content">
                <h3>Tutoriales Paso a Paso</h3>
                <p>Aprende técnicas avanzadas de impresión, calibración profesional y resolución de problemas con nuestras guías visuales.</p>
                <Link href="/tutoriales" className="btn">Ver Tutoriales</Link>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-badge">Gratis</div>
              <div className="feature-img">
                <img src="https://images.unsplash.com/photo-1632893664091-25d675ea0d17?ixlib=rb-4.0.3" alt="Guía Tinkercad 2025" />
              </div>
              <div className="feature-content">
                <h3>Domina Tinkercad en 1 Hora</h3>
                <p>Diseña tus primeros modelos 3D con nuestra guía paso a paso + plantillas descargables.</p>
                <a href="/tinkercad-guia.pdf" className="btn" target="_blank" rel="noopener">Descargar PDF</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="trust-section">
        <div className="container">
          <h2 className="section-title">Colaboramos con los Mejores</h2>
          <div className="trust-logos">
            <img src="https://via.placeholder.com/200x80/3a0ca3/ffffff?text=ADDIMAT" alt="ADDIMAT Partner" title="Asociación Española de Fabricación Aditiva" />
            <img src="https://via.placeholder.com/200x80/4361ee/ffffff?text=IMFE+Málaga" alt="Formación IMFE Málaga" title="Instituto Municipal de Formación y Empleo de Málaga" />
            <img src="https://via.placeholder.com/200x80/f72585/ffffff?text=3DNatives" alt="3DNatives Partner" title="Medio de comunicación líder en impresión 3D" />
          </div>
        </div>
      </section>

      {/* Learn Section */}
      <section className="learn-section" id="aprende">
        <div className="container">
          <div className="learn-container">
            <div className="learn-content">
              <h2 className="section-title">Aprende 3D desde Cero</h2>
              <p>Nuestro programa de formación te lleva desde los conceptos básicos hasta técnicas avanzadas con un enfoque práctico y aplicado.</p>
              <div className="learn-steps">
                <div className="learn-step">
                  <h4><span>1</span> Fundamentos de Modelado</h4>
                  <p>Domina Tinkercad y Fusion 360 con nuestras guías paso a paso y ejercicios prácticos.</p>
                </div>
                <div className="learn-step">
                  <h4><span>2</span> Configuración Avanzada</h4>
                  <p>Aprende a calibrar tu impresora como un profesional y optimizar tus slicers.</p>
                </div>
                <div className="learn-step">
                  <h4><span>3</span> Postprocesado Profesional</h4>
                  <p>Técnicas de lijado, pintura y acabado para resultados de calidad profesional.</p>
                </div>
                <div className="learn-step">
                  <h4><span>4</span> Certificación Final</h4>
                  <p>Obtén tu certificado al completar el programa y comparte tus logros.</p>
                </div>
              </div>
              <a href="#aprende" className="btn btn-warning" style={{marginTop: 30}}>
                <i className="fas fa-graduation-cap"></i> Comenzar Formación Gratis
              </a>
            </div>
            <div className="learn-image">
              <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3" alt="Aprende impresión 3D" />
            </div>
          </div>
        </div>
      </section>

      {/* Business Section */}
      <section className="business-section">
        <div className="container">
          <h2 className="section-title">Emprende en el Mundo 3D</h2>
          <p className="text-center" style={{maxWidth: 800, margin: "0 auto 50px"}}>Descubre cómo convertir tu pasión por la impresión 3D en un negocio rentable con nuestros casos de éxito y estrategias comprobadas.</p>
          <div className="business-cards">
            <div className="business-card">
              <h3>Venta de Figuras Personalizadas</h3>
              <p>Juan transformó su hobby en un negocio que genera 400€/mes con un margen del 60% vendiendo figuras personalizadas a coleccionistas.</p>
              <div className="business-stats">
                <div className="stat-item">
                  <div className="stat-value">400€</div>
                  <div className="stat-label">Ingresos/mes</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">60%</div>
                  <div className="stat-label">Margen</div>
                </div>
              </div>
            </div>
            <div className="business-card">
              <h3>Repuestos y Piezas Técnicas</h3>
              <p>María atiende pedidos de repuestos industriales con su impresora, facturando 1.200€/mes con clientes recurrentes.</p>
              <div className="business-stats">
                <div className="stat-item">
                  <div className="stat-value">1.2k€</div>
                  <div className="stat-label">Ingresos/mes</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">75%</div>
                  <div className="stat-label">Clientes recurrentes</div>
                </div>
              </div>
            </div>
            <div className="business-card">
              <h3>Servicios de Impresión</h3>
              <p>TechPrint ofrece servicios de impresión 3D a diseñadores locales, con un crecimiento del 30% trimestral en su facturación.</p>
              <div className="business-stats">
                <div className="stat-item">
                  <div className="stat-value">30%</div>
                  <div className="stat-label">Crecimiento</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">50+</div>
                  <div className="stat-label">Clientes</div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center" style={{marginTop: 50}}>
            <a href="#emprende" className="btn btn-accent">
              <i className="fas fa-chart-line"></i> Descubre Nuestra Guía para Emprendedores
            </a>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="events-section">
        <div className="container">
          <div className="events-container">
            <div className="events-content">
              <h2 className="section-title">Agenda 3D 2025</h2>
              <p>No te pierdas los eventos más importantes del mundo de la impresión 3D en España y a nivel internacional.</p>
              <div className="events-list">
                <div className="event-item">
                  <div className="event-date">
                    <div className="event-day">18</div>
                    <div className="event-month">NOV</div>
                  </div>
                  <div className="event-info">
                    <h4>Formnext 2025</h4>
                    <p>Frankfurt, Alemania - La mayor feria de fabricación aditiva</p>
                  </div>
                </div>
                <div className="event-item">
                  <div className="event-date">
                    <div className="event-day">12</div>
                    <div className="event-month">SEP</div>
                  </div>
                  <div className="event-info">
                    <h4>Madrid 3D Print Expo</h4>
                    <p>IFEMA Madrid - Innovación y tendencias en impresión 3D</p>
                  </div>
                </div>
                <div className="event-item">
                  <div className="event-date">
                    <div className="event-day">25</div>
                    <div className="event-month">OCT</div>
                  </div>
                  <div className="event-info">
                    <h4>Webinar: Postprocesado Profesional</h4>
                    <p>Online - Técnicas avanzadas con expertos del sector</p>
                  </div>
                </div>
              </div>
              <a href="#eventos" className="btn btn-warning" style={{marginTop: 30}}>
                <i className="fas fa-calendar-alt"></i> Ver Agenda Completa
              </a>
            </div>
            <div className="events-countdown">
              <h3>Próximo Evento Importante</h3>
              <div className="countdown-title">Formnext 2025</div>
              <div className="countdown-container">
                <div className="countdown-item">
                  <div className="countdown-value" id="days">120</div>
                  <div className="countdown-label">Días</div>
                </div>
                <div className="countdown-item">
                  <div className="countdown-value" id="hours">18</div>
                  <div className="countdown-label">Horas</div>
                </div>
                <div className="countdown-item">
                  <div className="countdown-value" id="minutes">45</div>
                  <div className="countdown-label">Min</div>
                </div>
                <div className="countdown-item">
                  <div className="countdown-value" id="seconds">30</div>
                  <div className="countdown-label">Seg</div>
                </div>
              </div>
              <p>Frankfurt, Alemania | 18-21 Noviembre 2025</p>
              <a href="#formnext" className="btn" style={{marginTop: 20}}>
                <i className="fas fa-info-circle"></i> Más Información
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <div className="container">
          <h2>Únete a Nuestra Comunidad 3D</h2>
          <p>Recibe las últimas guías, comparativas, tutoriales y ofertas exclusivas directamente en tu correo</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Tu correo electrónico" required />
            <button type="submit">Suscribirse</button>
          </form>
          <p style={{marginTop: 15, fontSize: "0.9rem", opacity: 0.8}}>Respetamos tu privacidad. Nunca compartiremos tu email.</p>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h3>Tecno3D Hub</h3>
              <p>Tu fuente confiable de información sobre impresión 3D. Guías imparciales, reseñas detalladas y tutoriales paso a paso para dominar la impresión 3D.</p>
              <div className="social-links">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
                <a href="#"><i className="fab fa-telegram"></i></a>
              </div>
            </div>
            <div className="footer-col">
              <h3>Recursos</h3>
              <ul className="footer-links">
                <li><Link href="/comparativa"><i className="fas fa-balance-scale"></i> Comparativas</Link></li>
                <li><Link href="/resenas"><i className="fas fa-star"></i> Reseñas</Link></li>
                <li><Link href="/tutoriales"><i className="fas fa-graduation-cap"></i> Tutoriales</Link></li>
                <li><Link href="/blog"><i className="fas fa-blog"></i> Blog</Link></li>
                <li><Link href="/faq"><i className="fas fa-question-circle"></i> Preguntas Frecuentes</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>Materiales</h3>
              <ul className="footer-links">
                <li><a href="#"><i className="fas fa-leaf"></i> PLA</a></li>
                <li><a href="#"><i className="fas fa-shield-alt"></i> ABS</a></li>
                <li><a href="#"><i className="fas fa-wine-bottle"></i> PETG</a></li>
                <li><a href="#"><i className="fas fa-snowflake"></i> TPU</a></li>
                <li><a href="#"><i className="fas fa-vial"></i> Resinas</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>Contacto</h3>
              <ul className="footer-links">
                <li><a href="#"><i className="fas fa-envelope"></i> info@impresion3dpro.com</a></li>
                <li><a href="#"><i className="fab fa-whatsapp"></i> +34 123 456 789</a></li>
                <li><a href="#"><i className="fas fa-map-marker-alt"></i> Madrid, España</a></li>
              </ul>
              <div className="affiliate-disclaimer">
                <i className="fas fa-info-circle"></i> Tecno3D Hub participa en el Programa de Afiliados de Amazon EU, un programa de publicidad para afiliados diseñado para ofrecer a sitios web un modo de obtener comisiones por publicidad.
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; 2025 Tecno3D Hub. Todos los derechos reservados. | Diseñado con pasión por la impresión 3D</p>
          </div>
        </div>
      </footer>
    </>
  );
}