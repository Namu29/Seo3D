import Head from 'next/head';

export default function SEO({ 
  title = "Tecno3D Hub | Guía Definitiva de Impresión 3D en España",
  description = "Tu guía completa de impresión 3D. Comparativas de filamentos, reseñas de impresoras, tutoriales paso a paso y las mejores ofertas del mercado.",
  keywords = "impresión 3D, guía 3D, comparativa filamentos, reseña impresoras 3D, tutorial impresión 3D, ofertas impresión 3D, filamentos 3D, impresoras 3D",
  url = "https://seo3d.netlify.app",
  image = "https://seo3d.netlify.app/images/og-image.jpg",
  schemaType = "WebSite"
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": schemaType,
    "name": "Tecno3D Hub",
    "url": url,
    "description": description,
    "inLanguage": "es-ES",
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${url}/buscar?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+34-123-456-789",
      "contactType": "Atención al cliente"
    }
  };

  return (
    <Head>
      {/* Metadatos básicos */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Tecno3DHub" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Head>
  );
}