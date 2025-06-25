import Link from 'next/link';

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <h2 className="section-title">Recursos Imprescindibles</h2>
        <div className="features-grid">
          {/* Tarjeta 1: Comparativa de Filamentos */}
          <div className="feature-card">
            <div className="feature-badge">Nuevo</div>
            <div className="feature-img">
              <img 
                src="https://images.unsplash.com/photo-1621330396171-4abe32736bd3?ixlib=rb-4.0.3" 
                alt="Comparativa de filamentos 3D" 
                loading="lazy"
              />
            </div>
            <div className="feature-content">
              <h3>Comparativa de Filamentos</h3>
              <p>Descubre cuál es el mejor filamento para cada proyecto con nuestra guía comparativa actualizada con más de 30 materiales analizados.</p>
              <Link href="/comparativa" className="btn">Ver Comparativa</Link>
            </div>
          </div>
          
          {/* Tarjeta 2: Reseñas de Impresoras */}
          <div className="feature-card">
            <div className="feature-badge">Top 2025</div>
            <div className="feature-img">
              <img 
                src="https://images.unsplash.com/photo-1581093458799-7a2570106b8b?ixlib=rb-4.0.3" 
                alt="Reseñas de impresoras 3D" 
                loading="lazy"
              />
            </div>
            <div className="feature-content">
              <h3>Reseñas de Impresoras</h3>
              <p>Análisis detallados de las 20 mejores impresoras 3D del mercado para ayudarte a elegir la máquina perfecta para tus necesidades.</p>
              <Link href="/resenas" className="btn">Ver Reseñas</Link>
            </div>
          </div>
          
          {/* Tarjeta 3: Tutoriales Paso a Paso */}
          <div className="feature-card">
            <div className="feature-badge">Popular</div>
            <div className="feature-img">
              <img 
                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3" 
                alt="Tutoriales de impresión 3D" 
                loading="lazy"
              />
            </div>
            <div className="feature-content">
              <h3>Tutoriales Paso a Paso</h3>
              <p>Aprende técnicas avanzadas de impresión, calibración profesional y resolución de problemas con nuestras guías visuales.</p>
              <Link href="/tutoriales" className="btn">Ver Tutoriales</Link>
            </div>
          </div>
          
          {/* Tarjeta 4: Guía Tinkercad */}
          <div className="feature-card">
            <div className="feature-badge">Gratis</div>
            <div className="feature-img">
              <img 
                src="https://images.unsplash.com/photo-1632893664091-25d675ea0d17?ixlib=rb-4.0.3" 
                alt="Guía Tinkercad 2025" 
                loading="lazy"
              />
            </div>
            <div className="feature-content">
              <h3>Domina Tinkercad en 1 Hora</h3>
              <p>Diseña tus primeros modelos 3D con nuestra guía paso a paso + plantillas descargables.</p>
              <Link href="/tinkercad-guia" className="btn">Descargar PDF</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}