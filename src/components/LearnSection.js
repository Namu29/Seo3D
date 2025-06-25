import Link from 'next/link';

export default function LearnSection() {
  return (
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
            
            <Link href="#aprende" className="btn btn-warning mt-6">
              <i className="fas fa-graduation-cap mr-2"></i> Comenzar Formación Gratis
            </Link>
          </div>
          
          <div className="learn-image">
            <img 
              src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3" 
              alt="Aprende impresión 3D" 
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}