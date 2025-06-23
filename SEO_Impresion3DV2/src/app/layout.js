// src/app/layout.js
'use client'; // Solo si necesitas usar hooks o componentes interactivos

import '@styles/globals.css';
import Header from '@components/Header';
import Footer from '@components/Footer';

export const metadata = {
  title: 'Tecno3D Hub | Guía Definitiva de Impresión 3D en España',
  description: 'Tu guía completa de impresión 3D. Comparativas de filamentos, reseñas de impresoras, tutoriales paso a paso y las mejores ofertas del mercado.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}