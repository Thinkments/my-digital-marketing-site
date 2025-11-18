import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card, CardContent } from '../ui/card';
import { Search, Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ShareButton } from '../ShareButton';

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', count: 51 },
    { id: 'seo', name: 'SEO Tips', count: 9 },
    { id: 'social-media', name: 'Social Media', count: 7 },
    { id: 'web-design', name: 'Web Design', count: 4 },
    { id: 'marketing', name: 'Digital Marketing', count: 8 },
    { id: 'content', name: 'Content Marketing', count: 6 },
    { id: 'analytics', name: 'Analytics', count: 4 },
    { id: 'email', name: 'Email Marketing', count: 3 },
    { id: 'ppc', name: 'PPC & Ads', count: 3 },
    { id: 'local-seo', name: 'Local SEO', count: 2 },
    { id: 'lead-generation', name: 'Lead Generation', count: 1 },
    { id: 'mobile', name: 'Mobile Marketing', count: 1 },
    { id: 'crm', name: 'CRM', count: 1 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: '10 SEO Mistakes That Are Killing Your Website Traffic',
      excerpt: 'Discover the most common SEO errors that businesses make and learn how to fix them to boost your search rankings and drive more organic traffic.',
      author: 'Corey Spicer',
      date: '2024-08-20',
      category: 'seo',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
      tags: ['SEO', 'Website Traffic', 'Search Rankings'],
      slug: 'seo-mistakes-killing-website-traffic'
    },
    {
      id: 2,
      title: 'The Complete Guide to Social Media Marketing in 2025',
      excerpt: 'Learn the latest social media strategies that are driving results for businesses. From platform selection to content creation, we cover it all.',
      author: 'Corey Spicer',
      date: '2024-08-21',
      category: 'social-media',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=400&h=250&fit=crop',
      tags: ['Social Media', 'Marketing Strategy', 'Content Creation'],
      slug: 'complete-guide-social-media-marketing-2025'
    },
    {
      id: 3,
      title: 'Web Design Trends That Will Dominate This Year',
      excerpt: 'Stay ahead of the curve with these cutting-edge web design trends. From minimalism to bold typography, see what\'s shaping the digital landscape.',
      author: 'Corey Spicer',
      date: '2024-08-22',
      category: 'web-design',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=250&fit=crop',
      tags: ['Web Design', 'Design Trends', 'User Experience'],
      slug: 'web-design-trends-2025'
    },
    {
      id: 4,
      title: 'How to Measure ROI from Your Digital Marketing Campaigns',
      excerpt: 'Learn practical methods to track and measure the return on investment from your digital marketing efforts. Make data-driven decisions that boost profits.',
      author: 'Corey Spicer',
      date: '2024-08-23',
      category: 'marketing',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      tags: ['ROI', 'Analytics', 'Digital Marketing'],
      slug: 'measure-roi-digital-marketing-campaigns'
    },
    {
      id: 5,
      title: 'Local SEO Strategies for Small Businesses',
      excerpt: 'Dominate local search results with these proven strategies. Perfect for small businesses looking to attract more customers from their local area.',
      author: 'Corey Spicer',
      date: '2024-08-24',
      category: 'seo',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=250&fit=crop',
      tags: ['Local SEO', 'Small Business', 'Google My Business'],
      slug: 'local-seo-strategies-small-businesses'
    },
    {
      id: 6,
      title: 'The Psychology of Color in Web Design',
      excerpt: 'Understand how colors influence user behavior and conversion rates. Learn to choose the right color palette for your website and brand.',
      author: 'Corey Spicer',
      date: '2024-08-25',
      category: 'web-design',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=250&fit=crop',
      tags: ['Color Psychology', 'Conversion Optimization', 'Branding'],
      slug: 'psychology-color-web-design'
    },
    {
      id: 7,
      title: 'Content Marketing Strategy: Creating Content That Converts',
      excerpt: 'Build a content marketing strategy that drives engagement and conversions. Learn how to create valuable content that resonates with your target audience.',
      author: 'Corey Spicer',
      date: '2024-08-26',
      category: 'content',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop',
      tags: ['Content Marketing', 'Strategy', 'Conversions'],
      slug: 'content-marketing-strategy-that-converts'
    },
    {
      id: 8,
      title: 'Email Marketing Best Practices for 2025',
      excerpt: 'Maximize your email marketing results with proven strategies. From subject lines to automation, discover what works in today\'s inbox.',
      author: 'Corey Spicer',
      date: '2024-08-27',
      category: 'email',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400&h=250&fit=crop',
      tags: ['Email Marketing', 'Automation', 'Deliverability'],
      slug: 'email-marketing-best-practices-2025'
    },
    {
      id: 9,
      title: 'Google Analytics 4: Essential Setup and Reporting Guide',
      excerpt: 'Master Google Analytics 4 with this comprehensive guide. Learn proper setup, key metrics to track, and how to create actionable reports.',
      author: 'Corey Spicer',
      date: '2024-08-28',
      category: 'analytics',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      tags: ['Google Analytics', 'Data Analysis', 'Reporting'],
      slug: 'google-analytics-4-essential-guide'
    },
    {
      id: 10,
      title: 'Instagram Marketing: Growing Your Business on the Platform',
      excerpt: 'Unlock Instagram\'s potential for your business. Learn content strategies, hashtag optimization, and engagement tactics that drive real results.',
      author: 'Corey Spicer',
      date: '2024-08-29',
      category: 'social-media',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?w=400&h=250&fit=crop',
      tags: ['Instagram', 'Social Media', 'Business Growth'],
      slug: 'instagram-marketing-business-growth'
    },
    {
      id: 11,
      title: 'Conversion Rate Optimization: Turning Visitors into Customers',
      excerpt: 'Increase your website\'s conversion rate with proven CRO techniques. Learn A/B testing, user experience optimization, and psychology-based improvements.',
      author: 'Corey Spicer',
      date: '2024-08-30',
      category: 'marketing',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
      tags: ['CRO', 'Conversion Optimization', 'A/B Testing'],
      slug: 'conversion-rate-optimization-guide'
    },
    {
      id: 12,
      title: 'Building a Strong Brand Identity in the Digital Age',
      excerpt: 'Create a memorable brand that stands out online. Learn branding fundamentals, visual identity design, and brand voice development.',
      author: 'Corey Spicer',
      date: '2024-08-31',
      category: 'marketing',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop',
      tags: ['Branding', 'Brand Identity', 'Visual Design'],
      slug: 'building-strong-brand-identity-digital-age'
    },
    {
      id: 13,
      title: 'Video Marketing: Creating Compelling Content That Engages',
      excerpt: 'Harness the power of video marketing to boost engagement and conversions. Learn video content strategies, production tips, and platform optimization.',
      author: 'Corey Spicer',
      date: '2024-09-01',
      category: 'content',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=250&fit=crop',
      tags: ['Video Marketing', 'Content Creation', 'Engagement'],
      slug: 'video-marketing-compelling-content-guide'
    },
    {
      id: 14,
      title: 'Technical SEO: The Foundation of Search Success',
      excerpt: 'Master technical SEO to improve your website\'s search performance. Learn about site speed, crawlability, indexing, and mobile optimization.',
      author: 'Corey Spicer',
      date: '2024-09-02',
      category: 'seo',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=250&fit=crop',
      tags: ['Technical SEO', 'Site Speed', 'Crawlability'],
      slug: 'technical-seo-foundation-search-success'
    },
    {
      id: 15,
      title: 'LinkedIn Marketing for B2B Businesses',
      excerpt: 'Leverage LinkedIn to generate B2B leads and build professional relationships. Learn content strategies, networking tactics, and advertising best practices.',
      author: 'Corey Spicer',
      date: '2024-09-03',
      category: 'social-media',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop',
      tags: ['LinkedIn', 'B2B Marketing', 'Lead Generation'],
      slug: 'linkedin-marketing-b2b-businesses'
    },
    {
      id: 16,
      title: 'Mobile-First Design: Optimizing for the Mobile Experience',
      excerpt: 'Create exceptional mobile experiences that convert. Learn mobile design principles, performance optimization, and user experience best practices.',
      author: 'Corey Spicer',
      date: '2024-09-04',
      category: 'web-design',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop',
      tags: ['Mobile Design', 'UX/UI', 'Performance'],
      slug: 'mobile-first-design-optimization-guide'
    },
    {
      id: 17,
      title: 'Google Ads Mastery: PPC Strategies That Deliver ROI',
      excerpt: 'Maximize your Google Ads performance with advanced PPC strategies. Learn keyword research, ad copywriting, and bid optimization techniques.',
      author: 'Corey Spicer',
      date: '2024-09-05',
      category: 'ppc',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
      tags: ['Google Ads', 'PPC', 'Paid Advertising'],
      slug: 'google-ads-mastery-ppc-strategies'
    },
    {
      id: 18,
      title: 'Content SEO: Optimizing Your Content for Search Engines',
      excerpt: 'Create SEO-friendly content that ranks and converts. Learn keyword research, content optimization, and semantic SEO strategies.',
      author: 'Corey Spicer',
      date: '2024-09-06',
      category: 'seo',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=250&fit=crop',
      tags: ['Content SEO', 'Keyword Research', 'Content Optimization'],
      slug: 'content-seo-optimization-guide'
    },
    {
      id: 19,
      title: 'Marketing Automation: Streamlining Your Digital Marketing',
      excerpt: 'Automate your marketing processes for better efficiency and results. Learn about automation tools, workflows, and lead nurturing strategies.',
      author: 'Corey Spicer',
      date: '2024-09-07',
      category: 'marketing',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      tags: ['Marketing Automation', 'Lead Nurturing', 'Workflows'],
      slug: 'marketing-automation-streamlining-guide'
    },
    {
      id: 20,
      title: 'TikTok Marketing: Reaching Gen Z and Millennial Audiences',
      excerpt: 'Tap into TikTok\'s massive audience with effective marketing strategies. Learn content creation, trending tactics, and advertising opportunities.',
      author: 'Corey Spicer',
      date: '2024-09-08',
      category: 'social-media',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=400&h=250&fit=crop',
      tags: ['TikTok', 'Gen Z Marketing', 'Social Media'],
      slug: 'tiktok-marketing-gen-z-millennials'
    },
    {
      id: 21,
      title: 'E-commerce SEO: Driving Organic Traffic to Online Stores',
      excerpt: 'Optimize your e-commerce site for search engines. Learn product page optimization, category structure, and technical SEO for online stores.',
      author: 'Corey Spicer',
      date: '2024-09-09',
      category: 'seo',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
      tags: ['E-commerce SEO', 'Product Optimization', 'Online Stores'],
      slug: 'ecommerce-seo-organic-traffic-guide'
    },
    {
      id: 22,
      title: 'Influencer Marketing: Partnering for Authentic Reach',
      excerpt: 'Build successful influencer partnerships that drive real results. Learn influencer selection, campaign management, and ROI measurement.',
      author: 'Corey Spicer',
      date: '2024-09-10',
      category: 'marketing',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop',
      tags: ['Influencer Marketing', 'Partnerships', 'Brand Awareness'],
      slug: 'influencer-marketing-authentic-reach-guide'
    },
    {
      id: 23,
      title: 'Website Performance Optimization: Speed and User Experience',
      excerpt: 'Improve your website\'s performance for better user experience and SEO. Learn optimization techniques, tools, and best practices.',
      author: 'Corey Spicer',
      date: '2024-09-11',
      category: 'marketing',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      tags: ['Website Performance', 'Page Speed', 'User Experience'],
      slug: 'website-performance-optimization-guide'
    },
    {
      id: 24,
      title: 'Data-Driven Marketing: Making Decisions with Analytics',
      excerpt: 'Use data to drive your marketing decisions. Learn analytics setup, data interpretation, and how to create actionable insights from your metrics.',
      author: 'Corey Spicer',
      date: '2024-09-12',
      category: 'analytics',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      tags: ['Data Analytics', 'Marketing Metrics', 'Data-Driven Decisions'],
      slug: 'data-driven-marketing-analytics-guide'
    },
    {
      id: 25,
      title: 'Blogging for Business: Content That Drives Traffic and Leads',
      excerpt: 'Create a business blog that generates traffic and leads. Learn content planning, SEO optimization, and lead generation strategies.',
      author: 'Corey Spicer',
      date: '2024-09-13',
      category: 'content',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop',
      tags: ['Business Blogging', 'Content Strategy', 'Lead Generation'],
      slug: 'blogging-for-business-traffic-leads'
    },
    {
      id: 26,
      title: 'Email List Building: Growing Your Subscriber Base',
      excerpt: 'Build a high-quality email list that converts. Learn lead magnets, opt-in strategies, and list growth techniques that work.',
      author: 'Corey Spicer',
      date: '2024-09-14',
      category: 'email',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400&h=250&fit=crop',
      tags: ['Email List Building', 'Lead Magnets', 'Subscriber Growth'],
      slug: 'email-list-building-subscriber-growth'
    },
    {
      id: 27,
      title: 'Voice Search SEO: Optimizing for the Future of Search',
      excerpt: 'Prepare your website for voice search dominance. Learn how to optimize content for voice queries, featured snippets, and conversational search patterns.',
      author: 'Corey Spicer',
      date: '2024-09-15',
      category: 'seo',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1659355751133-763bd796eeb2?w=400&h=250&fit=crop',
      tags: ['Voice Search', 'SEO Strategy', 'Featured Snippets'],
      slug: 'voice-search-seo-optimization-guide'
    },
    {
      id: 28,
      title: 'Facebook Ads That Convert: Advanced Campaign Strategies',
      excerpt: 'Master Facebook advertising with proven campaign strategies. Learn audience targeting, ad creative optimization, and budget management for maximum ROI.',
      author: 'Corey Spicer',
      date: '2024-09-16',
      category: 'social-media',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1615494937386-5532d6f5cb25?w=400&h=250&fit=crop',
      tags: ['Facebook Ads', 'Paid Social', 'Campaign Optimization'],
      slug: 'facebook-ads-advanced-campaign-strategies'
    },
    {
      id: 29,
      title: 'UX/UI Design Principles That Drive Conversions',
      excerpt: 'Create user experiences that convert visitors into customers. Learn essential design principles, usability best practices, and conversion optimization techniques.',
      author: 'Corey Spicer',
      date: '2024-09-17',
      category: 'web-design',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=400&h=250&fit=crop',
      tags: ['UX Design', 'UI Design', 'Conversion Optimization'],
      slug: 'ux-ui-design-principles-conversions'
    },
    {
      id: 30,
      title: 'Affiliate Marketing: Building Profitable Partnership Programs',
      excerpt: 'Launch and scale successful affiliate marketing programs. Learn partner recruitment, commission structures, and tracking systems that drive revenue growth.',
      author: 'Corey Spicer',
      date: '2024-09-18',
      category: 'marketing',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1591453214154-c95db71dbd83?w=400&h=250&fit=crop',
      tags: ['Affiliate Marketing', 'Partnership Programs', 'Revenue Growth'],
      slug: 'affiliate-marketing-profitable-partnership-programs'
    },
    {
      id: 31,
      title: 'Podcast Marketing: Growing Your Audience and Brand',
      excerpt: 'Leverage podcasting to build brand authority and reach new audiences. Learn content planning, distribution strategies, and monetization techniques.',
      author: 'Corey Spicer',
      date: '2024-09-19',
      category: 'content',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1625645841510-c32e9a68bf5e?w=400&h=250&fit=crop',
      tags: ['Podcast Marketing', 'Audio Content', 'Brand Authority'],
      slug: 'podcast-marketing-audience-brand-growth'
    },
    {
      id: 32,
      title: 'Marketing Attribution: Understanding Your Customer Journey',
      excerpt: 'Track and attribute conversions across multiple touchpoints. Learn attribution models, cross-channel tracking, and how to optimize your marketing mix.',
      author: 'Corey Spicer',
      date: '2024-09-20',
      category: 'analytics',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1585123607190-72ec2979a269?w=400&h=250&fit=crop',
      tags: ['Marketing Attribution', 'Customer Journey', 'Multi-Touch Attribution'],
      slug: 'marketing-attribution-customer-journey-guide'
    },
    {
      id: 33,
      title: 'SMS Marketing: Reaching Customers on Mobile',
      excerpt: 'Build effective SMS marketing campaigns that engage and convert. Learn compliance, automation workflows, and best practices for mobile messaging.',
      author: 'Corey Spicer',
      date: '2024-09-21',
      category: 'email',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1705658372220-6c7f1df6f72b?w=400&h=250&fit=crop',
      tags: ['SMS Marketing', 'Mobile Marketing', 'Direct Messaging'],
      slug: 'sms-marketing-mobile-customer-engagement'
    },
    {
      id: 34,
      title: 'Retargeting Campaigns: Converting Lost Visitors',
      excerpt: 'Win back visitors who didn\'t convert on their first visit. Learn retargeting strategies, audience segmentation, and campaign optimization for higher ROI.',
      author: 'Corey Spicer',
      date: '2024-09-22',
      category: 'ppc',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1618748879306-ef472cbe595c?w=400&h=250&fit=crop',
      tags: ['Retargeting', 'Remarketing', 'Paid Advertising'],
      slug: 'retargeting-campaigns-converting-lost-visitors'
    },
    {
      id: 35,
      title: 'AI in Digital Marketing: Tools and Strategies for 2025',
      excerpt: 'Harness artificial intelligence to supercharge your marketing efforts. Discover AI tools for content creation, personalization, and campaign optimization.',
      author: 'Corey Spicer',
      date: '2024-09-23',
      category: 'marketing',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1564707944519-7a116ef3841c?w=400&h=250&fit=crop',
      tags: ['AI Marketing', 'Marketing Automation', 'Personalization'],
      slug: 'ai-digital-marketing-tools-strategies-2025'
    },
    {
      id: 36,
      title: 'Video SEO: Optimizing YouTube and Video Content for Search',
      excerpt: 'Maximize your video content\'s visibility in search results. Learn YouTube SEO, video schema markup, and optimization strategies for all video platforms.',
      author: 'Corey Spicer',
      date: '2024-09-24',
      category: 'seo',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1694878982098-1cec80d96eca?w=400&h=250&fit=crop',
      tags: ['Video SEO', 'YouTube Optimization', 'Video Marketing'],
      slug: 'video-seo-youtube-optimization-guide'
    },
    {
      id: 37,
      title: 'Landing Page Optimization: Converting Visitors into Customers',
      excerpt: 'Transform your landing pages into conversion powerhouses. Learn design principles, testing strategies, and optimization techniques that boost conversion rates.',
      author: 'Corey Spicer',
      date: '2024-09-25',
      category: 'web-design',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=400&h=250&fit=crop',
      tags: ['Landing Pages', 'Conversion Optimization', 'Web Design'],
      slug: 'landing-page-optimization-higher-conversions'
    },
    {
      id: 38,
      title: 'E-commerce SEO: Driving Sales Through Search',
      excerpt: 'Optimize your online store for search engines and increase organic sales. Learn product page optimization, technical SEO, and category structure strategies.',
      author: 'Corey Spicer',
      date: '2024-09-26',
      category: 'seo',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1573166364524-d9dbfd1c65d0?w=400&h=250&fit=crop',
      tags: ['E-commerce SEO', 'Product Optimization', 'Online Sales'],
      slug: 'ecommerce-seo-driving-sales-through-search'
    },
    {
      id: 39,
      title: 'Marketing Automation Workflows That Convert',
      excerpt: 'Build automated marketing sequences that nurture leads and drive sales. Learn workflow design, trigger setup, and personalization strategies for maximum ROI.',
      author: 'Corey Spicer',
      date: '2024-09-27',
      category: 'marketing',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop',
      tags: ['Marketing Automation', 'Lead Nurturing', 'Email Workflows'],
      slug: 'marketing-automation-workflows-convert'
    },
    {
      id: 40,
      title: 'Local Business Reputation Management in the Digital Age',
      excerpt: 'Protect and enhance your local business reputation online. Learn review management, crisis response, and proactive reputation building strategies.',
      author: 'Corey Spicer',
      date: '2024-09-28',
      category: 'local-seo',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=250&fit=crop',
      tags: ['Reputation Management', 'Online Reviews', 'Local Business'],
      slug: 'local-business-reputation-management-guide'
    },
    {
      id: 41,
      title: 'Content Marketing ROI: Measuring What Matters',
      excerpt: 'Track and prove the value of your content marketing efforts. Learn attribution models, KPI frameworks, and measurement strategies that demonstrate ROI.',
      author: 'Corey Spicer',
      date: '2024-09-29',
      category: 'content',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop',
      tags: ['Content ROI', 'Marketing Analytics', 'Performance Measurement'],
      slug: 'content-marketing-roi-measurement-strategies'
    },
    {
      id: 42,
      title: 'Google Analytics 4: Complete Setup and Optimization Guide',
      excerpt: 'Master GA4 implementation for better marketing insights. Learn event tracking, conversion setup, and advanced reporting for data-driven decisions.',
      author: 'Corey Spicer',
      date: '2024-09-30',
      category: 'analytics',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      tags: ['Google Analytics 4', 'Web Analytics', 'Conversion Tracking'],
      slug: 'google-analytics-4-setup-optimization-guide'
    },
    {
      id: 43,
      title: 'Social Media Crisis Management: Protecting Your Brand',
      excerpt: 'Navigate social media crises effectively to protect your brand reputation. Learn response protocols, damage control, and recovery strategies.',
      author: 'Corey Spicer',
      date: '2024-10-01',
      category: 'social-media',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=400&h=250&fit=crop',
      tags: ['Crisis Management', 'Social Media', 'Brand Protection'],
      slug: 'social-media-crisis-management-strategies'
    },
    {
      id: 44,
      title: 'B2B Lead Generation Strategies That Drive Sales',
      excerpt: 'Generate high-quality B2B leads that convert into customers. Learn multi-channel strategies, lead scoring, and nurturing techniques for business growth.',
      author: 'Corey Spicer',
      date: '2024-10-02',
      category: 'lead-generation',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop',
      tags: ['B2B Marketing', 'Lead Generation', 'Sales Pipeline'],
      slug: 'b2b-lead-generation-strategies-2025'
    },
    {
      id: 45,
      title: 'Mobile App Marketing: User Acquisition and Retention',
      excerpt: 'Drive app downloads and build engaged user communities. Learn app store optimization, mobile advertising, and retention strategies for sustained growth.',
      author: 'Corey Spicer',
      date: '2024-10-03',
      category: 'mobile',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop',
      tags: ['Mobile App Marketing', 'User Acquisition', 'App Store Optimization'],
      slug: 'mobile-app-marketing-user-acquisition'
    },
    {
      id: 46,
      title: 'Influencer Marketing: Campaign Management and ROI',
      excerpt: 'Build successful influencer partnerships that drive brand awareness and sales. Learn influencer selection, campaign strategy, and performance measurement.',
      author: 'Corey Spicer',
      date: '2024-10-04',
      category: 'social-media',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=400&h=250&fit=crop',
      tags: ['Influencer Marketing', 'Brand Partnerships', 'Social Media'],
      slug: 'influencer-marketing-campaign-management'
    },
    {
      id: 47,
      title: 'Conversion Rate Optimization: Testing for Success',
      excerpt: 'Systematically improve your website conversion rates through strategic testing. Learn A/B testing, user experience optimization, and data-driven improvements.',
      author: 'Corey Spicer',
      date: '2024-10-05',
      category: 'analytics',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      tags: ['Conversion Optimization', 'A/B Testing', 'User Experience'],
      slug: 'conversion-rate-optimization-testing-guide'
    },
    {
      id: 48,
      title: 'Email Deliverability: Best Practices for Inbox Success',
      excerpt: 'Ensure your emails reach the inbox, not the spam folder. Learn authentication, list hygiene, and reputation management for maximum deliverability.',
      author: 'Corey Spicer',
      date: '2024-10-06',
      category: 'email',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400&h=250&fit=crop',
      tags: ['Email Deliverability', 'Email Marketing', 'Sender Reputation'],
      slug: 'email-deliverability-best-practices-guide'
    },
    {
      id: 49,
      title: 'Cross-Platform Marketing Integration for Maximum Impact',
      excerpt: 'Create cohesive marketing experiences across all channels. Learn integration strategies, message consistency, and campaign coordination for better results.',
      author: 'Corey Spicer',
      date: '2024-10-07',
      category: 'marketing',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop',
      tags: ['Marketing Integration', 'Multi-Channel', 'Campaign Coordination'],
      slug: 'cross-platform-marketing-integration-strategies'
    },
    {
      id: 50,
      title: 'Customer Retention and Loyalty Programs That Work',
      excerpt: 'Build lasting customer relationships that drive repeat business. Learn retention strategies, loyalty program design, and customer lifetime value optimization.',
      author: 'Corey Spicer',
      date: '2024-10-08',
      category: 'crm',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop',
      tags: ['Customer Retention', 'Loyalty Programs', 'Customer Experience'],
      slug: 'customer-retention-loyalty-programs-guide'
    },
    {
      id: 51,
      title: 'Google Ads Hacks: Unlocking the Full Potential of Your PPC Campaigns',
      excerpt: 'Discover powerful Google Ads optimization strategies that maximize ROI and reduce wasted ad spend. Learn expert PPC tactics from ThinkMents to dominate your market.',
      author: 'Corey Spicer',
      date: '2025-01-24',
      category: 'ppc',
      readTime: '15 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
      tags: ['Google Ads', 'PPC', 'Digital Marketing', 'ROI Optimization'],
      slug: 'google-ads-hacks-unlocking-the-full-potential'
    }
  ];

  // Reverse the order so most recent posts appear first
  const reversedPosts = [...blogPosts].reverse();

  const filteredPosts = reversedPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <motion.div
      className=""
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative py-40 overflow-hidden">
        {/* Background Image with Overlays - Same as HomePage */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&h=1080&fit=crop"
            alt="Digital Marketing Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-accent/30" />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white drop-shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Digital Marketing{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Insights & Tips
              </span>
            </motion.h1>
            
            <motion.p
              className="text-xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Stay ahead of the curve with expert insights, practical tips, and industry trends that will help you grow your business online. Discover actionable strategies from our marketing experts that drive real results.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link to="/get-a-quote">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
                  Get Expert Help
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-primary to-accent text-white'
                      : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name} ({category.count})
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full group hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-2 py-1 text-xs bg-gradient-to-r from-primary to-accent text-white rounded-full">
                        {categories.find(cat => cat.id === post.category)?.name}
                      </span>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-muted-foreground mb-3 space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-xl mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="flex items-center space-x-1 text-xs text-muted-foreground"
                        >
                          <Tag className="w-3 h-3" />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                        <Link to={`/blog/${post.slug}`}>
                          <Button variant="outline" className="w-full group-hover:border-primary group-hover:text-primary transition-colors">
                            <span>Read More</span>
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </motion.div>
                      <ShareButton 
                        url={`/blog/${post.slug}`}
                        title={post.title}
                        description={post.excerpt}
                        size="sm"
                        variant="outline"
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-muted-foreground text-lg">
                No articles found matching your search criteria.
              </p>
            </motion.div>
          )}
        </div>
      </section>


    </motion.div>
  );
}