const fs = require('fs');
const path = require('path');

// Location routes (same as in routes.ts)
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

// Base HTML template with proper robots meta tags
const createHTMLTemplate = (title, description, keywords, url, structuredData, content, noindex = false) => {
  const baseUrl = 'https://thinkments.com';
  const fullUrl = `${baseUrl}${url}`;
  
  // Set robots directive based on noindex parameter
  const robotsContent = noindex ? 'noindex,nofollow' : 'index,follow';
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <meta name="keywords" content="${keywords}">
  <meta name="robots" content="${robotsContent}">
  
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
  
  <!-- CSS -->
  <style>
    body { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
      margin: 0; 
      padding: 0; 
      background: #ffffff; 
      color: #030213;
    }
    .loading-placeholder { 
      display: flex; 
      align-items: center; 
      justify-content: center; 
      min-height: 100vh; 
      font-size: 18px; 
      color: #717182; 
    }
    .static-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
      line-height: 1.6;
    }
    h1 { color: #030213; margin-bottom: 20px; }
    h2 { color: #030213; margin-top: 30px; margin-bottom: 15px; }
    p { margin-bottom: 15px; }
    .seo-notice {
      background: #f0f9ff;
      border: 1px solid #0ea5e9;
      border-radius: 8px;
      padding: 16px;
      margin: 20px 0;
      color: #0c4a6e;
    }
  </style>
  
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
    ${content || `
    <div class="static-content">
      <h1>${title}</h1>
      <p>${description}</p>
      ${!noindex ? '<div class="seo-notice">✅ This page is indexed by search engines for better SEO discovery.</div>' : '<div class="seo-notice">🔒 This page is not indexed by search engines for privacy protection.</div>'}
      <p>Loading interactive content...</p>
    </div>
    `}
  </div>
  
  <!-- React will hydrate this content -->
  <script>
    // Basic SEO content is already loaded
    console.log('ThinkMents static content loaded for SEO - Indexing: ${!noindex ? "ENABLED" : "DISABLED"}');
  </script>
</body>
</html>`;
};

// Page configurations
const pages = [
  // Main pages (all indexable)
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
      "description": "Premier digital marketing agency specializing in web design, SEO, virtual tours, and comprehensive marketing solutions.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-THINKMENTS",
        "contactType": "customer service",
        "availableLanguage": "English"
      },
      "sameAs": [
        "https://www.facebook.com/thinkments",
        "https://www.linkedin.com/company/thinkments",
        "https://twitter.com/thinkments",
        "https://www.instagram.com/thinkments"
      ]
    },
    content: `
    <div class="static-content">
      <h1>ThinkMents - Premier Digital Marketing Agency</h1>
      <p>Transform your business with ThinkMents digital marketing expertise. We specialize in professional web design, SEO optimization, virtual tours, and comprehensive marketing solutions that drive real results.</p>
      
      <div class="seo-notice">✅ This page is indexed by search engines for maximum SEO visibility.</div>
      
      <h2>Our Core Services</h2>
      <ul>
        <li><strong>Web Design & Development</strong> - Custom websites that convert</li>
        <li><strong>SEO Services</strong> - Improve your search engine rankings</li>
        <li><strong>Digital Marketing</strong> - Comprehensive online marketing strategies</li>
        <li><strong>Virtual Tours</strong> - Immersive 360° business experiences</li>
        <li><strong>Graphic Design</strong> - Professional branding and marketing materials</li>
        <li><strong>Videography</strong> - High-quality promotional videos</li>
        <li><strong>AI Optimization</strong> - Cutting-edge artificial intelligence solutions</li>
      </ul>
      
      <h2>Why Choose ThinkMents?</h2>
      <p>With years of experience in digital marketing, we understand what it takes to grow your business online. Our team of experts combines creativity with data-driven strategies to deliver exceptional results.</p>
      
      <p><strong>Contact us today for a free consultation and discover how ThinkMents can transform your digital presence.</strong></p>
    </div>
    `,
    noindex: false
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
      "description": "Learn about ThinkMents digital marketing agency and our expert team.",
      "mainEntity": {
        "@type": "Organization",
        "name": "ThinkMents"
      }
    },
    content: `
    <div class="static-content">
      <h1>About ThinkMents</h1>
      <p>ThinkMents is a premier digital marketing agency founded with the mission to revolutionize how businesses approach online marketing. Since 2024, we've been helping companies of all sizes achieve remarkable growth through innovative digital strategies.</p>
      
      <div class="seo-notice">✅ This page is indexed by search engines for better company discovery.</div>
      
      <h2>Our Mission</h2>
      <p>To empower businesses with cutting-edge digital marketing solutions that drive measurable results and sustainable growth in an ever-evolving digital landscape.</p>
      
      <h2>Our Expertise</h2>
      <p>Our team consists of seasoned professionals with expertise in web design, SEO, digital marketing, virtual tours, graphic design, videography, and AI optimization. We stay ahead of industry trends to provide our clients with the most effective strategies.</p>
      
      <h2>Our Approach</h2>
      <p>We believe in a data-driven approach to digital marketing, combining creativity with analytics to deliver solutions that not only look great but also perform exceptionally well.</p>
    </div>
    `,
    noindex: false
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
      "description": "Comprehensive digital marketing services for business growth.",
      "serviceType": "Digital Marketing"
    },
    content: `
    <div class="static-content">
      <h1>Digital Marketing Services</h1>
      <p>ThinkMents offers a comprehensive suite of digital marketing services designed to help your business thrive in the digital age. From web design to AI optimization, we have the expertise to elevate your online presence.</p>
      
      <div class="seo-notice">✅ This page is indexed by search engines to showcase our services.</div>
      
      <h2>Web Design & Development</h2>
      <p>Custom, responsive websites that convert visitors into customers. Our designs are user-friendly, fast, and optimized for search engines.</p>
      
      <h2>Search Engine Optimization (SEO)</h2>
      <p>Improve your search rankings with our strategic SEO services. We focus on technical SEO, content optimization, and link building.</p>
      
      <h2>Digital Marketing Strategies</h2>
      <p>Comprehensive marketing campaigns including PPC, social media marketing, content marketing, and email marketing.</p>
      
      <h2>Virtual Tours & 360° Photography</h2>
      <p>Showcase your business with immersive virtual experiences that engage customers and drive sales.</p>
      
      <h2>Graphic Design</h2>
      <p>Professional branding, logos, marketing materials, and digital graphics that make your brand stand out.</p>
      
      <h2>Videography Services</h2>
      <p>High-quality video production including promotional videos, event coverage, and drone footage.</p>
      
      <h2>AI Optimization</h2>
      <p>Cutting-edge artificial intelligence solutions to automate processes and enhance customer experiences.</p>
    </div>
    `,
    noindex: false
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
    },
    content: `
    <div class="static-content">
      <h1>Contact ThinkMents</h1>
      <p>Ready to transform your digital presence? Get in touch with our expert team for a free consultation. We're here to help you achieve your business goals with proven digital marketing strategies.</p>
      
      <div class="seo-notice">✅ This page is indexed by search engines for local discovery.</div>
      
      <h2>Get a Free Consultation</h2>
      <p>Contact us today to discuss your digital marketing needs. Our team will provide personalized recommendations tailored to your business objectives.</p>
      
      <h2>What to Expect</h2>
      <ul>
        <li>Free initial consultation</li>
        <li>Customized strategy recommendations</li>
        <li>Transparent pricing</li>
        <li>Ongoing support and communication</li>
      </ul>
      
      <h2>Ready to Get Started?</h2>
      <p>Fill out our contact form or give us a call. We'll schedule a consultation at your convenience to discuss how ThinkMents can help grow your business.</p>
    </div>
    `,
    noindex: false
  },
  // Technical pages that should be indexed
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
    },
    content: `
    <div class="static-content">
      <h1>Website Sitemap</h1>
      <p>Complete sitemap of ThinkMents website. Navigate through all our digital marketing services, resources, and content pages.</p>
      
      <div class="seo-notice">✅ This page is indexed by search engines for better site navigation.</div>
      
      <h2>Main Pages</h2>
      <p>Core pages including homepage, about, services, and contact information.</p>
      
      <h2>Service Categories</h2>
      <p>Detailed service pages covering all our digital marketing offerings.</p>
      
      <h2>Location Pages</h2>
      <p>Location-specific digital marketing services across multiple cities and regions.</p>
      
      <p><strong>This sitemap helps search engines and users navigate our complete website structure.</strong></p>
    </div>
    `,
    noindex: false
  },
  {
    path: 'sitemap.xml',
    title: 'XML Sitemap - ThinkMents SEO Configuration',
    description: 'ThinkMents XML sitemap file for search engine crawlers with comprehensive URL structure and SEO optimization.',
    keywords: 'XML sitemap, search engine optimization, website structure, SEO configuration',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "XML Sitemap - ThinkMents",
      "description": "XML sitemap for search engine optimization and crawling."
    },
    content: `
    <div class="static-content">
      <h1>XML Sitemap Configuration</h1>
      <p>ThinkMents XML sitemap file for search engine crawlers with comprehensive URL structure and SEO optimization.</p>
      
      <div class="seo-notice">✅ This page is indexed by search engines for SEO purposes.</div>
      
      <h2>SEO Benefits</h2>
      <ul>
        <li>Improved search engine discovery</li>
        <li>Faster indexing of new content</li>
        <li>Better crawl efficiency</li>
        <li>Enhanced search visibility</li>
      </ul>
      
      <p><strong>This XML sitemap helps search engines understand and index our website structure effectively.</strong></p>
    </div>
    `,
    noindex: false
  },
  {
    path: 'robots.txt',
    title: 'Robots.txt - ThinkMents SEO Configuration',
    description: 'ThinkMents robots.txt file configuration for search engine crawlers and SEO optimization.',
    keywords: 'robots.txt, search engine crawlers, SEO configuration, website optimization',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Robots.txt - ThinkMents",
      "description": "Robots.txt configuration for search engine optimization."
    },
    content: `
    <div class="static-content">
      <h1>Robots.txt Configuration</h1>
      <p>ThinkMents robots.txt file configuration for search engine crawlers and SEO optimization.</p>
      
      <div class="seo-notice">✅ This page is indexed by search engines for transparency.</div>
      
      <h2>Crawler Directives</h2>
      <ul>
        <li>Allow all public content</li>
        <li>Block admin and sensitive areas</li>
        <li>Optimized crawl delays</li>
        <li>Sitemap references</li>
      </ul>
      
      <p><strong>This robots.txt configuration ensures optimal search engine crawling while protecting sensitive areas.</strong></p>
    </div>
    `,
    noindex: false
  }
];

// Add service detail pages (all indexable)
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
      "description": `Professional ${service.toLowerCase()} services for business growth.`,
      "serviceType": service
    },
    content: `
    <div class="static-content">
      <h1>${service}</h1>
      <p>Professional ${service.toLowerCase()} services from ThinkMents. Our expert team delivers high-quality solutions tailored to your business needs and marketing goals.</p>
      
      <div class="seo-notice">✅ This service page is indexed by search engines for better service discovery.</div>
      
      <h2>Service Overview</h2>
      <p>Our ${service.toLowerCase()} services are designed to help your business achieve measurable results and sustainable growth.</p>
      
      <h2>Why Choose ThinkMents?</h2>
      <ul>
        <li>Expert team with proven experience</li>
        <li>Customized solutions for your business</li>
        <li>Data-driven approach</li>
        <li>Ongoing support and optimization</li>
      </ul>
      
      <p><strong>Contact us today to learn more about our ${service.toLowerCase()} services.</strong></p>
    </div>
    `,
    noindex: false
  });
});

// Add location-specific pages (all indexable)
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
      },
      "serviceType": "Digital Marketing"
    },
    content: `
    <div class="static-content">
      <h1>Digital Marketing in ${locationName}</h1>
      <p>ThinkMents provides professional digital marketing services specifically tailored for businesses in ${locationName}. Our local expertise combined with proven strategies helps ${locationName} businesses grow their online presence and attract more customers.</p>
      
      <div class="seo-notice">✅ This location page is indexed by search engines for local SEO discovery.</div>
      
      <h2>Local Digital Marketing Services</h2>
      <ul>
        <li><strong>Local SEO</strong> - Improve your visibility in ${locationName} search results</li>
        <li><strong>Web Design</strong> - Professional websites for ${locationName} businesses</li>
        <li><strong>Google My Business</strong> - Optimize your local business listings</li>
        <li><strong>Social Media Marketing</strong> - Connect with ${locationName} customers</li>
        <li><strong>PPC Advertising</strong> - Target ${locationName} customers effectively</li>
      </ul>
      
      <h2>Why ${locationName} Businesses Choose ThinkMents</h2>
      <p>We understand the local ${locationName} market and can help your business stand out from the competition with targeted digital marketing strategies.</p>
      
      <p><strong>Contact ThinkMents today for a free consultation about digital marketing services in ${locationName}.</strong></p>
    </div>
    `,
    noindex: false
  });
});

// Add additional important pages (all indexable)
const additionalPages = [
  {
    path: 'web-design',
    title: 'Professional Web Design Services - ThinkMents Creative Solutions',
    description: 'Custom web design and development services. Responsive websites, e-commerce solutions, and user-friendly designs that convert visitors into customers.',
    keywords: 'web design, website development, responsive design, e-commerce, custom websites',
    content: `
    <div class="static-content">
      <h1>Professional Web Design Services</h1>
      <p>ThinkMents creates stunning, responsive websites that not only look great but also convert visitors into customers. Our web design services combine beautiful aesthetics with powerful functionality.</p>
      
      <div class="seo-notice">✅ This page is indexed by search engines for web design service discovery.</div>
      
      <h2>Our Web Design Services</h2>
      <ul>
        <li>Custom Website Design</li>
        <li>Responsive Mobile Design</li>
        <li>E-commerce Development</li>
        <li>WordPress Development</li>
        <li>Landing Page Design</li>
        <li>Website Redesign</li>
      </ul>
      
      <h2>Design Process</h2>
      <p>We follow a proven design process that ensures your website meets your business goals and provides an exceptional user experience.</p>
    </div>
    `,
    noindex: false
  },
  {
    path: 'digital-marketing',
    title: 'Digital Marketing Solutions - ThinkMents Growth Strategies',
    description: 'Comprehensive digital marketing strategies including SEO, PPC, social media, content marketing, and conversion optimization to grow your business.',
    keywords: 'digital marketing, SEO, PPC advertising, social media marketing, content marketing, conversion optimization',
    content: `
    <div class="static-content">
      <h1>Digital Marketing Solutions</h1>
      <p>Grow your business with ThinkMents comprehensive digital marketing strategies. We combine multiple channels and tactics to maximize your online presence and drive measurable results.</p>
      
      <div class="seo-notice">✅ This page is indexed by search engines for digital marketing service discovery.</div>
      
      <h2>Digital Marketing Services</h2>
      <ul>
        <li>Search Engine Optimization (SEO)</li>
        <li>Pay-Per-Click (PPC) Advertising</li>
        <li>Social Media Marketing</li>
        <li>Content Marketing</li>
        <li>Email Marketing</li>
        <li>Conversion Rate Optimization</li>
      </ul>
      
      <h2>Our Approach</h2>
      <p>We use data-driven strategies to ensure your marketing budget delivers maximum ROI and sustainable business growth.</p>
    </div>
    `,
    noindex: false
  },
  {
    path: 'strategic-seo',
    title: 'Strategic SEO Services - ThinkMents Search Optimization',
    description: 'Advanced SEO strategies to improve search rankings, increase organic traffic, and boost online visibility. Technical SEO, content optimization, and link building.',
    keywords: 'SEO services, search engine optimization, organic traffic, search rankings, technical SEO',
    content: `
    <div class="static-content">
      <h1>Strategic SEO Services</h1>
      <p>Improve your search engine rankings and increase organic traffic with ThinkMents strategic SEO services. Our comprehensive approach covers technical optimization, content strategy, and authority building.</p>
      
      <div class="seo-notice">✅ This page is indexed by search engines for SEO service discovery.</div>
      
      <h2>SEO Services</h2>
      <ul>
        <li>Technical SEO Audits</li>
        <li>Keyword Research & Strategy</li>
        <li>On-Page Optimization</li>
        <li>Content Optimization</li>
        <li>Link Building</li>
        <li>Local SEO</li>
      </ul>
      
      <h2>SEO Results</h2>
      <p>Our SEO strategies are designed to deliver long-term, sustainable improvements in search rankings and organic traffic.</p>
    </div>
    `,
    noindex: false
  }
];

pages.push(...additionalPages);

// Add legal pages (indexable for transparency)
const legalPages = [
  {
    path: 'privacy-policy',
    title: 'Privacy Policy - ThinkMents Data Protection & Privacy',
    description: 'ThinkMents privacy policy outlining how we collect, use, and protect your personal information. Learn about our commitment to data privacy.',
    keywords: 'privacy policy, data protection, personal information, GDPR compliance, data privacy',
    content: `
    <div class="static-content">
      <h1>Privacy Policy</h1>
      <p>ThinkMents privacy policy outlining how we collect, use, and protect your personal information. Learn about our commitment to data privacy.</p>
      
      <div class="seo-notice">✅ This legal page is indexed by search engines for transparency.</div>
      
      <h2>Information We Collect</h2>
      <p>Details about the types of information we collect and how we use it to provide our services.</p>
      
      <h2>Data Protection</h2>
      <p>Information about how we protect your personal data and comply with privacy regulations.</p>
    </div>
    `,
    noindex: false
  },
  {
    path: 'terms-of-service',
    title: 'Terms of Service - ThinkMents Service Agreement',
    description: 'ThinkMents terms of service and conditions for using our digital marketing services. Read our service agreement and policies.',
    keywords: 'terms of service, service agreement, terms and conditions, legal terms, service policies',
    content: `
    <div class="static-content">
      <h1>Terms of Service</h1>
      <p>ThinkMents terms of service and conditions for using our digital marketing services. Read our service agreement and policies.</p>
      
      <div class="seo-notice">✅ This legal page is indexed by search engines for transparency.</div>
      
      <h2>Service Terms</h2>
      <p>Details about our service terms and conditions for all ThinkMents digital marketing services.</p>
      
      <h2>User Responsibilities</h2>
      <p>Information about user responsibilities and acceptable use of our services.</p>
    </div>
    `,
    noindex: false
  }
];

pages.push(...legalPages);

// Ensure public directory exists
if (!fs.existsSync('public')) {
  fs.mkdirSync('public', { recursive: true });
}

// Generate HTML files
let generatedCount = 0;
let indexedCount = 0;
let noindexCount = 0;

pages.forEach(page => {
  const html = createHTMLTemplate(
    page.title,
    page.description,
    page.keywords,
    `/${page.path}`,
    page.structuredData,
    page.content,
    page.noindex || false
  );
  
  let filePath;
  if (page.path === '') {
    filePath = path.join('public', 'index.html');
  } else if (page.path.includes('/')) {
    // Create nested directory structure
    const dirs = page.path.split('/');
    const fileName = dirs.pop();
    const dirPath = path.join('public', ...dirs);
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    
    filePath = path.join(dirPath, `${fileName}.html`);
  } else {
    filePath = path.join('public', `${page.path}.html`);
  }
  
  fs.writeFileSync(filePath, html);
  
  // Count indexing status
  if (page.noindex) {
    noindexCount++;
    console.log(`🔒 Generated (noindex): ${filePath}`);
  } else {
    indexedCount++;
    console.log(`✅ Generated (indexed): ${filePath}`);
  }
  
  generatedCount++;
});

// Generate XML sitemap (only include indexable pages)
const generateXMLSitemap = () => {
  const baseUrl = 'https://thinkments.com';
  const today = new Date().toISOString();

  // Only include pages that are not marked as noindex
  const indexablePages = pages.filter(page => !page.noindex);

  const urls = indexablePages.map(page => `
  <url>
    <loc>${baseUrl}/${page.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page.path === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`;

  fs.writeFileSync(path.join('public', 'sitemap.xml'), sitemap);
  console.log(`✅ Generated XML sitemap with ${indexablePages.length} indexable URLs`);
};

// Generate robots.txt
const generateRobotsTxt = () => {
  const robotsTxt = `User-agent: *
Allow: /

# Block admin interface
Disallow: /admin
Disallow: /admin/

# Allow all public content
Allow: /services
Allow: /services/
Allow: /digital-marketing-*
Allow: /about
Allow: /contact
Allow: /blog
Allow: /store
Allow: /sitemap
Allow: /sitemap.xml
Allow: /robots.txt

# Sitemap
Sitemap: https://thinkments.com/sitemap.xml

# Crawl-delay
Crawl-delay: 1`;

  fs.writeFileSync(path.join('public', 'robots.txt'), robotsTxt);
  console.log('✅ Generated: public/robots.txt');
};

generateXMLSitemap();
generateRobotsTxt();

console.log(`\n🎉 SEO-Optimized Static HTML Generation Complete!`);
console.log(`📄 Generated ${generatedCount} total HTML files`);
console.log(`✅ ${indexedCount} pages set for indexing (index,follow)`);
console.log(`🔒 ${noindexCount} pages protected from indexing (noindex,nofollow)`);
console.log(`🔍 Generated sitemap.xml and robots.txt`);
console.log(`\n🚀 SEO Benefits:`);
console.log(`   • All public pages are indexable by Google Search Console`);
console.log(`   • Protected admin areas from search engine indexing`);
console.log(`   • Proper meta robots tags for all pages`);
console.log(`   • Clean XML sitemap with only indexable content`);
console.log(`   • Optimized robots.txt for search engine crawling`);
console.log(`\n📋 Next Steps:`);
console.log(`   1. Deploy the public/ directory files to your server`);
console.log(`   2. Submit https://thinkments.com/sitemap.xml to Google Search Console`);
console.log(`   3. Replace "GA_MEASUREMENT_ID" with your actual Google Analytics ID`);
console.log(`   4. Monitor indexing status in Google Search Console`);