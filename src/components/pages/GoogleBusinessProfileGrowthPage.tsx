import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { ArrowRight, MapPin, Camera, Users, TrendingUp, Phone, Star, Globe, Eye, MessageSquare } from 'lucide-react';
import SEO from '../SEO';

export default function GoogleBusinessProfileGrowthPage() {
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Google Business Profile Growth: Managed Essentials",
    "description": "Professional Google Business Profile management service designed for consistent online improvement and local lead generation",
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
      "price": "199",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "199",
        "priceCurrency": "USD",
        "billingIncrement": "P1M"
      }
    },
    "serviceType": "Google Business Profile Management",
    "areaServed": "United States"
  };

  const features = [
    {
      icon: Camera,
      title: 'High-Quality Photos',
      description: 'Fresh, professional photos that showcase your business and attract more customers to visit.',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: MessageSquare,
      title: 'Strategic Google Posts',
      description: 'Regular, engaging posts that keep your audience informed and improve your search ranking.',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: Eye,
      title: 'Active Monitoring',
      description: 'Continuous monitoring of your listing for accuracy and proactive optimization suggestions.',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: TrendingUp,
      title: 'Search Ranking Boost',
      description: 'Proven strategies that improve your local search visibility and Google Maps ranking.',
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: Phone,
      title: 'More Phone Calls',
      description: 'Optimized profile elements that drive more phone calls and website clicks from local searches.',
      color: 'from-indigo-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Lead Generation',
      description: 'Transform your Google Business Profile into a consistent source of local customer inquiries.',
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  const packageDetails = {
    name: 'Google Business Profile Growth: Managed Essentials',
    price: '$199.00',
    billing: '/month',
    description: 'Complete Google Business Profile management for consistent local growth',
    features: [
      'Weekly fresh content updates',
      'High-quality photo management',
      'Strategic Google Posts creation',
      'Profile accuracy monitoring',
      'Local SEO optimization',
      'Review response management',
      'Monthly performance reports',
      'Google Maps visibility boost',
      'Competitor analysis insights',
      'Mobile optimization focus'
    ],
    highlights: [
      'Trusted Google Partner for 10+ years',
      'Proven local search results',
      'No long-term contracts',
      'Dedicated account manager'
    ]
  };

  const benefits = [
    {
      icon: MapPin,
      title: 'Dominate Local Search',
      description: 'Appear higher in Google Maps results when customers search for businesses like yours.',
      stats: 'Up to 3x more visibility'
    },
    {
      icon: Star,
      title: 'Build Trust & Credibility',
      description: 'Professional profile management that showcases your business in the best possible light.',
      stats: '90% customer trust increase'
    },
    {
      icon: Globe,
      title: 'Drive Website Traffic',
      description: 'Optimized profile elements that encourage more clicks to your website and contact information.',
      stats: '150% more website clicks'
    }
  ];

  return (
    <>
      <SEO
        title="Google Business Profile Growth: Managed Essentials - $199/month - ThinkMents"
        description="Professional Google Business Profile management service for $199/month. Increase local visibility, drive more calls, and generate consistent leads with our proven strategies."
        keywords="Google Business Profile management, local SEO, Google Maps optimization, business listing management, local marketing, Google My Business"
        url="/Google-Business-Profile-Growth-Managed-Essentials"
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
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Google Business Profile{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Growth: Managed Essentials
                </span>
              </motion.h1>
              
              <motion.div
                className="flex items-center justify-center mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <span className="text-3xl md:text-4xl font-bold text-primary">$199.00</span>
                <span className="text-xl text-muted-foreground ml-2">/month</span>
              </motion.div>
              
              <motion.p
                className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Propel your local business forward with our Google Business Profile Growth package, designed for consistent online improvement. This service includes regular updates to your profile with fresh content, high-quality photos, and strategic Google Posts that keep your audience engaged and improve your local search ranking.
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
                What's Included in Your{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Monthly Service
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We actively monitor your listing for accuracy and provide proactive suggestions to enhance your Google Maps visibility, driving more phone calls and website clicks.
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
                  Complete{' '}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Service Package
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Everything you need to maintain a vibrant and active Google Business Profile effortlessly
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
                      <h3 className="text-2xl md:text-3xl mb-2">{packageDetails.name}</h3>
                      <div className="flex items-center justify-center mb-4">
                        <span className="text-4xl md:text-5xl font-bold text-primary">{packageDetails.price}</span>
                        <span className="text-xl text-muted-foreground ml-2">{packageDetails.billing}</span>
                      </div>
                      <p className="text-lg text-muted-foreground">{packageDetails.description}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold mb-4">Service Features:</h4>
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
                        <h4 className="text-lg font-semibold mb-4">Why Choose Us:</h4>
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
                      </div>
                    </div>

                    <motion.div
                      className="text-center mt-8"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent">
                        <Link to="/get-a-quote" className="flex items-center space-x-2">
                          <span>Start Your Growth Today</span>
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
                Transform Your Profile Into a{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Lead Generation Machine
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Maintain a vibrant and active Google Business Profile effortlessly, transforming it into a consistent source of local lead generation.
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
                Ready to Dominate{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Local Search?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Start generating more local leads with our proven Google Business Profile management service. No long-term contracts, cancel anytime.
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