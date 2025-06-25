// Genera enlaces de afiliado de Amazon
export const generateAffiliateLink = (asin) => {
  const affiliateId = "ofertas3d00-21";
  return `https://www.amazon.es/dp/${asin}/?tag=${affiliateId}`;
};

// Verificador de enlaces salientes
export const trackAffiliateClick = (url) => {
  // Guardar en base de datos o analytics
  console.log(`Tracking affiliate click: ${url}`);
  
  // Guardar en localStorage para atribución
  if (typeof window !== 'undefined') {
    localStorage.setItem('lastAffiliateClick', new Date().toISOString());
  }
};