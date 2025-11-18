export interface PageSEOConfig {
  title: string;
  description: string;
  keywords: string;
  url: string;
  type: 'website' | 'article' | 'product' | 'service';
  image?: string;
  structuredData?: object;
  noindex?: boolean;
}

export const seoConfigs: Record<string, PageSEOConfig> = {
  home: {
    title: 'ThinkMents - Digital Marketing & Web Design Agency in Decatur, Texas',
    description: 'Professional digital marketing, web design, and SEO services in Decatur, Texas. Helping local businesses grow with custom websites, strategic marketing, and proven results. 10+ years Google Partner.',
    keywords: 'digital marketing, web design, SEO, Decatur Texas, local business marketing, website development, social media marketing, Google Ads, ThinkMents',
    url: '/',
    type: 'website'
  },
  about: {
    title: 'About ThinkMents - Digital Marketing Experts in Decatur, Texas',
    description: 'Learn about ThinkMents, a leading digital marketing agency in Decatur, Texas. Our team of experts helps businesses grow through innovative marketing strategies and proven results.',
    keywords: 'about ThinkMents, digital marketing team, Decatur Texas agency, marketing experts, web design professionals',
    url: '/about',
    type: 'website'
  },
  'our-story': {
    title: 'Our Story - ThinkMents Digital Marketing Journey',
    description: 'Discover the story behind ThinkMents and how we became a trusted digital marketing partner for businesses in Decatur, Texas and beyond.',
    keywords: 'ThinkMents story, company history, digital marketing journey, Decatur Texas business',
    url: '/our-story',
    type: 'website'
  },
  services: {
    title: 'Digital Marketing Services - ThinkMents Decatur Texas',
    description: 'Comprehensive digital marketing services in Decatur, Texas including web design, SEO, Google Ads, social media marketing, videography, and virtual tours. Free consultation available.',
    keywords: 'digital marketing services, web design Decatur TX, SEO services, Google Ads management, social media marketing, videography, virtual tours',
    url: '/services',
    type: 'website'
  },
  'web-design': {
    title: 'Professional Web Design Services - ThinkMents Decatur Texas',
    description: 'Custom website design and development services in Decatur, Texas. Mobile-responsive, SEO-optimized websites that convert visitors into customers.',
    keywords: 'web design Decatur TX, website development, mobile responsive design, custom websites, e-commerce development',
    url: '/web-design',
    type: 'service'
  },
  'digital-marketing': {
    title: 'Digital Marketing Services - Drive Growth in Decatur Texas',
    description: 'Full-service digital marketing solutions in Decatur, Texas. Increase your online presence, drive traffic, and boost sales with our proven strategies.',
    keywords: 'digital marketing Decatur TX, online marketing, digital advertising, marketing strategy, business growth',
    url: '/digital-marketing',
    type: 'service'
  },
  'strategic-seo': {
    title: 'SEO Services - Rank Higher in Decatur Texas Search Results',
    description: 'Professional SEO services in Decatur, Texas. Improve your search rankings, drive organic traffic, and increase visibility with our strategic SEO approach.',
    keywords: 'SEO services Decatur TX, search engine optimization, local SEO, organic traffic, Google rankings',
    url: '/strategic-seo',
    type: 'service'
  },
  'virtual-tours': {
    title: 'Virtual Tours & 360° Photography - ThinkMents Decatur Texas',
    description: 'Professional virtual tours and 360° photography services in Decatur, Texas. Showcase your business with immersive experiences that engage customers.',
    keywords: '360 photography Decatur TX, virtual tours, Google Street View, immersive photography, business tours',
    url: '/virtual-tours',
    type: 'service'
  },

  'videography': {
    title: 'Professional Videography Services - ThinkMents Decatur Texas',
    description: 'Professional video production services in Decatur, Texas. Corporate videos, promotional content, and marketing videos that tell your story.',
    keywords: 'videography Decatur TX, video production, corporate videos, promotional videos, marketing content',
    url: '/videography',
    type: 'service'
  },
  'artificial-intelligence-optimization': {
    title: 'AI Optimization Services - Advanced Marketing in Decatur Texas',
    description: 'Artificial intelligence optimization services in Decatur, Texas. Leverage AI technology to improve your marketing performance and business operations.',
    keywords: 'AI optimization Decatur TX, artificial intelligence marketing, automated marketing, AI technology, smart marketing',
    url: '/artificial-intelligence-optimization',
    type: 'service'
  },
  'case-studies': {
    title: 'Case Studies - Proven Digital Marketing Results in Decatur Texas',
    description: 'View our digital marketing case studies and success stories from Decatur, Texas businesses. See real results and ROI from our marketing strategies.',
    keywords: 'digital marketing case studies, marketing results, success stories, ROI, Decatur Texas businesses',
    url: '/case-studies',
    type: 'website'
  },
  blog: {
    title: 'Digital Marketing Blog - Tips & Insights from ThinkMents',
    description: 'Digital marketing blog with tips, insights, and industry news. Stay updated on the latest marketing trends and strategies from ThinkMents experts.',
    keywords: 'digital marketing blog, marketing tips, SEO insights, business growth, marketing trends',
    url: '/blog',
    type: 'website'
  },
  contact: {
    title: 'Contact ThinkMents - Digital Marketing Agency in Decatur, Texas',
    description: 'Contact ThinkMents for professional digital marketing and web design services in Decatur, Texas. Call (940) 539-3074 or email Info@thinkments.com. Free consultations available.',
    keywords: 'contact ThinkMents, digital marketing Decatur TX, web design contact, marketing agency contact, Decatur Texas marketing',
    url: '/contact',
    type: 'website'
  },
  'get-a-quote': {
    title: 'Get a Quote - Free Digital Marketing Consultation | ThinkMents',
    description: 'Get a free quote for digital marketing services in Decatur, Texas. Custom proposals for web design, SEO, social media marketing, and more.',
    keywords: 'digital marketing quote, free consultation, marketing proposal, web design quote, SEO pricing',
    url: '/get-a-quote',
    type: 'website'
  },
  store: {
    title: 'Marketing Products & Services Store - ThinkMents',
    description: 'Browse our digital marketing products and services. Templates, tools, and resources to help your business succeed online.',
    keywords: 'marketing products, digital tools, marketing templates, business resources, online store',
    url: '/store',
    type: 'website'
  },
  'privacy-policy': {
    title: 'Privacy Policy - ThinkMents Digital Marketing Agency',
    description: 'ThinkMents privacy policy outlining how we collect, use, and protect your personal information and data.',
    keywords: 'privacy policy, data protection, information security, user privacy',
    url: '/privacy-policy',
    type: 'website',
    noindex: true
  },
  'terms-of-service': {
    title: 'Terms of Service - ThinkMents Digital Marketing Agency',
    description: 'Terms of service for ThinkMents digital marketing and web design services. Read our service terms and conditions.',
    keywords: 'terms of service, service agreement, terms and conditions, legal terms',
    url: '/terms-of-service',
    type: 'website',
    noindex: true
  },
  'design-transfer-agreement': {
    title: 'Design Transfer Agreement - ThinkMents',
    description: 'Design transfer agreement terms and conditions for ThinkMents web design and graphic design services.',
    keywords: 'design transfer agreement, design rights, intellectual property, design terms',
    url: '/design-transfer-agreement',
    type: 'website',
    noindex: true
  },
  sitemap: {
    title: 'Sitemap - ThinkMents Digital Marketing Website Navigation',
    description: 'Complete sitemap of ThinkMents digital marketing website. Find all our pages including services, locations, case studies, and contact information.',
    keywords: 'sitemap, website navigation, ThinkMents pages, digital marketing services, locations served',
    url: '/sitemap',
    type: 'website'
  }
};

// Location-specific pages
export const locationSeoConfigs: Record<string, PageSEOConfig> = {
  'digital-marketing-decatur': {
    title: 'Digital Marketing Services in Decatur, Texas - ThinkMents',
    description: 'Professional digital marketing services in Decatur, TX. Local SEO, web design, and marketing strategies to help Decatur businesses grow.',
    keywords: 'digital marketing Decatur TX, Decatur digital marketing, local marketing Decatur, SEO Decatur Texas',
    url: '/digital-marketing-decatur',
    type: 'service'
  },
  'digital-marketing-denton': {
    title: 'Digital Marketing Services in Denton, Texas - ThinkMents',
    description: 'Professional digital marketing services in Denton, TX. Help your Denton business grow with expert SEO, web design, and marketing strategies.',
    keywords: 'digital marketing Denton TX, Denton digital marketing, local marketing Denton, SEO Denton Texas',
    url: '/digital-marketing-denton',
    type: 'service'
  },
  'digital-marketing-fort-worth': {
    title: 'Digital Marketing Services in Fort Worth, Texas - ThinkMents',
    description: 'Professional digital marketing services in Fort Worth, TX. Boost your Fort Worth business with expert marketing, SEO, and web design.',
    keywords: 'digital marketing Fort Worth TX, Fort Worth digital marketing, local marketing Fort Worth, SEO Fort Worth',
    url: '/digital-marketing-fort-worth',
    type: 'service'
  },
  'digital-marketing-dallas': {
    title: 'Digital Marketing Services in Dallas, Texas - ThinkMents',
    description: 'Professional digital marketing services in Dallas, TX. Help your Dallas business succeed with strategic marketing and SEO services.',
    keywords: 'digital marketing Dallas TX, Dallas digital marketing, local marketing Dallas, SEO Dallas Texas',
    url: '/digital-marketing-dallas',
    type: 'service'
  }
};

export function getSeoConfig(path: string): PageSEOConfig | null {
  // Remove leading slash for consistency
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Check main configs
  if (seoConfigs[cleanPath]) {
    return seoConfigs[cleanPath];
  }
  
  // Check location configs
  if (locationSeoConfigs[cleanPath]) {
    return locationSeoConfigs[cleanPath];
  }
  
  // Return null if no config found
  return null;
}