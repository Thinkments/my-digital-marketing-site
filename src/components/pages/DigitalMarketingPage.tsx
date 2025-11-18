import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { TrendingUp, Target, Users, Search, BarChart3, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import SEO from '../SEO';

export default function DigitalMarketingPage() {
  const services = [
    {
      icon: Search,
      title: 'Search Engine Optimization (SEO)',
      description: 'Improve your search rankings and drive organic traffic with proven SEO strategies.',
      features: ['Keyword Research', 'On-Page Optimization', 'Technical SEO', 'Local SEO']
    },
    {
      icon: Target,
      title: 'Pay-Per-Click Advertising (PPC)',
      description: 'Generate immediate results with targeted Google Ads and social media advertising.',
      features: ['Google Ads Management', 'Social Media Ads', 'Landing Page Optimization', 'Campaign Analytics']
    },
    {
      icon: Users,
      title: 'Social Media Marketing',
      description: 'Build your brand and engage customers across all major social media platforms.',
      features: ['Content Creation', 'Community Management', 'Social Advertising', 'Influencer Partnerships']
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Track performance and optimize campaigns with detailed analytics and insights.',
      features: ['Performance Tracking', 'Custom Dashboards', 'ROI Analysis', 'Monthly Reports']
    }
  ];

  const benefits = [
    { number: '300%', label: 'Average Traffic Increase' },
    { number: '150%', label: 'Lead Generation Boost' },
    { number: '4.9/5', label: 'Client Satisfaction' },
    { number: '98%', label: 'Client Retention Rate' }
  ];

  const digitalMarketingStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Digital Marketing Services",
    "description": "Comprehensive digital marketing strategies that drive growth and maximize ROI. From SEO to social media, help businesses dominate their online presence and attract more customers.",
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
    "serviceType": "Digital Marketing",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Search Engine Optimization",
            "description": "Improve search rankings and drive organic traffic with proven SEO strategies"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pay-Per-Click Advertising",
            "description": "Generate immediate results with targeted Google Ads and social media advertising"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Social Media Marketing",
            "description": "Build brand and engage customers across all major social media platforms"
          }
        }
      ]
    }
  };

  return (
    <>
      <SEO
        title="Digital Marketing Services - ThinkMents Comprehensive Online Marketing"
        description="Drive growth and maximize ROI with comprehensive digital marketing strategies. From SEO to social media, we help businesses dominate their online presence and attract more customers in Decatur, Texas."
        keywords="digital marketing, online marketing, SEO services, PPC advertising, social media marketing, Google Ads, digital strategy, Decatur Texas marketing"
        url="/digital-marketing"
        type="service"
        structuredData={digitalMarketingStructuredData}
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
                Digital{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Marketing
                </span>{' '}
                Services
              </motion.h1>
              
              <motion.p
                className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Drive growth and maximize ROI with comprehensive digital marketing strategies. From SEO to social media, we help businesses dominate their online presence and attract more customers.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link to="/get-a-quote">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
                    Get Free Marketing Audit
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/case-studies">
                  <Button size="lg" variant="outline">
                    View Success Stories
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-gradient-to-r from-primary to-accent">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl md:text-4xl mb-2">{benefit.number}</div>
                  <p className="text-white/80">{benefit.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl mb-6">
                Our Digital Marketing{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Services
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive digital marketing solutions designed to grow your business and maximize your online presence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full group hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-lg">
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle className="group-hover:text-primary transition-colors">
                          {service.title}
                        </CardTitle>
                      </div>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardHeader>
                    
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
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
                Ready to Accelerate Your{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Business Growth?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's create a digital marketing strategy that drives real results for your business. Get your free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/get-a-quote">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
                    Start Your Campaign
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline">
                    Schedule Consultation
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  );
}