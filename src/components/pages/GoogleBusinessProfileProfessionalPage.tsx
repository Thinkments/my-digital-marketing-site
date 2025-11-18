import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { ArrowRight, MapPin, Camera, Users, TrendingUp, Phone, Star, Globe, Eye, MessageSquare, Shield, Award, Zap } from 'lucide-react';
import SEO from '../SEO';

export default function GoogleBusinessProfileProfessionalPage() {
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Silver - Google Business Profile Professional Complete Management",
    "description": "Comprehensive Google Business Profile management service for consistent local lead generation and map pack domination",
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
      "price": "349",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "349",
        "priceCurrency": "USD",
        "billingIncrement": "P1M"
      }
    },
    "serviceType": "Google Business Profile Professional Management",
    "areaServed": "United States"
  };

  const features = [
    {
      icon: MessageSquare,
      title: 'Strategic Google Posts',
      description: 'Professionally crafted Google posts that engage your audience and boost local search visibility.',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Star,
      title: 'Review Management',
      description: 'Diligent review monitoring with professional responses that build trust and credibility.',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: Eye,
      title: 'Q&A Monitoring',
      description: 'Proactive question and answer monitoring to ensure accurate information and engagement.',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: TrendingUp,
      title: 'Local Search Ranking',
      description: 'Continuous optimization efforts that significantly improve your local search ranking.',
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: MapPin,
      title: 'Map Pack Domination',
      description: 'Strategic optimization to help your business dominate the local map pack results.',
      color: 'from-indigo-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Customer Acquisition',
      description: 'Transform your profile into a reliable, evergreen source for new customer acquisition.',
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  const packageDetails = {
    name: 'Silver - Google Business Profile Professional Complete Management',
    price: '$349.00',
    billing: '/month',
    description: 'Comprehensive monthly management for consistent local lead generation',
    features: [
      'Strategic Google Posts creation & scheduling',
      'Professional review response management',
      'Proactive Q&A monitoring & responses',
      'Monthly profile optimization updates',
      'Local search ranking improvements',
      'Google Maps visibility enhancement',
      'Competitor analysis & insights',
      'Performance tracking & reporting',
      'Photo management & optimization',
      'Business information accuracy monitoring',
      'Local citation consistency checks',
      'Monthly strategy consultation calls'
    ],
    highlights: [
      'Complete hands-off management',
      'Dedicated Google Partner expertise',
      'Proven local domination strategies',
      'Priority support & consultation'
    ]
  };

  const benefits = [
    {
      icon: Shield,
      title: 'Complete Management',
      description: 'Comprehensive monthly management including strategic posts, review responses, and Q&A monitoring.',
      stats: 'Hands-off solution'
    },
    {
      icon: Award,
      title: 'Build Trust & Authority',
      description: 'Professional review management and responses that build credibility and trust with potential customers.',
      stats: '95% positive sentiment'
    },
    {
      icon: Zap,
      title: 'Evergreen Lead Source',
      description: 'Turn your Google Business Profile into a reliable, consistent source for new customer acquisition.',
      stats: '200% more leads'
    }
  ];

  const comparisonFeatures = [
    { feature: 'Google Posts Creation', included: true },
    { feature: 'Review Response Management', included: true },
    { feature: 'Q&A Monitoring & Responses', included: true },
    { feature: 'Monthly Optimization', included: true },
    { feature: 'Performance Reporting', included: true },
    { feature: 'Strategy Consultation Calls', included: true },
    { feature: 'Priority Support', included: true },
    { feature: 'Competitor Analysis', included: true }
  ];

  return (
    <>
      <SEO
        title="Silver Google Business Profile Professional Complete Management - $349/month - ThinkMents"
        description="Complete Google Business Profile management service for $349/month. Dominate local search with strategic posts, review management, Q&A monitoring, and continuous optimization."
        keywords="Google Business Profile management, local SEO service, Google Maps optimization, review management, local marketing, Google My Business professional"
        url="/Google-Business-Profile-Professional-Complete-Management"
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
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-full mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Award className="w-5 h-5 text-yellow-600 mr-2" />
                <span className="text-yellow-700 font-medium">Silver Package</span>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Google Business Profile{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Professional Complete Management
                </span>
              </motion.h1>
              
              <motion.div
                className="flex items-center justify-center mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <span className="text-3xl md:text-4xl font-bold text-primary">$349.00</span>
                <span className="text-xl text-muted-foreground ml-2">/month</span>
              </motion.div>
              
              <motion.p
                className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Unlock consistent local lead generation with our Google Business Profile Professional: Complete Management package, your pathway to dominating the local map pack. We provide comprehensive monthly management, including strategic Google post creation, diligent review management with professional responses, and proactive question and answer monitoring.
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
                  Professional Management
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our continuous optimization efforts significantly improve your local search ranking and Google Maps visibility, ensuring your business stands out and builds trust with positive reviews.
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
                    Local Domination
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Turn your Google Business Profile into a reliable, evergreen source for new customer acquisition
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
                      <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-full mb-4">
                        <Award className="w-5 h-5 text-yellow-600 mr-2" />
                        <span className="text-yellow-700 font-medium">Silver Package</span>
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
                        <h4 className="text-lg font-semibold mb-4">Complete Service Features:</h4>
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
                        <h4 className="text-lg font-semibold mb-4">Professional Advantages:</h4>
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
                          <h5 className="font-semibold mb-2 text-primary">What's Included:</h5>
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
                          <span>Start Professional Management</span>
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
                Dominate Your{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Local Market
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Build trust with positive reviews and turn your Google Business Profile into a reliable, evergreen source for new customer acquisition with our comprehensive management approach.
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
                Ready to Unlock{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Consistent Local Leads?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Start dominating your local market with our comprehensive Google Business Profile management. Let us handle everything while you focus on serving customers.
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