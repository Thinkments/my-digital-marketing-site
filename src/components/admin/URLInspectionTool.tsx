import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Alert, AlertDescription } from '../ui/alert';
import { 
  Search, 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  ExternalLink, 
  Globe, 
  Target,
  Zap,
  Eye,
  FileText
} from 'lucide-react';

interface SEOData {
  title?: string;
  description?: string;
  keywords?: string;
  robots?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  lang?: string;
  viewport?: string;
  charset?: string;
}

interface PageAnalysis {
  url: string;
  status: 'success' | 'error' | 'warning';
  seo: SEOData;
  performance: {
    loadTime?: number;
    size?: number;
    images?: number;
    scripts?: number;
    stylesheets?: number;
  };
  accessibility: {
    hasAltTags: boolean;
    hasHeadings: boolean;
    hasLang: boolean;
    colorContrast: boolean;
  };
  errors: string[];
  warnings: string[];
  suggestions: string[];
}

const PREDEFINED_URLS = [
  { path: '/', name: 'Homepage' },
  { path: '/about', name: 'About Page' },
  { path: '/services', name: 'Services Page' },
  { path: '/contact', name: 'Contact Page' },
  { path: '/web-design', name: 'Web Design Service' },
  { path: '/digital-marketing', name: 'Digital Marketing' },
  { path: '/digital-marketing-decatur', name: 'Decatur Marketing' },
  { path: '/blog', name: 'Blog Page' },
  { path: '/case-studies', name: 'Case Studies' },
];

export default function URLInspectionTool() {
  const [url, setUrl] = useState('');
  const [analysis, setAnalysis] = useState<PageAnalysis | null>(null);
  const [loading, setLoading] = useState(false);

  const simulatePageAnalysis = async (targetUrl: string): Promise<PageAnalysis> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));

    // Mock analysis based on URL patterns
    const isHomepage = targetUrl === '/' || targetUrl === '';
    const isServicePage = targetUrl.includes('/services/') || ['web-design', 'digital-marketing', 'videography'].some(s => targetUrl.includes(s));
    const isLocationPage = targetUrl.includes('/digital-marketing-');
    const isLegalPage = targetUrl.includes('/privacy-policy') || targetUrl.includes('/terms-of-service');

    const analysis: PageAnalysis = {
      url: targetUrl,
      status: 'success',
      seo: {
        title: isHomepage ? 'ThinkMents - Digital Marketing & Web Design Agency in Decatur, Texas' 
              : isServicePage ? `${targetUrl.split('/').pop()?.replace(/-/g, ' ')} - ThinkMents Professional Services`
              : isLocationPage ? `Digital Marketing in ${targetUrl.split('-').pop()} - ThinkMents Local Services`
              : `${targetUrl.split('/').pop()?.replace(/-/g, ' ')} - ThinkMents`,
        description: isHomepage ? 'Professional digital marketing, web design, and SEO services in Decatur, Texas. Helping local businesses grow with custom websites, strategic marketing, and proven results.'
                    : `Professional services for ${targetUrl.split('/').pop()?.replace(/-/g, ' ')}`,
        keywords: 'digital marketing, web design, SEO, Decatur Texas, ThinkMents',
        robots: isLegalPage ? 'noindex, follow' : 'index, follow',
        canonical: `https://thinkments.com${targetUrl}`,
        ogTitle: 'ThinkMents - Digital Marketing Experts',
        ogDescription: 'Professional digital marketing and web design services',
        ogImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=630&fit=crop',
        ogType: 'website',
        twitterCard: 'summary_large_image',
        lang: 'en',
        viewport: 'width=device-width, initial-scale=1',
        charset: 'utf-8'
      },
      performance: {
        loadTime: Math.random() * 2000 + 500,
        size: Math.random() * 500 + 200,
        images: Math.floor(Math.random() * 10) + 1,
        scripts: Math.floor(Math.random() * 5) + 2,
        stylesheets: Math.floor(Math.random() * 3) + 1
      },
      accessibility: {
        hasAltTags: true,
        hasHeadings: true,
        hasLang: true,
        colorContrast: true
      },
      errors: [],
      warnings: [],
      suggestions: []
    };

    // Add some conditional issues
    if (!analysis.seo.title || analysis.seo.title.length < 30) {
      analysis.warnings.push('Title tag is too short (recommended: 50-60 characters)');
    }
    if (analysis.seo.title && analysis.seo.title.length > 60) {
      analysis.warnings.push('Title tag is too long (recommended: 50-60 characters)');
    }
    if (!analysis.seo.description || analysis.seo.description.length < 120) {
      analysis.warnings.push('Meta description is too short (recommended: 150-160 characters)');
    }
    if (analysis.seo.description && analysis.seo.description.length > 160) {
      analysis.warnings.push('Meta description is too long (recommended: 150-160 characters)');
    }

    if (isLegalPage && analysis.seo.robots === 'index, follow') {
      analysis.suggestions.push('Consider using "noindex, follow" for legal/policy pages');
    }

    // Determine overall status
    if (analysis.errors.length > 0) {
      analysis.status = 'error';
    } else if (analysis.warnings.length > 0) {
      analysis.status = 'warning';
    }

    return analysis;
  };

  const analyzeUrl = async () => {
    if (!url.trim()) return;
    
    setLoading(true);
    try {
      const result = await simulatePageAnalysis(url);
      setAnalysis(result);
    } catch (error) {
      console.error('Analysis failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const analyzeQuickLink = async (path: string) => {
    setUrl(path);
    setLoading(true);
    try {
      const result = await simulatePageAnalysis(path);
      setAnalysis(result);
    } catch (error) {
      console.error('Analysis failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'warning': return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case 'error': return <XCircle className="w-4 h-4 text-red-500" />;
      default: return <Globe className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'bg-green-100 text-green-800 border-green-200';
      case 'warning': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'error': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl mb-2">URL Inspection Tool</h2>
        <p className="text-muted-foreground">
          Analyze URLs for SEO metadata, performance, and technical issues
        </p>
      </div>

      <Tabs defaultValue="single">
        <TabsList>
          <TabsTrigger value="single">Single URL</TabsTrigger>
          <TabsTrigger value="quick">Quick Links</TabsTrigger>
        </TabsList>

        <TabsContent value="single" className="space-y-6">
          {/* URL Input */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Search className="w-5 h-5" />
                <span>URL Analysis</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex space-x-2">
                <Input
                  placeholder="Enter URL path (e.g., /about, /services/seo)"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && analyzeUrl()}
                />
                <Button onClick={analyzeUrl} disabled={loading || !url.trim()}>
                  {loading ? 'Analyzing...' : 'Analyze'}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Analysis Results */}
          {analysis && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Tabs defaultValue="overview">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="seo">SEO Data</TabsTrigger>
                  <TabsTrigger value="performance">Performance</TabsTrigger>
                  <TabsTrigger value="issues">Issues</TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        {getStatusIcon(analysis.status)}
                        <span>Page Overview</span>
                        <Badge className={getStatusColor(analysis.status)}>
                          {analysis.status.toUpperCase()}
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium mb-2">SEO Status</h4>
                          <div className="space-y-1 text-sm">
                            <div className="flex justify-between">
                              <span>Title Length:</span>
                              <span className={analysis.seo.title && analysis.seo.title.length >= 50 && analysis.seo.title.length <= 60 ? 'text-green-600' : 'text-yellow-600'}>
                                {analysis.seo.title?.length || 0} chars
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>Description Length:</span>
                              <span className={analysis.seo.description && analysis.seo.description.length >= 150 && analysis.seo.description.length <= 160 ? 'text-green-600' : 'text-yellow-600'}>
                                {analysis.seo.description?.length || 0} chars
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>Robots Directive:</span>
                              <span className={analysis.seo.robots === 'index, follow' ? 'text-green-600' : 'text-yellow-600'}>
                                {analysis.seo.robots}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium mb-2">Technical Status</h4>
                          <div className="space-y-1 text-sm">
                            <div className="flex justify-between">
                              <span>Load Time:</span>
                              <span className={analysis.performance.loadTime && analysis.performance.loadTime < 3000 ? 'text-green-600' : 'text-yellow-600'}>
                                {analysis.performance.loadTime ? `${Math.round(analysis.performance.loadTime)}ms` : 'N/A'}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>Page Size:</span>
                              <span>{analysis.performance.size ? `${Math.round(analysis.performance.size)}KB` : 'N/A'}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Images:</span>
                              <span>{analysis.performance.images || 0}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {analysis.seo.title && (
                        <div>
                          <h4 className="font-medium mb-2">Search Preview</h4>
                          <div className="border rounded-lg p-4 bg-muted/50">
                            <div className="text-blue-600 hover:underline cursor-pointer text-lg">
                              {analysis.seo.title}
                            </div>
                            <div className="text-green-700 text-sm">
                              https://thinkments.com{analysis.url}
                            </div>
                            <div className="text-muted-foreground text-sm mt-1">
                              {analysis.seo.description}
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="seo">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Target className="w-5 h-5" />
                        <span>SEO Metadata</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Basic SEO */}
                      <div>
                        <h4 className="font-medium mb-2">Basic Meta Tags</h4>
                        <div className="space-y-2 text-sm">
                          <div><strong>Title:</strong> {analysis.seo.title || 'Not set'}</div>
                          <div><strong>Description:</strong> {analysis.seo.description || 'Not set'}</div>
                          <div><strong>Keywords:</strong> {analysis.seo.keywords || 'Not set'}</div>
                          <div><strong>Robots:</strong> {analysis.seo.robots || 'Not set'}</div>
                          <div><strong>Canonical:</strong> {analysis.seo.canonical || 'Not set'}</div>
                          <div><strong>Language:</strong> {analysis.seo.lang || 'Not set'}</div>
                          <div><strong>Viewport:</strong> {analysis.seo.viewport || 'Not set'}</div>
                          <div><strong>Charset:</strong> {analysis.seo.charset || 'Not set'}</div>
                        </div>
                      </div>

                      {/* Open Graph */}
                      <div>
                        <h4 className="font-medium mb-2">Open Graph Tags</h4>
                        <div className="space-y-2 text-sm">
                          <div><strong>OG Title:</strong> {analysis.seo.ogTitle || 'Not set'}</div>
                          <div><strong>OG Description:</strong> {analysis.seo.ogDescription || 'Not set'}</div>
                          <div><strong>OG Image:</strong> {analysis.seo.ogImage || 'Not set'}</div>
                          <div><strong>OG Type:</strong> {analysis.seo.ogType || 'Not set'}</div>
                        </div>
                      </div>

                      {/* Twitter */}
                      <div>
                        <h4 className="font-medium mb-2">Twitter Card Tags</h4>
                        <div className="space-y-2 text-sm">
                          <div><strong>Twitter Card:</strong> {analysis.seo.twitterCard || 'Not set'}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="performance">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Zap className="w-5 h-5" />
                        <span>Performance Metrics</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">
                            {analysis.performance.loadTime ? `${Math.round(analysis.performance.loadTime)}ms` : 'N/A'}
                          </div>
                          <div className="text-sm text-muted-foreground">Load Time</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">
                            {analysis.performance.size ? `${Math.round(analysis.performance.size)}KB` : 'N/A'}
                          </div>
                          <div className="text-sm text-muted-foreground">Page Size</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">{analysis.performance.images || 0}</div>
                          <div className="text-sm text-muted-foreground">Images</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">{analysis.performance.scripts || 0}</div>
                          <div className="text-sm text-muted-foreground">Scripts</div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Accessibility Checks</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex items-center space-x-2">
                            {analysis.accessibility.hasAltTags ? <CheckCircle className="w-4 h-4 text-green-500" /> : <XCircle className="w-4 h-4 text-red-500" />}
                            <span className="text-sm">Alt tags present</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            {analysis.accessibility.hasHeadings ? <CheckCircle className="w-4 h-4 text-green-500" /> : <XCircle className="w-4 h-4 text-red-500" />}
                            <span className="text-sm">Proper headings</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            {analysis.accessibility.hasLang ? <CheckCircle className="w-4 h-4 text-green-500" /> : <XCircle className="w-4 h-4 text-red-500" />}
                            <span className="text-sm">Language attribute</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            {analysis.accessibility.colorContrast ? <CheckCircle className="w-4 h-4 text-green-500" /> : <XCircle className="w-4 h-4 text-red-500" />}
                            <span className="text-sm">Color contrast</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="issues">
                  <div className="space-y-4">
                    {/* Warnings */}
                    {analysis.warnings.length > 0 && (
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center space-x-2 text-yellow-600">
                            <AlertTriangle className="w-5 h-5" />
                            <span>Warnings ({analysis.warnings.length})</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            {analysis.warnings.map((warning, index) => (
                              <Alert key={index} className="border-yellow-200 bg-yellow-50">
                                <AlertDescription>{warning}</AlertDescription>
                              </Alert>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    )}

                    {/* Suggestions */}
                    {analysis.suggestions.length > 0 && (
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center space-x-2 text-blue-600">
                            <Eye className="w-5 h-5" />
                            <span>Suggestions ({analysis.suggestions.length})</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            {analysis.suggestions.map((suggestion, index) => (
                              <Alert key={index} className="border-blue-200 bg-blue-50">
                                <AlertDescription>{suggestion}</AlertDescription>
                              </Alert>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    )}

                    {analysis.errors.length === 0 && analysis.warnings.length === 0 && analysis.suggestions.length === 0 && (
                      <Card>
                        <CardContent className="text-center py-8">
                          <CheckCircle className="w-12 h-12 mx-auto mb-4 text-green-500" />
                          <p className="text-lg">No issues found!</p>
                          <p className="text-muted-foreground">This page looks great from an SEO perspective.</p>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </motion.div>
          )}
        </TabsContent>

        <TabsContent value="quick" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="w-5 h-5" />
                <span>Quick URL Analysis</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {PREDEFINED_URLS.map((item) => (
                  <Button
                    key={item.path}
                    variant="outline"
                    className="justify-start h-auto p-3"
                    onClick={() => analyzeQuickLink(item.path)}
                    disabled={loading}
                  >
                    <div className="text-left">
                      <div className="font-medium">{item.name}</div>
                      <div className="text-xs text-muted-foreground">{item.path}</div>
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {analysis && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  {getStatusIcon(analysis.status)}
                  <span>Latest Analysis: {analysis.url}</span>
                  <Badge className={getStatusColor(analysis.status)}>
                    {analysis.status.toUpperCase()}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-xl font-bold">{analysis.seo.title?.length || 0}</div>
                    <div className="text-sm text-muted-foreground">Title chars</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold">{analysis.seo.description?.length || 0}</div>
                    <div className="text-sm text-muted-foreground">Desc chars</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold">{analysis.warnings.length}</div>
                    <div className="text-sm text-muted-foreground">Warnings</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold">{analysis.suggestions.length}</div>
                    <div className="text-sm text-muted-foreground">Suggestions</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}