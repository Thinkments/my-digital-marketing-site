import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Analytics from './components/Analytics';
import SEOPreloader from './components/SEOPreloader';

// Page Imports
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import OurStoryPage from './components/pages/OurStoryPage';
import ServicesPage from './components/pages/ServicesPage';
import ServiceDetailPage from './components/pages/ServiceDetailPage';
import WebDesignPage from './components/pages/WebDesignPage';
import VirtualToursPage from './components/pages/VirtualToursPage';
import DigitalMarketingPage from './components/pages/DigitalMarketingPage';

import VideographyPage from './components/pages/VideographyPage';
import StrategicSEOPage from './components/pages/StrategicSEOPage';
import AIOptimizationPage from './components/pages/AIOptimizationPage';
import AIPodcastProductionPage from './components/pages/AIPodcastProductionPage';
import AiThreeDGenerationPage from './components/AiThreeDGenerationPage';
import DigitalMarketingAreasPage from './components/pages/DigitalMarketingAreasPage';
import LocationMarketingPage from './components/pages/LocationMarketingPage';
import GoogleBusinessProfileGrowthPage from './components/pages/GoogleBusinessProfileGrowthPage';
import GoogleBusinessProfileProfessionalPage from './components/pages/GoogleBusinessProfileProfessionalPage';
import GoogleBusinessProfileFoundationPage from './components/pages/GoogleBusinessProfileFoundationPage';
import GoogleBusinessProfileConciergePage from './components/pages/GoogleBusinessProfileConciergePage';
import GoogleBusinessProfileEinsteinium from './components/pages/GoogleBusinessProfileEinsteinium';
import GoogleBusinessProfileGrowthEnhancedPage from './components/pages/GoogleBusinessProfileGrowthEnhancedPage';
import CaseStudiesPage from './components/pages/CaseStudiesPage';
import BlogPage from './components/pages/BlogPage';
import BlogPostPage from './components/pages/BlogPostPage';
import QuotePage from './components/pages/QuotePage';
import StorePage from './components/pages/StorePage';
import ProductPage from './components/pages/ProductPage';
import PrivacyPolicyPage from './components/pages/PrivacyPolicyPage';
import TermsOfServicePage from './components/pages/TermsOfServicePage';
import DesignTransferAgreementPage from './components/pages/DesignTransferAgreementPage';
import SitemapPage from './components/pages/SitemapPage';
import SitemapXmlPage from './components/pages/SitemapXmlPage';
import SitemapRawXmlPage from './components/pages/SitemapRawXmlPage';
import RobotsPage from './components/pages/RobotsPage';
import RobotsTxtPlain from './components/pages/RobotsTxtPlain';
import RobotsTestPage from './components/pages/RobotsTestPage';
import LlmPage from './components/pages/LlmPage';
import AdminPage from './components/pages/AdminPage';
import LeadsManager from './components/pages/admin/LeadsManager';

// Route Configurations
import { LOCATION_ROUTES, SERVICE_ROUTES, REDIRECT_ROUTES } from './config/routes';

// Layout component that conditionally renders Header and Footer
function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  
  // Routes that should not have Header/Footer (raw XML/text routes)
  const noLayoutRoutes = ['/sitemap-xml', '/sitemap.xml', '/sitemap-raw', '/robots-txt', '/llm-txt'];
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
    <Routes>
      {/* Homepage */}
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
      <Route path="/ai-podcast-production" element={<AIPodcastProductionPage />} />
      <Route path="/ai-3d-generation" element={<AiThreeDGenerationPage />} />
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
      <Route path="/get-a-quote" element={<QuotePage />} />
      
      {/* Legal pages */}
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/terms-of-service" element={<TermsOfServicePage />} />
      <Route path="/design-transfer-agreement" element={<DesignTransferAgreementPage />} />
      
      {/* SEO and Technical pages - extensionless URLs for Figma Make compatibility */}
      <Route path="/sitemap" element={<SitemapPage />} />
      <Route path="/sitemap.xml" element={<SitemapXmlPage />} />
      <Route path="/sitemap-xml" element={<SitemapRawXmlPage />} />
      <Route path="/sitemap-raw" element={<SitemapRawXmlPage />} />
      <Route path="/robots-txt" element={<RobotsTxtPlain />} />
      <Route path="/robots" element={<RobotsPage />} />
      <Route path="/llm-txt" element={<LlmPage />} />
      
      {/* Admin */}
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/admin/leads" element={<LeadsManager />} />
      
      {/* Catch-all route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
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
