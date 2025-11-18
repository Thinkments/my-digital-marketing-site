import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { 
  Settings, 
  Database, 
  FileText, 
  Search, 
  BarChart3, 
  Shield, 
  Globe,
  ExternalLink,
  Eye,
  Zap,
  Copy,
  Download,
  CheckCircle
} from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import SEO from '../SEO';
import ExportInstructions from '../admin/ExportInstructions';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [robotsContent, setRobotsContent] = useState(defaultRobotsContent);
  const [businessSchema, setBusinessSchema] = useState(defaultBusinessSchema);

  const adminStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "ThinkMents Admin Dashboard",
    "description": "Internal admin dashboard for ThinkMents website management",
    "url": "https://thinkments.com/admin",
    "isPartOf": {
      "@type": "WebSite",
      "name": "ThinkMents",
      "url": "https://thinkments.com"
    }
  };

  const quickStats = [
    {
      title: 'Total Pages',
      value: '120+',
      description: 'Indexable pages',
      icon: Globe,
      color: 'text-blue-600'
    },
    {
      title: 'SEO Status',
      value: 'Optimized',
      description: 'Meta tags configured',
      icon: Search,
      color: 'text-green-600'
    },
    {
      title: 'Performance',
      value: 'Good',
      description: 'Site speed optimal',
      icon: Zap,
      color: 'text-yellow-600'
    },
    {
      title: 'Security',
      value: 'Secure',
      description: 'SSL & protection active',
      icon: Shield,
      color: 'text-purple-600'
    }
  ];

  const recentActivity = [
    {
      action: 'SEO Meta Tags Updated',
      timestamp: '2 hours ago',
      status: 'success'
    },
    {
      action: 'Robots.txt Modified',
      timestamp: '1 day ago',
      status: 'success'
    },
    {
      action: 'Business Schema Updated',
      timestamp: '3 days ago',
      status: 'success'
    },
    {
      action: 'Sitemap Generated',
      timestamp: '1 week ago',
      status: 'success'
    }
  ];

  const downloadFile = (content: string, filename: string) => {
    const blob = new Blob([content], { type: filename.endsWith('.json') ? 'application/json' : 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success(`${filename} downloaded successfully!`);
  };

  const copyToClipboard = async (content: string, type: string) => {
    try {
      await navigator.clipboard.writeText(content);
      toast.success(`${type} copied to clipboard!`);
    } catch (error) {
      toast.error('Failed to copy to clipboard');
    }
  };

  return (
    <>
      <SEO
        title="Admin Dashboard - ThinkMents"
        description="Internal admin dashboard for ThinkMents website management"
        keywords="admin, dashboard, SEO management, website administration"
        url="/admin"
        type="website"
        noindex={true}
        structuredData={adminStructuredData}
      />
      
      <motion.div
        className="min-h-screen pt-20 pb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl mb-2">
                  Admin Dashboard
                </h1>
                <p className="text-xl text-muted-foreground">
                  Manage your website settings and monitor performance
                </p>
              </div>
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                <Shield className="w-4 h-4 mr-2" />
                Local Mode
              </Badge>
            </div>
          </motion.div>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview" className="flex items-center space-x-2">
                <BarChart3 className="w-4 h-4" />
                <span>Overview</span>
              </TabsTrigger>
              <TabsTrigger value="seo" className="flex items-center space-x-2">
                <Settings className="w-4 h-4" />
                <span>SEO Files</span>
              </TabsTrigger>
              <TabsTrigger value="reports" className="flex items-center space-x-2">
                <FileText className="w-4 h-4" />
                <span>Reports</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6 mt-6">
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {quickStats.map((stat, index) => (
                  <motion.div
                    key={stat.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-muted-foreground">{stat.title}</p>
                            <p className="text-2xl font-bold">{stat.value}</p>
                            <p className="text-xs text-muted-foreground">{stat.description}</p>
                          </div>
                          <stat.icon className={`w-8 h-8 ${stat.color}`} />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Recent Activity & Quick Actions */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Eye className="w-5 h-5" />
                      <span>Recent Activity</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivity.map((activity, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">{activity.action}</p>
                            <p className="text-sm text-muted-foreground">{activity.timestamp}</p>
                          </div>
                          <Badge 
                            variant="outline" 
                            className={activity.status === 'success' ? 'text-green-600 border-green-200' : ''}
                          >
                            {activity.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Zap className="w-5 h-5" />
                      <span>Quick Actions</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Button 
                        variant="outline" 
                        className="w-full justify-start"
                        onClick={() => setActiveTab('seo')}
                      >
                        <Settings className="w-4 h-4 mr-2" />
                        Manage SEO Files
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full justify-start"
                        asChild
                      >
                        <a href="/sitemap.xml" target="_blank">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Sitemap
                        </a>
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full justify-start"
                        asChild
                      >
                        <a href="/robots.txt" target="_blank">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Robots.txt
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* System Status */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Database className="w-5 h-5" />
                    <span>System Status</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Globe className="w-6 h-6 text-green-600" />
                      </div>
                      <h3 className="font-medium">Website Status</h3>
                      <p className="text-sm text-muted-foreground">All systems operational</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Search className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="font-medium">SEO Health</h3>
                      <p className="text-sm text-muted-foreground">Optimized & indexed</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Shield className="w-6 h-6 text-purple-600" />
                      </div>
                      <h3 className="font-medium">Security</h3>
                      <p className="text-sm text-muted-foreground">Protected & secure</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="seo" className="space-y-6 mt-6">
              {/* Robots.txt Editor */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Robots.txt Configuration</span>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(robotsContent, 'Robots.txt')}
                      >
                        <Copy className="w-4 h-4 mr-1" />
                        Copy
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => downloadFile(robotsContent, 'robots.txt')}
                      >
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    value={robotsContent}
                    onChange={(e) => setRobotsContent(e.target.value)}
                    className="min-h-[300px] font-mono text-sm"
                    placeholder="Enter your robots.txt content here..."
                  />
                  <div className="mt-4 text-sm text-muted-foreground">
                    <p><strong>Deploy to:</strong> https://thinkments.com/robots.txt</p>
                    <p>This file tells search engines which pages they can and cannot crawl on your website.</p>
                    <p>Characters: {robotsContent.length}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Business Schema Editor */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Business Schema (JSON-LD)</span>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(businessSchema, 'Business Schema')}
                      >
                        <Copy className="w-4 h-4 mr-1" />
                        Copy
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => downloadFile(businessSchema, 'business-schema.json')}
                      >
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    value={businessSchema}
                    onChange={(e) => setBusinessSchema(e.target.value)}
                    className="min-h-[300px] font-mono text-sm"
                    placeholder="Enter your business schema JSON-LD here..."
                  />
                  <div className="mt-4 text-sm text-muted-foreground">
                    <p>This structured data helps search engines understand your business information.</p>
                    <p>Add this to your website's head section as a JSON-LD script tag.</p>
                    <p>Characters: {businessSchema.length} | Valid JSON: {(() => {
                      try {
                        JSON.parse(businessSchema);
                        return '✅ Yes';
                      } catch {
                        return '❌ No';
                      }
                    })()}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Deployment Instructions */}
              <ExportInstructions />
            </TabsContent>

            <TabsContent value="reports" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="w-5 h-5" />
                    <span>Reports & Analytics</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <FileText className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-lg mb-2">External Analytics</h3>
                    <p className="text-muted-foreground max-w-md mx-auto mb-6">
                      Monitor your SEO performance and track indexing status with these external tools.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button variant="outline" asChild>
                        <a 
                          href="https://search.google.com/search-console" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Google Search Console</span>
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a 
                          href="https://analytics.google.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Google Analytics</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </motion.div>
    </>
  );
}

// Default robots.txt content
const defaultRobotsContent = `# Robots.txt for ThinkMents Digital Marketing Agency
# https://thinkments.com

User-agent: *
Allow: /

# Allow all main pages and directories
Allow: /about
Allow: /our-story
Allow: /services/
Allow: /contact
Allow: /get-a-quote
Allow: /case-studies
Allow: /blog/
Allow: /store/

# Allow all location-specific digital marketing pages
Allow: /digital-marketing-decatur
Allow: /digital-marketing-denton
Allow: /digital-marketing-fort-worth
Allow: /digital-marketing-dallas

# Disallow admin and development directories
Disallow: /admin/
Disallow: /private/
Disallow: /temp/
Disallow: /dev/
Disallow: /_next/static/
Disallow: /api/

# Allow CSS, JS, and image files for proper rendering
Allow: *.css
Allow: *.js
Allow: *.png
Allow: *.jpg
Allow: *.jpeg
Allow: *.gif
Allow: *.svg
Allow: *.webp
Allow: *.ico

# Search Engine Specific Rules
User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot
Allow: /
Crawl-delay: 1

# Sitemap location
Sitemap: https://thinkments.com/sitemap.xml`;

// Default business schema
const defaultBusinessSchema = `{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "ThinkMents",
  "alternateName": "ThinkMents Digital Marketing",
  "description": "Professional digital marketing agency specializing in web design, SEO, social media marketing, and virtual tours for businesses in North Texas.",
  "url": "https://thinkments.com",
  "telephone": "(940) 222-4584",
  "email": "info@thinkments.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Business Lane",
    "addressLocality": "Decatur",
    "addressRegion": "TX",
    "postalCode": "76234",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 33.2348,
    "longitude": -97.5864
  },
  "openingHours": "Mo-Fr 08:00-17:00",
  "serviceArea": {
    "@type": "State",
    "name": "Texas"
  },
  "priceRange": "$$",
  "image": "https://thinkments.com/logo.png",
  "sameAs": [
    "https://www.facebook.com/ThinkMents",
    "https://www.linkedin.com/company/thinkments",
    "https://twitter.com/ThinkMents"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Marketing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Website Design",
          "description": "Custom website design and development services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SEO Services",
          "description": "Search engine optimization to improve website rankings"
        }
      }
    ]
  }
}`;