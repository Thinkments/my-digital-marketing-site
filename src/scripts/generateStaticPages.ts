import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

// Import route configurations
const LOCATION_ROUTES = [
  'atlanta', 'nashville', 'knoxville', 'chattanooga', 'memphis', 'birmingham', 
  'huntsville', 'montgomery', 'mobile', 'tuscaloosa', 'florence', 'decatur',
  'anniston', 'dothan', 'gadsden', 'auburn', 'opelika', 'madison', 'hoover',
  'vestavia-hills', 'mountain-brook', 'homewood', 'alabaster', 'pelham',
  'trussville', 'gardendale', 'helena', 'chelsea', 'calera', 'clanton',
  'alexander-city', 'sylacauga', 'talladega', 'pell-city', 'leeds',
  'moody', 'springville', 'oneonta', 'cullman', 'jasper', 'walker-county',
  'winston-county', 'blount-county', 'etowah-county', 'calhoun-county',
  'cleburne-county', 'cherokee-county', 'dekalb-county', 'jackson-county',
  'marshall-county', 'morgan-county', 'limestone-county', 'lauderdale-county',
  'colbert-county', 'franklin-county', 'marion-county', 'lamar-county',
  'fayette-county', 'tuscaloosa-county', 'pickens-county', 'sumter-county',
  'greene-county', 'hale-county', 'perry-county', 'dallas-county',
  'marengo-county', 'choctaw-county', 'washington-county', 'clarke-county',
  'monroe-county', 'conecuh-county', 'escambia-county', 'covington-county',
  'crenshaw-county', 'butler-county', 'lowndes-county', 'montgomery-county',
  'autauga-county', 'elmore-county', 'chilton-county', 'coosa-county',
  'tallapoosa-county', 'chambers-county', 'lee-county', 'russell-county',
  'macon-county', 'bullock-county', 'pike-county', 'coffee-county',
  'dale-county', 'geneva-county', 'houston-county', 'henry-county',
  'barbour-county', 'randolph-county', 'clay-county', 'talladega-county',
  'saint-clair-county', 'shelby-county', 'jefferson-county', 'tuscaloosa', 'cullman'
];

const SERVICE_ROUTES = [
  { path: 'web-development', service: 'Web Development' },
  { path: 'e-commerce-development', service: 'E-commerce Development' },
  { path: 'custom-web-applications', service: 'Custom Web Applications' },
  { path: 'website-maintenance', service: 'Website Maintenance' },
  { path: 'search-engine-optimization', service: 'Search Engine Optimization' },
  { path: 'pay-per-click-advertising', service: 'Pay-Per-Click Advertising' },
  { path: 'social-media-marketing', service: 'Social Media Marketing' },
  { path: 'content-marketing', service: 'Content Marketing' },
  { path: 'email-marketing', service: 'Email Marketing' },
  { path: 'conversion-optimization', service: 'Conversion Optimization' },
  { path: 'analytics-reporting', service: 'Analytics & Reporting' },
  { path: 'brand-strategy', service: 'Brand Strategy' },
  { path: 'logo-design', service: 'Logo Design' },
  { path: 'print-design', service: 'Print Design' },
  { path: 'packaging-design', service: 'Packaging Design' },
  { path: 'marketing-materials', service: 'Marketing Materials' },
  { path: 'business-photography', service: 'Business Photography' },
  { path: 'event-videography', service: 'Event Videography' },
  { path: 'promotional-videos', service: 'Promotional Videos' },
  { path: 'product-photography', service: 'Product Photography' },
  { path: 'drone-photography', service: 'Drone Photography' },
  { path: 'real-estate-tours', service: 'Real Estate Tours' },
  { path: 'business-tours', service: 'Business Tours' },
  { path: 'interactive-presentations', service: 'Interactive Presentations' },
  { path: 'virtual-showrooms', service: 'Virtual Showrooms' }
];

// Base HTML template
const createHTMLTemplate = (
  title: string,
  description: string,
  keywords: string,
  url: string,
  structuredData?: object,
  content?: string
) => {
  const baseUrl = 'https://thinkments.com';
  const fullUrl = `${baseUrl}${url}`;
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <meta name="keywords" content="${keywords}">
  <meta name="robots" content="index,follow">
  
  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:url" content="${fullUrl}">
  <meta property="og:site_name" content="ThinkMents - Digital Marketing Agency">
  <meta property="og:image" content="${baseUrl}/images/og-image.jpg">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
  <meta name="twitter:image" content="${baseUrl}/images/twitter-image.jpg">
  
  <!-- Canonical URL -->
  <link rel="canonical" href="${fullUrl}">
  
  <!-- Structured Data -->
  ${structuredData ? `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>` : ''}
  
  <!-- Preload Critical Resources -->
  <link rel="preload" href="/styles/globals.css" as="style">
  <link rel="stylesheet" href="/styles/globals.css">
  
  <!-- Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  </script>
</head>
<body>
  <div id="root">
    ${content || '<div class="loading-placeholder">Loading ThinkMents...</div>'}
  </div>
  
  <!-- React App Scripts -->
  <script type="module" src="/src/main.tsx"></script>
</body>
</html>`;
};

// Page configurations
const pages = [
  // Main pages
  {
    path: '',
    title: 'ThinkMents - Premier Digital Marketing Agency | Web Design & SEO Services',
    description: 'Transform your business with ThinkMents digital marketing expertise. Professional web design, SEO optimization, virtual tours, and comprehensive marketing solutions.',
    keywords: 'digital marketing, web design, SEO services, virtual tours, graphic design, videography, ThinkMents',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "ThinkMents",
      "url": "https://thinkments.com",
      "logo": "https://thinkments.com/logo.png",
      "description": "Premier digital marketing agency specializing in web design, SEO, virtual tours, and comprehensive marketing solutions."
    }
  },
  {
    path: 'about',
    title: 'About ThinkMents - Digital Marketing Experts Since 2024',
    description: 'Learn about ThinkMents mission to revolutionize digital marketing. Meet our expert team and discover our commitment to driving business growth.',
    keywords: 'about ThinkMents, digital marketing team, company story, marketing experts',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About ThinkMents",
      "description": "Learn about ThinkMents digital marketing agency and our expert team."
    }
  },
  {
    path: 'our-story',
    title: 'Our Story - ThinkMents Journey in Digital Marketing',
    description: 'Discover the ThinkMents story - from startup to leading digital marketing agency. Learn about our values, mission, and commitment to client success.',
    keywords: 'ThinkMents story, company history, digital marketing journey, mission values',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "Our Story - ThinkMents",
      "description": "The story behind ThinkMents digital marketing agency and our journey to success."
    }
  },
  {
    path: 'services',
    title: 'Digital Marketing Services - ThinkMents Complete Solutions',
    description: 'Comprehensive digital marketing services including web design, SEO, virtual tours, graphic design, videography, and AI optimization solutions.',
    keywords: 'digital marketing services, web design, SEO, virtual tours, graphic design, videography, AI optimization',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Digital Marketing Services",
      "provider": {
        "@type": "Organization",
        "name": "ThinkMents"
      },
      "description": "Comprehensive digital marketing services for business growth."
    }
  },
  {
    path: 'web-design',
    title: 'Professional Web Design Services - ThinkMents Creative Solutions',
    description: 'Custom web design and development services. Responsive websites, e-commerce solutions, and user-friendly designs that convert visitors into customers.',
    keywords: 'web design, website development, responsive design, e-commerce, custom websites',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Web Design Services",
      "provider": {
        "@type": "Organization",
        "name": "ThinkMents"
      }
    }
  },
  {
    path: 'digital-marketing',
    title: 'Digital Marketing Solutions - ThinkMents Growth Strategies',
    description: 'Comprehensive digital marketing strategies including SEO, PPC, social media, content marketing, and conversion optimization to grow your business.',
    keywords: 'digital marketing, SEO, PPC advertising, social media marketing, content marketing, conversion optimization',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Digital Marketing Solutions",
      "provider": {
        "@type": "Organization",
        "name": "ThinkMents"
      }
    }
  },
  {
    path: 'strategic-seo',
    title: 'Strategic SEO Services - ThinkMents Search Optimization',
    description: 'Advanced SEO strategies to improve search rankings, increase organic traffic, and boost online visibility. Technical SEO, content optimization, and link building.',
    keywords: 'SEO services, search engine optimization, organic traffic, search rankings, technical SEO',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Strategic SEO Services",
      "provider": {
        "@type": "Organization",
        "name": "ThinkMents"
      }
    }
  },
  {
    path: 'virtual-tours',
    title: 'Virtual Tours & 360° Photography - ThinkMents Immersive Experiences',
    description: 'Professional virtual tours and 360° photography services. Showcase your business with immersive experiences that engage customers and drive sales.',
    keywords: 'virtual tours, 360 photography, immersive experiences, business tours, real estate tours',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Virtual Tours & 360° Photography",
      "provider": {
        "@type": "Organization",
        "name": "ThinkMents"
      }
    }
  },

  {
    path: 'videography',
    title: 'Professional Videography Services - ThinkMents Video Production',
    description: 'High-quality videography services including promotional videos, event coverage, product videos, and drone footage for impactful marketing campaigns.',
    keywords: 'videography, video production, promotional videos, event videography, drone footage, video marketing',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Videography Services",
      "provider": {
        "@type": "Organization",
        "name": "ThinkMents"
      }
    }
  },
  {
    path: 'artificial-intelligence-optimization',
    title: 'AI Optimization Services - ThinkMents Advanced Technology Solutions',
    description: 'Cutting-edge AI optimization services to enhance your digital marketing, automate processes, and improve customer experiences with artificial intelligence.',
    keywords: 'AI optimization, artificial intelligence, marketing automation, AI technology, digital transformation',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "AI Optimization Services",
      "provider": {
        "@type": "Organization",
        "name": "ThinkMents"
      }
    }
  },
  {
    path: 'digital-marketing-areas',
    title: 'Service Areas - ThinkMents Digital Marketing Coverage',
    description: 'ThinkMents serves businesses across Alabama, Tennessee, and Georgia with comprehensive digital marketing services. Find your local coverage area.',
    keywords: 'service areas, Alabama digital marketing, Tennessee marketing, Georgia marketing, local SEO',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Service Areas - ThinkMents",
      "description": "Areas served by ThinkMents digital marketing agency."
    }
  },
  {
    path: 'case-studies',
    title: 'Case Studies - ThinkMents Success Stories & Results',
    description: 'Explore ThinkMents success stories and case studies. See how our digital marketing strategies have helped businesses achieve remarkable growth and ROI.',
    keywords: 'case studies, success stories, marketing results, client testimonials, ROI, business growth',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Case Studies - ThinkMents",
      "description": "Success stories and case studies from ThinkMents digital marketing projects."
    }
  },
  {
    path: 'blog',
    title: 'Digital Marketing Blog - ThinkMents Insights & Tips',
    description: 'Stay updated with the latest digital marketing trends, SEO tips, web design insights, and marketing strategies from the ThinkMents expert team.',
    keywords: 'digital marketing blog, SEO tips, marketing insights, web design trends, marketing strategies',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "ThinkMents Digital Marketing Blog",
      "description": "Expert insights and tips on digital marketing, SEO, and web design."
    }
  },
  {
    path: 'store',
    title: 'Digital Marketing Store - ThinkMents Products & Services',
    description: 'Browse ThinkMents digital marketing products and services. Templates, guides, audits, and specialized packages to boost your business growth.',
    keywords: 'digital marketing store, marketing templates, SEO audits, marketing guides, business packages',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Store",
      "name": "ThinkMents Digital Marketing Store",
      "description": "Digital marketing products and services for business growth."
    }
  },
  {
    path: 'contact',
    title: 'Contact ThinkMents - Get Your Free Marketing Consultation',
    description: 'Contact ThinkMents for a free digital marketing consultation. Get in touch with our expert team to discuss your business growth strategies.',
    keywords: 'contact ThinkMents, free consultation, digital marketing contact, get quote, marketing consultation',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact ThinkMents",
      "description": "Contact ThinkMents for digital marketing services and consultation."
    }
  },
  {
    path: 'get-a-quote',
    title: 'Get a Quote - ThinkMents Digital Marketing Services',
    description: 'Get a personalized quote for your digital marketing needs. Free consultation and custom pricing for web design, SEO, and marketing services.',
    keywords: 'get quote, free estimate, digital marketing pricing, custom quote, marketing consultation',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Get a Quote - ThinkMents",
      "description": "Get a personalized quote for ThinkMents digital marketing services."
    }
  },
  // Legal pages
  {
    path: 'privacy-policy',
    title: 'Privacy Policy - ThinkMents Data Protection & Privacy',
    description: 'ThinkMents privacy policy outlining how we collect, use, and protect your personal information. Learn about our commitment to data privacy.',
    keywords: 'privacy policy, data protection, personal information, GDPR compliance, data privacy',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Privacy Policy - ThinkMents",
      "description": "ThinkMents privacy policy and data protection information."
    }
  },
  {
    path: 'terms-of-service',
    title: 'Terms of Service - ThinkMents Service Agreement',
    description: 'ThinkMents terms of service and conditions for using our digital marketing services. Read our service agreement and policies.',
    keywords: 'terms of service, service agreement, terms and conditions, legal terms, service policies',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Terms of Service - ThinkMents",
      "description": "ThinkMents terms of service and service agreement."
    }
  },
  {
    path: 'design-transfer-agreement',
    title: 'Design Transfer Agreement - ThinkMents Asset Transfer Terms',
    description: 'ThinkMents design transfer agreement outlining the terms for transferring design assets and intellectual property to clients.',
    keywords: 'design transfer, asset transfer, intellectual property, design ownership, transfer agreement',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Design Transfer Agreement - ThinkMents",
      "description": "ThinkMents design transfer agreement and asset ownership terms."
    }
  },
  // Technical pages
  {
    path: 'sitemap',
    title: 'Sitemap - ThinkMents Website Navigation',
    description: 'Complete sitemap of ThinkMents website. Navigate through all our digital marketing services, resources, and content pages.',
    keywords: 'sitemap, website navigation, page directory, site structure',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Sitemap - ThinkMents",
      "description": "Complete navigation sitemap of ThinkMents website."
    }
  }
];

// Generate service detail pages
SERVICE_ROUTES.forEach(({ path, service }) => {
  pages.push({
    path: `services/${path}`,
    title: `${service} - ThinkMents Professional Services`,
    description: `Expert ${service.toLowerCase()} services from ThinkMents. Professional solutions tailored to grow your business and achieve your marketing goals.`,
    keywords: `${service.toLowerCase()}, professional services, ThinkMents, digital marketing`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": service,
      "provider": {
        "@type": "Organization",
        "name": "ThinkMents"
      },
      "description": `Professional ${service.toLowerCase()} services for business growth.`
    }
  });
});

// Generate location-specific pages
LOCATION_ROUTES.forEach(location => {
  const locationName = location.charAt(0).toUpperCase() + location.slice(1).replace(/-/g, ' ');
  pages.push({
    path: `digital-marketing-${location}`,
    title: `Digital Marketing in ${locationName} - ThinkMents Local Services`,
    description: `Professional digital marketing services in ${locationName}. Local SEO, web design, and marketing solutions tailored for ${locationName} businesses.`,
    keywords: `digital marketing ${locationName}, SEO ${locationName}, web design ${locationName}, local marketing`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": `Digital Marketing in ${locationName}`,
      "provider": {
        "@type": "Organization",
        "name": "ThinkMents"
      },
      "areaServed": {
        "@type": "Place",
        "name": locationName
      }
    }
  });
});

// Generate sample blog posts
const blogPosts = [
  {
    path: 'blog/digital-marketing-trends-2024',
    title: 'Digital Marketing Trends 2024 - ThinkMents Industry Insights',
    description: 'Discover the latest digital marketing trends for 2024. AI integration, voice search, personalization, and emerging strategies to stay ahead.',
    keywords: 'digital marketing trends 2024, marketing predictions, AI marketing, voice search, personalization'
  },
  {
    path: 'blog/seo-best-practices',
    title: 'SEO Best Practices 2024 - Complete Guide by ThinkMents',
    description: 'Master SEO with our comprehensive guide to best practices. Technical SEO, content optimization, and ranking strategies that work.',
    keywords: 'SEO best practices, search engine optimization, ranking strategies, technical SEO, content optimization'
  },
  {
    path: 'blog/web-design-principles',
    title: 'Web Design Principles for Better Conversions - ThinkMents Guide',
    description: 'Essential web design principles that improve user experience and increase conversions. UX design, mobile optimization, and conversion tips.',
    keywords: 'web design principles, UX design, conversion optimization, mobile design, user experience'
  }
];

blogPosts.forEach(post => {
  pages.push({
    ...post,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.description,
      "author": {
        "@type": "Organization",
        "name": "ThinkMents"
      },
      "publisher": {
        "@type": "Organization",
        "name": "ThinkMents"
      }
    }
  });
});

// Generate sample store products
const storeProducts = [
  {
    path: 'store/p/seo-audit-report',
    title: 'Professional SEO Audit Report - ThinkMents Analysis Package',
    description: 'Comprehensive SEO audit report with detailed analysis, recommendations, and action plan to improve your website search rankings.',
    keywords: 'SEO audit, website analysis, search engine optimization report, SEO recommendations'
  },
  {
    path: 'store/p/website-design-template',
    title: 'Professional Website Design Template - ThinkMents Collection',
    description: 'Premium website design templates for businesses. Fully responsive, customizable, and optimized for conversions.',
    keywords: 'website templates, design templates, responsive design, business websites'
  }
];

storeProducts.forEach(product => {
  pages.push({
    ...product,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": product.title.split(' - ')[0],
      "description": product.description,
      "brand": {
        "@type": "Organization",
        "name": "ThinkMents"
      }
    }
  });
});

// Create public directory if it doesn't exist
try {
  mkdirSync('public', { recursive: true });
} catch (error) {
  // Directory might already exist
}

// Generate HTML files
pages.forEach(page => {
  const html = createHTMLTemplate(
    page.title,
    page.description,
    page.keywords,
    `/${page.path}`,
    page.structuredData
  );
  
  const filePath = page.path 
    ? join('public', `${page.path}.html`)
    : join('public', 'index.html');
  
  // Create nested directories if needed
  const dir = page.path ? join('public', page.path.split('/').slice(0, -1).join('/')) : 'public';
  if (page.path && page.path.includes('/')) {
    try {
      mkdirSync(dir, { recursive: true });
    } catch (error) {
      // Directory might already exist
    }
  }
  
  writeFileSync(filePath, html);
  console.log(`Generated: ${filePath}`);
});

console.log('\n✅ Static HTML generation complete!');
console.log(`📄 Generated ${pages.length} HTML files`);
console.log('🔍 All pages are now SEO-ready for Google Search Console');