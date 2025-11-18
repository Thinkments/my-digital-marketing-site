import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from './SEO';
import { getSeoConfig, PageSEOConfig } from '../config/seoConfig';

interface UseSEOOptions {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  structuredData?: object;
  noindex?: boolean;
  canonical?: string;
}

export function useSEO(customConfig?: UseSEOOptions) {
  const location = useLocation();
  
  // Get default config based on current path
  const defaultConfig = getSeoConfig(location.pathname);
  
  // Merge default and custom configs
  const seoConfig: PageSEOConfig = {
    title: customConfig?.title || defaultConfig?.title || 'ThinkMents - Digital Marketing & Web Design Agency',
    description: customConfig?.description || defaultConfig?.description || 'Professional digital marketing and web design services',
    keywords: customConfig?.keywords || defaultConfig?.keywords || 'digital marketing, web design, SEO',
    url: location.pathname,
    type: customConfig?.type || defaultConfig?.type || 'website',
    image: customConfig?.image || defaultConfig?.image,
    structuredData: customConfig?.structuredData || defaultConfig?.structuredData,
    noindex: customConfig?.noindex || defaultConfig?.noindex || false,
    canonical: customConfig?.canonical || defaultConfig?.canonical
  };

  return seoConfig;
}

// Component version for easy usage in page components
interface SEOWrapperProps {
  children: React.ReactNode;
  config?: UseSEOOptions;
}

export function SEOWrapper({ children, config }: SEOWrapperProps) {
  const seoConfig = useSEO(config);
  
  return (
    <>
      <SEO
        title={seoConfig.title}
        description={seoConfig.description}
        keywords={seoConfig.keywords}
        url={seoConfig.url}
        type={seoConfig.type}
        image={seoConfig.image}
        structuredData={seoConfig.structuredData}
        noindex={seoConfig.noindex}
        canonical={seoConfig.canonical}
      />
      {children}
    </>
  );
}