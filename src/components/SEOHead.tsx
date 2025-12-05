import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { updateMetaTags, injectSchema, SEOConfig } from '../utils/seo';

interface SEOHeadProps extends SEOConfig {
  schema?: any | any[];
  children?: React.ReactNode;
}

export function SEOHead({ schema, children, ...seoConfig }: SEOHeadProps) {
  const location = useLocation();
  
  useEffect(() => {
    // Update meta tags when component mounts or config changes
    updateMetaTags(seoConfig);
    
    // Inject schema(s) if provided
    const cleanupFunctions: (() => void)[] = [];
    
    if (schema) {
      if (Array.isArray(schema)) {
        schema.forEach(s => {
          const cleanup = injectSchema(s);
          if (cleanup) cleanupFunctions.push(cleanup);
        });
      } else {
        const cleanup = injectSchema(schema);
        if (cleanup) cleanupFunctions.push(cleanup);
      }
    }
    
    // Cleanup function to remove injected schemas
    return () => {
      cleanupFunctions.forEach(cleanup => cleanup());
    };
  }, [location.pathname, seoConfig.title, schema]);
  
  return <>{children}</>;
}
