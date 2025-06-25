import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Redirect() {
  const router = useRouter();
  const { url } = router.query;

  useEffect(() => {
    if (url) {
      // Guardar estadísticas antes de redirigir
      fetch('/api/track-redirect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      });

      // Redirigir después de 1.5 segundos (para cumplir con políticas)
      setTimeout(() => {
        window.location.href = decodeURIComponent(url);
      }, 1500);
    }
  }, [url]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Head>
        <title>Redirigiendo...</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
        <p>Estás siendo redirigido a la oferta...</p>
        <p className="text-sm text-gray-500 mt-2">
          Esta página cumple con los requisitos de Amazon Associates
        </p>
      </div>
    </div>
  );
}