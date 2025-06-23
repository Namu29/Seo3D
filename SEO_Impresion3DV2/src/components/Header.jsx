'use client'
import { useState, useEffect } from 'react';
import styles from '@/styles/Header.module.css'
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
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} id="header">
      <div className="container">
        <div className={styles.headerContainer}>
          <div className={styles.logo}>
            Tecno3D <span>Hub</span>
          </div>
          <button className={styles.mobileMenuBtn} onClick={toggleMenu}>
            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
          <nav>
            <ul className={`${styles.mainMenu} ${menuOpen ? styles.show : ''}`}>
              <li><Link href="/">Inicio</Link></li>
              <li><Link href="/comparativa">Comparativas</Link></li>
              <li><Link href="/resenas">Reseñas</Link></li>
              <li><Link href="/tutoriales">Tutoriales</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contacto">Contacto</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}