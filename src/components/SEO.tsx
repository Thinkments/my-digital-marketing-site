import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  structuredData?: object;
  noindex?: boolean;
  canonical?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'ThinkMents - Digital Marketing & Web Design Agency in Decatur, Texas',
  description = 'Professional digital marketing, web design, and SEO services in Decatur, Texas. Helping local businesses grow with custom websites, strategic marketing, and proven results.',
  keywords = 'digital marketing, web design, SEO, Decatur Texas, local business marketing, website development, social media marketing',
  image = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop',
  url,
  type = 'website',
  structuredData,
  noindex = false,
  canonical
}) => {
  const siteUrl = 'https://thinkments.com';
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : fullUrl;

  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ThinkMents",
    "description": "Professional digital marketing and web design agency in Decatur, Texas",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-940-627-3538",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Business St",
      "addressLocality": "Decatur",
      "addressRegion": "TX",
      "postalCode": "76234",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://facebook.com/thinkments",
      "https://twitter.com/thinkments",
      "https://linkedin.com/company/thinkments"
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {!noindex && <meta name="robots" content="index, follow" />}
      
      {/* Additional SEO Meta Tags */}
      <meta name="author" content="ThinkMents" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="US-TX" />
      <meta name="geo.placename" content="Decatur" />
      <meta name="geo.position" content="33.2348;-97.5864" />
      <meta name="ICBM" content="33.2348, -97.5864" />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="ThinkMents" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@thinkments" />
      
      {/* Viewport and Mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="ThinkMents" />
      
      {/* Hreflang for language/region targeting */}
      <link rel="alternate" hreflang="en-us" href={fullUrl} />
      <link rel="alternate" hreflang="en" href={fullUrl} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;