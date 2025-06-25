import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>Tecno3D Hub</h3>
            <p>Tu fuente confiable de información sobre impresión 3D. Guías imparciales, reseñas detalladas y tutoriales paso a paso para dominar la impresión 3D.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
              <a href="https://t.me/+zYkoZ4YdD3gxZjQ0" aria-label="Telegram"><i className="fab fa-telegram"></i></a>
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
              <li><Link href="/filamentos/pla"><i className="fas fa-leaf"></i> PLA</Link></li>
              <li><Link href="/filamentos/abs"><i className="fas fa-shield-alt"></i> ABS</Link></li>
              <li><Link href="/filamentos/petg"><i className="fas fa-wine-bottle"></i> PETG</Link></li>
              <li><Link href="/filamentos/tpu"><i className="fas fa-snowflake"></i> TPU</Link></li>
              <li><Link href="/resinas"><i className="fas fa-vial"></i> Resinas</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3>Contacto</h3>
            <ul className="footer-links">
              <li><a href="mailto:info@impresion3dpro.com"><i className="fas fa-envelope"></i> info@impresion3dpro.com</a></li>
              <li><a href="https://wa.me/34123456789"><i className="fab fa-whatsapp"></i> +34 123 456 789</a></li>
              <li><a href="#"><i className="fas fa-map-marker-alt"></i> Madrid, España</a></li>
            </ul>
            <div className="affiliate-disclaimer">
              <i className="fas fa-info-circle"></i> Tecno3D Hub participa en el Programa de Afiliados de Amazon EU, un programa de publicidad para afiliados diseñado para ofrecer a sitios web un modo de obtener comisiones por publicidad.
            </div>
          </div>
        </div>
        
        <div className="copyright">
          <p>&copy; 2025 Tecno3D Hub. Todos los derechos reservados. | Diseñado con pasión por la impresión 3D</p>
          <p className="mt-2">
            <Link href="/politica-privacidad">Política de Privacidad</Link> | 
            <Link href="/terminos-uso"> Términos de Uso</Link> | 
            <Link href="/cookies"> Cookies</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}