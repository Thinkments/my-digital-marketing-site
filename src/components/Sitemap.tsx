import React from 'react';
import { LOCATION_ROUTES } from '../config/routes';

interface SitemapURL {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: string;
}

const generateSitemap = (): string => {
  const baseUrl = 'https://thinkments.com';
  const today = new Date().toISOString().split('T')[0];

  // Define all routes with their SEO properties
  const mainRoutes: SitemapURL[] = [
    // Homepage
    { loc: '/', lastmod: today, changefreq: 'weekly', priority: '1.0' },
    
    // About pages
    { loc: '/about', lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: '/our-story', lastmod: today, changefreq: 'monthly', priority: '0.7' },
    
    // Service pages
    { loc: '/services', lastmod: today, changefreq: 'weekly', priority: '0.9' },
    { loc: '/web-design', lastmod: today, changefreq: 'weekly', priority: '0.9' },
    { loc: '/digital-marketing', lastmod: today, changefreq: 'weekly', priority: '0.9' },
    { loc: '/strategic-seo', lastmod: today, changefreq: 'weekly', priority: '0.9' },
    { loc: '/virtual-tours', lastmod: today, changefreq: 'weekly', priority: '0.8' },
    { loc: '/videography', lastmod: today, changefreq: 'weekly', priority: '0.8' },
    { loc: '/artificial-intelligence-optimization', lastmod: today, changefreq: 'weekly', priority: '0.8' },
    { loc: '/digital-marketing-areas', lastmod: today, changefreq: 'monthly', priority: '0.7' },
    { loc: '/Google-Business-Profile-Growth-Managed-Essentials', lastmod: today, changefreq: 'weekly', priority: '0.8' },
    { loc: '/Google-Business-Profile-Professional-Complete-Management', lastmod: today, changefreq: 'weekly', priority: '0.8' },
    { loc: '/Google-Business-Profile-Foundation-Audit-&-Setup', lastmod: today, changefreq: 'weekly', priority: '0.8' },
    { loc: '/Google-Business-Profile-Concierge-Ultimate-Visibility', lastmod: today, changefreq: 'weekly', priority: '0.8' },
    { loc: '/Google-Business-Profile-Growth-Enhanced-Essentials', lastmod: today, changefreq: 'weekly', priority: '0.8' },
    
    // Content pages
    { loc: '/case-studies', lastmod: today, changefreq: 'weekly', priority: '0.8' },
    { loc: '/blog', lastmod: today, changefreq: 'daily', priority: '0.8' },
    
    // Store pages
    { loc: '/store', lastmod: today, changefreq: 'weekly', priority: '0.7' },
    
    // Contact pages
    { loc: '/contact', lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: '/get-a-quote', lastmod: today, changefreq: 'weekly', priority: '0.9' },
    
    // Legal pages
    { loc: '/privacy-policy', lastmod: today, changefreq: 'yearly', priority: '0.3' },
    { loc: '/terms-of-service', lastmod: today, changefreq: 'yearly', priority: '0.3' },
    { loc: '/design-transfer-agreement', lastmod: today, changefreq: 'yearly', priority: '0.3' }
  ];

  // Generate location-specific marketing pages dynamically
  const locationRoutes: SitemapURL[] = LOCATION_ROUTES.map((location, index) => ({
    loc: `/digital-marketing-${location}`,
    lastmod: today,
    changefreq: 'monthly' as const,
    priority: index < 4 ? '0.7' : '0.6' // Higher priority for major cities
  }));

  // Combine all routes
  const allRoutes = [...mainRoutes, ...locationRoutes];

  // Generate XML
  const urlEntries = allRoutes.map(url => `
  <url>
    <loc>${baseUrl}${url.loc}</loc>
    ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ''}
    ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ''}
    ${url.priority ? `<priority>${url.priority}</priority>` : ''}
  </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
};

// Component to display sitemap information
const SitemapComponent: React.FC = () => {
  const baseUrl = 'https://thinkments.com';
  const today = new Date().toISOString().split('T')[0];

  const routes = [
    { path: '/', priority: '1.0', changefreq: 'weekly', description: 'Homepage' },
    { path: '/about', priority: '0.8', changefreq: 'monthly', description: 'About Us' },
    { path: '/our-story', priority: '0.7', changefreq: 'monthly', description: 'Our Story' },
    { path: '/services', priority: '0.9', changefreq: 'weekly', description: 'Services Overview' },
    { path: '/web-design', priority: '0.9', changefreq: 'weekly', description: 'Web Design Services' },
    { path: '/digital-marketing', priority: '0.9', changefreq: 'weekly', description: 'Digital Marketing' },
    { path: '/strategic-seo', priority: '0.9', changefreq: 'weekly', description: 'SEO Services' },
    { path: '/virtual-tours', priority: '0.8', changefreq: 'weekly', description: 'Virtual Tours' },
    { path: '/videography', priority: '0.8', changefreq: 'weekly', description: 'Videography' },
    { path: '/Google-Business-Profile-Growth-Managed-Essentials', priority: '0.8', changefreq: 'weekly', description: 'Google Business Profile Growth: Managed Essentials' },
    { path: '/Google-Business-Profile-Professional-Complete-Management', priority: '0.8', changefreq: 'weekly', description: 'Silver - Google Business Profile Professional Complete Management' },
    { path: '/Google-Business-Profile-Foundation-Audit-&-Setup', priority: '0.8', changefreq: 'weekly', description: 'Foundation: Audit & Setup - Google Business Profile' },
    { path: '/Google-Business-Profile-Concierge-Ultimate-Visibility', priority: '0.8', changefreq: 'weekly', description: 'Einsteinium: Ultimate Visibility - Google Business Profile' },
    { path: '/Google-Business-Profile-Growth-Enhanced-Essentials', priority: '0.8', changefreq: 'weekly', description: 'Gold: Enhanced Essentials - Google Business Profile' },
    { path: '/case-studies', priority: '0.8', changefreq: 'weekly', description: 'Case Studies' },
    { path: '/blog', priority: '0.8', changefreq: 'daily', description: 'Blog' },
    { path: '/contact', priority: '0.8', changefreq: 'monthly', description: 'Contact' },
    { path: '/get-a-quote', priority: '0.9', changefreq: 'weekly', description: 'Get Quote' }
  ];

  const locationRoutes = LOCATION_ROUTES.map(location => ({
    path: `/digital-marketing-${location}`,
    priority: '0.7',
    changefreq: 'monthly',
    description: `Digital Marketing in ${location.charAt(0).toUpperCase() + location.slice(1)}`
  }));

  const allRoutes = [...routes, ...locationRoutes];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Sitemap</h1>
      <p className="text-muted-foreground mb-8">
        Explore all pages on our website. This sitemap helps search engines crawl and index our content.
      </p>
      
      <div className="grid gap-4">
        {allRoutes.map((route) => (
          <div key={route.path} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <a 
                  href={`${baseUrl}${route.path}`}
                  className="text-lg font-medium text-primary hover:underline"
                >
                  {route.description}
                </a>
                <p className="text-sm text-muted-foreground mt-1">
                  {baseUrl}{route.path}
                </p>
              </div>
              <div className="text-right text-sm text-muted-foreground">
                <div>Priority: {route.priority}</div>
                <div>Updates: {route.changefreq}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-muted rounded-lg">
        <h2 className="text-lg font-medium mb-2">XML Sitemap</h2>
        <p className="text-sm text-muted-foreground mb-2">
          Search engines can access our XML sitemap at:
        </p>
        <a 
          href={`${baseUrl}/sitemap.xml`}
          className="text-primary hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {baseUrl}/sitemap.xml
        </a>
      </div>
    </div>
  );
};

// Export both the generator function and component
export const sitemapXML = generateSitemap();
export default SitemapComponent;