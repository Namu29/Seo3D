import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header id="header" className={scrolled ? 'scrolled' : ''}>
      <div className="container header-container">
        <div className="logo">
          Tecno3D <span>Hub</span>
        </div>
        <button 
          className="mobile-menu-btn" 
          id="menuToggle" 
          onClick={toggleMenu}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>
        <nav>
          <ul id="mainMenu" className={menuOpen ? "show" : ""}>
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/comparativa">Comparativas</Link></li>
            <li><Link href="/resenas">Reseñas</Link></li>
            <li><Link href="/tutoriales">Tutoriales</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contacto">Contacto</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}