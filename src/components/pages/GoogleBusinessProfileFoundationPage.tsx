import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { ArrowRight, Search, CheckCircle2, Users, TrendingUp, Shield, Star, Globe, Eye, Settings, Zap, Award } from 'lucide-react';
import SEO from '../SEO';

export default function GoogleBusinessProfileFoundationPage() {
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Foundation: Audit & Setup - Google Business Profile",
    "description": "Comprehensive Google Business Profile audit and setup service to establish a strong online presence with optimized profile foundation",
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
    "offers": {
      "@type": "Offer",
      "price": "399",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "399",
        "priceCurrency": "USD"
      }
    },
    "serviceType": "Google Business Profile Foundation Setup",
    "areaServed": "United States"
  };

  const features = [
    {
      icon: Search,
      title: 'Comprehensive Profile Audit',
      description: 'Thorough examination of your current Google Business Profile to identify optimization opportunities.',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Settings,
      title: 'Complete Profile Setup',
      description: 'Meticulous optimization of all crucial fields to ensure accuracy and Google compliance.',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: CheckCircle2,
      title: 'Field Optimization',
      description: 'Strategic optimization of every profile section for maximum local search visibility.',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Shield,
      title: 'Trust & Authority Building',
      description: 'Establish immediate credibility with a professionally optimized business profile.',
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: TrendingUp,
      title: 'Local Search Ranking',
      description: 'Foundation work that improves your visibility in Google Maps and local search results.',
      color: 'from-indigo-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Customer Attraction',
      description: 'Attract more local customers with a perfectly presented and optimized business profile.',
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  const packageDetails = {
    name: 'Foundation: Audit & Setup - Google Business Profile',
    price: '$399.00',
    billing: 'One-time',
    description: 'Complete foundation service to establish your strong online presence',
    features: [
      'Comprehensive profile audit & analysis',
      'Complete business information optimization',
      'Category selection & optimization',
      'Business description enhancement',
      'Hours & contact information setup',
      'Service area configuration',
      'Attributes & amenities optimization',
      'Photo optimization guidelines',
      'Review strategy recommendations',
      'Local SEO foundation setup',
      'Compliance verification',
      'Performance baseline establishment',
      'Detailed audit report delivery',
      'Implementation guidelines provided'
    ],
    highlights: [
      'Professional foundation establishment',
      'Google compliance guaranteed',
      'Local search optimization',
      'Trust & authority building',
      'Comprehensive audit report',
      'Implementation support included'
    ]
  };

  const benefits = [
    {
      icon: Shield,
      title: 'Strong Foundation',
      description: 'Establish a solid foundation with comprehensive audit and meticulous setup of all profile elements.',
      stats: 'Complete setup'
    },
    {
      icon: Award,
      title: 'Immediate Trust',
      description: 'Build instant credibility and authority with a professionally optimized Google Business Profile.',
      stats: '100% compliant'
    },
    {
      icon: Zap,
      title: 'Local Visibility',
      description: 'Improved local search ranking helps your business appear prominently on Google Maps and Search.',
      stats: '3x more visible'
    }
  ];

  const comparisonFeatures = [
    { feature: 'Complete Profile Audit', included: true },
    { feature: 'Business Information Setup', included: true },
    { feature: 'Category Optimization', included: true },
    { feature: 'Compliance Verification', included: true },
    { feature: 'Photo Guidelines', included: true },
    { feature: 'Performance Baseline', included: true },
    { feature: 'Audit Report', included: true },
    { feature: 'Implementation Support', included: true }
  ];

  return (
    <>
      <SEO
        title="Foundation: Audit & Setup Google Business Profile - $399 One-time - ThinkMents"
        description="Establish strong online presence with comprehensive Google Business Profile audit & setup for $399. Professional optimization, compliance verification, and local search foundation."
        keywords="Google Business Profile setup, Google My Business audit, local SEO foundation, business profile optimization, Google Maps setup, local search ranking"
        url="/Google-Business-Profile-Foundation-Audit-&-Setup"
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
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Settings className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-blue-700 font-medium">Foundation Package</span>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Foundation: Audit & Setup{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Google Business Profile
                </span>
              </motion.h1>
              
              <motion.div
                className="flex items-center justify-center mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <span className="text-3xl md:text-4xl font-bold text-primary">$399.00</span>
                <span className="text-xl text-muted-foreground ml-2">One-time</span>
              </motion.div>
              
              <motion.p
                className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Establish a strong online presence with our Google Business Profile Foundation package. We conduct a thorough audit of your current profile, identify areas for improvement, and meticulously optimize all crucial fields to ensure accuracy and compliance. This essential service lays the groundwork for improved local search ranking, helping your business appear prominently on Google Maps and Search results.
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

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl mb-4">
                Complete{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Foundation Setup
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Attract more local customers by presenting a perfectly optimized profile that builds immediate trust and authority with comprehensive audit and setup services.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full group hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    />
                    <CardContent className="p-6 relative z-10">
                      <motion.div
                        className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl mb-6 flex items-center justify-center`}
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <feature.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      
                      <h3 className="text-xl mb-4 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Package Details Section */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl mb-4">
                  Everything You Need for{' '}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Strong Foundation
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Comprehensive audit and setup service that lays the groundwork for improved local search ranking
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="relative overflow-hidden border-2 border-primary/20">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"
                  />
                  <CardContent className="p-8 relative z-10">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full mb-4">
                        <Settings className="w-5 h-5 text-blue-600 mr-2" />
                        <span className="text-blue-700 font-medium">Foundation Package</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl mb-2">{packageDetails.name}</h3>
                      <div className="flex items-center justify-center mb-4">
                        <span className="text-4xl md:text-5xl font-bold text-primary">{packageDetails.price}</span>
                        <span className="text-xl text-muted-foreground ml-2">{packageDetails.billing}</span>
                      </div>
                      <p className="text-lg text-muted-foreground">{packageDetails.description}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold mb-4">Complete Foundation Setup:</h4>
                        <ul className="space-y-3">
                          {packageDetails.features.map((feature, index) => (
                            <motion.li
                              key={feature}
                              className="flex items-center space-x-3"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.05 }}
                              viewport={{ once: true }}
                            >
                              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent" />
                              <span className="text-muted-foreground">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-4">Foundation Advantages:</h4>
                        <ul className="space-y-3">
                          {packageDetails.highlights.map((highlight, index) => (
                            <motion.li
                              key={highlight}
                              className="flex items-center space-x-3"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.05 }}
                              viewport={{ once: true }}
                            >
                              <Star className="w-5 h-5 text-yellow-500" />
                              <span className="text-muted-foreground">{highlight}</span>
                            </motion.li>
                          ))}
                        </ul>

                        <div className="mt-8 p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/10">
                          <h5 className="font-semibold mb-2 text-primary">Foundation Includes:</h5>
                          <div className="space-y-2">
                            {comparisonFeatures.map((item, index) => (
                              <div key={item.feature} className="flex items-center space-x-2">
                                <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                                  <div className="w-2 h-2 bg-white rounded-full" />
                                </div>
                                <span className="text-sm text-muted-foreground">{item.feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <motion.div
                      className="text-center mt-8"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent">
                        <Link to="/get-a-quote" className="flex items-center space-x-2">
                          <span>Start Foundation Setup</span>
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl mb-4">
                Build Your{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Strong Foundation
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Establish immediate trust and authority with a perfectly optimized profile that helps your business appear prominently on Google Maps and Search results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full text-center group hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8">
                      <motion.div
                        className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mb-6 flex items-center justify-center mx-auto"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <benefit.icon className="w-10 h-10 text-white" />
                      </motion.div>
                      
                      <h3 className="text-xl mb-4 group-hover:text-primary transition-colors">
                        {benefit.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {benefit.description}
                      </p>

                      <div className="text-lg font-semibold text-primary">
                        {benefit.stats}
                      </div>
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
                Ready to Build Your{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Strong Foundation?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Start establishing your strong online presence with our comprehensive Google Business Profile audit and setup. Let us lay the groundwork for your local search success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent">
                    <Link to="/get-a-quote" className="flex items-center space-x-2">
                      <span>Get Your Foundation Setup</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/case-studies" className="flex items-center space-x-2">
                      <span>View Success Stories</span>
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