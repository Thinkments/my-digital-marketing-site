import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { Copy, Download, Globe, MapPin, FileText, Calendar, BarChart3, ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';
import { toast } from 'sonner@2.0.3';
import { LOCATION_ROUTES } from '../../config/routes';

export default function SitemapXmlPage() {
  const baseUrl = 'https://thinkments.com';
  const today = new Date().toISOString();

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

  // Location-specific routes
  const locationRoutes = LOCATION_ROUTES.map(location => ({
    path: `/digital-marketing-${location}`,
    priority: '0.7',
    changefreq: 'monthly'
  }));

  // Legal routes
  const legalRoutes = [
    { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
    { path: '/terms-of-service', priority: '0.3', changefreq: 'yearly' },
    { path: '/design-transfer-agreement', priority: '0.3', changefreq: 'yearly' }
  ];

  // SEO and technical pages
  const technicalRoutes = [
    { path: '/sitemap', priority: '0.5', changefreq: 'monthly' },
    { path: '/sitemap-xml', priority: '0.5', changefreq: 'monthly' },
    { path: '/robots-txt', priority: '0.3', changefreq: 'monthly' },
    { path: '/robots', priority: '0.3', changefreq: 'monthly' },
    { path: '/llm-txt', priority: '0.3', changefreq: 'monthly' }
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
    { path: '/services/real-estate-tours', priority: '0.8', changefreq: 'weekly' },
    { path: '/services/business-tours', priority: '0.8', changefreq: 'weekly' },
    { path: '/services/interactive-presentations', priority: '0.7', changefreq: 'weekly' },
    { path: '/services/virtual-showrooms', priority: '0.7', changefreq: 'weekly' }
  ];

  // Blog post routes (sample)
  const blogRoutes = [
    { path: '/blog/digital-marketing-trends-2024', priority: '0.6', changefreq: 'monthly' },
    { path: '/blog/seo-best-practices', priority: '0.6', changefreq: 'monthly' },
    { path: '/blog/web-design-principles', priority: '0.6', changefreq: 'monthly' },
    { path: '/blog/social-media-strategy', priority: '0.6', changefreq: 'monthly' },
    { path: '/blog/content-marketing-guide', priority: '0.6', changefreq: 'monthly' },
    { path: '/blog/ppc-advertising-tips', priority: '0.6', changefreq: 'monthly' },
    { path: '/blog/email-marketing-campaigns', priority: '0.6', changefreq: 'monthly' },
    { path: '/blog/conversion-optimization-strategies', priority: '0.6', changefreq: 'monthly' },
    { path: '/blog/branding-essentials', priority: '0.6', changefreq: 'monthly' },
    { path: '/blog/video-marketing-benefits', priority: '0.6', changefreq: 'monthly' }
  ];

  // Store routes (sample products)
  const storeRoutes = [
    { path: '/store/p/seo-audit-report', priority: '0.6', changefreq: 'weekly' },
    { path: '/store/p/website-design-template', priority: '0.6', changefreq: 'weekly' },
    { path: '/store/p/social-media-package', priority: '0.6', changefreq: 'weekly' },
    { path: '/store/p/content-strategy-guide', priority: '0.6', changefreq: 'weekly' },
    { path: '/store/p/brand-identity-kit', priority: '0.6', changefreq: 'weekly' }
  ];

  // Combine all routes
  const allRoutes = [
    ...mainRoutes,
    ...locationRoutes,
    ...legalRoutes,
    ...technicalRoutes,
    ...serviceDetailRoutes,
    ...blogRoutes,
    ...storeRoutes
  ];

  // Generate XML sitemap content
  const generateXmlSitemap = () => {
    const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
    const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
    const urlsetClose = '</urlset>';

    const urls = allRoutes.map(route => `
  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('');

    return `${xmlHeader}
${urlsetOpen}${urls}
${urlsetClose}`;
  };

  const xmlContent = generateXmlSitemap();

  const sections = [
    {
      title: "URL Discovery",
      icon: <Globe className="h-5 w-5" />,
      description: "Helps search engines discover all website pages",
      color: "bg-blue-100 text-blue-800 border-blue-200"
    },
    {
      title: "Crawl Efficiency", 
      icon: <BarChart3 className="h-5 w-5" />,
      description: "Optimizes search engine crawling frequency",
      color: "bg-green-100 text-green-800 border-green-200"
    },
    {
      title: "Priority Signals",
      icon: <Calendar className="h-5 w-5" />,
      description: "Indicates page importance and update frequency",
      color: "bg-purple-100 text-purple-800 border-purple-200"
    },
    {
      title: "SEO Enhancement",
      icon: <FileText className="h-5 w-5" />,
      description: "Improves search engine indexing and ranking",
      color: "bg-orange-100 text-orange-800 border-orange-200"
    }
  ];

  const categoryStats = [
    { name: "Main Pages", count: mainRoutes.length, color: "text-blue-600" },
    { name: "Service Details", count: serviceDetailRoutes.length, color: "text-green-600" },
    { name: "Locations", count: locationRoutes.length, color: "text-purple-600" },
    { name: "Blog Posts", count: blogRoutes.length, color: "text-orange-600" },
    { name: "Store Items", count: storeRoutes.length, color: "text-pink-600" },
    { name: "Legal Pages", count: legalRoutes.length, color: "text-gray-600" },
    { name: "Technical", count: technicalRoutes.length, color: "text-indigo-600" }
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(xmlContent);
    toast.success('XML sitemap content copied to clipboard!');
  };

  const downloadFile = () => {
    const blob = new Blob([xmlContent], { type: 'application/xml' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.xml';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
    toast.success('Sitemap.xml file downloaded successfully!');
  };

  return (
    <>
      <Helmet>
        <title>XML Sitemap - ThinkMents SEO Configuration</title>
        <meta name="description" content="ThinkMents XML sitemap file for search engine crawlers with comprehensive URL structure and SEO optimization." />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://thinkments.com/sitemap.xml" />
      </Helmet>

      <main className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background">
        <div className="container mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6"
              >
                <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  XML Sitemap Configuration
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Complete XML sitemap for search engines with {allRoutes.length} optimized URLs
                </p>
              </motion.div>

              {/* Feature badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap justify-center gap-4 mb-8"
              >
                {sections.map((section, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className={`px-4 py-2 ${section.color} flex items-center gap-2`}
                  >
                    {section.icon}
                    <span>{section.title}</span>
                  </Badge>
                ))}
              </motion.div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <Card className="shadow-xl border-0 bg-white/50 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                            <FileText className="h-4 w-4 text-primary" />
                          </div>
                          XML Sitemap File
                        </CardTitle>
                        <CardDescription>
                          Complete XML sitemap with {allRoutes.length} URLs for search engine optimization
                        </CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={copyToClipboard}
                          className="flex items-center gap-2"
                        >
                          <Copy className="h-4 w-4" />
                          Copy
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={downloadFile}
                          className="flex items-center gap-2"
                        >
                          <Download className="h-4 w-4" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 overflow-x-auto text-sm font-mono border max-h-96">
                      <pre className="whitespace-pre-wrap">{xmlContent}</pre>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* URL Statistics */}
                <Card className="shadow-xl border-0 bg-white/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-blue-100 flex items-center justify-center">
                        <BarChart3 className="h-4 w-4 text-blue-600" />
                      </div>
                      URL Statistics
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {categoryStats.map((stat, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-sm">{stat.name}</span>
                        <Badge variant="secondary" className={`${stat.color} bg-transparent`}>
                          {stat.count}
                        </Badge>
                      </div>
                    ))}
                    <Separator />
                    <div className="flex justify-between items-center font-medium">
                      <span>Total URLs</span>
                      <Badge className="bg-primary text-primary-foreground">
                        {allRoutes.length}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Configuration Benefits */}
                <Card className="shadow-xl border-0 bg-white/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-green-100 flex items-center justify-center">
                        <Globe className="h-4 w-4 text-green-600" />
                      </div>
                      Configuration Benefits
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {sections.map((section, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className={`rounded-full p-2 ${section.color.split(' ').slice(0, 2).join(' ')}`}>
                          {section.icon}
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">{section.title}</h4>
                          <p className="text-xs text-muted-foreground">{section.description}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Priority Levels */}
                <Card className="shadow-xl border-0 bg-white/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-purple-100 flex items-center justify-center">
                        <Calendar className="h-4 w-4 text-purple-600" />
                      </div>
                      Priority Levels
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-sm text-red-700">High Priority (1.0-0.9)</h4>
                        <p className="text-xs text-muted-foreground">Homepage, main services, quotes</p>
                      </div>
                      <Separator />
                      <div>
                        <h4 className="font-medium text-sm text-orange-700">Medium Priority (0.8-0.6)</h4>
                        <p className="text-xs text-muted-foreground">About pages, case studies, blog posts</p>
                      </div>
                      <Separator />
                      <div>
                        <h4 className="font-medium text-sm text-yellow-700">Lower Priority (0.5-0.3)</h4>
                        <p className="text-xs text-muted-foreground">Legal pages, technical documentation</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* External Access */}
                <Card className="shadow-xl border-0 bg-white/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-indigo-100 flex items-center justify-center">
                        <ExternalLink className="h-4 w-4 text-indigo-600" />
                      </div>
                      External Access
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        Search engines access this sitemap directly at:
                      </p>
                      <div className="p-3 bg-slate-100 rounded-md font-mono text-sm">
                        {baseUrl}/sitemap.xml
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Last updated: {new Date().toLocaleDateString()}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}