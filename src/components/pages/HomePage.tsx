import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { ArrowRight, Zap, Target, Rocket, Users, TrendingUp, Globe, Play, Star, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import SEO from '../SEO';
import { FAQSection } from '../seo/FAQSection';
import { InternalLinks, CTALinks } from '../seo/InternalLinks';
import { getSEOConfig } from '../../config/seoPages';
import { GENERAL_FAQS } from '../../data/faqs';
import type { InternalLink } from '../seo/InternalLinks';
import { SEOHead } from '../SEOHead';
import { generateLocalBusinessSchema, generateOrganizationSchema } from '../../utils/seo';
import { OptimizedImage } from '../OptimizedImage';
import { trackCTAClick, trackServiceView } from '../../utils/analytics';

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const resultsRef = useRef(null);
  
  const { scrollY } = useScroll();
  const isServicesInView = useInView(servicesRef, { once: true });
  const isResultsInView = useInView(resultsRef, { once: true });

  // Enhanced parallax transforms
  const heroBackgroundY = useTransform(scrollY, [0, 800], [0, -400]);
  const heroContentY = useTransform(scrollY, [0, 800], [0, -200]);
  const heroFloatingY = useTransform(scrollY, [0, 600], [0, -300]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 1.1]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Function to get the appropriate route for each service
  const getServiceRoute = (serviceTitle: string): string => {
    const serviceRoutes: { [key: string]: string } = {
      'Website Design & Development': '/services/website-design',
      'Search Engine Optimization': '/services/seo',
      'Google Marketing': '/services/google-marketing',
      'Social Media Marketing': '/services/social-media-marketing',
      'Professional Videography': '/services/videography',
      'Virtual Tours & Photography': '/services/virtual-tours'
    };
    
    return serviceRoutes[serviceTitle] || '/services';
  };

  const services = [
    {
      icon: Globe,
      title: 'Website Design & Development',
      description: 'Stunning, user-friendly websites optimized for performance and conversions',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: TrendingUp,
      title: 'Search Engine Optimization',
      description: 'Dominate search results and drive organic traffic to your website',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: Target,
      title: 'Google Marketing',
      description: 'Trusted Google Partner for 10 years managing ads and business profiles',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Users,
      title: 'Social Media Marketing',
      description: 'Build strong online communities and engage your target audience',
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: Zap,
      title: 'Professional Videography',
      description: 'Compelling video content that captivates and converts',
      color: 'from-indigo-500 to-blue-600'
    },
    {
      icon: Rocket,
      title: 'Virtual Tours & Photography',
      description: 'Immersive 360-degree experiences that bring your business to life',
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  const stats = [
    { number: '100+', label: 'Businesses Helped', icon: Users },
    { number: '10', label: 'Years Google Partner', icon: Target },
    { number: '95%', label: 'Client Satisfaction', icon: TrendingUp },
    { number: '500%', label: 'Average ROI Increase', icon: Rocket }
  ];

  const testimonials = [
    {
      text: "Corey and his team are unbelievable. If it can be done with a computer then they can do it, and for much less than what you would pay in the city. HIGHLY recommend.",
      author: "Jeff Biggar",
      company: "Local Business Owner",
      rating: 5
    },
    {
      text: "ThinkMents has been a fantastic partner for our law firm. Corey, Jeremy, and Chris are not only highly skilled but also incredibly easy to work with. Corey's expertise in web design and digital marketing helped us transform our website into a professional and user-friendly platform that truly represents who we are.",
      author: "Berry White",
      company: "Attorney",
      rating: 5
    }
  ];

  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ThinkMents",
    "description": "Professional digital marketing and web design agency in Decatur, Texas helping local businesses grow with proven results",
    "url": "https://thinkments.com",
    "logo": "https://thinkments.com/logo.png",
    "image": "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=630&fit=crop",
    "telephone": "+1-940-627-3538",
    "priceRange": "$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Business St",
      "addressLocality": "Decatur",
      "addressRegion": "TX",
      "postalCode": "76234",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.2348,
      "longitude": -97.5864
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://facebook.com/thinkments",
      "https://twitter.com/thinkments",
      "https://linkedin.com/company/thinkments"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Design & Development",
            "description": "Custom website design and development services"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Search Engine Optimization",
            "description": "SEO services to improve search rankings"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Google Ads Management",
            "description": "Professional Google Ads campaign management"
          }
        }
      ]
    }
  };

  // Get SEO config
  const seoConfig = getSEOConfig('home');

  // Related services for internal linking
  const relatedServices: InternalLink[] = [
    {
      title: 'Web Design & Development',
      description: 'Build a stunning, high-converting website that sets you apart from competitors.',
      href: '/web-design',
      category: 'Service'
    },
    {
      title: 'Strategic SEO Services',
      description: 'Dominate search results and drive qualified organic traffic to your business.',
      href: '/strategic-seo',
      category: 'Service'
    },
    {
      title: 'AI Optimization',
      description: 'Future-proof your content for AI search engines like ChatGPT and Perplexity.',
      href: '/artificial-intelligence-optimization',
      category: 'Innovation'
    },
    {
      title: '360° Virtual Tours',
      description: 'Showcase your business with immersive virtual tours and professional photography.',
      href: '/virtual-tours',
      category: 'Service'
    },
    {
      title: 'Professional Videography',
      description: 'Create compelling video content that captivates your audience and drives conversions.',
      href: '/videography',
      category: 'Service'
    },
    {
      title: 'Digital Marketing Strategy',
      description: 'Comprehensive marketing solutions including SEO, PPC, and social media.',
      href: '/digital-marketing',
      category: 'Service'
    }
  ];

  return (
    <>
      <SEO
        title="ThinkMents - Digital Marketing & Web Design Agency in Decatur, Texas"
        description="Professional digital marketing, web design, and SEO services in Decatur, Texas. Helping local businesses grow with custom websites, strategic marketing, and proven results. 10+ years Google Partner."
        keywords="digital marketing, web design, SEO, Decatur Texas, local business marketing, website development, social media marketing, Google Ads, ThinkMents"
        url="/"
        type="website"
        image="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=630&fit=crop"
        structuredData={homeStructuredData}
      />
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
      {/* Enhanced Hero Section with Parallax */}
      <motion.section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
        style={{ opacity: heroOpacity }}
      >
        {/* Parallax Background Layers */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: heroBackgroundY, scale: heroScale }}
        >
          {/* Background Image with Overlay */}
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
        </motion.div>

        {/* Hero Content */}
        <motion.div
          className="container mx-auto px-4 text-center relative z-20"
          style={{ y: heroContentY }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Hero Badge */}
            <motion.div
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-2 mb-8 border border-white/20"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm text-white">Trusted by 100+ Businesses</span>
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl mb-6 text-white drop-shadow-2xl"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Transform Your Business with{' '}
              <motion.span
                className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  backgroundSize: '200% 200%'
                }}
              >
                Digital Marketing
              </motion.span>
              <br />
              That Actually{' '}
              <motion.span
                className="inline-block bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
                animate={{
                  rotateX: [0, 10, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Works
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90 max-w-4xl mx-auto drop-shadow-lg"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Transform your digital presence with marketing strategies that deliver measurable results. We've helped 100+ businesses{' '}
              <span className="text-yellow-400">grow their online presence and drive meaningful ROI</span> through data-driven campaigns.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  asChild 
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-red-600 hover:to-orange-500 text-white text-lg px-8 py-6 relative overflow-hidden group shadow-2xl"
                >
                  <Link to="/get-a-quote" className="flex items-center space-x-2">
                    <span>Get Free Marketing Audit</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  asChild 
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6 shadow-xl"
                >
                  <Link to="/case-studies" className="flex items-center space-x-2">
                    <Play className="w-5 h-5" />
                    <span>Read Success Stories</span>
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white/80"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>No Long-Term Contracts</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>10+ Years Google Partner</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
            <motion.div
              className="w-2 h-4 bg-white/70 rounded-full mt-2"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <p className="text-white/60 text-sm mt-2 text-center">Scroll to explore</p>
        </motion.div>
      </motion.section>

      {/* Social Proof Section */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl mb-8 text-muted-foreground">
              What Our Clients Say About Their Results
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white/50 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/20"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-normal">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
              A Comprehensive Suite of{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Digital Marketing Services
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full group cursor-pointer relative overflow-hidden">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    whileHover={{ scale: 1.05 }}
                  />
                  <CardContent className="p-6 relative z-10">
                    <Link to={getServiceRoute(service.title)} className="block">
                      <motion.div
                        className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg mb-4 flex items-center justify-center`}
                        whileHover={{ 
                          rotate: 360,
                          scale: 1.1
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <service.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <h3 className="text-xl mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section ref={resultsRef} className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isResultsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
              The{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ThinkMents Effect
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Tangible Results for Your Business. We deliver measurable success 
              and help businesses dominate their markets.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
            {stats.filter(stat => !stat.label.toLowerCase().includes('roi')).map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isResultsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>
                <motion.div
                  className="text-3xl md:text-4xl mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  animate={isResultsInView ? { opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                >
                  {stat.number}
                </motion.div>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isResultsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/case-studies" className="flex items-center space-x-2">
                <span>See Our Case Studies</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Internal Links Section */}
      <InternalLinks 
        links={relatedServices}
        title="Explore Our Digital Marketing Services"
        description="Discover comprehensive solutions designed to elevate your online presence and drive measurable results for your business"
        columns={3}
      />

      {/* FAQ Section */}
      <FAQSection 
        faqs={GENERAL_FAQS}
        title="Frequently Asked Questions About Our Services"
      />

      {/* CTA Links Section */}
      <CTALinks
        primaryCTA={{
          title: "Ready to Transform Your Marketing?",
          description: "Get a free consultation and custom marketing strategy tailored to your business goals. No obligations, just expert insights.",
          href: "/get-a-quote",
          buttonText: "Get Your Free Audit"
        }}
        secondaryCTA={{
          title: "Explore Our Success Stories",
          description: "See how we've helped businesses like yours achieve remarkable growth and dominate their markets.",
          href: "/case-studies",
          buttonText: "View Case Studies"
        }}
      />
    </motion.div>
    </>
  );
}