import React from 'react';
import { Helmet } from 'react-helmet';

interface LocalBusinessSchemaProps {
  city: string;
  state?: string;
  coordinates?: {
    lat: string;
    lng: string;
  };
  businessType?: string;
}

/**
 * LocalBusiness Schema for location-specific pages
 * Helps with local SEO and Google My Business integration
 */
export const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({
  city,
  state = "TX",
  coordinates,
  businessType = "ProfessionalService"
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": businessType,
    "name": `THINKMENTS - ${city} Digital Marketing Services`,
    "image": "https://thinkments.com/logo.png",
    "description": `Professional digital marketing, SEO, web design, and videography services in ${city}, ${state}. Helping local businesses grow online.`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressRegion": state,
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "City",
      "name": city,
      "containedIn": {
        "@type": "State",
        "name": state === "TX" ? "Texas" : state
      }
    },
    "priceRange": "$$",
    "telephone": "+1-XXX-XXX-XXXX", // Replace with actual phone
    "url": `https://thinkments.com/digital-marketing-${city.toLowerCase().replace(/\s+/g, '-')}`,
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        ...(coordinates && {
          "latitude": coordinates.lat,
          "longitude": coordinates.lng
        })
      },
      "geoRadius": "50000" // 50km service radius
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "sameAs": [
      "https://www.facebook.com/thinkments",
      "https://www.linkedin.com/company/thinkments",
      "https://twitter.com/thinkments"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
