// GA4 Analytics Tracking Utilities
// Comprehensive event tracking for user interactions

export interface GA4Event {
  action: string;
  category: string;
  label?: string;
  value?: number;
  [key: string]: any;
}

// Track custom GA4 event
export const trackEvent = (event: GA4Event) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', event.action, {
    event_category: event.category,
    event_label: event.label,
    value: event.value,
    ...event
  });
};

// Track page view
export const trackPageView = (path: string, title: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: title,
    page_location: window.location.href
  });
};

// Track phone call clicks
export const trackPhoneCall = (phoneNumber: string, location: string) => {
  trackEvent({
    action: 'phone_call',
    category: 'engagement',
    label: `${location} - ${phoneNumber}`,
    phone_number: phoneNumber,
    call_location: location
  });
};

// Track form submissions
export const trackFormSubmission = (formName: string, formLocation: string) => {
  trackEvent({
    action: 'form_submission',
    category: 'conversion',
    label: formName,
    form_location: formLocation
  });
};

// Track form starts
export const trackFormStart = (formName: string) => {
  trackEvent({
    action: 'form_start',
    category: 'engagement',
    label: formName
  });
};

// Track form errors
export const trackFormError = (formName: string, errorField: string, errorMessage: string) => {
  trackEvent({
    action: 'form_error',
    category: 'errors',
    label: `${formName} - ${errorField}`,
    error_message: errorMessage
  });
};

// Track CTA clicks
export const trackCTAClick = (ctaText: string, ctaLocation: string, destination?: string) => {
  trackEvent({
    action: 'cta_click',
    category: 'engagement',
    label: ctaText,
    cta_location: ctaLocation,
    ...(destination && { destination_url: destination })
  });
};

// Track button clicks
export const trackButtonClick = (buttonText: string, buttonLocation: string) => {
  trackEvent({
    action: 'button_click',
    category: 'engagement',
    label: buttonText,
    button_location: buttonLocation
  });
};

// Track scroll depth
export const trackScrollDepth = (percentage: number, pagePath: string) => {
  trackEvent({
    action: 'scroll_depth',
    category: 'engagement',
    label: `${percentage}%`,
    value: percentage,
    page_path: pagePath
  });
};

// Track outbound link clicks
export const trackOutboundLink = (url: string, linkText: string, linkLocation: string) => {
  trackEvent({
    action: 'outbound_click',
    category: 'engagement',
    label: linkText,
    outbound_url: url,
    link_location: linkLocation
  });
};

// Track video engagement
export const trackVideoPlay = (videoTitle: string, videoUrl: string) => {
  trackEvent({
    action: 'video_play',
    category: 'engagement',
    label: videoTitle,
    video_url: videoUrl
  });
};

export const trackVideoPause = (videoTitle: string, currentTime: number, duration: number) => {
  const percentWatched = Math.round((currentTime / duration) * 100);
  trackEvent({
    action: 'video_pause',
    category: 'engagement',
    label: videoTitle,
    video_percent: percentWatched,
    video_current_time: Math.round(currentTime)
  });
};

export const trackVideoComplete = (videoTitle: string, duration: number) => {
  trackEvent({
    action: 'video_complete',
    category: 'engagement',
    label: videoTitle,
    video_duration: Math.round(duration)
  });
};

// Track file downloads
export const trackFileDownload = (fileName: string, fileType: string, fileUrl: string) => {
  trackEvent({
    action: 'file_download',
    category: 'engagement',
    label: fileName,
    file_type: fileType,
    file_url: fileUrl
  });
};

// Track search
export const trackSearch = (searchTerm: string, resultsCount?: number) => {
  trackEvent({
    action: 'search',
    category: 'engagement',
    label: searchTerm,
    search_term: searchTerm,
    ...(resultsCount !== undefined && { results_count: resultsCount })
  });
};

// Track social shares
export const trackSocialShare = (platform: string, contentTitle: string, contentUrl: string) => {
  trackEvent({
    action: 'social_share',
    category: 'engagement',
    label: platform,
    content_title: contentTitle,
    content_url: contentUrl,
    social_platform: platform
  });
};

// Track newsletter subscription
export const trackNewsletterSignup = (location: string, email?: string) => {
  trackEvent({
    action: 'newsletter_signup',
    category: 'conversion',
    label: location,
    signup_location: location
  });
};

// Track chat interactions
export const trackChatOpen = () => {
  trackEvent({
    action: 'chat_open',
    category: 'engagement',
    label: 'Live Chat'
  });
};

export const trackChatMessage = (messageNumber: number) => {
  trackEvent({
    action: 'chat_message',
    category: 'engagement',
    label: 'Live Chat',
    message_number: messageNumber
  });
};

// Track service page views
export const trackServiceView = (serviceName: string, serviceCategory: string) => {
  trackEvent({
    action: 'service_view',
    category: 'engagement',
    label: serviceName,
    service_name: serviceName,
    service_category: serviceCategory
  });
};

// Track quote requests
export const trackQuoteRequest = (serviceType: string, estimatedValue?: number) => {
  trackEvent({
    action: 'quote_request',
    category: 'conversion',
    label: serviceType,
    service_type: serviceType,
    ...(estimatedValue && { estimated_value: estimatedValue })
  });
};

// Track time on page
export const trackTimeOnPage = (pagePath: string, timeInSeconds: number) => {
  trackEvent({
    action: 'time_on_page',
    category: 'engagement',
    label: pagePath,
    value: Math.round(timeInSeconds),
    page_path: pagePath
  });
};

// Track navigation clicks
export const trackNavigation = (navItem: string, navLocation: 'header' | 'footer' | 'mobile' | 'sidebar') => {
  trackEvent({
    action: 'navigation_click',
    category: 'engagement',
    label: navItem,
    nav_location: navLocation
  });
};

// Track accordion/collapsible interactions
export const trackAccordionToggle = (accordionTitle: string, action: 'open' | 'close') => {
  trackEvent({
    action: `accordion_${action}`,
    category: 'engagement',
    label: accordionTitle
  });
};

// Track tab interactions
export const trackTabChange = (tabName: string, tabGroup: string) => {
  trackEvent({
    action: 'tab_change',
    category: 'engagement',
    label: tabName,
    tab_group: tabGroup
  });
};

// Track errors
export const trackError = (errorType: string, errorMessage: string, errorLocation: string) => {
  trackEvent({
    action: 'error',
    category: 'errors',
    label: errorType,
    error_type: errorType,
    error_message: errorMessage,
    error_location: errorLocation
  });
};

// Track conversion funnel steps
export const trackFunnelStep = (funnelName: string, stepNumber: number, stepName: string) => {
  trackEvent({
    action: 'funnel_step',
    category: 'conversion',
    label: `${funnelName} - ${stepName}`,
    funnel_name: funnelName,
    step_number: stepNumber,
    step_name: stepName
  });
};

// Initialize scroll tracking
export const initScrollTracking = (thresholds: number[] = [25, 50, 75, 90, 100]) => {
  if (typeof window === 'undefined') return;
  
  let scrollThresholds = new Set(thresholds);
  const tracked = new Set<number>();
  
  const handleScroll = () => {
    const scrollPercent = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );
    
    scrollThresholds.forEach(threshold => {
      if (scrollPercent >= threshold && !tracked.has(threshold)) {
        tracked.add(threshold);
        trackScrollDepth(threshold, window.location.pathname);
      }
    });
  };
  
  window.addEventListener('scroll', handleScroll, { passive: true });
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};

// Initialize time on page tracking
export const initTimeOnPageTracking = () => {
  if (typeof window === 'undefined') return;
  
  const startTime = Date.now();
  const pagePath = window.location.pathname;
  
  const trackTime = () => {
    const timeInSeconds = (Date.now() - startTime) / 1000;
    trackTimeOnPage(pagePath, timeInSeconds);
  };
  
  // Track time on page before user leaves
  window.addEventListener('beforeunload', trackTime);
  
  // Also track at intervals (30 seconds, 60 seconds, etc.)
  const intervals = [30, 60, 120, 300].map(seconds => {
    return setTimeout(() => {
      trackTimeOnPage(pagePath, seconds);
    }, seconds * 1000);
  });
  
  return () => {
    window.removeEventListener('beforeunload', trackTime);
    intervals.forEach(interval => clearTimeout(interval));
  };
};

// Initialize outbound link tracking
export const initOutboundLinkTracking = () => {
  if (typeof window === 'undefined') return;
  
  const handleClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const link = target.closest('a');
    
    if (!link) return;
    
    const href = link.href;
    const isOutbound = href && 
      href.startsWith('http') && 
      !href.includes(window.location.hostname);
    
    if (isOutbound) {
      const linkText = link.textContent || link.getAttribute('aria-label') || 'Unknown';
      const linkLocation = link.closest('[data-location]')?.getAttribute('data-location') || 'Unknown';
      trackOutboundLink(href, linkText, linkLocation);
    }
  };
  
  document.addEventListener('click', handleClick);
  
  return () => {
    document.removeEventListener('click', handleClick);
  };
};

// Initialize phone call tracking
export const initPhoneCallTracking = () => {
  if (typeof window === 'undefined') return;
  
  const handleClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const link = target.closest('a[href^="tel:"]');
    
    if (!link) return;
    
    const href = link.getAttribute('href');
    if (!href) return;
    
    const phoneNumber = href.replace('tel:', '');
    const location = link.closest('[data-location]')?.getAttribute('data-location') || 'Unknown';
    trackPhoneCall(phoneNumber, location);
  };
  
  document.addEventListener('click', handleClick);
  
  return () => {
    document.removeEventListener('click', handleClick);
  };
};

// Global analytics initializer
export const initAnalytics = () => {
  const cleanups: (() => void)[] = [];
  
  // Initialize all tracking
  const scrollCleanup = initScrollTracking();
  const timeCleanup = initTimeOnPageTracking();
  const outboundCleanup = initOutboundLinkTracking();
  const phoneCleanup = initPhoneCallTracking();
  
  if (scrollCleanup) cleanups.push(scrollCleanup);
  if (timeCleanup) cleanups.push(timeCleanup);
  if (outboundCleanup) cleanups.push(outboundCleanup);
  if (phoneCleanup) cleanups.push(phoneCleanup);
  
  return () => {
    cleanups.forEach(cleanup => cleanup());
  };
};
