"use client";
import styles from "./page.module.css";
import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faStar,
  faFilter,
  faTimes,
  faCube,
  faGem,
  faCogs,
  faIndustry,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { 
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

// Añadir iconos a la librería
library.add(
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faEnvelope
);



const reviewsData = [
  {
    id: 1,
    name: "Creality Ender 3 V2",
    img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=60",
    badge: "Top Ventas",
    rating: 4.5,
    volume: "220 x 220 x 250 mm",
    type: "FDM",
    price: 250,
  },
  {
    id: 2,
    name: "Anycubic Photon Mono X",
    img: "https://images.unsplash.com/photo-1628590897763-3e9d8cb12c90?auto=format&fit=crop&w=800&q=60",
    badge: "Mejor Resina",
    rating: 4.7,
    volume: "192 x 120 x 245 mm",
    type: "Resina",
    price: 550,
  },
  {
    id: 3,
    name: "Prusa i3 MK3S+",
    img: "https://images.unsplash.com/photo-1605902711622-cfb43c4436b2?auto=format&fit=crop&w=800&q=60",
    badge: "Premium",
    rating: 4.9,
    volume: "250 x 210 x 210 mm",
    type: "FDM",
    price: 770,
  },
  {
    id: 4,
    name: "Elegoo Mars 3",
    img: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=800&q=60",
    badge: "Equilibrio",
    rating: 4.4,
    volume: "143 x 90 x 175 mm",
    type: "Resina",
    price: 300,
  },
  {
    id: 5,
    name: "Flashforge Adventurer 4",
    img: "https://images.unsplash.com/photo-1581091870627-a0c2f5f9f9e0?auto=format&fit=crop&w=800&q=60",
    badge: "Plug & Play",
    rating: 4.2,
    volume: "220 x 200 x 250 mm",
    type: "FDM",
    price: 499,
  },
  {
    id: 6,
    name: "Creality CR-10 Smart",
    img: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=800&q=60",
    badge: "Gran Volumen",
    rating: 4.3,
    volume: "300 x 300 x 400 mm",
    type: "FDM",
    price: 639,
  },
];

export default function ResenasPage() {
  const [filters, setFilters] = useState({
    type: "",
    maxPrice: "",
    minRating: "",
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const resetFilters = () => {
    setFilters({ type: "", maxPrice: "", minRating: "" });
  };

  const filteredReviews = reviewsData.filter((r) => {
    const passType = filters.type ? r.type === filters.type : true;
    const passPrice = filters.maxPrice ? r.price <= filters.maxPrice : true;
    const passRating = filters.minRating ? r.rating >= filters.minRating : true;
    return passType && passPrice && passRating;
  });

  return (
    <>
      <Head>
        <title>Reseñas de Impresoras 3D | Tecno3D Hub</title>
        <meta
          name="description"
          content="Análisis detallados de las mejores impresoras 3D del mercado. Comparativas, pruebas reales y recomendaciones para ayudarte a elegir tu próxima impresora."
        />
        <meta
          name="keywords"
          content="reseñas impresoras 3d, comparativa impresoras 3d, mejores impresoras 3d, análisis impresoras 3d, impresión 3d"
        />
      </Head>
      <main>
      {/* Hero */}
      <section className={styles.pageHero}>
        <div className="container">
          <h1>Reseñas de Impresoras 3D</h1>
          <p>
            Descubre análisis en profundidad, pruebas reales y recomendaciones para
            encontrar la impresora 3D perfecta.
          </p>
          <ul className={styles.breadcrumb}>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>Reseñas</li>
          </ul>
        </div>
      </section>

      {/* Filtros */}
      <section className="container">
        <div className={styles.filtersSection}>
          <h2 className={styles.filtersTitle}>
            <FontAwesomeIcon icon={faFilter} /> Filtrar por
          </h2>

          <div className={styles.filtersGrid}>
            <div className={styles.filterGroup}>
              <label>Tipo de Impresora</label>
              <select name="type" value={filters.type} onChange={handleChange}>
                <option value="">Todas</option>
                <option value="FDM">FDM</option>
                <option value="Resina">Resina</option>
              </select>
            </div>
            <div className={styles.filterGroup}>
              <label>Precio Máximo (€)</label>
              <input
                type="number"
                name="maxPrice"
                placeholder="Ej: 500"
                value={filters.maxPrice}
                onChange={handleChange}
              />
            </div>
            <div className={styles.filterGroup}>
              <label>Valoración Mínima</label>
              <select
                name="minRating"
                value={filters.minRating}
                onChange={handleChange}
              >
                <option value="">Todas</option>
                <option value="3">3 ★ o más</option>
                <option value="4">4 ★ o más</option>
              </select>
            </div>
          </div>

          <div className={styles.filterButtons}>
            <button className="btn" onClick={resetFilters}>
              <FontAwesomeIcon icon={faTimes} /> Limpiar
            </button>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="container">
        <h2 className="sectionTitle">Las Mejores Impresoras 3D Analizadas</h2>
        <div className={styles.reviewsGrid}>
          {filteredReviews.map((rev) => (
            <article key={rev.id} className={styles.reviewCard}>
              {rev.badge && <span className={styles.reviewBadge}>{rev.badge}</span>}
              <div className={styles.reviewImage}>
                <Image
                  src={rev.img}
                  alt={rev.name}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.reviewContent}>
                <h3 className={styles.reviewTitle}>{rev.name}</h3>
                <p className={styles.reviewSpecs}>{rev.volume}</p>
                <div className={styles.reviewRating}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      className={
                        i < Math.round(rev.rating)
                          ? styles.starFilled
                          : styles.starEmpty
                      }
                    />
                  ))}
                  <span>{rev.rating.toFixed(1)}</span>
                </div>
                <p className={styles.reviewPrice}>Desde €{rev.price}</p>
                <a href="#" className="btn btn-accent">
                  Ver Reseña
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Comparativa Técnica */}
      <section className={styles.comparisonSection}>
        <div className="container">
        <h2 className="sectionTitle">Comparativa Técnica Rápida</h2>
        <div className="tableResponsive">
          <table className={styles.comparisonTable}>
            <thead>
              <tr>
                <th>Modelo</th>
                <th>Tecnología</th>
                <th>Volumen</th>
                <th>Precio (€)</th>
                <th>Valoración</th>
              </tr>
            </thead>
            <tbody>
              {reviewsData.map((p) => (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>{p.type}</td>
                  <td>{p.volume}</td>
                  <td>€{p.price}</td>
                  <td>
                    <div className={styles.printerRating}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FontAwesomeIcon
                          key={i}
                          icon={faStar}
                          className={
                            i < Math.round(p.rating)
                              ? styles.starFilled
                              : styles.starEmpty
                          }
                        />
                      ))}
                      <span>{p.rating.toFixed(1)}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      </section>

      {/* Categorías */}
      <section className="container">
        <h2 className="sectionTitle">Explora por Categoría</h2>
        <div className={styles.categoriesGrid}>
          <a href="/filamento" className={styles.categoryCard}>
            <div className={styles.categoryIcon}>
              <FontAwesomeIcon icon={faCube} />
            </div>
            <h3>Impresoras FDM</h3>
            <p>Modelado por deposición fundida, ideales para principiantes y prototipado rápido.</p>
          </a>

          <a href="/resina" className={styles.categoryCard}>
            <div className={styles.categoryIcon}>
              <FontAwesomeIcon icon={faGem} />
            </div>
            <h3>Impresoras de Resina</h3>
            <p>Alta precisión y acabado profesional para piezas detalladas y maquetas.</p>
          </a>

          <a href="/profesionales" className={styles.categoryCard}>
            <div className={styles.categoryIcon}>
              <FontAwesomeIcon icon={faCogs} />
            </div>
            <h3>Uso Profesional</h3>
            <p>Equipos industriales para producción continua y aplicaciones técnicas avanzadas.</p>
          </a>

          <a href="/empresas" className={styles.categoryCard}>
            <div className={styles.categoryIcon}>
              <FontAwesomeIcon icon={faIndustry} />
            </div>
            <h3>Para Empresas</h3>
            <p>Soluciones empresariales de impresión 3D para producción a gran escala.</p>
          </a>
        </div>
      </section>

      {/* Newsletter */}
      <section className={styles.newsletterSection}>
        <div className="container">
          <div className={styles.newsletterContent}>
            <div>
              <h2>Mantente Actualizado</h2>
              <p>Suscríbete para recibir las últimas reseñas, ofertas y noticias de impresión 3D.</p>
            </div>
            <form className={styles.newsletterForm}>
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                required 
                className={styles.newsletterInput}
              />
              <button type="submit" className="btn btn-accent">Suscribirse</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerContent}>
            <div className={styles.footerSection}>
              <h3>Acerca de Nosotros</h3>
              <p>Expertos en impresión 3D desde 2015. Ofrecemos reseñas imparciales y guías para ayudarte a encontrar la mejor tecnología de impresión 3D.</p>
            </div>
            
            <div className={styles.footerSection}>
              <h3>Enlaces Rápidos</h3>
              <ul className={styles.footerLinks}>
                <li><a href="/">Inicio</a></li>
                <li><a href="/resenas">Reseñas</a></li>
                <li><a href="/guias">Guías</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/contacto">Contacto</a></li>
              </ul>
            </div>

            <div className={styles.footerSection}>
              <h3>Legal</h3>
              <ul className={styles.footerLinks}>
                <li><a href="/politica-privacidad">Política de Privacidad</a></li>
                <li><a href="/terminos-servicio">Términos de Servicio</a></li>
                <li><a href="/cookies">Política de Cookies</a></li>
                <li><a href="/afiliacion">Afiliación</a></li>
              </ul>
            </div>

            <div className={styles.footerSection}>
              <h3>Contacto</h3>
              <p>Email: info@tecnohub3d.com</p>
              <div className={styles.socialLinks}>
                <a href="https://facebook.com" aria-label="Facebook">
                  <FontAwesomeIcon icon={['fab', 'facebook']} />
                </a>
                <a href="https://twitter.com" aria-label="Twitter">
                  <FontAwesomeIcon icon={['fab', 'twitter']} />
                </a>
                <a href="https://instagram.com" aria-label="Instagram">
                  <FontAwesomeIcon icon={['fab', 'instagram']} />
                </a>
                <a href="https://youtube.com" aria-label="YouTube">
                  <FontAwesomeIcon icon={['fab', 'youtube']} />
                </a>
              </div>
            </div>
          </div>
          
          <div className={styles.footerBottom}>
            <p>&copy; {new Date().getFullYear()} Tecno3D Hub. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
      </main>
    </>
  );
}
