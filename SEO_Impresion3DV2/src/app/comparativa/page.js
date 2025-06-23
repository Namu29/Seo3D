'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  // Navegación y UI
  faBars, 
  faTimes,
  faStar,
  faCheckCircle,
  faTimesCircle,
  
  // Iconos de materiales
  faLeaf,
  faShieldAlt,
  faWineBottle,
  faSnowflake,
  faCube,
  faPalette,
  faSun,
  faTint,
  faFlask,
  faShoePrints,
  faCubes,
  faCog,
  
  // Iconos de características
  faPaintBrush,
  faCogs,
  faMobileAlt,
  faCar,
  faGamepad,
  faGift,
  faTools,
  faRobot,
  faHome,
  
  // Iconos de información
  faBalanceScale,
  faGraduationCap,
  faBlog,
  faQuestionCircle,
  faVial,
  faEnvelope,
  faPhone,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebookF, 
  faTwitter, 
  faInstagram, 
  faYoutube, 
  faTelegram 
} from '@fortawesome/free-brands-svg-icons';
import styles from './page.module.css';
import Head from 'next/head';

export default function ComparativaPage() {
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

    // Sticky header
    const header = document.getElementById('header');
    const onScroll = () => {
      if (window.scrollY > 100) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', onScroll);
    
    return () => {
      if (menuToggle && mainMenu) {
        menuToggle.removeEventListener('click', () => {});
      }
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Comparativa de Filamentos 3D | Tecno3D Hub</title>
        <meta name="description" content="Guía completa de filamentos para impresión 3D. Comparativa detallada de PLA, ABS, PETG, TPU y más. Descubre cuál es el mejor material para tus proyectos." />
        <meta name="keywords" content="comparativa filamentos 3d, filamentos impresión 3d, pla, abs, petg, tpu, materiales impresión 3d, guía filamentos" />
      </Head>

      {/* Hero Section */}
      <section className={styles.pageHero}>
        <div className="container">
          <h1>Comparativa de Filamentos 3D</h1>
          <p>Descubre cuál es el mejor material para cada proyecto con nuestra guía completa</p>
          <ul className={styles.breadcrumb}>
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/comparativa">Comparativas</Link></li>
            <li>Filamentos</li>
          </ul>
        </div>
      </section>

      <main className="container">
      {/* Introducción */}
      <section className={styles.comparisonIntro}>
        <h2 className={styles.sectionTitle}>Guía Definitiva de Filamentos 3D</h2>
        <p>Elegir el filamento adecuado es crucial para el éxito de tus impresiones 3D. Cada material tiene propiedades únicas que lo hacen ideal para diferentes aplicaciones.</p>
        <p>En esta guía comparativa, analizamos los principales filamentos disponibles en el mercado, sus características técnicas, ventajas, desventajas y mejores usos.</p>
      </section>

      {/* Comparativa Técnica */}
      <section>
        <h2 className={styles.sectionTitle}>Comparativa Técnica</h2>
        <div style={{ overflowX: 'auto' }}>
          <table className={styles.comparisonTable}>
            <thead>
              <tr>
                <th>Característica</th>
                <th>PLA</th>
                <th>ABS</th>
                <th>PETG</th>
                <th>TPU</th>
                <th>Nylon</th>
                <th>ASA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Facilidad de Impresión</td>
                <td>
                  <div className={styles.materialRating}>
                    <span className={styles.stars}>★★★★★</span>
                    <span className={styles.featureScore}>10</span>
                  </div>
                </td>
                <td>
                  <div className={styles.materialRating}>
                    <span className={styles.stars}>★★★☆☆</span>
                    <span className={styles.featureScore}>6</span>
                  </div>
                </td>
                <td>
                  <div className={styles.materialRating}>
                    <span className={styles.stars}>★★★★☆</span>
                    <span className={styles.featureScore}>8</span>
                  </div>
                </td>
                <td>
                  <div className={styles.materialRating}>
                    <span className={styles.stars}>★★★☆☆</span>
                    <span className={styles.featureScore}>6</span>
                  </div>
                </td>
                <td>
                  <div className={styles.materialRating}>
                    <span className={styles.stars}>★★☆☆☆</span>
                    <span className={styles.featureScore}>4</span>
                  </div>
                </td>
                <td>
                  <div className={styles.materialRating}>
                    <span className={styles.stars}>★★★☆☆</span>
                    <span className={styles.featureScore}>5</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Resistencia</td>
                <td>Media</td>
                <td>Alta</td>
                <td>Alta</td>
                <td>Alta (Flexible)</td>
                <td>Muy Alta</td>
                <td>Alta</td>
              </tr>
              <tr>
                <td>Durabilidad</td>
                <td>Media</td>
                <td>Alta</td>
                <td>Alta</td>
                <td>Alta</td>
                <td>Muy Alta</td>
                <td>Alta</td>
              </tr>
              <tr>
                <td>Temperatura de Impresión</td>
                <td>180-220°C</td>
                <td>220-250°C</td>
                <td>220-250°C</td>
                <td>210-230°C</td>
                <td>240-260°C</td>
                <td>240-260°C</td>
              </tr>
              <tr>
                <td>Temperatura de Cama</td>
                <td>No necesaria</td>
                <td>90-110°C</td>
                <td>70-80°C</td>
                <td>40-60°C</td>
                <td>70-100°C</td>
                <td>90-110°C</td>
              </tr>
              <tr>
                <td>Resistencia al Calor</td>
                <td>Baja</td>
                <td>Media</td>
                <td>Media</td>
                <td>Media</td>
                <td>Alta</td>
                <td>Alta</td>
              </tr>
              <tr>
                <td>Resistencia Química</td>
                <td>Baja</td>
                <td>Media</td>
                <td>Alta</td>
                <td>Media</td>
                <td>Alta</td>
                <td>Alta</td>
              </tr>
              <tr>
                <td>Precio (€/kg)</td>
                <td>15-25€</td>
                <td>20-35€</td>
                <td>25-40€</td>
                <td>35-50€</td>
                <td>40-60€</td>
                <td>35-55€</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Análisis Detallado */}
      <section>
        <h2 className={styles.sectionTitle}>Análisis Detallado por Material</h2>
        <div className={styles.materialCards}>
          {/* PLA */}
          <div className={styles.materialCard}>
            <div className={styles.materialHeader}>
              <div className={styles.materialIcon}>
                <FontAwesomeIcon icon={faLeaf} />
              </div>
              <h3>PLA</h3>
              <span className={styles.materialTag}>Recomendado para principiantes</span>
            </div>
            <div className={styles.materialContent}>
              <p>El filamento más popular para principiantes. Biodegradable y fácil de imprimir con excelente calidad superficial.</p>
              
              <ul className={styles.materialProperties}>
                <li>
                  <span className={styles.propertyName}>Tipo:</span>
                  <span className={styles.propertyValue}>Rígido</span>
                </li>
                <li>
                  <span className={styles.propertyName}>Densidad:</span>
                  <span className={styles.propertyValue}>1.24 g/cm³</span>
                </li>
                <li>
                  <span className={styles.propertyName}>Resistencia a la tracción:</span>
                  <span className={styles.propertyValue}>50-70 MPa</span>
                </li>
              </ul>
              
              <div className={styles.materialProsCons}>
                <div className={styles.pros}>
                  <h4><FontAwesomeIcon icon={faCheckCircle} /> Ventajas</h4>
                  <ul>
                    <li>Fácil de imprimir</li>
                    <li>Buen acabado superficial</li>
                    <li>Biodegradable</li>
                    <li>Baja contracción</li>
                  </ul>
                </div>
                <div className={styles.cons}>
                  <h4><FontAwesomeIcon icon={faTimesCircle} /> Desventajas</h4>
                  <ul>
                    <li>Baja resistencia al calor</li>
                    <li>Puede ser frágil</li>
                    <li>Poca resistencia a la intemperie</li>
                  </ul>
                </div>
              </div>
              
              <div className={styles.materialUses}>
                <h4>Mejores usos</h4>
                <div className={styles.usesGrid}>
                  <div className={styles.useItem}>
                    <FontAwesomeIcon icon={faCube} />
                    <span>Prototipos</span>
                  </div>
                  <div className={styles.useItem}>
                    <FontAwesomeIcon icon={faPalette} />
                    <span>Decoración</span>
                  </div>
                  <div className={styles.useItem}>
                    <FontAwesomeIcon icon={faGraduationCap} />
                    <span>Educación</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ABS */}
          <div className={styles.materialCard}>
            <div className={styles.materialHeader}>
              <div className={styles.materialIcon}>
                <FontAwesomeIcon icon={faShieldAlt} />
              </div>
              <h3>ABS</h3>
              <span className={styles.materialTag}>Alta resistencia</span>
            </div>
            <div className={styles.materialContent}>
              <p>El ABS es conocido por su resistencia y durabilidad, ideal para piezas funcionales que requieren alta resistencia al impacto.</p>
              
              <ul className={styles.materialProperties}>
                <li>
                  <span className={styles.propertyName}>Temperatura de impresión:</span>
                  <span className={styles.propertyValue}>220-250°C</span>
                </li>
                <li>
                  <span className={styles.propertyName}>Temperatura de cama:</span>
                  <span className={styles.propertyValue}>90-110°C</span>
                </li>
                <li>
                  <span className={styles.propertyName}>Resistencia a la tracción:</span>
                  <span className={styles.propertyValue}>40-50 MPa</span>
                </li>
              </ul>
              
              <div className={styles.materialProsCons}>
                <div className={styles.pros}>
                  <h4><FontAwesomeIcon icon={faCheckCircle} /> Ventajas</h4>
                  <ul>
                    <li>Alta resistencia al impacto</li>
                    <li>Buena resistencia térmica</li>
                    <li>Superficie lisa con acetona</li>
                    <li>Buena relación resistencia/peso</li>
                  </ul>
                </div>
                <div className={styles.cons}>
                  <h4><FontAwesomeIcon icon={faTimesCircle} /> Desventajas</h4>
                  <ul>
                    <li>Requiere cama caliente</li>
                    <li>Puede deformarse al enfriar</li>
                    <li>Emite vapores tóxicos</li>
                  </ul>
                </div>
              </div>
              
              <div className={styles.materialUses}>
                <h4>Mejores usos</h4>
                <div className={styles.usesGrid}>
                  <div className={styles.useItem}>
                    <FontAwesomeIcon icon={faCog} />
                    <span>Piezas mecánicas</span>
                  </div>
                  <div className={styles.useItem}>
                    <FontAwesomeIcon icon={faCar} />
                    <span>Automoción</span>
                  </div>
                  <div className={styles.useItem}>
                    <FontAwesomeIcon icon={faGamepad} />
                    <span>Juguetes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PETG */}
          <div className={styles.materialCard}>
            <div className={styles.materialHeader}>
              <div className={styles.materialIcon}>
                <FontAwesomeIcon icon={faWineBottle} />
              </div>
              <h3>PETG</h3>
              <span className={styles.materialTag}>Versátil y resistente</span>
            </div>
            <div className={styles.materialContent}>
              <p>Combinación de las mejores propiedades del PLA y ABS, con mayor resistencia química y durabilidad.</p>
              
              <ul className={styles.materialProperties}>
                <li>
                  <span className={styles.propertyName}>Temperatura de impresión:</span>
                  <span className={styles.propertyValue}>230-250°C</span>
                </li>
                <li>
                  <span className={styles.propertyName}>Temperatura de cama:</span>
                  <span className={styles.propertyValue}>70-80°C</span>
                </li>
                <li>
                  <span className={styles.propertyName}>Resistencia a la tracción:</span>
                  <span className={styles.propertyValue}>55-75 MPa</span>
                </li>
              </ul>
              
              <div className={styles.materialProsCons}>
                <div className={styles.pros}>
                  <h4><FontAwesomeIcon icon={faCheckCircle} /> Ventajas</h4>
                  <ul>
                    <li>Excelente resistencia química</li>
                    <li>Buena resistencia al impacto</li>
                    <li>Transparente disponible</li>
                    <li>Resistente al agua</li>
                  </ul>
                </div>
                <div className={styles.cons}>
                  <h4><FontAwesomeIcon icon={faTimesCircle} /> Desventajas</h4>
                  <ul>
                    <li>Puede ser pegajoso</li>
                    <li>Más caro que PLA/ABS</li>
                    <li>Sensible a la humedad</li>
                  </ul>
                </div>
              </div>
              
              <div className={styles.materialUses}>
                <h4>Mejores usos</h4>
                <div className={styles.usesGrid}>
                  <div className={styles.useItem}>
                    <FontAwesomeIcon icon={faTint} />
                    <span>Contenedores</span>
                  </div>
                  <div className={styles.useItem}>
                    <FontAwesomeIcon icon={faSun} />
                    <span>Exteriores</span>
                  </div>
                  <div className={styles.useItem}>
                    <FontAwesomeIcon icon={faFlask} />
                    <span>Laboratorio</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TPU */}
          <div className={styles.materialCard}>
            <div className={styles.materialHeader}>
              <div className={styles.materialIcon}>
                <FontAwesomeIcon icon={faSnowflake} />
              </div>
              <h3>TPU</h3>
              <span className={styles.materialTag}>Flexible</span>
            </div>
            <div className={styles.materialContent}>
              <p>Material flexible tipo caucho ideal para piezas que requieren absorción de impactos y flexibilidad.</p>
              
              <ul className={styles.materialProperties}>
                <li>
                  <span className={styles.propertyName}>Temperatura de impresión:</span>
                  <span className={styles.propertyValue}>220-250°C</span>
                </li>
                <li>
                  <span className={styles.propertyName}>Temperatura de cama:</span>
                  <span className={styles.propertyValue}>40-60°C</span>
                </li>
                <li>
                  <span className={styles.propertyName}>Dureza Shore:</span>
                  <span className={styles.propertyValue}>95A</span>
                </li>
              </ul>
              
              <div className={styles.materialProsCons}>
                <div className={styles.pros}>
                  <h4><FontAwesomeIcon icon={faCheckCircle} /> Ventajas</h4>
                  <ul>
                    <li>Alta flexibilidad y elasticidad</li>
                    <li>Excelente absorción de impactos</li>
                    <li>Resistente a la abrasión</li>
                    <li>Buena adherencia entre capas</li>
                  </ul>
                </div>
                <div className={styles.cons}>
                  <h4><FontAwesomeIcon icon={faTimesCircle} /> Desventajas</h4>
                  <ul>
                    <li>Difícil de imprimir</li>
                    <li>Requiere impresora directa</li>
                    <li>Baja resistencia al calor</li>
                  </ul>
                </div>
              </div>
              
              <div className={styles.materialUses}>
                <h4>Mejores usos</h4>
                <div className={styles.usesGrid}>
                  <div className={styles.useItem}>
                    <FontAwesomeIcon icon={faMobileAlt} />
                    <span>Fundas</span>
                  </div>
                  <div className={styles.useItem}>
                    <FontAwesomeIcon icon={faShoePrints} />
                    <span>Suelas</span>
                  </div>
                  <div className={styles.useItem}>
                    <FontAwesomeIcon icon={faCubes} />
                    <span>Juntas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ASA */}
          <div className={styles.materialCard}>
            <div className={styles.materialHeader}>
              <div className={styles.materialIcon}>
                <FontAwesomeIcon icon={faSun} />
              </div>
              <h3>ASA</h3>
              <span className={styles.materialTag}>Exterior</span>
            </div>
            <div className={styles.materialContent}>
              <p>Material de ingeniería con excelente resistencia a la intemperie y a los rayos UV, ideal para aplicaciones en exteriores.</p>
              
              <ul className={styles.materialProperties}>
                <li>
                  <span className={styles.propertyName}>Temperatura de impresión:</span>
                  <span className={styles.propertyValue}>240-260°C</span>
                </li>
                <li>
                  <span className={styles.propertyName}>Temperatura de cama:</span>
                  <span className={styles.propertyValue}>90-110°C</span>
                </li>
                <li>
                  <span className={styles.propertyName}>Resistencia a la tracción:</span>
                  <span className={styles.propertyValue}>40-50 MPa</span>
                </li>
                <li>
                  <span className={styles.propertyName}>Resistencia UV:</span>
                  <span className={styles.propertyValue}>Excelente</span>
                </li>
              </ul>
              
              <div className={styles.materialProsCons}>
                <div className={styles.pros}>
                  <h4><FontAwesomeIcon icon={faCheckCircle} /> Ventajas</h4>
                  <ul>
                    <li>Excelente resistencia a la intemperie</li>
                    <li>Alta resistencia a impactos</li>
                    <li>Estabilidad dimensional</li>
                    <li>Buena resistencia química</li>
                  </ul>
                </div>
                <div className={styles.cons}>
                  <h4><FontAwesomeIcon icon={faTimesCircle} /> Desventajas</h4>
                  <ul>
                    <li>Requiere cama caliente</li>
                    <li>Mayor contracción que el PLA</li>
                    <li>Puede emitir vapores</li>
                  </ul>
                </div>
              </div>
              
              <div className={styles.materialUses}>
                <h4>Mejores usos</h4>
                <div className={styles.usesGrid}>
                  <div className={styles.useItem}>
                    <FontAwesomeIcon icon={faCar} />
                    <span>Piezas automotrices</span>
                  </div>
                  <div className={styles.useItem}>
                    <FontAwesomeIcon icon={faHome} />
                    <span>Elementos de exterior</span>
                  </div>
                  <div className={styles.useItem}>
                    <FontAwesomeIcon icon={faShieldAlt} />
                    <span>Piezas industriales</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recomendaciones */}
      <section className={styles.recommendations}>
        <h2 className={styles.sectionTitle}>Recomendaciones por Tipo de Proyecto</h2>
        <div className={styles.recommendationGrid}>
          <div className={styles.recommendationCard}>
            <div className={styles.recommendationIcon}>
              <FontAwesomeIcon icon={faPaintBrush} />
            </div>
            <h3>Modelos Decorativos</h3>
            <p><strong>Recomendado: PLA</strong></p>
            <p>Para figuras, maquetas y elementos decorativos donde la calidad visual es más importante que la resistencia mecánica.</p>
          </div>
          
          <div className={styles.recommendationCard}>
            <div className={styles.recommendationIcon}>
              <FontAwesomeIcon icon={faCogs} />
            </div>
            <h3>Piezas Mecánicas</h3>
            <p><strong>Recomendado: PETG</strong></p>
            <p>Para engranajes, soportes y piezas funcionales que requieren resistencia mecánica y durabilidad.</p>
          </div>
          
          <div className={styles.recommendationCard}>
            <div className={styles.recommendationIcon}>
              <FontAwesomeIcon icon={faMobileAlt} />
            </div>
            <h3>Fundas y Protectores</h3>
            <p><strong>Recomendado: TPU</strong></p>
            <p>Para fundas de teléfonos, protectores de esquinas y cualquier aplicación que requiera flexibilidad y absorción de impactos.</p>
          </div>
          
          <div className={styles.recommendationCard}>
            <div className={styles.recommendationIcon}>
              <FontAwesomeIcon icon={faCar} />
            </div>
            <h3>Piezas para Automoción</h3>
            <p><strong>Recomendado: ABS</strong></p>
            <p>Para soportes de motores, carcasas y piezas que deben resistir temperaturas moderadas y vibraciones.</p>
          </div>
          
          <div className={styles.recommendationCard}>
            <div className={styles.recommendationIcon}>
              <FontAwesomeIcon icon={faSun} />
            </div>
            <h3>Aplicaciones en Exteriores</h3>
            <p><strong>Recomendado: ASA</strong></p>
            <p>Para piezas que estarán expuestas a la intemperie, como señales, soportes de antenas o elementos de jardín, gracias a su excelente resistencia a los rayos UV y a las condiciones climáticas.</p>
          </div>
        </div>
      </section>
      </main>

      {/* Newsletter */}
      <section className={styles.newsletter}>
        <div className="container">
          <h2>¿Quieres más guías como esta?</h2>
          <p>Suscríbete para recibir comparativas, reseñas de productos y ofertas exclusivas directamente en tu correo</p>
          <form className={styles.newsletterForm}>
            <input type="email" placeholder="Tu correo electrónico" required />
            <button type="submit">Suscribirse</button>
          </form>
          <p className={styles.newsletterNote}>Respetamos tu privacidad. Nunca compartiremos tu email.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerGrid}>
            <div className={styles.footerCol}>
              <h3>Tecno3D Hub</h3>
              <p>Tu fuente confiable de información sobre impresión 3D. Guías imparciales, reseñas detalladas y tutoriales paso a paso para dominar la impresión 3D.</p>
              <div className={styles.socialLinks}>
                <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
                <a href="#"><FontAwesomeIcon icon={faTelegram} /></a>
              </div>
            </div>
            
            <div className={styles.footerCol}>
              <h3>Recursos</h3>
              <ul className={styles.footerLinks}>
                <li><a href="/comparativa"><FontAwesomeIcon icon={faBalanceScale} /> Comparativas</a></li>
                <li><a href="/resenas"><FontAwesomeIcon icon={faStar} /> Reseñas</a></li>
                <li><a href="/tutoriales"><FontAwesomeIcon icon={faGraduationCap} /> Tutoriales</a></li>
                <li><a href="/blog"><FontAwesomeIcon icon={faBlog} /> Blog</a></li>
                <li><a href="/faq"><FontAwesomeIcon icon={faQuestionCircle} /> Preguntas Frecuentes</a></li>
              </ul>
            </div>
            
            <div className={styles.footerCol}>
              <h3>Materiales</h3>
              <ul className={styles.footerLinks}>
                <li><a href="#"><FontAwesomeIcon icon={faLeaf} /> PLA</a></li>
                <li><a href="#"><FontAwesomeIcon icon={faShieldAlt} /> ABS</a></li>
                <li><a href="#"><FontAwesomeIcon icon={faWineBottle} /> PETG</a></li>
                <li><a href="#"><FontAwesomeIcon icon={faSnowflake} /> TPU</a></li>
                <li><a href="#"><FontAwesomeIcon icon={faVial} /> Resinas</a></li>
              </ul>
            </div>
            
            <div className={styles.footerCol}>
              <h3>Contacto</h3>
              <ul className={styles.footerLinks}>
                <li><a href="mailto:info@tecno3dhub.com"><FontAwesomeIcon icon={faEnvelope} /> info@tecno3dhub.com</a></li>
                <li><a href="tel:+34900123456"><FontAwesomeIcon icon={faPhone} /> +34 900 123 456</a></li>
                <li><a href="#"><FontAwesomeIcon icon={faMapMarkerAlt} /> Madrid, España</a></li>
              </ul>
            </div>
          </div>
          
          <div className={styles.footerBottom}>
            <p>&copy; {new Date().getFullYear()} Tecno3D Hub. Todos los derechos reservados.</p>
            <div className={styles.footerLegal}>
              <a href="/politica-privacidad">Política de Privacidad</a>
              <a href="/terminos">Términos de Uso</a>
              <a href="/cookies">Política de Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
