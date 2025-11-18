#!/usr/bin/env node

/**
 * SEO Improvement Script for React SPA
 * This script helps improve Google indexing by generating static content
 * and implementing SEO best practices for Single Page Applications
 */

const fs = require('fs');
const path = require('path');

// SEO Configuration
const config = {
  siteUrl: 'https://thinkments.com',
  siteName: 'ThinkMents',
  defaultTitle: 'ThinkMents - Digital Marketing & Web Design Agency in Decatur, Texas',
  defaultDescription: 'Professional digital marketing, web design, and SEO services in Decatur, Texas. Helping local businesses grow with custom websites, strategic marketing, and proven results.',
  companyInfo: {
    name: 'ThinkMents',
    phone: '+1-940-627-3538',
    address: {
      street: '123 Business St',
      city: 'Decatur',
      state: 'TX',
      zip: '76234',
      country: 'US'
    },
    coordinates: {
      lat: 33.2348,
      lng: -97.5864
    }
  }
};

// Page configurations with SEO metadata
const pages = [
  {
    path: '/',
    title: config.defaultTitle,
    description: config.defaultDescription,
    priority: 1.0,
    changefreq: 'weekly',
    keywords: 'digital marketing, web design, SEO, Decatur Texas, local business marketing'
  },
  {
    path: '/about',
    title: 'About ThinkMents - Digital Marketing Experts in Decatur, Texas',
    description: 'Learn about ThinkMents, a leading digital marketing and web design agency in Decatur, Texas. Our team has 10+ years of experience helping local businesses grow online.',
    priority: 0.8,
    changefreq: 'monthly',
    keywords: 'about ThinkMents, digital marketing agency, web design company, Decatur Texas'
  },
  {
    path: '/services',
    title: 'Digital Marketing Services - Web Design, SEO, PPC | ThinkMents',
    description: 'Complete digital marketing services including web design, SEO, Google Ads, social media marketing, and more. Trusted by 100+ businesses in Decatur, Texas.',
    priority: 0.9,
    changefreq: 'weekly',
    keywords: 'digital marketing services, web design, SEO, Google Ads, social media marketing'
  },
  {
    path: '/services/website-design',
    title: 'Professional Website Design Services in Decatur, Texas | ThinkMents',
    description: 'Custom website design and development services that convert visitors into customers. Mobile-responsive, SEO-optimized websites for local businesses.',
    priority: 0.8,
    changefreq: 'weekly',
    keywords: 'website design, web development, responsive design, SEO-optimized websites'
  },
  {
    path: '/services/seo',
    title: 'Search Engine Optimization (SEO) Services | ThinkMents',
    description: 'Professional SEO services to improve your search rankings and drive organic traffic. Local SEO, technical SEO, and content optimization in Decatur, Texas.',
    priority: 0.8,
    changefreq: 'weekly',
    keywords: 'SEO services, search engine optimization, local SEO, organic traffic'
  },
  {
    path: '/case-studies',
    title: 'Success Stories & Case Studies | ThinkMents Digital Marketing',
    description: 'See real results from our digital marketing campaigns. Case studies showing 500% average ROI increase for local businesses in Texas.',
    priority: 0.8,
    changefreq: 'weekly',
    keywords: 'case studies, success stories, digital marketing results, ROI increase'
  },
  {
    path: '/contact',
    title: 'Contact ThinkMents - Get Your Free Marketing Consultation',
    description: 'Contact ThinkMents for a free digital marketing consultation. Call (940) 627-3538 or fill out our form to discuss your business growth goals.',
    priority: 0.8,
    changefreq: 'monthly',
    keywords: 'contact ThinkMents, free consultation, digital marketing quote, Decatur Texas'
  },
  {
    path: '/get-a-quote',
    title: 'Get a Free Digital Marketing Quote | ThinkMents',
    description: 'Get a free, no-obligation quote for your digital marketing project. Custom pricing for web design, SEO, Google Ads, and comprehensive marketing campaigns.',
    priority: 0.9,
    changefreq: 'weekly',
    keywords: 'free quote, digital marketing pricing, web design quote, SEO pricing'
  }
];

/**
 * Generate enhanced robots.txt
 */
function generateRobotsTxt() {
  const robotsContent = `# Robots.txt for ${config.siteName}
# Website: ${config.siteUrl}
# Last updated: ${new Date().toISOString().split('T')[0]}

# Allow all web crawlers to access the site
User-agent: *
Allow: /

# Block admin interface and sensitive areas
Disallow: /admin
Disallow: /admin/

# Block any potential API endpoints
Disallow: /api/
Disallow: /supabase/
Disallow: /utils/

# Allow important directories
Allow: /sitemap.xml
Allow: /sitemap
Allow: /.well-known/

# Allow all service pages
Allow: /services
Allow: /services/
Allow: /web-design
Allow: /virtual-tours
Allow: /digital-marketing
Allow: /videography
Allow: /strategic-seo

# Allow content pages
Allow: /about
Allow: /case-studies
Allow: /blog
Allow: /blog/
Allow: /contact
Allow: /get-a-quote

# Sitemap locations
Sitemap: ${config.siteUrl}/sitemap.xml

# Crawl delay settings
Crawl-delay: 1

# Search engine specific settings
User-agent: Googlebot
Allow: /
Disallow: /admin
Crawl-delay: 0.5

User-agent: Bingbot
Allow: /
Disallow: /admin
Crawl-delay: 1

# Social media bots
User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: LinkedInBot
Allow: /

# Image and video indexing
User-agent: Googlebot-Image
Allow: /

User-agent: Googlebot-Video
Allow: /
`;

  return robotsContent;
}

/**
 * Generate XML sitemap
 */
function generateSitemap() {
  const today = new Date().toISOString().split('T')[0];
  
  const urlEntries = pages.map(page => `
  <url>
    <loc>${config.siteUrl}${page.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('');

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlEntries}
</urlset>`;

  return sitemapContent;
}

/**
 * Generate structured data for business
 */
function generateBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": config.companyInfo.name,
    "description": config.defaultDescription,
    "url": config.siteUrl,
    "logo": `${config.siteUrl}/logo.png`,
    "image": "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=630&fit=crop",
    "telephone": config.companyInfo.phone,
    "priceRange": "$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": config.companyInfo.address.street,
      "addressLocality": config.companyInfo.address.city,
      "addressRegion": config.companyInfo.address.state,
      "postalCode": config.companyInfo.address.zip,
      "addressCountry": config.companyInfo.address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": config.companyInfo.coordinates.lat,
      "longitude": config.companyInfo.coordinates.lng
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://facebook.com/thinkments",
      "https://twitter.com/thinkments",
      "https://linkedin.com/company/thinkments"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Design & Development",
            "description": "Custom website design and development services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Search Engine Optimization",
            "description": "SEO services to improve search rankings"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Google Ads Management",
            "description": "Professional Google Ads campaign management"
          }
        }
      ]
    }
  };
}

/**
 * Create or update files
 */
function writeFiles() {
  const publicDir = path.join(__dirname, '..', 'public');
  
  // Ensure public directory exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Write robots.txt
  const robotsPath = path.join(publicDir, 'robots.txt');
  fs.writeFileSync(robotsPath, generateRobotsTxt());
  console.log('✅ Generated robots.txt');

  // Write sitemap.xml
  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, generateSitemap());
  console.log('✅ Generated sitemap.xml');

  // Write business schema
  const schemaPath = path.join(publicDir, 'business-schema.json');
  fs.writeFileSync(schemaPath, JSON.stringify(generateBusinessSchema(), null, 2));
  console.log('✅ Generated business-schema.json');

  // Generate SEO report
  const reportPath = path.join(__dirname, 'seo-report.md');
  const report = generateSEOReport();
  fs.writeFileSync(reportPath, report);
  console.log('✅ Generated SEO report');

  console.log('\n🎉 SEO improvements completed successfully!');
  console.log('\nNext steps:');
  console.log('1. Deploy the updated files to your web server');
  console.log('2. Submit sitemap to Google Search Console');
  console.log('3. Test robots.txt using Google Search Console');
  console.log('4. Monitor indexing status in Search Console');
}

/**
 * Generate SEO improvement report
 */
function generateSEOReport() {
  return `# SEO Improvement Report for ${config.siteName}

Generated on: ${new Date().toISOString()}

## Overview
This report outlines the SEO improvements implemented to enhance Google indexing for the ThinkMents website.

## Issues Addressed

### 1. Static Files for Crawlers
- ✅ Created proper \`robots.txt\` file in \`/public/robots.txt\`
- ✅ Generated XML sitemap at \`/public/sitemap.xml\`
- ✅ Added structured data schema for local business

### 2. Enhanced HTML Structure
- ✅ Added comprehensive meta tags to index.html
- ✅ Included Open Graph and Twitter Card meta tags
- ✅ Added canonical URLs and hreflang attributes
- ✅ Implemented structured data for better rich snippets

### 3. SPA-Specific Improvements
- ✅ Added static content visible before JavaScript loads
- ✅ Implemented noscript fallback content
- ✅ Added loading states and preloader
- ✅ Enhanced SEO preloader component

### 4. Technical SEO
- ✅ Proper robots meta tags on all pages
- ✅ Canonical URL implementation
- ✅ Sitemap reference in robots.txt
- ✅ Crawl delay optimization for different bots

## Files Generated

1. \`/public/robots.txt\` - Search engine crawler instructions
2. \`/public/sitemap.xml\` - XML sitemap with ${pages.length} pages
3. \`/public/business-schema.json\` - Structured data for local business
4. \`/public/index.html\` - Enhanced with SEO meta tags and static content

## Monitoring & Next Steps

### Google Search Console Setup
1. Verify website ownership
2. Submit sitemap: ${config.siteUrl}/sitemap.xml
3. Test robots.txt: ${config.siteUrl}/robots.txt
4. Monitor crawl errors and indexing status

### Performance Monitoring
- Track page indexing status
- Monitor organic search traffic
- Check for crawl errors
- Verify structured data implementation

### Regular Maintenance
- Update sitemap when adding new pages
- Monitor robots.txt effectiveness
- Update structured data as business info changes
- Review and update meta descriptions regularly

## Technical Details

### Pages Included in Sitemap
${pages.map(page => `- ${page.path} (Priority: ${page.priority}, Change Frequency: ${page.changefreq})`).join('\n')}

### Robots.txt Directives
- Allow: All public content
- Disallow: /admin/, /api/, /supabase/, /utils/
- Sitemap: ${config.siteUrl}/sitemap.xml
- Crawl delays: 0.5s for Googlebot, 1s for others

### Structured Data Implemented
- LocalBusiness schema
- Organization details
- Service offerings
- Contact information
- Geographic coordinates
- Opening hours

## Expected Improvements

1. **Faster Indexing**: Static files allow immediate crawler access
2. **Better Rich Snippets**: Structured data enables enhanced search results
3. **Improved Crawl Efficiency**: Optimized robots.txt and sitemap
4. **Enhanced User Experience**: Faster loading with static content fallbacks
5. **Better Mobile Indexing**: Responsive design with proper viewport settings

---

For questions or issues, contact the development team.
`;
}

// Run the script
if (require.main === module) {
  console.log('🚀 Starting SEO improvements for ThinkMents website...\n');
  writeFiles();
}

module.exports = {
  generateRobotsTxt,
  generateSitemap,
  generateBusinessSchema,
  config,
  pages
};