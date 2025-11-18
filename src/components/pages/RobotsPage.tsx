import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { Copy, Download, Shield, Search, Globe, Clock } from 'lucide-react';
import { Button } from '../ui/button';
import { toast } from 'sonner@2.0.3';

const robotsContent = `# Robots.txt for ThinkMents - Digital Marketing & Web Design Agency
# Website: https://thinkments.com

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

# Allow access to important files and directories
Allow: /sitemap.xml
Allow: /sitemap
Allow: /llm.txt
Allow: /.well-known/
Allow: /components/
Allow: /styles/

# Allow all service pages
Allow: /services
Allow: /services/
Allow: /web-design
Allow: /virtual-tours
Allow: /digital-marketing
Allow: /videography
Allow: /strategic-seo
Allow: /artificial-intelligence-optimization
Allow: /digital-marketing-areas

# Allow location-specific marketing pages
Allow: /digital-marketing-*

# Allow content and engagement pages
Allow: /about
Allow: /our-story
Allow: /case-studies
Allow: /blog
Allow: /blog/
Allow: /store
Allow: /store/

# Allow contact and conversion pages
Allow: /contact
Allow: /get-a-quote

# Allow legal pages
Allow: /privacy-policy
Allow: /terms-of-service
Allow: /design-transfer-agreement

# Sitemap locations
Sitemap: https://thinkments.com/sitemap-xml
Sitemap: https://thinkments.com/sitemap

# Crawl delay (set to 1 second to be respectful)
Crawl-delay: 1

# Specific instructions for major search engines
User-agent: Googlebot
Allow: /
Disallow: /admin
Crawl-delay: 0.5

User-agent: Bingbot
Allow: /
Disallow: /admin
Crawl-delay: 1

# Allow social media bots for better sharing
User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: LinkedInBot
Allow: /

# Manage SEO tool crawlers
User-agent: AhrefsBot
Crawl-delay: 10

User-agent: MJ12bot
Crawl-delay: 10

User-agent: SemrushBot
Crawl-delay: 10

User-agent: MozBot
Crawl-delay: 5

# Allow image indexing for portfolio content
User-agent: Googlebot-Image
Allow: /

# Allow video indexing for videography services
User-agent: Googlebot-Video
Allow: /`;

const sections = [
  {
    title: "General Access",
    icon: <Globe className="h-5 w-5" />,
    description: "Allows all web crawlers to access public content",
    color: "bg-green-100 text-green-800 border-green-200"
  },
  {
    title: "Security Protection",
    icon: <Shield className="h-5 w-5" />,
    description: "Blocks access to admin interfaces and sensitive areas",
    color: "bg-red-100 text-red-800 border-red-200"
  },
  {
    title: "SEO Optimization",
    icon: <Search className="h-5 w-5" />,
    description: "Optimized for search engine indexing and discovery",
    color: "bg-blue-100 text-blue-800 border-blue-200"
  },
  {
    title: "Crawl Management",
    icon: <Clock className="h-5 w-5" />,
    description: "Manages crawler frequency to optimize server performance",
    color: "bg-purple-100 text-purple-800 border-purple-200"
  }
];

const copyToClipboard = () => {
  navigator.clipboard.writeText(robotsContent);
  toast.success('Robots.txt content copied to clipboard!');
};

const downloadFile = () => {
  const blob = new Blob([robotsContent], { type: 'text/plain' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'robots.txt';
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);
  toast.success('Robots.txt file downloaded successfully!');
};

export default function RobotsPage() {
  return (
    <>
      <Helmet>
        <title>Robots.txt - ThinkMents SEO Configuration</title>
        <meta name="description" content="ThinkMents robots.txt file configuration for search engine crawlers and SEO optimization." />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://thinkments.com/robots.txt" />
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
                  Robots.txt Configuration
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  SEO crawler configuration for ThinkMents digital marketing agency
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
                            <Search className="h-4 w-4 text-primary" />
                          </div>
                          Robots.txt File
                        </CardTitle>
                        <CardDescription>
                          Current robots.txt configuration for search engine crawlers
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
                    <pre className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 overflow-x-auto text-sm font-mono border">
                      <code>{robotsContent}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Configuration Overview */}
                <Card className="shadow-xl border-0 bg-white/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-blue-100 flex items-center justify-center">
                        <Globe className="h-4 w-4 text-blue-600" />
                      </div>
                      Configuration Overview
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

                {/* Key Directives */}
                <Card className="shadow-xl border-0 bg-white/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-green-100 flex items-center justify-center">
                        <Shield className="h-4 w-4 text-green-600" />
                      </div>
                      Key Directives
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-sm text-green-700">Allowed Paths</h4>
                        <p className="text-xs text-muted-foreground">All public content, services, blog, store</p>
                      </div>
                      <Separator />
                      <div>
                        <h4 className="font-medium text-sm text-red-700">Blocked Paths</h4>
                        <p className="text-xs text-muted-foreground">Admin interface, API endpoints</p>
                      </div>
                      <Separator />
                      <div>
                        <h4 className="font-medium text-sm text-blue-700">Crawl Delays</h4>
                        <p className="text-xs text-muted-foreground">0.5s for Google, 1s for others</p>
                      </div>
                      <Separator />
                      <div>
                        <h4 className="font-medium text-sm text-purple-700">Sitemaps</h4>
                        <p className="text-xs text-muted-foreground">XML and HTML sitemap references</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* SEO Impact */}
                <Card className="shadow-xl border-0 bg-white/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-purple-100 flex items-center justify-center">
                        <Search className="h-4 w-4 text-purple-600" />
                      </div>
                      SEO Benefits
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                        <p className="text-sm">Optimized for all major search engines</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                        <p className="text-sm">Protected admin and sensitive areas</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                        <p className="text-sm">Managed crawler frequency</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-orange-500 mt-2"></div>
                        <p className="text-sm">Enhanced social media sharing</p>
                      </div>
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