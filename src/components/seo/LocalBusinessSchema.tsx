import React from 'react'; 
import { Helmet } from 'react-helmet'; 
 
interface LocalBusinessSchemaProps { 
  city?: string; 
  state?: string; 
  coordinates?: { 
    lat: string; 
    lng: string; 
  }; 
  businessType?: string; 
} 
 
/** 
 * LocalBusiness Schema for ThinkMents Digital Marketing Agency 
 * Helps with local SEO and Google My Business integration 
 * Based in Decatur, Texas 
 */ 
export const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({ 
  city = "Decatur", 
  state = "TX", 
  coordinates = { 
    lat: "33.2345", 
    lng: "-97.5861" 
  }, 
  businessType = "ProfessionalService" 
}) => { 
  const schema = { 
    "@context": "https://schema.org", 
    "@type": businessType, 
    "name": "ThinkMents Digital Marketing Agency", 
    "alternateName": "ThinkMents", 
    "image": "https://thinkments.com/logo.png", 
    "description": "Professional digital marketing, SEO, web design, and videography services in Decatur, Texas. Helping local businesses grow online with strategic marketing solutions.", 
    "address": { 
      "@type": "PostalAddress", 
      "streetAddress": "301 South Washburn St Suite D", 
      "addressLocality": "Decatur", 
      "addressRegion": "TX", 
      "postalCode": "76234", 
      "addressCountry": "US" 
    }, 
    "geo": { 
      "@type": "GeoCoordinates", 
      "latitude": coordinates.lat, 
      "longitude": coordinates.lng 
    }, 
    "areaServed": [ 
      { 
        "@type": "City", 
        "name": "Decatur", 
        "containedIn": { 
          "@type": "State", 
          "name": "Texas" 
        } 
      }, 
      { 
        "@type": "State", 
        "name": "Texas" 
      } 
    ], 
    "priceRange": "$$", 
    "telephone": "+1-940-315-1023", 
    "url": "https://thinkments.com", 
    "serviceArea": { 
      "@type": "GeoCircle", 
      "geoMidpoint": { 
        "@type": "GeoCoordinates", 
        "latitude": coordinates.lat, 
        "longitude": coordinates.lng 
      }, 
      "geoRadius": "80000" 
    }, 
    "openingHoursSpecification": [ 
      { 
        "@type": "OpeningHoursSpecification", 
        "dayOfWeek": [ 
          "Monday", 
          "Tuesday", 
          "Wednesday", 
          "Thursday", 
          "Friday" 
        ], 
        "opens": "09:00", 
        "closes": "18:00" 
      } 
    ], 
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
