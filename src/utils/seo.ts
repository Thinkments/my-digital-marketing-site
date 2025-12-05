// SEO Utility Functions for ThinkMents
// Comprehensive SEO helpers for meta tags, schema, and optimization

export interface SEOConfig {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
  nofollow?: boolean;
  keywords?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  schema?: any;
}

// Base URL for canonical and OG URLs
export const BASE_URL = 'https://thinkments.com';

// Default OG image
export const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;

// Company information for schema
export const COMPANY_INFO = {
  name: 'ThinkMents',
  legalName: 'ThinkMents LLC',
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  description: 'Full-service digital marketing agency in Decatur, TX specializing in SEO, web design, social media marketing, and comprehensive digital strategies.',
  address: {
    streetAddress: '301 South Washburn St',
    addressLocality: 'Decatur',
    addressRegion: 'TX',
    postalCode: '76234',
    addressCountry: 'US'
  },
  geo: {
    latitude: '33.2348',
    longitude: '-97.5862'
  },
  telephone: '+1-940-123-4567',
  email: 'hello@thinkments.com',
  areaServed: ['Wise County', 'Tarrant County', 'Decatur', 'Fort Worth', 'Bridgeport', 'Haslet'],
  priceRange: '$$',
  openingHours: 'Mo-Fr 09:00-17:00',
  sameAs: [
    'https://www.facebook.com/ThinkMents',
    'https://www.linkedin.com/company/thinkments',
    'https://twitter.com/ThinkMents'
  ]
};

// Generate canonical URL
export const getCanonicalUrl = (path: string): string => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_URL}${cleanPath}`;
};

// Generate meta tags
export const generateMetaTags = (config: SEOConfig): string => {
  const canonical = config.canonical || getCanonicalUrl(window.location.pathname);
  const ogImage = config.ogImage || DEFAULT_OG_IMAGE;
  const ogType = config.ogType || 'website';
  
  const tags = [
    `<title>${config.title}</title>`,
    `<meta name="description" content="${config.description}" />`,
    `<link rel="canonical" href="${canonical}" />`,
    
    // Open Graph tags
    `<meta property="og:title" content="${config.title}" />`,
    `<meta property="og:description" content="${config.description}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:type" content="${ogType}" />`,
    `<meta property="og:image" content="${ogImage}" />`,
    `<meta property="og:site_name" content="ThinkMents" />`,
    
    // Twitter Card tags
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${config.title}" />`,
    `<meta name="twitter:description" content="${config.description}" />`,
    `<meta name="twitter:image" content="${ogImage}" />`,
    `<meta name="twitter:site" content="@ThinkMents" />`,
  ];
  
  // Optional tags
  if (config.keywords) {
    tags.push(`<meta name="keywords" content="${config.keywords}" />`);
  }
  
  if (config.author) {
    tags.push(`<meta name="author" content="${config.author}" />`);
  }
  
  if (config.noindex || config.nofollow) {
    const robotsContent = [
      config.noindex ? 'noindex' : 'index',
      config.nofollow ? 'nofollow' : 'follow'
    ].join(', ');
    tags.push(`<meta name="robots" content="${robotsContent}" />`);
  }
  
  if (config.publishedTime) {
    tags.push(`<meta property="article:published_time" content="${config.publishedTime}" />`);
  }
  
  if (config.modifiedTime) {
    tags.push(`<meta property="article:modified_time" content="${config.modifiedTime}" />`);
  }
  
  if (config.section) {
    tags.push(`<meta property="article:section" content="${config.section}" />`);
  }
  
  if (config.tags && config.tags.length > 0) {
    config.tags.forEach(tag => {
      tags.push(`<meta property="article:tag" content="${tag}" />`);
    });
  }
  
  return tags.join('\n    ');
};

// Generate LocalBusiness schema
export const generateLocalBusinessSchema = (additionalProps = {}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BASE_URL}/#organization`,
    name: COMPANY_INFO.name,
    legalName: COMPANY_INFO.legalName,
    url: COMPANY_INFO.url,
    logo: COMPANY_INFO.logo,
    image: COMPANY_INFO.logo,
    description: COMPANY_INFO.description,
    telephone: COMPANY_INFO.telephone,
    email: COMPANY_INFO.email,
    address: {
      '@type': 'PostalAddress',
      ...COMPANY_INFO.address
    },
    geo: {
      '@type': 'GeoCoordinates',
      ...COMPANY_INFO.geo
    },
    areaServed: COMPANY_INFO.areaServed.map(area => ({
      '@type': 'City',
      name: area
    })),
    priceRange: COMPANY_INFO.priceRange,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00'
    },
    sameAs: COMPANY_INFO.sameAs,
    ...additionalProps
  };
};

// Generate Service schema
export const generateServiceSchema = (service: {
  name: string;
  description: string;
  url: string;
  areaServed?: string[];
  offers?: any;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: COMPANY_INFO.name,
      url: COMPANY_INFO.url
    },
    url: service.url,
    areaServed: (service.areaServed || COMPANY_INFO.areaServed).map(area => ({
      '@type': 'City',
      name: area
    })),
    ...( service.offers && { offers: service.offers })
  };
};

// Generate FAQ schema
export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
};

// Generate Breadcrumb schema
export const generateBreadcrumbSchema = (breadcrumbs: Array<{ name: string; url: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url
    }))
  };
};

// Generate Article schema
export const generateArticleSchema = (article: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: string;
  url: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.headline,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      '@type': 'Person',
      name: article.author,
      url: `${BASE_URL}/about`
    },
    publisher: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
      logo: {
        '@type': 'ImageObject',
        url: COMPANY_INFO.logo
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url
    }
  };
};

// Generate Person schema (for E-E-A-T)
export const generatePersonSchema = (person: {
  name: string;
  jobTitle: string;
  description: string;
  image?: string;
  sameAs?: string[];
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: person.name,
    jobTitle: person.jobTitle,
    description: person.description,
    worksFor: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
      url: COMPANY_INFO.url
    },
    ...(person.image && { image: person.image }),
    ...(person.sameAs && { sameAs: person.sameAs })
  };
};

// Generate Organization schema
export const generateOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    name: COMPANY_INFO.name,
    legalName: COMPANY_INFO.legalName,
    url: COMPANY_INFO.url,
    logo: COMPANY_INFO.logo,
    description: COMPANY_INFO.description,
    telephone: COMPANY_INFO.telephone,
    email: COMPANY_INFO.email,
    address: {
      '@type': 'PostalAddress',
      ...COMPANY_INFO.address
    },
    sameAs: COMPANY_INFO.sameAs,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: COMPANY_INFO.telephone,
      contactType: 'Customer Service',
      areaServed: 'US',
      availableLanguage: 'English'
    }
  };
};

// Inject schema into page
export const injectSchema = (schema: any) => {
  if (typeof window === 'undefined') return;
  
  const scriptId = 'structured-data-' + Date.now();
  const script = document.createElement('script');
  script.id = scriptId;
  script.type = 'application/ld+json';
  script.text = JSON.stringify(schema);
  document.head.appendChild(script);
  
  return () => {
    const el = document.getElementById(scriptId);
    if (el) el.remove();
  };
};

// Update page meta tags dynamically
export const updateMetaTags = (config: SEOConfig) => {
  if (typeof window === 'undefined') return;
  
  // Update title
  document.title = config.title;
  
  // Update or create meta tags
  const updateOrCreateMeta = (name: string, content: string, property = false) => {
    const attr = property ? 'property' : 'name';
    let meta = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
    
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attr, name);
      document.head.appendChild(meta);
    }
    
    meta.content = content;
  };
  
  // Update canonical
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = config.canonical || getCanonicalUrl(window.location.pathname);
  
  // Update meta tags
  updateOrCreateMeta('description', config.description);
  updateOrCreateMeta('og:title', config.title, true);
  updateOrCreateMeta('og:description', config.description, true);
  updateOrCreateMeta('og:url', canonical.href, true);
  updateOrCreateMeta('og:type', config.ogType || 'website', true);
  updateOrCreateMeta('og:image', config.ogImage || DEFAULT_OG_IMAGE, true);
  updateOrCreateMeta('twitter:card', 'summary_large_image');
  updateOrCreateMeta('twitter:title', config.title);
  updateOrCreateMeta('twitter:description', config.description);
  updateOrCreateMeta('twitter:image', config.ogImage || DEFAULT_OG_IMAGE);
  
  if (config.keywords) {
    updateOrCreateMeta('keywords', config.keywords);
  }
  
  if (config.author) {
    updateOrCreateMeta('author', config.author);
  }
};

// Generate sitemap URL entry
export const generateSitemapUrl = (loc: string, priority = '0.8', changefreq = 'weekly', lastmod?: string) => {
  return {
    loc: getCanonicalUrl(loc),
    priority,
    changefreq,
    ...(lastmod && { lastmod })
  };
};
