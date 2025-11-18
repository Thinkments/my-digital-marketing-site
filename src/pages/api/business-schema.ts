import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Return default business schema (no database dependency)
    const defaultSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "ThinkMents",
      "alternateName": "ThinkMents Digital Marketing",
      "description": "Professional digital marketing agency specializing in web design, SEO, social media marketing, and virtual tours for businesses in North Texas.",
      "url": "https://thinkments.com",
      "telephone": "(940) 222-4584",
      "email": "info@thinkments.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Business Lane",
        "addressLocality": "Decatur",
        "addressRegion": "TX",
        "postalCode": "76234",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 33.2348,
        "longitude": -97.5864
      },
      "openingHours": "Mo-Fr 08:00-17:00",
      "serviceArea": {
        "@type": "State",
        "name": "Texas"
      },
      "priceRange": "$$",
      "image": "https://thinkments.com/logo.png"
    };

    res.setHeader('Content-Type', 'application/ld+json');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    
    return res.status(200).json(defaultSchema);
    
  } catch (error) {
    console.error('Error serving business schema:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
