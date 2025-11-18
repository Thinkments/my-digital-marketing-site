import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { ArrowRight, Trophy, Users, TrendingUp, Shield, Star, Globe, Eye, Settings, Zap, Award, Target, BarChart3 } from 'lucide-react';
import SEO from '../SEO';

export default function GoogleBusinessProfileGrowthEnhancedPage() {
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Gold: Enhanced Essentials - Google Business Profile",
    "description": "Transform your Google Business Profile into a powerful customer magnet with NAP citations, professional optimization, and enhanced local search ranking",
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
      "price": "599",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "599",
        "priceCurrency": "USD",
        "billingIncrement": "P1M"
      }
    },
    "serviceType": "Google Business Profile Growth Enhanced Essentials",
    "areaServed": "United States"
  };

  const features = [
    {
      icon: Zap,
      title: 'Customer Magnet Transformation',
      description: 'Transform your profile into a powerful customer magnet that increases phone calls and website traffic.',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Eye,
      title: 'Professional Storefront Design',
      description: 'Create an engaging, professional storefront with fresh photos and optimized presentation.',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: Target,
      title: 'Service Area Targeting',
      description: 'Optimized service area targeting to reach the right customers in your specific market.',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Shield,
      title: 'NAP Citations Management',
      description: 'Meticulous management of Name, Address, Phone consistency across high-value directories.',
      color: 'from-purple-500 to-violet-600'
    },
    {
      icon: Award,
      title: 'Authority Building',
      description: 'Build massive trust signals with Google through consistent NAP citations and validation.',
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: TrendingUp,
      title: 'Local Search Domination',
      description: 'Direct boost to local search ranking, making it easier for clients to find you over competitors.',
      color: 'from-indigo-500 to-blue-600'
    }
  ];

  const packageDetails = {
    name: 'Gold: Enhanced Essentials - Google Business Profile',
    price: '$599.00',
    billing: '/month',
    description: 'Complete growth package designed to turn your profile into a customer magnet',
    features: [
      'Professional storefront transformation',
      'Fresh photo optimization & management',
      'Service area targeting optimization',
      'NAP citations across 50+ directories',
      'Social media platform consistency',
      'Mapping services optimization',
      'Google authority building signals',
      'Local search ranking enhancement',
      'Professional business validation',
      'Directory submission & management',
      'Citation monitoring & maintenance',
      'Trust signal amplification',
      'Competitor analysis & positioning',
      'Performance tracking & reporting',
      'Monthly optimization reviews',
      'Customer acquisition strategy'
    ],
    highlights: [
      'Customer magnet transformation',
      '50+ NAP citation management',
      'Professional storefront design',
      'Service area optimization',
      'Google authority building',
      'Local search domination',
      'Trust signal amplification',
      'Continuous growth optimization'
    ]
  };

  const benefits = [
    {
      icon: Zap,
      title: 'Customer Magnet Power',
      description: 'Transform your profile into a powerful customer magnet that increases phone calls and website traffic through professional optimization.',
      stats: 'More leads'
    },
    {
      icon: Shield,
      title: 'Google Authority',
      description: 'Build massive trust signals through 100% consistent NAP citations across dozens of high-value directories and platforms.',
      stats: '100% consistent'
    },
    {
      icon: TrendingUp,
      title: 'Local Domination',
      description: 'Direct boost to local search ranking makes it easier for new clients to find you over competitors in your market.',
      stats: 'Market leader'
    }
  ];

  const comparisonFeatures = [
    { feature: 'Customer Magnet Transformation', included: true },
    { feature: 'Professional Storefront Design', included: true },
    { feature: 'NAP Citations Management', included: true },
    { feature: 'Service Area Optimization', included: true },
    { feature: 'Authority Building Signals', included: true },
    { feature: 'Local Search Enhancement', included: true },
    { feature: 'Fresh Photo Optimization', included: true },
    { feature: 'Performance Tracking', included: true }
  ];

  return (
    <>
      <SEO
        title="Gold Enhanced Essentials Google Business Profile Growth - $599/month - ThinkMents"
        description="Transform your Google Business Profile into a customer magnet for $599/month. NAP citations, professional optimization, and enhanced local search ranking."
        keywords="Google Business Profile growth, customer magnet transformation, NAP citations, local search ranking, professional storefront, service area targeting"
        url="/Google-Business-Profile-Growth-Enhanced-Essentials"
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
                <Trophy className="w-5 h-5 text-yellow-600 mr-2" />
                <span className="text-yellow-700 font-medium">Gold Package</span>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Enhanced Essentials{' '}
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
                <span className="text-3xl md:text-4xl font-bold text-primary">$599.00</span>
                <span className="text-xl text-muted-foreground ml-2">/month</span>
              </motion.div>
              
              <motion.p
                className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Turn your Google Business Profile into a powerful customer magnet. Our Growth package is designed to increase your phone calls and website traffic by transforming your profile into an engaging, professional storefront with fresh photos and optimized service area targeting.
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

        {/* Authority Building Section */}
        <section className="py-20 bg-gradient-to-b from-muted/10 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl mb-4">
                Building{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Google Authority
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                A crucial part of this strategy is building authority with Google through NAP citations. We meticulously manage your business Name, Address, and Phone number (NAP) to ensure they are 100% consistent across dozens of high-value online directories, social media platforms, and mapping services.
              </p>
            </motion.div>

            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <Shield className="w-16 h-16 mx-auto text-primary mb-4" />
                    <h3 className="text-2xl mb-4">NAP Citations Authority Building</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-4">Trust Signal Creation:</h4>
                      <p className="text-muted-foreground mb-4">
                        This consistency acts as a massive trust signal for search engines. When Google finds the same correct information about your business everywhere, it validates you as a legitimate, active local operation.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-3">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent" />
                          <span className="text-muted-foreground">50+ high-value directory citations</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent" />
                          <span className="text-muted-foreground">Social media platform consistency</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent" />
                          <span className="text-muted-foreground">Mapping services optimization</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-4">Local Search Impact:</h4>
                      <p className="text-muted-foreground mb-4">
                        This directly boosts your local search ranking, making it easier for new clients to find you over competitors. This combination connects you with more clients and grows your business effectively.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-3">
                          <Star className="w-5 h-5 text-yellow-500" />
                          <span className="text-muted-foreground">Direct local ranking boost</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <Star className="w-5 h-5 text-yellow-500" />
                          <span className="text-muted-foreground">Competitive advantage</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <Star className="w-5 h-5 text-yellow-500" />
                          <span className="text-muted-foreground">Effective business growth</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
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
                  Growth Strategy
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Transform your profile into an engaging, professional storefront that acts as a powerful customer magnet with comprehensive optimization and authority building.
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
                    Customer Magnetism
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Complete growth package designed to increase phone calls and website traffic through professional transformation and authority building
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
                        <Trophy className="w-5 h-5 text-yellow-600 mr-2" />
                        <span className="text-yellow-700 font-medium">Gold Package</span>
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
                        <h4 className="text-lg font-semibold mb-4">Complete Growth Features:</h4>
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
                        <h4 className="text-lg font-semibold mb-4">Growth Advantages:</h4>
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
                          <h5 className="font-semibold mb-2 text-primary">Growth Package Includes:</h5>
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
                          <span>Start Growth Package</span>
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
                Grow Your{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Business Effectively
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                This combination connects you with more clients and grows your business effectively through customer magnet transformation and Google authority building.
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
                Ready to Transform Your{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Customer Magnet?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Start growing your business effectively with our comprehensive growth package. Turn your profile into a powerful customer magnet and build Google authority through strategic NAP citations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent">
                    <Link to="/get-a-quote" className="flex items-center space-x-2">
                      <span>Start Customer Magnet Growth</span>
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