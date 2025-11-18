import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { ArrowRight, Globe, TrendingUp, Target, Users, Video, Camera } from 'lucide-react';
import SEO from '../SEO';

export default function ServicesPage() {
  const servicesStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "LocalBusiness",
      "name": "ThinkMents",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "301 S Washburn St Unit D",
        "addressLocality": "Decatur",
        "addressRegion": "TX",
        "postalCode": "76234",
        "addressCountry": "US"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Design & Development",
            "description": "Custom website design and development services optimized for performance and conversions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Search Engine Optimization",
            "description": "Professional SEO services to increase visibility and drive organic traffic"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Google Marketing",
            "description": "Google Ads and Business Profile management by certified Google Partner"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Social Media Marketing",
            "description": "Social media management and advertising across multiple platforms"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Professional Videography",
            "description": "Corporate video production and promotional content creation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Virtual Tours & Photography",
            "description": "360-degree photography and virtual reality tour creation"
          }
        }
      ]
    }
  };

  const services = [
    {
      id: 'website-design',
      icon: Globe,
      title: 'Website Design & Development',
      description: 'Your website is your digital storefront. We create stunning, user-friendly websites that not only look great but are also optimized for performance and conversions.',
      features: ['Custom Design', 'Mobile Responsive', 'SEO Optimized', 'Fast Loading', 'E-commerce Ready'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 'seo',
      icon: TrendingUp,
      title: 'Search Engine Optimization',
      description: 'Dominate search engine results and drive organic traffic to your website. Our SEO experts utilize proven strategies to increase your visibility.',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Local SEO', 'Content Strategy'],
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 'google-marketing',
      icon: Target,
      title: 'Google Marketing',
      description: 'As a trusted Google Partner for 10 years, we have the expertise to manage your Google Business Profile and run effective Google Ads campaigns.',
      features: ['Google Ads', 'Business Profile', 'Shopping Campaigns', 'Display Ads', 'YouTube Ads'],
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 'social-media-marketing',
      icon: Users,
      title: 'Social Media Marketing',
      description: 'Build a strong online community and engage with your target audience across various social media platforms.',
      features: ['Content Creation', 'Community Management', 'Paid Social', 'Influencer Marketing', 'Analytics'],
      color: 'from-pink-500 to-rose-600'
    },
    {
      id: 'videography',
      icon: Video,
      title: 'Professional Videography',
      description: 'Tell your brand\'s story with compelling video content. From corporate videos to social media content.',
      features: ['Corporate Videos', 'Promotional Content', 'Social Media Videos', 'Product Demos', 'Event Coverage'],
      color: 'from-indigo-500 to-blue-600'
    },
    {
      id: 'virtual-tours',
      icon: Camera,
      title: 'Virtual Tours & Photography',
      description: 'We specialize in creating immersive 360-degree photography and virtual reality tours that bring your business to life.',
      features: ['360° Photography', 'Virtual Tours', 'Google Street View', 'Interactive Maps', 'VR Experiences'],
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  return (
    <>
      <SEO
        title="Digital Marketing Services - ThinkMents Decatur Texas"
        description="Comprehensive digital marketing services in Decatur, Texas including web design, SEO, Google Ads, social media marketing, videography, and virtual tours. Free consultation available."
        keywords="digital marketing services, web design Decatur TX, SEO services, Google Ads management, social media marketing, videography, virtual tours"
        url="/services"
        type="website"
        structuredData={servicesStructuredData}
      />
      <motion.div
        className=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Comprehensive{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Digital Marketing
              </span>{' '}
              Services
            </motion.h1>
            
            <motion.p
              className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              From website design to advanced SEO strategies, we offer everything you need to dominate your market and drive sustainable growth. Our full-service approach ensures your digital presence works cohesively to maximize results.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link to="/get-a-quote">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
                  Get Started Today
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/case-studies">
                <Button size="lg" variant="outline">
                  View Our Results
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full group hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />
                  <CardContent className="p-6 relative z-10">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl mb-6 flex items-center justify-center`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <h3 className="text-xl mb-4 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-medium mb-3">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <motion.li
                            key={feature}
                            className="text-sm text-muted-foreground flex items-center space-x-2"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: featureIndex * 0.05 }}
                            viewport={{ once: true }}
                          >
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        asChild 
                        variant="outline" 
                        className="w-full group-hover:border-primary group-hover:text-primary transition-colors"
                      >
                        <Link 
                          to={`/services/${service.id}`}
                          className="flex items-center justify-center space-x-2"
                        >
                          <span>Learn More</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
              Ready to Transform Your{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Digital Presence?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how our comprehensive digital marketing services can 
              help your business achieve its goals and dominate your market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent">
                  <Link to="/get-a-quote" className="flex items-center space-x-2">
                    <span>Get Your Free Consultation</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" variant="outline">
                  <Link to="/case-studies" className="flex items-center space-x-2">
                    <span>View Our Results</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
    </>
  );
}