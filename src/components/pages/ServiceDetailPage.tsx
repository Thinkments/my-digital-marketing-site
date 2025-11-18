import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { ArrowRight, CheckCircle, Globe, TrendingUp, Target, Users, Video, Camera, Search, BarChart3 } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import SEO from '../SEO';

interface ServiceDetailPageProps {
  service: string;
}

export default function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const serviceData = {
    'web-development': {
      icon: Globe,
      title: 'Web Development',
      subtitle: 'Custom Web Solutions That Convert',
      description: 'Professional web development services creating custom, responsive websites optimized for performance, user experience, and conversions. Built with modern technologies and best practices.',
      benefits: [
        'Custom, responsive design that works on all devices',
        'Fast loading speeds for better user experience',
        'SEO-optimized structure and content',
        'Conversion-focused design elements',
        'Easy content management system',
        'Secure hosting and regular backups'
      ],
      process: [
        'Discovery & Strategy',
        'Design & Mockups',
        'Development & Testing',
        'Launch & Optimization'
      ],
      color: 'from-blue-500 to-purple-600'
    },
    'website-design': {
      icon: Globe,
      title: 'Website Design & Development',
      subtitle: 'Your Digital Storefront That Converts',
      description: 'Your website is your digital storefront. We create stunning, user-friendly websites that not only look great but are also optimized for performance and conversions. Our custom designs ensure your business stands out with a fast and search-optimized platform.',
      benefits: [
        'Custom, responsive design that works on all devices',
        'Fast loading speeds for better user experience',
        'SEO-optimized structure and content',
        'Conversion-focused design elements',
        'Easy content management system',
        'Secure hosting and regular backups'
      ],
      process: [
        'Discovery & Strategy',
        'Design & Mockups',
        'Development & Testing',
        'Launch & Optimization'
      ],
      color: 'from-blue-500 to-purple-600'
    },
    'seo': {
      icon: Search,
      title: 'Search Engine Optimization',
      subtitle: 'Dominate Search Results with Strategic SEO',
      description: 'Boost your online visibility and drive organic traffic with our comprehensive SEO strategies. We help businesses rank higher on Google, attract more qualified leads, and achieve sustainable growth through proven optimization techniques.',
      benefits: [
        'Higher search engine rankings for targeted keywords',
        'Increased organic traffic and quality leads',
        'Better local search visibility and Google My Business optimization',
        'Improved website authority and domain trust',
        'Long-term sustainable growth and ROI',
        'Detailed analytics and performance reporting'
      ],
      process: [
        'SEO Audit & Analysis',
        'Keyword Research & Strategy',
        'On-Page Optimization',
        'Content & Link Building'
      ],
      color: 'from-green-500 to-teal-600'
    },
    'google-marketing': {
      icon: Target,
      title: 'Google Marketing & PPC',
      subtitle: 'Maximize ROI with Expert Google Ads Management',
      description: 'Drive immediate results with professionally managed Google Ads campaigns. Our certified Google Partner expertise ensures your advertising budget delivers maximum ROI through strategic targeting, compelling ad copy, and continuous optimization.',
      benefits: [
        'Google Partner certified expertise and best practices',
        'Optimized Google Ads campaigns for maximum ROI',
        'Professional campaign setup and management',
        'Google Shopping integration for e-commerce',
        'YouTube advertising campaigns for video marketing',
        'Comprehensive performance tracking and reporting'
      ],
      process: [
        'Account Setup & Audit',
        'Campaign Strategy & Planning',
        'Implementation & Launch',
        'Monitoring & Optimization'
      ],
      color: 'from-orange-500 to-red-600'
    },
    'videography': {
      icon: Video,
      title: 'Professional Videography',
      subtitle: 'Tell Your Story Through Compelling Video',
      description: 'Elevate your brand with professional video content that engages audiences and drives results. From corporate videos to social media content, we create compelling visual stories that showcase your business and connect with your target audience.',
      benefits: [
        'Professional video production with high-end equipment',
        'Compelling storytelling that connects with audiences',
        'Multi-platform optimization for all social channels',
        'Increased engagement rates and brand awareness',
        'Enhanced brand credibility and trust',
        'Versatile content for websites, social media, and marketing'
      ],
      process: [
        'Concept Development',
        'Pre-Production Planning',
        'Filming & Production',
        'Post-Production & Delivery'
      ],
      color: 'from-indigo-500 to-blue-600'
    },
    'search-engine-optimization': {
      icon: TrendingUp,
      title: 'Search Engine Optimization',
      subtitle: 'Dominate Search with Strategic SEO',
      description: 'In today\'s competitive digital landscape, being found online is paramount. Our expert SEO services are designed to elevate your online presence, driving organic traffic and connecting you with customers who are actively searching for what you offer.',
      benefits: [
        'Higher search engine rankings',
        'Increased organic traffic and leads',
        'Better local search visibility',
        'Improved website authority and trust',
        'Long-term sustainable growth',
        'Detailed analytics and reporting'
      ],
      process: [
        'SEO Audit & Analysis',
        'Keyword Research & Strategy',
        'On-Page Optimization',
        'Content & Link Building'
      ],
      color: 'from-green-500 to-teal-600'
    },
    'pay-per-click-advertising': {
      icon: Target,
      title: 'Pay-Per-Click Advertising',
      subtitle: 'Targeted Google Ads Management',
      description: 'Maximize your ROI with expertly managed Google Ads campaigns. Our certified Google Partner expertise ensures your advertising budget delivers maximum results through strategic targeting and optimization.',
      benefits: [
        'Google Partner certified expertise',
        'Optimized Google Ads campaigns',
        'Professional campaign management',
        'Google Shopping integration',
        'YouTube advertising campaigns',
        'Comprehensive performance tracking'
      ],
      process: [
        'Account Setup & Audit',
        'Campaign Strategy',
        'Implementation & Launch',
        'Monitoring & Optimization'
      ],
      color: 'from-orange-500 to-red-600'
    },
    'social-media-marketing': {
      icon: Users,
      title: 'Social Media Marketing',
      subtitle: 'Build Your Online Community',
      description: 'Build a strong online community and engage with your target audience across various social media platforms. We create and execute dynamic social media strategies that foster brand loyalty and drive results that uniquely cater to your image.',
      benefits: [
        'Increased brand awareness and engagement',
        'Targeted audience growth',
        'Professional content creation',
        'Community management and support',
        'Social media advertising campaigns',
        'Detailed performance analytics'
      ],
      process: [
        'Social Media Audit',
        'Strategy Development',
        'Content Creation',
        'Community Management'
      ],
      color: 'from-pink-500 to-rose-600'
    },
    'promotional-videos': {
      icon: Video,
      title: 'Promotional Videos',
      subtitle: 'Tell Your Story Through Video',
      description: 'Tell your brand\'s story with compelling video content. From corporate and promotional videos to dynamic content for social media, our videography services are designed to captivate your audience and drive engagement.',
      benefits: [
        'Professional video production',
        'Compelling storytelling',
        'Multi-platform optimization',
        'Increased engagement rates',
        'Brand awareness and credibility',
        'Versatile content for all channels'
      ],
      process: [
        'Concept Development',
        'Pre-Production Planning',
        'Filming & Production',
        'Post-Production & Delivery'
      ],
      color: 'from-indigo-500 to-blue-600'
    },
    'real-estate-tours': {
      icon: Camera,
      title: 'Real Estate Tours',
      subtitle: 'Immersive Property Experiences',
      description: 'We specialize in creating immersive 360-degree photography and virtual reality tours for real estate properties. These engaging experiences help potential buyers explore properties remotely and make informed decisions.',
      benefits: [
        'Immersive 360-degree property tours',
        'Increased buyer engagement',
        'Higher conversion rates',
        'Google Street View integration',
        'Virtual reality compatibility',
        'Enhanced online listings'
      ],
      process: [
        'Property Assessment',
        '360° Photography',
        'Tour Development',
        'Integration & Launch'
      ],
      color: 'from-yellow-500 to-orange-600'
    },
    'virtual-tours': {
      icon: Camera,
      title: 'Virtual Tours & Photography',
      subtitle: 'Immersive Business Experiences',
      description: 'We specialize in creating immersive 360-degree photography and virtual reality tours that bring your business to life. These engaging experiences can build trust and lead to higher conversion rates. Your customers can preview your location from the comfort of their personal devices',
      benefits: [
        'Immersive 360-degree experiences',
        'Increased customer engagement',
        'Higher conversion rates',
        'Google Street View integration',
        'Virtual reality compatibility',
        'Enhanced online presence'
      ],
      process: [
        'Site Assessment',
        '360° Photography',
        'Tour Development',
        'Integration & Launch'
      ],
      color: 'from-yellow-500 to-orange-600'
    }
  };

  const currentService = serviceData[service as keyof typeof serviceData];

  if (!currentService) {
    return <div>Service not found</div>;
  }

  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": currentService.title,
    "description": currentService.description,
    "provider": {
      "@type": "Organization",
      "name": "ThinkMents",
      "url": "https://thinkments.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "301 S Washburn St Unit D",
        "addressLocality": "Decatur",
        "addressRegion": "TX",
        "postalCode": "76234",
        "addressCountry": "US"
      }
    },
    "serviceType": currentService.title,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${currentService.title} Services`,
      "itemListElement": currentService.benefits.slice(0, 3).map(benefit => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": benefit,
          "description": benefit
        }
      }))
    }
  };

  return (
    <>
      <SEO
        title={`${currentService.title} - ThinkMents Professional Services`}
        description={`Expert ${currentService.title.toLowerCase()} services from ThinkMents in Decatur, Texas. ${currentService.description.substring(0, 120)}...`}
        keywords={`${currentService.title.toLowerCase()}, professional services, ThinkMents, digital marketing, ${service}, Decatur Texas`}
        url={`/services/${service}`}
        type="service"
        structuredData={serviceStructuredData}
      />
      
      <motion.div
        className=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&h=1080&fit=crop"
              alt="Digital Marketing Hero Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-accent/30" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                className={`w-20 h-20 bg-gradient-to-br ${currentService.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <currentService.icon className="w-10 h-10 text-white" />
              </motion.div>
              
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl mb-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {currentService.title}
              </motion.h1>
              
              <motion.p
                className="text-xl md:text-2xl text-primary mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {currentService.subtitle}
              </motion.p>
              
              <motion.p
                className="text-lg text-white mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {currentService.description}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Button asChild size="lg" className={`bg-gradient-to-r ${currentService.color}`}>
                  <Link to="/get-a-quote" className="flex items-center space-x-2">
                    <span>Get Your Free {currentService.title.split(' ')[0]} Analysis</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl mb-8">
                  What You'll <span className={`bg-gradient-to-r ${currentService.color} bg-clip-text text-transparent`}>Achieve</span>
                </h2>
                <div className="space-y-4">
                  {currentService.benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className={`w-6 h-6 text-green-500 mt-0.5 flex-shrink-0`} />
                      <p className="text-muted-foreground">{benefit}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {currentService.process.map((step, index) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full">
                      <CardContent className="p-6 text-center">
                        <motion.div
                          className={`w-12 h-12 bg-gradient-to-br ${currentService.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold`}
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          {index + 1}
                        </motion.div>
                        <h3 className="font-semibold text-sm">{step}</h3>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl mb-6">
                Ready to Get Started with{' '}
                <span className={`bg-gradient-to-r ${currentService.color} bg-clip-text text-transparent`}>
                  {currentService.title}?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss how our {currentService.title.toLowerCase()} services can 
                help your business achieve its goals and drive real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className={`bg-gradient-to-r ${currentService.color}`}>
                  <Link to="/get-a-quote" className="flex items-center space-x-2">
                    <span>Get Your Free Consultation</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/case-studies" className="flex items-center space-x-2">
                    <span>See Success Stories</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  );
}