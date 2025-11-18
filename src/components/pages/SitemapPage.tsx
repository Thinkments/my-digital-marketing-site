import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../ui/card';
import { ExternalLink, MapPin, FileText, Globe } from 'lucide-react';
import { LOCATION_ROUTES } from '../../config/routes';
import SEO from '../SEO';

export default function SitemapPage() {
  const baseUrl = 'https://thinkments.com';
  const today = new Date().toISOString().split('T')[0];

  const sitemapStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Sitemap - ThinkMents",
    "description": "Complete sitemap of ThinkMents digital marketing website with all pages and services",
    "url": "https://thinkments.com/sitemap",
    "mainEntity": {
      "@type": "SiteNavigationElement",
      "name": "Site Navigation"
    }
  };

  const mainRoutes = [
    { path: '/', priority: '1.0', changefreq: 'weekly', description: 'Homepage', icon: Globe, category: 'Main' },
    { path: '/about', priority: '0.8', changefreq: 'monthly', description: 'About Us', icon: FileText, category: 'Company' },
    { path: '/our-story', priority: '0.7', changefreq: 'monthly', description: 'Our Story', icon: FileText, category: 'Company' },
    { path: '/services', priority: '0.9', changefreq: 'weekly', description: 'Services Overview', icon: Globe, category: 'Services' },
    { path: '/web-design', priority: '0.9', changefreq: 'weekly', description: 'Web Design Services', icon: Globe, category: 'Services' },
    { path: '/digital-marketing', priority: '0.9', changefreq: 'weekly', description: 'Digital Marketing', icon: Globe, category: 'Services' },
    { path: '/strategic-seo', priority: '0.9', changefreq: 'weekly', description: 'SEO Services', icon: Globe, category: 'Services' },
    { path: '/virtual-tours', priority: '0.8', changefreq: 'weekly', description: 'Virtual Tours', icon: Globe, category: 'Services' },
    { path: '/videography', priority: '0.8', changefreq: 'weekly', description: 'Videography', icon: Globe, category: 'Services' },
    { path: '/artificial-intelligence-optimization', priority: '0.8', changefreq: 'weekly', description: 'AI Optimization', icon: Globe, category: 'Services' },
    { path: '/digital-marketing-areas', priority: '0.7', changefreq: 'monthly', description: 'Service Areas', icon: MapPin, category: 'Locations' },
    { path: '/case-studies', priority: '0.8', changefreq: 'weekly', description: 'Case Studies', icon: FileText, category: 'Content' },
    { path: '/blog', priority: '0.8', changefreq: 'daily', description: 'Blog', icon: FileText, category: 'Content' },
    { path: '/store', priority: '0.7', changefreq: 'weekly', description: 'Store', icon: Globe, category: 'Commerce' },
    { path: '/contact', priority: '0.8', changefreq: 'monthly', description: 'Contact', icon: Globe, category: 'Contact' },
    { path: '/get-a-quote', priority: '0.9', changefreq: 'weekly', description: 'Get Quote', icon: Globe, category: 'Contact' }
  ];

  const locationRoutes = LOCATION_ROUTES.map(location => ({
    path: `/digital-marketing-${location}`,
    priority: '0.7',
    changefreq: 'monthly',
    description: `Digital Marketing in ${location.charAt(0).toUpperCase() + location.slice(1)}`,
    icon: MapPin,
    category: 'Locations'
  }));

  const legalRoutes = [
    { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly', description: 'Privacy Policy', icon: FileText, category: 'Legal' },
    { path: '/terms-of-service', priority: '0.3', changefreq: 'yearly', description: 'Terms of Service', icon: FileText, category: 'Legal' },
    { path: '/design-transfer-agreement', priority: '0.3', changefreq: 'yearly', description: 'Design Transfer Agreement', icon: FileText, category: 'Legal' }
  ];

  const allRoutes = [...mainRoutes, ...locationRoutes, ...legalRoutes];

  // Group routes by category
  const routesByCategory = allRoutes.reduce((acc, route) => {
    const category = route.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(route);
    return acc;
  }, {} as Record<string, typeof allRoutes>);

  const categoryOrder = ['Main', 'Company', 'Services', 'Locations', 'Content', 'Commerce', 'Contact', 'Legal'];

  return (
    <>
      <SEO
        title="Sitemap - ThinkMents Digital Marketing Website Navigation"
        description="Complete sitemap of ThinkMents digital marketing website. Find all our pages including services, locations, case studies, and contact information."
        keywords="sitemap, website navigation, ThinkMents pages, digital marketing services, locations served"
        url="/sitemap"
        type="website"
        structuredData={sitemapStructuredData}
      />
      
      <motion.div
        className="min-h-screen py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Website{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Sitemap
                </span>
              </motion.h1>
              
              <motion.p
                className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Navigate our complete website structure. Find all our digital marketing services, 
                locations we serve, case studies, and helpful resources.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link 
                  to="/sitemap.xml"
                  className="inline-flex items-center space-x-2 text-primary hover:underline font-medium"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>View XML Sitemap</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {categoryOrder.map((category, categoryIndex) => {
                const routes = routesByCategory[category];
                if (!routes || routes.length === 0) return null;

                return (
                  <motion.div
                    key={category}
                    className="mb-12"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-2xl md:text-3xl mb-6 flex items-center space-x-2">
                      <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {category}
                      </span>
                      <span className="text-muted-foreground">({routes.length})</span>
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {routes.map((route, index) => (
                        <motion.div
                          key={route.path}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                            <CardContent className="p-4">
                              <Link to={route.path} className="block">
                                <div className="flex items-start space-x-3">
                                  <div className="flex-shrink-0">
                                    <route.icon className="w-5 h-5 text-primary mt-1" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <h3 className="font-medium group-hover:text-primary transition-colors">
                                      {route.description}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mt-1 truncate">
                                      {baseUrl}{route.path}
                                    </p>
                                    <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
                                      <span>Priority: {route.priority}</span>
                                      <span>{route.changefreq}</span>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* XML Sitemap Info */}
        <section className="py-16 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-8 text-center">
                  <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h2 className="text-2xl mb-4">XML Sitemap for Search Engines</h2>
                  <p className="text-muted-foreground mb-6">
                    Search engines like Google use our XML sitemap to crawl and index our website more effectively. 
                    This helps ensure all our content is discoverable in search results.
                  </p>
                  <Link 
                    to="/sitemap.xml"
                    className="inline-flex items-center space-x-2 text-primary hover:underline font-medium"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>View XML Sitemap ({baseUrl}/sitemap.xml)</span>
                  </Link>
                  <p className="text-sm text-muted-foreground mt-4">
                    Last updated: {today}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
}