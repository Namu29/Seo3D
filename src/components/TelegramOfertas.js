import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function TelegramOfertas() {
  const [ofertas, setOfertas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOfertas = async () => {
      try {
        const res = await fetch('/api/ofertas');
        const data = await res.json();
        setOfertas(data.slice(0, 3)); // Mostrar 3 ofertas
      } catch (error) {
        console.error("Error fetching ofertas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOfertas();
  }, []);

  if (loading) return <div className="text-center py-4">Cargando ofertas...</div>;

  return (
    <div className="feature-card">
      <div className="feature-badge">Live</div>
      <div className="feature-content">
        <h3>Ofertas en Tiempo Real</h3>
        
        {ofertas.length > 0 ? (
          <ul className="mt-4 space-y-3">
            {ofertas.map((oferta) => (
              <li key={oferta.id} className="flex items-start">
                <div className="flex-1">
                  <Link 
                    href={`/redirect?url=${encodeURIComponent(oferta.affiliateLink)}`}
                    className="text-primary hover:underline"
                  >
                    {oferta.title}
                  </Link>
                  <div className="flex items-center mt-1">
                    <span className="text-gray-600 line-through mr-2">
                      {`${(oferta.price / (1 - oferta.discount/100)).toFixed(2)}€`}
                    </span>
                    <span className="font-bold">{oferta.price}€</span>
                  </div>
                </div>
                <span className="ml-2 bg-accent text-white px-2 py-1 rounded-full text-sm font-bold">
                  -{oferta.discount}%
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay ofertas disponibles en este momento</p>
        )}
        
        <a 
          href="https://t.me/+zYkoZ4YdD3gxZjQ0" 
          className="btn btn-accent mt-4"
        >
          <i className="fab fa-telegram mr-2"></i> Ver más ofertas en Telegram
        </a>
      </div>
    </div>
  );
}