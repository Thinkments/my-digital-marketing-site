import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { HelmetProvider } from 'react-helmet-async';

// CRITICAL COMPONENTS - Load immediately (needed for all pages)
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Analytics from './components/Analytics';
import SEOPreloader from './components/SEOPreloader';

// HOMEPAGE - Load immediately (most common entry point)
import HomePage from './components/pages/HomePage';

// Route Configurations
import { LOCATION_ROUTES, SERVICE_ROUTES, REDIRECT_ROUTES } from './config/routes';

// ALL OTHER PAGES - Lazy loaded (only load when needed)
const AboutPage = lazy(() => import('./components/pages/AboutPage'));
const OurStoryPage = lazy(() => import('./components/pages/OurStoryPage'));
const ServicesPage = lazy(() => import('./components/pages/ServicesPage'));
const ServiceDetailPage = lazy(() => import('./components/pages/ServiceDetailPage'));
const WebDesignPage = lazy(() => import('./components/pages/WebDesignPage'));
const VirtualToursPage = lazy(() => import('./components/pages/VirtualToursPage'));
const DigitalMarketingPage = lazy(() => import('./components/pages/DigitalMarketingPage'));
const VideographyPage = lazy(() => import('./components/pages/VideographyPage'));
const StrategicSEOPage = lazy(() => import('./components/pages/StrategicSEOPage'));
const AIOptimizationPage = lazy(() => import('./components/pages/AIOptimizationPage'));
const DigitalMarketingAreasPage = lazy(() => import('./components/pages/DigitalMarketingAreasPage'));
const LocationMarketingPage = lazy(() => import('./components/pages/LocationMarketingPage'));
const GoogleBusinessProfileGrowthPage = lazy(() => import('./components/pages/GoogleBusinessProfileGrowthPage'));
const GoogleBusinessProfileProfessionalPage = lazy(() => import('./components/pages/GoogleBusinessProfileProfessionalPage'));
const GoogleBusinessProfileFoundationPage = lazy(() => import('./components/pages/GoogleBusinessProfileFoundationPage'));
const GoogleBusinessProfileConciergePage = lazy(() => import('./components/pages/GoogleBusinessProfileConciergePage'));
const GoogleBusinessProfileEinsteinium = lazy(() => import('./components/pages/GoogleBusinessProfileEinsteinium'));
const GoogleBusinessProfileGrowthEnhancedPage = lazy(() => import('./components/pages/GoogleBusinessProfileGrowthEnhancedPage'));
const CaseStudiesPage = lazy(() => import('./components/pages/CaseStudiesPage'));
const BlogPage = lazy(() => import('./components/pages/BlogPage'));
const BlogPostPage = lazy(() => import('./components/pages/BlogPostPage'));
const ContactPage = lazy(() => import('./components/pages/ContactPage'));
const QuotePage = lazy(() => import('./components/pages/QuotePage'));
const StorePage = lazy(() => import('./components/pages/StorePage'));
const ProductPage = lazy(() => import('./components/pages/ProductPage'));
const PrivacyPolicyPage = lazy(() => import('./components/pages/PrivacyPolicyPage'));
const TermsOfServicePage = lazy(() => import('./components/pages/TermsOfServicePage'));
const DesignTransferAgreementPage = lazy(() => import('./components/pages/DesignTransferAgreementPage'));
const SitemapPage = lazy(() => import('./components/pages/SitemapPage'));
const SitemapXmlPage = lazy(() => import('./components/pages/SitemapXmlPage'));
const SitemapRawXmlPage = lazy(() => import('./components/pages/SitemapRawXmlPage'));
const RobotsPage = lazy(() => import('./components/pages/RobotsPage'));
const RobotsTxtPlain = lazy(() => import('./components/pages/RobotsTxtPlain'));
const RobotsTestPage = lazy(() => import('./components/pages/RobotsTestPage'));
const LlmPage = lazy(() => import('./components/pages/LlmPage'));
const AdminPage = lazy(() => import('./components/pages/AdminPage'));

// Loading fallback component with smooth animation
function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-4"
      >
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
        <p className="text-sm text-muted-foreground">Loading...</p>
      </motion.div>
    </div>
  );
}

// Layout component that conditionally renders Header and Footer
function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  
  // Routes that should not have Header/Footer (raw XML/text routes)
  const noLayoutRoutes = ['/sitemap-xml', '/sitemap-raw', '/robots-txt', '/llm-txt'];
  const shouldHideLayout = noLayoutRoutes.includes(location.pathname);

  if (shouldHideLayout) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden m-0 p-0">
      <Header />
      <AnimatePresence mode="wait">
        {children}
      </AnimatePresence>
      <Footer />
    </div>
  );
}

function AppRoutes() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        {/* Homepage - loaded immediately, no lazy loading */}
        <Route path="/" element={<HomePage />} />
        
        {/* Redirect routes */}
        {REDIRECT_ROUTES.map(({ from, to }) => (
          <Route key={from} path={from} element={<Navigate to={to} replace />} />
        ))}
        
        {/* About routes */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/our-story" element={<OurStoryPage />} />
        
        {/* Service routes */}
        <Route path="/services" element={<ServicesPage />} />
        {SERVICE_ROUTES.map(({ path, service }) => (
          <Route key={path} path={`/services/${path}`} element={<ServiceDetailPage service={service} />} />
        ))}
        
        {/* Main service pages */}
        <Route path="/web-design" element={<WebDesignPage />} />
        <Route path="/virtual-tours" element={<VirtualToursPage />} />
        <Route path="/digital-marketing" element={<DigitalMarketingPage />} />
        <Route path="/videography" element={<VideographyPage />} />
        
        {/* Specialized service pages */}
        <Route path="/strategic-seo" element={<StrategicSEOPage />} />
        <Route path="/artificial-intelligence-optimization" element={<AIOptimizationPage />} />
        <Route path="/digital-marketing-areas" element={<DigitalMarketingAreasPage />} />
        <Route path="/Google-Business-Profile-Growth-Managed-Essentials" element={<GoogleBusinessProfileGrowthPage />} />
        <Route path="/Google-Business-Profile-Professional-Complete-Management" element={<GoogleBusinessProfileProfessionalPage />} />
        <Route path="/Google-Business-Profile-Foundation-Audit-&-Setup" element={<GoogleBusinessProfileFoundationPage />} />
        <Route path="/Google-Business-Profile-Concierge-Ultimate-Visibility" element={<GoogleBusinessProfileEinsteinium />} />
        <Route path="/Google-Business-Profile-Growth-Enhanced-Essentials" element={<GoogleBusinessProfileGrowthEnhancedPage />} />
        
        {/* Location-specific digital marketing pages */}
        {LOCATION_ROUTES.map(location => (
          <Route 
            key={location} 
            path={`/digital-marketing-${location}`} 
            element={<LocationMarketingPage location={location} />} 
          />
        ))}
        
        {/* Store routes */}
        <Route path="/store" element={<StorePage />} />
        <Route path="/store/p/:productSlug" element={<ProductPage />} />
        
        {/* Content routes */}
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        
        {/* Contact routes */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/get-a-quote" element={<QuotePage />} />
        
        {/* Legal pages */}
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        <Route path="/design-transfer-agreement" element={<DesignTransferAgreementPage />} />
        
        {/* SEO and Technical pages - extensionless URLs for Figma Make compatibility */}
        <Route path="/sitemap" element={<SitemapPage />} />
        <Route path="/sitemap-xml" element={<SitemapRawXmlPage />} />
        <Route path="/sitemap-raw" element={<SitemapRawXmlPage />} />
        <Route path="/robots-txt" element={<RobotsTxtPlain />} />
        <Route path="/robots" element={<RobotsPage />} />
        <Route path="/llm-txt" element={<LlmPage />} />
        
        {/* Admin */}
        <Route path="/admin" element={<AdminPage />} />
        
        {/* Catch-all route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Analytics />
        <SEOPreloader />
        <Layout>
          <AppRoutes />
        </Layout>
      </Router>
    </HelmetProvider>
  );
}
