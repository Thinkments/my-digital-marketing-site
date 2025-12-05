/**
 * Comprehensive SEO Configuration for all ThinkMents pages
 * Includes meta tags, Open Graph, Twitter Cards, and structured data
 */

export interface PageSEO {
  title: string;
  description: string;
  keywords: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  canonical?: string;
  type?: 'website' | 'article' | 'service' | 'product';
}

export const SEO_PAGES: Record<string, PageSEO> = {
  home: {
    title: 'ThinkMents - Digital Marketing Agency in Decatur, Texas | Web Design & SEO',
    description: 'Leading digital marketing agency in Decatur, TX specializing in web design, SEO, Google Ads, social media marketing, videography, and virtual tours. 10+ years Google Partner. Get results-driven marketing solutions.',
    keywords: 'digital marketing Decatur TX, web design Decatur Texas, SEO services Decatur, Google Partner agency Texas, social media marketing Decatur, videography services Texas, virtual tours Decatur, local business marketing',
    ogImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop',
    twitterCard: 'summary_large_image',
    type: 'website'
  },
  
  about: {
    title: 'About ThinkMents - Digital Marketing Experts in Decatur, TX',
    description: 'Learn about ThinkMents, a trusted digital marketing agency in Decatur, Texas with 10+ years as a Google Partner. Meet our team of experts dedicated to helping local businesses succeed online.',
    keywords: 'about ThinkMents, digital marketing team Decatur, Google Partner agency, Texas marketing experts, local business marketing team',
    ogImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=630&fit=crop',
    type: 'website'
  },
  
  ourStory: {
    title: 'Our Story - ThinkMents Digital Marketing Journey',
    description: 'Discover how ThinkMents became Decatur\'s premier digital marketing agency. From startup to 10-year Google Partner, learn about our commitment to client success and community growth.',
    keywords: 'ThinkMents story, digital marketing history, Decatur business growth, agency background, marketing success stories',
    ogImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=630&fit=crop',
    type: 'article'
  },
  
  services: {
    title: 'Digital Marketing Services - Web Design, SEO & More | ThinkMents',
    description: 'Comprehensive digital marketing services in Decatur, TX. Web design, SEO, Google Ads management, social media marketing, videography, virtual tours, and AI-powered solutions. Custom packages available.',
    keywords: 'digital marketing services, web design packages, SEO services, Google Ads management, social media packages, videography services, virtual tour solutions, AI marketing tools',
    ogImage: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=630&fit=crop',
    type: 'service'
  },
  
  webDesign: {
    title: 'Professional Web Design & Development Services | ThinkMents Decatur TX',
    description: 'Custom web design and development in Decatur, Texas. Responsive, SEO-optimized websites built for conversions. E-commerce, mobile-first design, and ongoing support. Free consultation available.',
    keywords: 'web design Decatur TX, custom website development, responsive web design, e-commerce websites, mobile web design, WordPress development, web design agency Texas',
    ogImage: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&h=630&fit=crop',
    type: 'service'
  },
  
  virtualTours: {
    title: '360° Virtual Tours & Photography Services | ThinkMents Texas',
    description: 'Professional 360-degree virtual tours and photography in Texas. Immersive experiences for real estate, businesses, and tourism. Google Street View certified. Showcase your space online.',
    keywords: '360 virtual tours, virtual tour photography, Google Street View, business virtual tours, real estate virtual tours, 360 photography Texas, immersive tours',
    ogImage: 'https://images.unsplash.com/photo-1618609377864-68609b857e90?w=1200&h=630&fit=crop',
    type: 'service'
  },
  
  digitalMarketing: {
    title: 'Digital Marketing Services - SEO, PPC & Social Media | ThinkMents',
    description: 'Full-service digital marketing in Decatur, TX. Expert SEO, Google Ads (PPC), social media management, email marketing, and content strategy. 10-year Google Partner. Proven ROI results.',
    keywords: 'digital marketing services, SEO agency, PPC management, Google Ads expert, social media marketing, email marketing, content marketing, marketing strategy Texas',
    ogImage: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&h=630&fit=crop',
    type: 'service'
  },
  
  videography: {
    title: 'Professional Videography Services - Commercial & Marketing | ThinkMents',
    description: 'Expert videography services in Decatur, Texas. Commercial videos, promotional content, social media videos, drone footage, and video marketing. Engage audiences with compelling visual stories.',
    keywords: 'professional videography, commercial video production, marketing videos, social media video content, drone videography, video marketing services, promotional videos Texas',
    ogImage: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&h=630&fit=crop',
    type: 'service'
  },
  
  strategicSEO: {
    title: 'Strategic SEO Services - Rank Higher on Google | ThinkMents Decatur',
    description: 'Advanced SEO services in Decatur, TX. Comprehensive keyword research, on-page optimization, technical SEO, link building, and local SEO. Increase organic traffic and rankings with proven strategies.',
    keywords: 'strategic SEO services, SEO agency Decatur, local SEO, keyword research, on-page optimization, technical SEO, link building, organic traffic growth',
    ogImage: 'https://images.unsplash.com/photo-1571677208059-7c0d4e5b9f5e?w=1200&h=630&fit=crop',
    type: 'service'
  },
  
  aiOptimization: {
    title: 'AI Optimization Services - LLM & Search Engine AI | ThinkMents',
    description: 'Cutting-edge AI optimization for search engines and LLMs. Optimize content for ChatGPT, Gemini, Claude, and Perplexity. Future-proof your digital presence with AI-first SEO strategies.',
    keywords: 'AI optimization, LLM optimization, ChatGPT SEO, AI search engines, Perplexity optimization, Gemini search, Claude AI, AI-first marketing, generative engine optimization',
    ogImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=630&fit=crop',
    type: 'service'
  },
  
  aiPodcast: {
    title: 'AI Podcast Production Services - Automated Content Creation | ThinkMents',
    description: 'Revolutionary AI-powered podcast production. Convert blog content to engaging podcasts with natural AI voices. Multi-language support, automated editing, and distribution. Scale your audio content effortlessly.',
    keywords: 'AI podcast production, automated podcast creation, text to speech podcast, AI voice generation, podcast automation, content repurposing, AI audio production',
    ogImage: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=1200&h=630&fit=crop',
    type: 'service'
  },
  
  ai3DGeneration: {
    title: 'AI 3D Model Generation Services - Professional 3D Assets | ThinkMents',
    description: 'Professional AI-powered 3D model generation services. Create high-quality 3D assets for marketing, e-commerce, gaming, and AR/VR. Fast turnaround, photorealistic results, multiple formats supported.',
    keywords: 'AI 3D generation, 3D model creation, AI 3D assets, product 3D modeling, 3D rendering services, AI generated models, 3D visualization, AR VR assets',
    ogImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=630&fit=crop',
    type: 'service'
  },
  
  locationMarketing: {
    title: 'Local Digital Marketing in {city}, Texas | ThinkMents',
    description: 'Expert digital marketing services in {city}, TX. Local SEO, Google My Business optimization, location-based advertising, and community-focused marketing strategies. Dominate local search results.',
    keywords: 'digital marketing {city} TX, local SEO {city}, Google My Business {city}, local advertising Texas, {city} marketing agency, location-based marketing',
    ogImage: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=630&fit=crop',
    type: 'service'
  },
  
  gbpGrowth: {
    title: 'Google Business Profile Growth Package - Managed Essentials | ThinkMents',
    description: 'Google Business Profile Growth package with monthly updates, review management, post scheduling, and Q&A monitoring. Boost local visibility and engagement. Starting at competitive rates.',
    keywords: 'Google Business Profile management, GBP optimization, Google My Business posts, review management, local SEO package, GMB growth',
    ogImage: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=630&fit=crop',
    type: 'service'
  },
  
  gbpProfessional: {
    title: 'Google Business Profile Professional - Complete Management | ThinkMents',
    description: 'Professional Google Business Profile management with weekly updates, premium content creation, review responses, messaging management, and detailed analytics. Maximize your local presence.',
    keywords: 'professional GBP management, Google Business complete service, GMB optimization premium, local business management, Google profile expert',
    ogImage: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=630&fit=crop',
    type: 'service'
  },
  
  gbpFoundation: {
    title: 'Google Business Profile Foundation - Audit & Setup | ThinkMents',
    description: 'Comprehensive Google Business Profile audit and setup service. Profile optimization, category selection, service area setup, and strategic positioning. Build a strong foundation for local success.',
    keywords: 'Google Business Profile setup, GBP audit, GMB optimization, Google profile foundation, local business setup, profile verification',
    ogImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=630&fit=crop',
    type: 'service'
  },
  
  gbpConcierge: {
    title: 'Google Business Profile Concierge - Ultimate Visibility | ThinkMents',
    description: 'Premium Google Business Profile concierge service with daily monitoring, priority support, advanced content strategy, reputation management, and competitive analysis. The ultimate local marketing solution.',
    keywords: 'Google Business concierge, premium GBP service, Google profile VIP, ultimate local SEO, GMB premium management',
    ogImage: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=630&fit=crop',
    type: 'service'
  },
  
  gbpEnhanced: {
    title: 'Google Business Profile Growth Enhanced - Essentials Plus | ThinkMents',
    description: 'Enhanced Google Business Profile management with bi-weekly updates, advanced features, multimedia content, and performance tracking. Take your local presence to the next level.',
    keywords: 'enhanced GBP package, Google Business enhanced, GMB growth plus, advanced local SEO, Google profile optimization',
    ogImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=630&fit=crop',
    type: 'service'
  },
  
  blog: {
    title: 'Digital Marketing Blog - Tips, Strategies & Insights | ThinkMents',
    description: 'Expert digital marketing blog with actionable tips, SEO strategies, social media insights, and industry trends. Learn from 10+ years of marketing experience. Updated regularly with fresh content.',
    keywords: 'digital marketing blog, SEO tips, marketing strategies, social media insights, web design tutorials, marketing trends, business growth tips',
    ogImage: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&h=630&fit=crop',
    type: 'website'
  },
  
  caseStudies: {
    title: 'Case Studies - Real Results from Real Clients | ThinkMents',
    description: 'Explore our digital marketing case studies showcasing real results. See how we\'ve helped businesses increase traffic, improve rankings, and boost conversions. Proven strategies that work.',
    keywords: 'marketing case studies, SEO results, client success stories, digital marketing ROI, campaign results, business growth examples',
    ogImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop',
    type: 'website'
  },
  
  contact: {
    title: 'Contact ThinkMents - Get Your Free Marketing Consultation',
    description: 'Contact ThinkMents for a free digital marketing consultation in Decatur, TX. Discuss your goals, get expert advice, and receive a custom proposal. Call, email, or fill out our contact form today.',
    keywords: 'contact ThinkMents, free marketing consultation, Decatur marketing agency, get a quote, marketing contact form, business consultation Texas',
    ogImage: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&h=630&fit=crop',
    type: 'website'
  },
  
  quote: {
    title: 'Get a Free Quote - Custom Digital Marketing Packages | ThinkMents',
    description: 'Request a free, no-obligation quote for digital marketing services. Custom packages tailored to your business goals and budget. Fast response, transparent pricing, and expert recommendations.',
    keywords: 'digital marketing quote, free marketing proposal, custom marketing package, pricing consultation, marketing cost estimate',
    ogImage: 'https://images.unsplash.com/photo-1554224311-beee2e09c6c0?w=1200&h=630&fit=crop',
    type: 'website'
  },
  
  privacy: {
    title: 'Privacy Policy - ThinkMents Digital Marketing Agency',
    description: 'ThinkMents privacy policy. Learn how we collect, use, and protect your personal information. Committed to transparency and data security for all our clients and website visitors.',
    keywords: 'privacy policy, data protection, information security, GDPR compliance, user privacy',
    ogImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=630&fit=crop',
    type: 'website'
  },
  
  terms: {
    title: 'Terms of Service - ThinkMents Digital Marketing Agency',
    description: 'ThinkMents terms of service for digital marketing, web design, and related services. Review our service agreements, client responsibilities, and business policies.',
    keywords: 'terms of service, service agreement, client terms, business policies, legal terms',
    ogImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=630&fit=crop',
    type: 'website'
  },
  
  designAgreement: {
    title: 'Design Transfer Agreement - Website Ownership & Rights | ThinkMents',
    description: 'ThinkMents design transfer agreement detailing website ownership, intellectual property rights, and file transfers. Clear terms for design handoff and client asset ownership.',
    keywords: 'design transfer agreement, website ownership, intellectual property, design rights, file transfer terms',
    ogImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=630&fit=crop',
    type: 'website'
  }
};

// Helper function to get SEO config with dynamic values
export function getSEOConfig(pageKey: string, dynamicValues?: Record<string, string>): PageSEO {
  let seo = SEO_PAGES[pageKey] || SEO_PAGES.home;
  
  // Replace dynamic values like {city}
  if (dynamicValues) {
    const seoWithDynamics = { ...seo };
    Object.entries(dynamicValues).forEach(([key, value]) => {
      seoWithDynamics.title = seoWithDynamics.title.replace(`{${key}}`, value);
      seoWithDynamics.description = seoWithDynamics.description.replace(`{${key}}`, value);
      seoWithDynamics.keywords = seoWithDynamics.keywords.replace(`{${key}}`, value);
    });
    return seoWithDynamics;
  }
  
  return seo;
}
