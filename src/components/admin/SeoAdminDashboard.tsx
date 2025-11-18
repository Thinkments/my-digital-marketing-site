import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Textarea } from '../ui/textarea';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Alert, AlertDescription } from '../ui/alert';
import { Save, Download, Copy, Info, AlertTriangle } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import ExportInstructions from './ExportInstructions';

export default function SeoAdminDashboard() {
  const [robotsContent, setRobotsContent] = useState('');
  const [businessSchema, setBusinessSchema] = useState('');
  const [activeTab, setActiveTab] = useState('robots');

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

  useEffect(() => {
    initializeData();
  }, []);

  const initializeData = () => {
    // Load default content or from localStorage
    const savedRobots = localStorage.getItem('robotsContent');
    const savedSchema = localStorage.getItem('businessSchema');
    
    setRobotsContent(savedRobots || defaultRobotsContent);
    setBusinessSchema(savedSchema || defaultBusinessSchema);
  };

  const saveToLocalStorage = () => {
    localStorage.setItem('robotsContent', robotsContent);
    localStorage.setItem('businessSchema', businessSchema);
    toast.success('Changes saved locally!');
  };

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
    <motion.div
      className="max-w-6xl mx-auto p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl mb-2">SEO Configuration Manager</h1>
            <p className="text-muted-foreground">
              Manage your robots.txt and business schema configurations. Edit, export, and deploy your SEO files.
            </p>
          </div>
          <Button
            onClick={saveToLocalStorage}
            className="flex items-center"
          >
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </div>

      {/* Local Mode Alert */}
      <Alert className="mb-6 border-blue-200 bg-blue-50">
        <AlertTriangle className="h-4 w-4 text-blue-600" />
        <AlertDescription>
          <span className="text-blue-800">
            <strong>Local Mode:</strong> Changes are saved to your browser. Download and deploy files manually to your website.
          </span>
        </AlertDescription>
      </Alert>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="robots">Robots.txt</TabsTrigger>
          <TabsTrigger value="schema">Business Schema</TabsTrigger>
          <TabsTrigger value="deploy">
            <Info className="w-4 h-4 mr-1" />
            Deploy
          </TabsTrigger>
        </TabsList>

        <TabsContent value="robots">
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
                className="min-h-[400px] font-mono text-sm"
                placeholder="Enter your robots.txt content here..."
              />
              <div className="mt-4 text-sm text-muted-foreground">
                <p><strong>Deploy to:</strong> https://thinkments.com/robots.txt</p>
                <p>This file tells search engines which pages they can and cannot crawl on your website.</p>
                <p>Characters: {robotsContent.length}</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="schema">
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
                className="min-h-[400px] font-mono text-sm"
                placeholder="Enter your business schema JSON-LD here..."
              />
              <div className="mt-4 text-sm text-muted-foreground">
                <p>This structured data helps search engines understand your business information.</p>
                <p>Add this to your website's <head> section as a JSON-LD script tag.</p>
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
        </TabsContent>

        <TabsContent value="deploy">
          <ExportInstructions />
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}
