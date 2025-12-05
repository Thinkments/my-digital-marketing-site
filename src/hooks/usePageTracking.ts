import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../utils/analytics';

export function usePageTracking(pageTitle?: string) {
  const location = useLocation();
  
  useEffect(() => {
    // Track page view on mount and location change
    const title = pageTitle || document.title;
    trackPageView(location.pathname, title);
  }, [location.pathname, pageTitle]);
}
