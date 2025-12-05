/**
 * Comprehensive FAQ Database for ThinkMents
 * Organized by page/service for reusability across the site
 */

export interface FAQ {
  question: string;
  answer: string;
}

export const GENERAL_FAQS: FAQ[] = [
  {
    question: "What services does ThinkMents offer?",
    answer: "ThinkMents provides comprehensive digital marketing services including web design and development, SEO optimization, Google Ads management, social media marketing, professional videography, 360° virtual tours, AI-powered solutions, and Google Business Profile management. We create custom packages tailored to your business needs."
  },
  {
    question: "How long has ThinkMents been in business?",
    answer: "ThinkMents has been serving businesses in Decatur, Texas and beyond for over a decade. We're proud to be a Google Partner for 10+ years, demonstrating our expertise and commitment to delivering results-driven marketing solutions."
  },
  {
    question: "Do you work with businesses outside of Decatur, Texas?",
    answer: "Yes! While we're based in Decatur, Texas, we serve clients throughout the United States. Our digital marketing services can help businesses anywhere grow their online presence, improve search rankings, and reach their target audiences effectively."
  },
  {
    question: "How much do your services cost?",
    answer: "Our pricing varies based on your specific needs and goals. We offer flexible packages ranging from starter solutions to enterprise-level services. Contact us for a free consultation and custom quote based on your business objectives and budget."
  },
  {
    question: "How long does it take to see results?",
    answer: "Results vary by service. Web design projects typically take 4-8 weeks. SEO results become noticeable in 3-6 months. Google Ads can generate traffic immediately. We provide realistic timelines and set clear expectations during our initial consultation."
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer: "Absolutely! We provide ongoing support and maintenance for all our services. Whether it's website updates, SEO monitoring, ad management, or social media content, we offer monthly packages to ensure your digital presence continues to thrive."
  }
];

export const WEB_DESIGN_FAQS: FAQ[] = [
  {
    question: "How long does it take to build a website?",
    answer: "A typical website project takes 4-8 weeks from start to launch. Smaller sites (5-10 pages) may be completed in 3-4 weeks, while larger, more complex sites with e-commerce or custom features may take 8-12 weeks. We provide a detailed timeline during our planning phase."
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Yes, absolutely! All websites we build are fully responsive and mobile-first, ensuring they look and function perfectly on smartphones, tablets, and desktop computers. Mobile optimization is crucial for user experience and SEO rankings."
  },
  {
    question: "Can I update the website content myself?",
    answer: "Yes! We build websites with user-friendly content management systems (CMS) that allow you to easily update text, images, blog posts, and more. We provide comprehensive training and documentation so you can manage your content confidently."
  },
  {
    question: "Do you provide website hosting?",
    answer: "We can recommend reliable hosting providers and assist with setup, or we offer managed hosting services where we handle all technical aspects. Our hosting solutions include SSL certificates, regular backups, security monitoring, and performance optimization."
  },
  {
    question: "Will my website be SEO-optimized?",
    answer: "Yes! Every website we build includes foundational SEO optimization including proper site structure, meta tags, schema markup, fast loading speeds, mobile responsiveness, and SEO-friendly URLs. For advanced SEO, we offer specialized SEO services."
  },
  {
    question: "What if I need changes after the website launches?",
    answer: "We offer ongoing support and maintenance packages that include regular updates, content changes, security patches, and technical support. Minor tweaks during the first 30 days are typically included in your project package."
  },
  {
    question: "Can you redesign my existing website?",
    answer: "Absolutely! We specialize in website redesigns that modernize your online presence while preserving what works. We analyze your current site, identify improvements, and create a fresh design that better serves your business goals."
  },
  {
    question: "Do you build e-commerce websites?",
    answer: "Yes! We build fully functional e-commerce websites with shopping carts, payment processing, inventory management, and order tracking. We work with platforms like WooCommerce, Shopify, and custom solutions based on your needs."
  }
];

export const SEO_FAQS: FAQ[] = [
  {
    question: "What is SEO and why is it important?",
    answer: "SEO (Search Engine Optimization) is the practice of optimizing your website to rank higher in search engine results. It's crucial because 75% of users never scroll past the first page of search results. Higher rankings mean more visibility, traffic, and potential customers for your business."
  },
  {
    question: "How long does SEO take to show results?",
    answer: "SEO is a long-term strategy. You may see initial improvements in 3-4 months, with significant results typically appearing in 6-12 months. The timeline depends on your industry competition, current website status, and the scope of optimization work required."
  },
  {
    question: "What's the difference between local SEO and general SEO?",
    answer: "Local SEO focuses on optimizing your online presence for local searches, helping you appear in 'near me' searches and Google Maps results. It includes Google Business Profile optimization, local citations, and location-specific content. General SEO targets broader, non-location-specific searches."
  },
  {
    question: "Do you guarantee first-page rankings?",
    answer: "While we can't guarantee specific rankings (no ethical SEO company can), we do guarantee that we'll use proven, white-hat SEO strategies to improve your visibility. We focus on sustainable, long-term growth rather than risky shortcuts that could harm your site."
  },
  {
    question: "What's included in your SEO services?",
    answer: "Our comprehensive SEO services include keyword research and strategy, on-page optimization, technical SEO audits and fixes, content optimization, link building, local SEO, competitor analysis, and detailed monthly reporting with actionable insights."
  },
  {
    question: "How do you measure SEO success?",
    answer: "We track multiple metrics including keyword rankings, organic traffic growth, click-through rates, bounce rates, conversion rates, backlink quality, and domain authority. We provide detailed monthly reports showing progress toward your specific business goals."
  }
];

export const DIGITAL_MARKETING_FAQS: FAQ[] = [
  {
    question: "What digital marketing services do you offer?",
    answer: "We offer comprehensive digital marketing including SEO, Google Ads (PPC), social media marketing and management, email marketing campaigns, content marketing, reputation management, and marketing analytics. We create integrated strategies that work together for maximum impact."
  },
  {
    question: "How much should I budget for digital marketing?",
    answer: "Digital marketing budgets vary widely based on your goals, industry, and competition. Small businesses might start with $1,000-$3,000/month, while larger companies may invest $5,000-$20,000+/month. We'll help you create a budget that aligns with your goals and provides strong ROI."
  },
  {
    question: "What's the difference between SEO and Google Ads?",
    answer: "SEO is organic optimization that improves your natural search rankings over time. Google Ads (PPC) places paid advertisements at the top of search results for immediate visibility. SEO provides long-term value, while PPC delivers instant traffic. We often recommend using both for optimal results."
  },
  {
    question: "How do you determine which platforms are best for my business?",
    answer: "We analyze your target audience demographics, industry, competitors, and business goals to determine the most effective marketing platforms. For B2B, LinkedIn might be ideal. For visual products, Instagram and Pinterest work well. We create a custom strategy based on where your customers spend time."
  },
  {
    question: "Can you manage our social media accounts?",
    answer: "Yes! Our social media management services include content creation, post scheduling, community management, engagement monitoring, paid social advertising, and performance analytics across platforms like Facebook, Instagram, LinkedIn, Twitter, and TikTok."
  },
  {
    question: "How often will I receive reports on my marketing performance?",
    answer: "We provide detailed monthly reports showing key metrics, campaign performance, ROI analysis, and strategic recommendations. For active campaigns, we also offer weekly updates and real-time dashboard access so you can monitor progress anytime."
  }
];

export const VIRTUAL_TOUR_FAQS: FAQ[] = [
  {
    question: "What is a 360° virtual tour?",
    answer: "A 360° virtual tour is an immersive, interactive experience that allows viewers to explore your space as if they were physically there. Users can look in all directions, move between rooms, and interact with hotspots for more information. It's perfect for showcasing businesses, real estate, hotels, and attractions."
  },
  {
    question: "How long does it take to create a virtual tour?",
    answer: "The on-site photography typically takes 2-4 hours depending on the size of your space. Post-production and tour assembly take 3-7 business days. Larger properties or those requiring special editing may take up to 2 weeks for completion."
  },
  {
    question: "Can virtual tours be integrated with Google Street View?",
    answer: "Yes! We're Google Street View certified, which means we can publish your virtual tour directly to Google Maps and Google Business Profile. This gives your business enhanced visibility in search results and helps potential customers explore your space before visiting."
  },
  {
    question: "What types of businesses benefit from virtual tours?",
    answer: "Virtual tours benefit restaurants, hotels, retail stores, real estate properties, event venues, gyms, medical facilities, educational institutions, museums, and any business where seeing the space influences customer decisions. They increase engagement and build trust with potential customers."
  },
  {
    question: "How much does a virtual tour cost?",
    answer: "Virtual tour pricing depends on the size of your space and complexity of the project. Small businesses (under 2,000 sq ft) typically start around $500-$800. Larger properties range from $1,000-$3,000+. Contact us for a custom quote based on your specific needs."
  },
  {
    question: "Can I add information hotspots to my virtual tour?",
    answer: "Absolutely! We can add interactive hotspots throughout your tour that provide additional information, showcase products, display videos, link to booking systems, or highlight special features. This makes the tour more engaging and informative for viewers."
  }
];

export const VIDEOGRAPHY_FAQS: FAQ[] = [
  {
    question: "What types of video services do you offer?",
    answer: "We offer comprehensive video production including promotional videos, commercial advertisements, product demonstrations, testimonial videos, event coverage, drone footage, social media video content, training videos, and branded video marketing campaigns."
  },
  {
    question: "How long does video production take?",
    answer: "A typical video project takes 2-4 weeks from concept to final delivery. Simple social media videos might be completed in 1 week, while complex commercial productions with multiple locations and edits may take 4-6 weeks. Rush services are available for time-sensitive projects."
  },
  {
    question: "Do you provide scriptwriting and storyboarding?",
    answer: "Yes! Our video production process includes creative development, scriptwriting, storyboarding, and planning. We work closely with you to understand your message and target audience, then create compelling narratives that achieve your marketing goals."
  },
  {
    question: "What video formats do you deliver?",
    answer: "We deliver videos optimized for your specific needs including full HD (1080p) and 4K formats. We can create multiple versions optimized for different platforms like YouTube, Instagram, Facebook, websites, and broadcast. All source files can be provided upon request."
  },
  {
    question: "Do you offer drone videography?",
    answer: "Yes! We're licensed and insured for commercial drone operations. Aerial footage adds dramatic perspective to real estate tours, construction progress documentation, event coverage, and promotional videos. Drone shots can make your content stand out."
  },
  {
    question: "Can you help with video marketing strategy?",
    answer: "Absolutely! Beyond production, we help develop video marketing strategies including content planning, distribution channels, social media promotion, video SEO, and performance tracking. We ensure your videos reach the right audience and drive results."
  }
];

export const AI_OPTIMIZATION_FAQS: FAQ[] = [
  {
    question: "What is AI optimization for search engines?",
    answer: "AI optimization ensures your content is discoverable and well-represented in AI-powered search engines and chatbots like ChatGPT, Google Gemini, Perplexity, and Claude. It involves optimizing for how AI systems understand, extract, and present information to users asking questions."
  },
  {
    question: "How is AI optimization different from traditional SEO?",
    answer: "Traditional SEO focuses on keyword rankings and link building for search engine results pages. AI optimization focuses on making your content easily understandable and citable by AI systems. This includes structured data, clear factual information, authoritative content, and semantic relationships."
  },
  {
    question: "Why do I need AI optimization now?",
    answer: "AI-powered search is growing rapidly. More users are getting answers from AI chatbots instead of traditional search. If your content isn't optimized for AI systems, you're missing out on this growing traffic source. Early adoption gives you a competitive advantage."
  },
  {
    question: "What's included in your AI optimization service?",
    answer: "Our AI optimization includes content structuring for AI comprehension, schema markup enhancement, llm.txt file creation, FAQ optimization, entity-based content strategy, citation-worthy content development, and monitoring performance across AI platforms."
  },
  {
    question: "How do you measure AI optimization success?",
    answer: "We track citations and mentions in AI-generated responses, monitor traffic from AI-powered search platforms, analyze how AI systems represent your brand, and measure improvements in content authority signals. We provide detailed reports on AI visibility."
  },
  {
    question: "Will AI optimization help my traditional SEO?",
    answer: "Yes! Many AI optimization practices like structured content, clear information hierarchy, authoritative writing, and comprehensive topic coverage also benefit traditional SEO. It's a complementary strategy that improves your overall online visibility."
  }
];

export const GBP_FAQS: FAQ[] = [
  {
    question: "What is Google Business Profile (formerly Google My Business)?",
    answer: "Google Business Profile is a free tool that lets you manage how your business appears on Google Search and Maps. It includes your business information, hours, photos, reviews, and posts. Optimizing your GBP is crucial for local visibility and attracting nearby customers."
  },
  {
    question: "Why is Google Business Profile important?",
    answer: "76% of people who search for something nearby on their smartphone visit a related business within 24 hours. Your GBP is often the first impression potential customers get of your business. A well-optimized profile increases visibility, builds trust, and drives more foot traffic and calls."
  },
  {
    question: "How often should I update my Google Business Profile?",
    answer: "Regular updates are crucial. We recommend posting new content at least weekly, responding to reviews within 24-48 hours, updating business information immediately when it changes, and refreshing photos monthly. Our Growth and Professional packages handle all this for you."
  },
  {
    question: "What's included in your GBP management packages?",
    answer: "Our packages range from basic monthly updates (Growth Essentials) to comprehensive daily management (Concierge). Services include profile optimization, regular posts, photo uploads, review monitoring and responses, Q&A management, insights reporting, and strategic recommendations."
  },
  {
    question: "Can you help with negative reviews?",
    answer: "Yes! We help you respond professionally to negative reviews in a way that shows potential customers you care about feedback. We develop response strategies, help resolve customer concerns, and encourage satisfied customers to leave positive reviews to improve your overall rating."
  },
  {
    question: "How long does it take to see results from GBP optimization?",
    answer: "You can see initial results within 2-4 weeks of consistent optimization. Increased visibility in local search, more profile views, and higher engagement with posts typically improve steadily. Significant growth in calls, directions requests, and website clicks usually appears within 2-3 months."
  }
];

// Helper function to get FAQs by page
export function getFAQsByPage(page: string): FAQ[] {
  const faqMap: Record<string, FAQ[]> = {
    'home': GENERAL_FAQS,
    'webDesign': WEB_DESIGN_FAQS,
    'seo': SEO_FAQS,
    'strategicSeo': SEO_FAQS,
    'digitalMarketing': DIGITAL_MARKETING_FAQS,
    'virtualTours': VIRTUAL_TOUR_FAQS,
    'videography': VIDEOGRAPHY_FAQS,
    'aiOptimization': AI_OPTIMIZATION_FAQS,
    'gbp': GBP_FAQS
  };
  
  return faqMap[page] || GENERAL_FAQS;
}
