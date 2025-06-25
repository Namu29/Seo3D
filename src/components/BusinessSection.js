import Link from 'next/link';

// Función para generar enlaces de afiliado
const generateAffiliateLink = (asin) => {
  const baseUrl = "https://www.amazon.es/dp/";
  const affiliateId = "ofertas3d00-21";
  return `${baseUrl}${asin}/?tag=${affiliateId}`;
};

export default function BusinessSection() {
  const businessCases = [
    {
      title: "Venta de Figuras Personalizadas",
      description: "Juan transformó su hobby en un negocio que genera 400€/mes con un margen del 60% vendiendo figuras personalizadas a coleccionistas.",
      stats: [
        { value: "400€", label: "Ingresos/mes" },
        { value: "60%", label: "Margen" }
      ],
      products: [
        { asin: "B0C6GJBYKQ", name: "Impresora Creality Ender 3 V3" },
        { asin: "B07ZPSD2GN", name: "Filamento PLA Eryone" }
      ]
    },
    {
      title: "Repuestos y Piezas Técnicas",
      description: "María atiende pedidos de repuestos industriales con su impresora, facturando 1.200€/mes con clientes recurrentes.",
      stats: [
        { value: "1.2k€", label: "Ingresos/mes" },
        { value: "75%", label: "Clientes recurrentes" }
      ],
      products: [
        { asin: "B09Q4QYQ5F", name: "Filamento PETG" },
        { asin: "B08KJQHZQG", name: "Resina UV" }
      ]
    },
    {
      title: "Servicios de Impresión",
      description: "TechPrint ofrece servicios de impresión 3D a diseñadores locales, con un crecimiento del 30% trimestral en su facturación.",
      stats: [
        { value: "30%", label: "Crecimiento" },
        { value: "50+", label: "Clientes" }
      ],
      products: [
        { asin: "B0B1JQ5Q5Q", name: "Impresora Anycubic" },
        { asin: "B07YQYQYQY", name: "Kit herramientas" }
      ]
    }
  ];

  return (
    <section className="business-section" id="emprende">
      <div className="container">
        <h2 className="section-title">Emprende en el Mundo 3D</h2>
        <p className="text-center" style={{ maxWidth: "800px", margin: "0 auto 50px" }}>
          Descubre cómo convertir tu pasión por la impresión 3D en un negocio rentable con nuestros casos de éxito y estrategias comprobadas.
        </p>

        <div className="business-cards">
          {businessCases.map((business, index) => (
            <div className="business-card" key={index}>
              <h3>{business.title}</h3>
              <p>{business.description}</p>
              
              {/* Productos recomendados */}
              <div className="mt-4">
                <p className="font-semibold">Productos recomendados:</p>
                <ul className="mt-2 space-y-1">
                  {business.products.map((product, idx) => (
                    <li key={idx}>
                      <a 
                        href={generateAffiliateLink(product.asin)} 
                        target="_blank" 
                        rel="noopener sponsored"
                        className="text-primary hover:underline"
                      >
                        {product.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="business-stats">
                {business.stats.map((stat, statIdx) => (
                  <div className="stat-item" key={statIdx}>
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/guia-emprendedores" className="btn btn-accent">
            <i className="fas fa-chart-line mr-2"></i> Descubre Nuestra Guía para Emprendedores
          </Link>
        </div>
      </div>
    </section>
  );
}