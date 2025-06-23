import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Header from '@/components/Header';

// Add Font Awesome CSS
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Tecno3D Hub | Guía Definitiva de Impresión 3D en España',
  description: 'Tu guía completa de impresión 3D. Comparativas de filamentos, reseñas de impresoras, tutoriales paso a paso y las mejores ofertas del mercado.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}