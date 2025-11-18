import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { ArrowRight, Gem, Users, TrendingUp, Shield, Star, Globe, Eye, Settings, Zap, Award, Target, BarChart3, Sparkles } from 'lucide-react';
import SEO from '../SEO';

export default function GoogleBusinessProfileEinsteinium() {
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Einsteinium: Ultimate Visibility - Google Business Profile",
    "description": "Premium Google Business Profile concierge service for unrivaled local market dominance with dedicated account manager and advanced reputation management",
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
      "price": "989",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "989",
        "priceCurrency": "USD",
        "billingIncrement": "P1M"
      }
    },
    "serviceType": "Google Business Profile Einsteinium Ultimate Visibility",
    "areaServed": "United States"
  };

  const features = [
    {
      icon: Gem,
      title: 'Premium Dedicated Account Manager',
      description: 'Elite-level concierge service with a premium dedicated account manager for the ultimate hands-off, high-performance profile management.',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Target,
      title: 'Advanced Strategic Sessions',
      description: 'Comprehensive quarterly strategic meetings with advanced analytics and growth optimization planning.',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: Shield,
      title: 'Premium Reputation Management',
      description: 'Elite-tier reputation protection and comprehensive crisis management to safeguard your brand at the highest level.',
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: Eye,
      title: 'Advanced Hyperlocal Targeting',
      description: 'Sophisticated hyperlocal targeting strategies with AI-powered optimization for maximum visibility and market penetration.',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: BarChart3,
      title: 'Premium Custom Reporting',
      description: 'Executive-level custom reports and advanced analytics with detailed ROI tracking and competitive analysis.',
      color: 'from-purple-500 to-violet-600'
    },
    {
      icon: Sparkles,
      title: 'Proactive Crisis Management+',
      description: 'Premium 24/7 monitoring and proactive management with instant response protocols to ensure perfect brand projection.',
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  const packageDetails = {
    name: 'Einsteinium: Ultimate Visibility - Google Business Profile',
    price: '$989.00',
    billing: '/month',
    description: 'The ultimate premium concierge service for absolute local market supremacy',
    features: [
      'Premium dedicated account manager',
      'Advanced quarterly strategic sessions',
      'Elite reputation management protocols',
      '24/7 proactive crisis management',
      'AI-powered hyperlocal targeting',
      'Executive-level custom reporting',
      'Premium review response management',
      'Advanced Google Posts scheduling',
      'Comprehensive Q&A optimization',
      'Advanced competitor intelligence',
      'Premium local citation management',
      'Professional photo & video optimization',
      'Advanced performance tracking & ROI',
      'VIP priority support & consultation',
      'Elite brand protection & monitoring',
      'Advanced local SEO strategies',
      'Market domination tactics',
      'Continuous growth optimization',
      'Advanced analytics & insights',
      'Premium competitive positioning'
    ],
    highlights: [
      'Premium dedicated account manager',
      'Advanced quarterly strategic sessions',
      'Elite reputation management',
      'AI-powered hyperlocal targeting',
      'Executive-level custom reporting',
      '24/7 proactive crisis management',
      'Absolute local market supremacy',
      'Protected premium brand asset'
    ]
  };

  const benefits = [
    {
      icon: Gem,
      title: 'Premium Concierge Excellence',
      description: 'Experience the ultimate in hands-off, high-performance profile management with elite dedicated account manager and advanced strategic sessions.',
      stats: 'Premium VIP'
    },
    {
      icon: Shield,
      title: 'Elite Brand Protection',
      description: 'Advanced reputation management with 24/7 monitoring and proactive crisis management ensure your business always projects a perfect image.',
      stats: '100% protected'
    },
    {
      icon: Award,
      title: 'Market Supremacy Elite',
      description: 'The definitive premium solution for absolute supremacy in local search ranking and unparalleled Google Maps visibility.',
      stats: 'Market domination'
    }
  ];

  const comparisonFeatures = [
    { feature: 'Premium Dedicated Account Manager', included: true },
    { feature: 'Advanced Quarterly Strategic Sessions', included: true },
    { feature: 'Elite Reputation Management', included: true },
    { feature: 'AI-Powered Hyperlocal Targeting', included: true },
    { feature: 'Executive-Level Custom Reporting', included: true },
    { feature: '24/7 Proactive Crisis Management', included: true },
    { feature: 'Premium Review Management', included: true },
    { feature: 'Elite Brand Protection & Monitoring', included: true },
    { feature: 'Market Domination Tactics', included: true },
    { feature: 'Advanced Competitive Intelligence', included: true }
  ];

  return (
    <>
      <SEO
        title="Einsteinium Ultimate Visibility Google Business Profile - $989/month - ThinkMents"
        description="Premium Google Business Profile concierge service for $989/month. Elite dedicated account manager, advanced strategic sessions, and comprehensive reputation management for market domination."
        keywords="premium Google Business Profile, ultimate visibility service, elite account manager, advanced reputation management, AI-powered targeting, Google Maps supremacy"
        url="/Google-Business-Profile-Concierge-Ultimate-Visibility"
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
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Gem className="w-5 h-5 text-purple-600 mr-2" />
                <span className="text-purple-700 font-medium">Einsteinium Package</span>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Ultimate Visibility{' '}
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
                <span className="text-3xl md:text-4xl font-bold text-primary">$989.00</span>
                <span className="text-xl text-muted-foreground ml-2">/month</span>
              </motion.div>
              
              <motion.p
                className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Experience unrivaled local market dominance and ultimate visibility with our premium Google Business Profile Concierge package. This all-inclusive service provides everything needed for a truly hands-off, high-performance profile, including a dedicated account manager, quarterly strategic sessions, and advanced reputation management to safeguard your brand.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link to="/get-a-quote">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
                    Get Premium Service
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/case-studies">
                  <Button size="lg" variant="outline">
                    View Elite Results
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
                Premium{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Concierge Excellence
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We implement advanced hyperlocal targeting, offer premium custom reporting, and provide 24/7 proactive crisis management, ensuring your business always projects a perfect image and achieves absolute supremacy in local search ranking.
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
                    Market Domination
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  The definitive premium solution for businesses aiming for absolute supremacy in local search ranking and unparalleled Google Maps visibility
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
                      <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full mb-4">
                        <Gem className="w-5 h-5 text-purple-600 mr-2" />
                        <span className="text-purple-700 font-medium">Einsteinium Package</span>
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
                        <h4 className="text-lg font-semibold mb-4">Premium Concierge Features:</h4>
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
                        <h4 className="text-lg font-semibold mb-4">Elite Advantages:</h4>
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
                          <h5 className="font-semibold mb-2 text-primary">Premium Includes:</h5>
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
                          <span>Start Premium Concierge</span>
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
                Achieve{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Market Domination
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Turn your profile into a powerful, protected premium asset for continuous growth with our definitive solution for absolute supremacy in local search ranking and unparalleled Google Maps visibility.
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
                Ready to Achieve{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Market Domination?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Experience unrivaled local market dominance with our premium concierge service. Let our elite team handle everything while you enjoy absolute supremacy in local search ranking.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent">
                    <Link to="/get-a-quote" className="flex items-center space-x-2">
                      <span>Start Premium Concierge</span>
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