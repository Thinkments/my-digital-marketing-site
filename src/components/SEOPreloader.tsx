import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Component to handle client-side SEO improvements for better indexing
const SEOPreloader: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Ensure meta description is never empty
    const metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription || !metaDescription.getAttribute('content')) {
      const defaultDescription = 'Professional digital marketing, web design, and SEO services in Decatur, Texas. Helping local businesses grow with custom websites, strategic marketing, and proven results.';
      
      if (metaDescription) {
        metaDescription.setAttribute('content', defaultDescription);
      } else {
        const newMeta = document.createElement('meta');
        newMeta.name = 'description';
        newMeta.content = defaultDescription;
        document.head.appendChild(newMeta);
      }
    }

    // Ensure robots meta tag is set correctly
    const robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      const newRobotsMeta = document.createElement('meta');
      newRobotsMeta.name = 'robots';
      newRobotsMeta.content = 'index, follow';
      document.head.appendChild(newRobotsMeta);
    }

    // Add canonical URL if not present
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      const newCanonical = document.createElement('link');
      newCanonical.rel = 'canonical';
      newCanonical.href = `https://thinkments.com${location.pathname}`;
      document.head.appendChild(newCanonical);
    }

    // Add hreflang for English
    const hreflangLink = document.querySelector('link[rel="alternate"][hreflang="en"]');
    if (!hreflangLink) {
      const newHreflang = document.createElement('link');
      newHreflang.rel = 'alternate';
      newHreflang.hreflang = 'en';
      newHreflang.href = `https://thinkments.com${location.pathname}`;
      document.head.appendChild(newHreflang);
    }

    // Ensure proper heading structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let hasH1 = false;
    
    headings.forEach(heading => {
      if (heading.tagName === 'H1') hasH1 = true;
    });

    // If no H1 is found, add page title as H1 (for SEO)
    if (!hasH1 && document.title) {
      const h1Element = document.createElement('h1');
      h1Element.textContent = document.title.split(' - ')[0]; // Use first part of title
      h1Element.style.position = 'absolute';
      h1Element.style.left = '-9999px';
      h1Element.style.fontSize = '1px';
      h1Element.style.color = 'transparent';
      h1Element.setAttribute('aria-hidden', 'true');
      document.body.appendChild(h1Element);
    }

    // Add structured data for local business if not present
    const existingStructuredData = document.querySelector('script[type="application/ld+json"]');
    if (!existingStructuredData && location.pathname === '/') {
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "ThinkMents",
        "description": "Professional digital marketing and web design agency in Decatur, Texas",
        "url": "https://thinkments.com",
        "telephone": "+1-940-627-3538",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 Business St",
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
        "sameAs": [
          "https://facebook.com/thinkments",
          "https://twitter.com/thinkments",
          "https://linkedin.com/company/thinkments"
        ]
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    // Signal to search engines that page is fully loaded
    const loadedEvent = new CustomEvent('pageFullyLoaded', {
      detail: {
        path: location.pathname,
        timestamp: new Date().toISOString()
      }
    });
    window.dispatchEvent(loadedEvent);

  }, [location.pathname]);

  // This component doesn't render anything visible
  return null;
};

export default SEOPreloader;