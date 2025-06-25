import { generateAffiliateLink } from '../../src/utils/affiliate';

export default async function handler(req, res) {
  try {
    // En producción: conectar con base de datos
    const ofertas = [
      {
        id: 1,
        title: "Impresora Creality Ender 3 V3",
        asin: "B0C6GJBYKQ",
        discount: 15,
        price: 199.99,
        affiliateLink: generateAffiliateLink("B0C6GJBYKQ")
      },
      {
        id: 2,
        title: "Filamento PLA Eryone 1kg",
        asin: "B07ZPSD2GN",
        discount: 20,
        price: 14.99,
        affiliateLink: generateAffiliateLink("B07ZPSD2GN")
      }
    ];

    res.status(200).json(ofertas);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener ofertas" });
  }
}