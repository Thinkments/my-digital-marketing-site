import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { SEOHead } from './SEOHead';
import { Breadcrumbs, BreadcrumbItem } from './Breadcrumbs';
import { initAnalytics } from '../utils/analytics';
import type { SEOConfig } from '../utils/seo';

interface PageWrapperProps {
  seo: SEOConfig;
  breadcrumbs?: BreadcrumbItem[];
  children: React.ReactNode;
  className?: string;
}

export function PageWrapper({ seo, breadcrumbs, children, className = '' }: PageWrapperProps) {
  useEffect(() => {
    // Initialize analytics tracking on mount
    const cleanup = initAnalytics();
    return cleanup;
  }, []);
  
  return (
    <>
      <SEOHead {...seo} />
      <motion.div
        className={`min-h-screen ${className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="container mx-auto px-4 pt-24 pb-4">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}
        {children}
      </motion.div>
    </>
  );
}
