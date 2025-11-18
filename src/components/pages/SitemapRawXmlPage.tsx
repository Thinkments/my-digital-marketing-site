import { useEffect } from 'react';
import { LOCATION_ROUTES } from '../../config/routes';
import { BLOG_SLUGS } from '../../data/blogSlugs';

export default function SitemapRawXmlPage() {
  const baseUrl = 'https://thinkments.com';
  const today = new Date().toISOString().split('T')[0];

  // Define all routes with their metadata
  const mainRoutes = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/about', priority: '0.8', changefreq: 'monthly' },
    { path: '/our-story', priority: '0.7', changefreq: 'monthly' },
    { path: '/services', priority: '0.9', changefreq: 'weekly' },
    { path: '/web-design', priority: '0.9', changefreq: 'weekly' },
    { path: '/digital-marketing', priority: '0.9', changefreq: 'weekly' },
    { path: '/strategic-seo', priority: '0.9', changefreq: 'weekly' },
    { path: '/virtual-tours', priority: '0.8', changefreq: 'weekly' },
    { path: '/videography', priority: '0.8', changefreq: 'weekly' },
    { path: '/artificial-intelligence-optimization', priority: '0.8', changefreq: 'weekly' },
    { path: '/digital-marketing-areas', priority: '0.7', changefreq: 'monthly' },
    { path: '/case-studies', priority: '0.8', changefreq: 'weekly' },
    { path: '/blog', priority: '0.8', changefreq: 'daily' },
    { path: '/store', priority: '0.7', changefreq: 'weekly' },
    { path: '/contact', priority: '0.8', changefreq: 'monthly' },
    { path: '/get-a-quote', priority: '0.9', changefreq: 'weekly' }
  ];

  // Service detail routes
  const serviceDetailRoutes = [
    { path: '/services/web-development', priority: '0.8', changefreq: 'weekly' },
    { path: '/services/e-commerce-development', priority: '0.8', changefreq: 'weekly' },
    { path: '/services/custom-web-applications', priority: '0.8', changefreq: 'weekly' },
    { path: '/services/website-maintenance', priority: '0.7', changefreq: 'weekly' },
    { path: '/services/search-engine-optimization', priority: '0.8', changefreq: 'weekly' },
    { path: '/services/pay-per-click-advertising', priority: '0.8', changefreq: 'weekly' },
    { path: '/services/social-media-marketing', priority: '0.8', changefreq: 'weekly' },
    { path: '/services/content-marketing', priority: '0.8', changefreq: 'weekly' },
    { path: '/services/email-marketing', priority: '0.7', changefreq: 'weekly' },
    { path: '/services/conversion-optimization', priority: '0.8', changefreq: 'weekly' },
    { path: '/services/analytics-reporting', priority: '0.7', changefreq: 'weekly' },
    { path: '/services/brand-strategy', priority: '0.7', changefreq: 'weekly' },
    { path: '/services/logo-design', priority: '0.7', changefreq: 'weekly' },
    { path: '/services/print-design', priority: '0.6', changefreq: 'monthly' },
    { path: '/services/packaging-design', priority: '0.6', changefreq: 'monthly' },
    { path: '/services/marketing-materials', priority: '0.7', changefreq: 'weekly' },
    { path: '/services/business-photography', priority: '0.7', changefreq: 'weekly' },
    { path: '/services/event-videography', priority: '0.7', changefreq: 'weekly' },
    { path: '/services/promotional-videos', priority: '0.8', changefreq: 'weekly' },
    { path: '/services/product-photography', priority: '0.7', changefreq: 'weekly' },
    { path: '/services/drone-photography', priority: '0.6', changefreq: 'monthly' },
    { path: '/services/virtual-tour-creation', priority: '0.7', changefreq: 'weekly' },
    { path: '/services/360-photography', priority: '0.7', changefreq: 'weekly' },
    { path: '/services/google-street-view', priority: '0.7', changefreq: 'weekly' },
    { path: '/services/graphic-design', priority: '0.8', changefreq: 'weekly' },
  ];

  // Store/product routes
  const storeRoutes = [
    { path: '/store/google-business-profile-foundation', priority: '0.7', changefreq: 'weekly' },
    { path: '/store/google-business-profile-professional', priority: '0.7', changefreq: 'weekly' },
    { path: '/store/google-business-profile-growth', priority: '0.7', changefreq: 'weekly' },
    { path: '/store/google-business-profile-growth-enhanced', priority: '0.7', changefreq: 'weekly' },
    { path: '/store/google-business-profile-einsteinium', priority: '0.7', changefreq: 'weekly' },
  ];

  // Location-specific routes
  const locationRoutes = LOCATION_ROUTES.map(location => ({
    path: `/digital-marketing-${location}`,
    priority: '0.7',
    changefreq: 'monthly'
  }));

  // Blog post routes - all 50 blog posts
  const blogRoutes = BLOG_SLUGS.map(slug => ({
    path: `/blog/${slug}`,
    priority: '0.6',
    changefreq: 'monthly'
  }));

  // Case study routes
  const caseStudyRoutes = [
    { path: '/case-studies/foursquare-healthcare', priority: '0.7', changefreq: 'monthly' },
    { path: '/case-studies/north-texas-wildlife-center', priority: '0.7', changefreq: 'monthly' },
    { path: '/case-studies/trinity-construction-group', priority: '0.7', changefreq: 'monthly' },
    { path: '/case-studies/urban-outfitters-boutique', priority: '0.7', changefreq: 'monthly' },
    { path: '/case-studies/adventure-trails-outdoor', priority: '0.7', changefreq: 'monthly' },
    { path: '/case-studies/premium-auto-dealership', priority: '0.7', changefreq: 'monthly' },
    { path: '/case-studies/guardian-security-solutions', priority: '0.7', changefreq: 'monthly' },
    { path: '/case-studies/crystal-clear-water-services', priority: '0.7', changefreq: 'monthly' },
    { path: '/case-studies/elite-sports-academy', priority: '0.7', changefreq: 'monthly' },
    { path: '/case-studies/gourmet-food-delivery', priority: '0.7', changefreq: 'monthly' },
  ];

  // Legal routes
  const legalRoutes = [
    { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
    { path: '/terms-of-service', priority: '0.3', changefreq: 'yearly' },
    { path: '/design-transfer-agreement', priority: '0.3', changefreq: 'yearly' }
  ];

  // Technical/SEO routes
  const technicalRoutes = [
    { path: '/sitemap', priority: '0.5', changefreq: 'monthly' },
    { path: '/sitemap-xml', priority: '0.5', changefreq: 'monthly' },
    { path: '/robots-txt', priority: '0.3', changefreq: 'monthly' },
    { path: '/robots', priority: '0.3', changefreq: 'monthly' },
    { path: '/llm-txt', priority: '0.3', changefreq: 'monthly' }
  ];

  // Combine all routes
  const allRoutes = [
    ...mainRoutes,
    ...serviceDetailRoutes,
    ...storeRoutes,
    ...locationRoutes,
    ...blogRoutes,
    ...caseStudyRoutes,
    ...legalRoutes,
    ...technicalRoutes
  ];

  // Generate XML sitemap content
  const generateXmlSitemap = () => {
    const xmlDeclaration = '<?xml version="1.0" encoding="UTF-8"?>';
    const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
    const urlsetClose = '</urlset>';

    const urls = allRoutes.map(route => {
      // Escape any special XML characters in URLs
      const escapedPath = route.path
        .replace(/&/g, '&')
        .replace(/</g, '<')
        .replace(/>/g, '>')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');

      return `  <url>
    <loc>${baseUrl}${escapedPath}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
    }).join('\n');

    return `${xmlDeclaration}
${urlsetOpen}
${urls}
${urlsetClose}`;
  };

  useEffect(() => {
    // Completely strip the page of all styling to look like pure XML
    const originalBodyClass = document.body.className;
    const originalBodyStyle = document.body.getAttribute('style') || '';
    
    // Remove all body classes and styles
    document.body.className = '';
    document.body.style.cssText = 'margin: 0; padding: 0; background: white; color: black; font-family: monospace; font-size: 12px; line-height: 1.5;';
    
    // Try to set the root element to minimal styling
    const root = document.getElementById('root');
    if (root) {
      root.style.cssText = 'margin: 0; padding: 0;';
    }
    
    return () => {
      // Restore on unmount
      document.body.className = originalBodyClass;
      document.body.style.cssText = originalBodyStyle;
    };
  }, []);

  // Output raw XML with minimal HTML wrapper
  return (
    <pre style={{ 
      margin: 0, 
      padding: 0, 
      fontFamily: 'monospace',
      fontSize: '12px',
      lineHeight: '1.5',
      whiteSpace: 'pre',
      wordWrap: 'normal',
      backgroundColor: 'white',
      color: 'black',
      border: 'none',
      outline: 'none'
    }}>
{generateXmlSitemap()}
    </pre>
  );
}
