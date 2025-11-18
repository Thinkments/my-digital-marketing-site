import React from 'react';
import { Helmet } from 'react-helmet';

interface ServiceSchemaProps {
  serviceName: string;
  description: string;
  priceRange?: string;
  features?: string[];
  url: string;
}

/**
 * Reusable Service Schema component for service pages
 * Generates schema.org Service markup for better SEO
 */
export const ServiceSchema: React.FC<ServiceSchemaProps> = ({
  serviceName,
  description,
  priceRange = "$$",
  features = [],
  url
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "serviceType": serviceName,
    "provider": {
      "@type": "Organization",
      "@id": "https://thinkments.com/#organization",
      "name": "THINKMENTS",
      "url": "https://thinkments.com"
    },
    "description": description,
    "areaServed": {
      "@type": "State",
      "name": "Texas"
    },
    "url": `https://thinkments.com${url}`,
    "priceRange": priceRange,
    ...(features.length > 0 && {
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": `${serviceName} Packages`,
        "itemListElement": features.map((feature, index) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": feature
          }
        }))
      }
    })
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
