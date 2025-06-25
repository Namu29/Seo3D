import Head from 'next/head';
import { generateAffiliateLink } from '../utils/affiliate';

export default function GuiaEmprendedores() {
  const recommendedProducts = [
    { asin: "B0C6GJBYKQ", name: "Creality Ender 3 V3", price: "199,99€" },
    { asin: "B09Q4QYQ5F", name: "Filamento PETG 1kg", price: "24,99€" },
    { asin: "B08KJQHZQG", name: "Resina UV Elegoo", price: "29,99€" },
    { asin: "B07YQYQYQY", name: "Kit herramientas 3D", price: "39,99€" }
  ];

  return (
    <div className="min-h-screen bg-light py-12">
      <Head>
        <title>Guía Completa para Emprendedores 3D | Tecno3D Hub</title>
        <meta name="description" content="Convierte tu pasión por la impresión 3D en un negocio rentable con nuestra guía paso a paso para emprendedores" />
      </Head>

      <div className="container max-w-4xl">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-8">
            Guía Definitiva para Emprender en Impresión 3D
          </h1>

          <div className="prose max-w-none">
            <h2>Modelos de Negocio Rentables</h2>
            <p>La impresión 3D ofrece múltiples oportunidades de negocio. Estos son los modelos más rentables:</p>
            
            <ul>
              <li>
                <strong>Venta de productos personalizados:</strong> Figuras, decoración, accesorios
              </li>
              <li>
                <strong>Servicios de impresión bajo demanda:</strong> Para diseñadores, arquitectos, ingenieros
              </li>
              <li>
                <strong>Producción de repuestos:</strong> Piezas difíciles de encontrar para electrodomésticos, automoción
              </li>
              <li>
                <strong>Venta de diseños 3D:</strong> Plataformas como Cults3D o Etsy
              </li>
            </ul>

            <h2>Equipamiento Recomendado</h2>
            <p>Estos son los productos esenciales para comenzar tu negocio:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              {recommendedProducts.map((product, idx) => (
                <a
                  key={idx}
                  href={generateAffiliateLink(product.asin)}
                  target="_blank"
                  rel="noopener sponsored"
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="font-bold text-primary">{product.name}</div>
                  <div className="text-gray-600">{product.price}</div>
                  <div className="mt-2 text-sm text-accent font-medium">
                    Ver en Amazon <i className="fas fa-external-link-alt ml-1"></i>
                  </div>
                </a>
              ))}
            </div>

            <h2>Estrategias de Marketing</h2>
            <p>Para destacar en un mercado competitivo:</p>
            
            <ul>
              <li>Crea contenido educativo en redes sociales</li>
              <li>Ofrece muestras gratuitas a influencers locales</li>
              <li>Participa en ferias de makers y tecnología</li>
              <li>Desarrolla un catálogo digital con tus mejores trabajos</li>
            </ul>

            <div className="mt-10 bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="text-xl font-bold text-secondary mb-3">Descarga nuestra guía completa</h3>
              <p>Incluye plantillas de presupuesto, lista de verificación de inicio y estrategias avanzadas de precios.</p>
              <form className="mt-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Tu correo electrónico"
                    className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                  <button
                    type="submit"
                    className="btn btn-accent whitespace-nowrap"
                  >
                    Descargar Guía
                  </button>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Al registrarte aceptas recibir emails con consejos para tu negocio. Puedes darte de baja en cualquier momento.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}