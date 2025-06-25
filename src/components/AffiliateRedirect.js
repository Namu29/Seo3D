import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { trackAffiliateClick } from '../utils/affiliate';

export default function AffiliateRedirect() {
  const router = useRouter();
  const { url } = router.query;

  useEffect(() => {
    if (url) {
      const decodedUrl = decodeURIComponent(url);
      
      // Registrar el clic
      trackAffiliateClick(decodedUrl);
      
      // Redirigir después de 2 segundos
      const timer = setTimeout(() => {
        window.location.href = decodedUrl;
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [url]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-light">
      <Head>
        <title>Redirigiendo a oferta...</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      
      <div className="text-center p-6 bg-white rounded-xl shadow-lg max-w-md">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
          <i className="fas fa-external-link-alt text-primary text-2xl"></i>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Estás saliendo de Tecno3D Hub
        </h1>
        
        <p className="text-gray-600 mb-4">
          Serás redirigido automáticamente a la oferta en Amazon.
          <br />¡Gracias por apoyarnos con tu compra!
        </p>
        
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
        
        <div className="mt-6 text-sm text-gray-500">
          <p>Esta página cumple con los requisitos de Amazon Associates</p>
          <p>ID de afiliado: ofertas3d00-21</p>
        </div>
      </div>
    </div>
  );
}