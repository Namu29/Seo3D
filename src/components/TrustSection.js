export default function TrustSection() {
  return (
    <section className="trust-section">
      <div className="container">
        <h2 className="section-title">Colaboramos con los Mejores</h2>
        <div className="trust-logos">
          <img 
            src="https://via.placeholder.com/200x80/3a0ca3/ffffff?text=ADDIMAT" 
            alt="ADDIMAT Partner" 
            title="Asociación Española de Fabricación Aditiva"
            loading="lazy"
          />
          <img 
            src="https://via.placeholder.com/200x80/4361ee/ffffff?text=IMFE+Málaga" 
            alt="Formación IMFE Málaga" 
            title="Instituto Municipal de Formación y Empleo de Málaga"
            loading="lazy"
          />
          <img 
            src="https://via.placeholder.com/200x80/f72585/ffffff?text=3DNatives" 
            alt="3DNatives Partner" 
            title="Medio de comunicación líder en impresión 3D"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}