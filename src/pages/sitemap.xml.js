import { getAllPages } from '../../lib/pages'; // Deberás crear esta función

const EXTERNAL_DATA_URL = 'https://seo3d.netlify.app';

function generateSiteMap(pages) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map(({ path, lastmod, changefreq, priority }) => {
          return `
            <url>
              <loc>${`${EXTERNAL_DATA_URL}${path}`}</loc>
              <lastmod>${lastmod}</lastmod>
              <changefreq>${changefreq}</changefreq>
              <priority>${priority}</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;
}

function SiteMap() {
  // Componente vacío ya que el contenido se genera en getServerSideProps
}

export async function getServerSideProps({ res }) {
  const pages = await getAllPages(); // Obtener todas las rutas de tu sitio
  
  // Generar el XML del sitemap
  const sitemap = generateSiteMap(pages);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;