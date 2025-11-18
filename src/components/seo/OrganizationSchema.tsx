import React from 'react';
import { Helmet } from 'react-helmet';

/**
 * Organization Schema for Homepage
 * Establishes THINKMENTS as a business entity in Google's knowledge graph
 * Use this ONLY on the homepage
 */
export const OrganizationSchema: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://thinkments.com/#organization",
    "name": "THINKMENTS",
    "legalName": "THINKMENTS LLC",
    "url": "https://thinkments.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://thinkments.com/logo.png",
      "width": "600",
      "height": "60"
    },
    "description": "Full-service digital marketing agency specializing in SEO, web design, videography, and AI-powered content creation. Helping North Texas businesses grow online since 2010.",
    "foundingDate": "2010",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "", // Add actual address
      "addressLocality": "Decatur",
      "addressRegion": "TX",
      "postalCode": "", // Add actual ZIP
      "addressCountry": "US"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+1-XXX-XXX-XXXX", // Replace with actual phone
        "contactType": "Sales",
        "email": "info@thinkments.com",
        "areaServed": "US",
        "availableLanguage": "English"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+1-XXX-XXX-XXXX",
        "contactType": "Customer Service",
        "email": "support@thinkments.com",
        "areaServed": "US",
        "availableLanguage": "English"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/thinkments",
      "https://www.linkedin.com/company/thinkments",
      "https://twitter.com/thinkments",
      "https://www.instagram.com/thinkments"
    ],
    "serviceArea": {
      "@type": "State",
      "name": "Texas"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing Services",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "SEO Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Local SEO Optimization"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "On-Page SEO"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Technical SEO"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Web Design",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Website Design"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "E-Commerce Development"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Website Redesign"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Videography",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Commercial Video Production"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Product Videos"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Social Media Videos"
              }
            }
          ]
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
