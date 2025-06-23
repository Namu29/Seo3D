import styles from '@/styles/Hero.module.css'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>La Guía Definitiva de Impresión 3D en Español</h1>
        <p>Descubre las mejores impresoras, filamentos y técnicas para dominar el mundo de la impresión 3D</p>
        <div className={styles.heroBtns}>
          <Link href="#top-printers" className="btn btn-accent">TOP 5 Impresoras 2025</Link>
          <Link href="/tutoriales" className="btn">Tutoriales Paso a Paso</Link>
        </div>
        <a href="https://t.me/+zYkoZ4YdD3gxZjQ0" className={styles.telegramBadge} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-telegram"></i> Únete a nuestro canal de ofertas en Telegram
        </a>
      </div>
    </section>
  );
}