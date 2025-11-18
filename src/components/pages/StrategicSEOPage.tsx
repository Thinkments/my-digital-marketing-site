import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { ArrowRight, Search, TrendingUp, Target, Globe, BarChart3, CheckCircle, Users } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import SEO from '../SEO';

export default function StrategicSEOPage() {
  const seoServices = [
    {
      icon: Search,
      title: 'Technical SEO Audit',
      description: 'Comprehensive analysis of your website\'s technical health and optimization opportunities.',
      features: ['Site speed optimization', 'Mobile responsiveness', 'Schema markup', 'Core Web Vitals']
    },
    {
      icon: Target,
      title: 'Keyword Strategy',
      description: 'Data-driven keyword research and competitive analysis to target high-value search terms.',
      features: ['Competitor analysis', 'Long-tail keywords', 'Search intent mapping', 'Opportunity gaps']
    },
    {
      icon: TrendingUp,
      title: 'Content Optimization',
      description: 'Strategic content creation and optimization to rank higher and engage your audience.',
      features: ['Content audits', 'On-page optimization', 'Content creation', 'User experience']
    },
    {
      icon: Globe,
      title: 'Local SEO',
      description: 'Dominate local search results and attract more customers from your geographic area.',
      features: ['Google My Business', 'Local citations', 'Review management', 'Local content']
    }
  ];

  const benefits = [
    {
      metric: '300%+',
      description: 'Average organic traffic increase within 6 months'
    },
    {
      metric: '85%',
      description: 'Of our clients rank on page 1 within 90 days'
    },
    {
      metric: '4.7x',
      description: 'Higher conversion rates from organic traffic'
    },
    {
      metric: '95%',
      description: 'Client retention rate year over year'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'SEO Audit & Analysis',
      description: 'Comprehensive analysis of your current SEO performance and opportunities.'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Custom SEO strategy tailored to your business goals and target audience.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execute technical optimizations, content creation, and link building campaigns.'
    },
    {
      step: '04',
      title: 'Monitor & Optimize',
      description: 'Continuous monitoring and optimization to maintain and improve rankings.'
    }
  ];

  const seoStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Strategic SEO Services",
    "description": "Comprehensive SEO strategies that drive measurable results. Help businesses increase organic visibility, drive qualified traffic, and achieve sustainable growth through proven optimization techniques.",
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
    "serviceType": "Search Engine Optimization",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "SEO Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Technical SEO Audit",
            "description": "Comprehensive analysis of website technical health and optimization opportunities"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Local SEO",
            "description": "Dominate local search results and attract customers from your geographic area"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Keyword Strategy",
            "description": "Data-driven keyword research and competitive analysis"
          }
        }
      ]
    }
  };

  return (
    <>
      <SEO
        title="Strategic SEO Services - ThinkMents Professional Search Engine Optimization"
        description="Dominate search results with comprehensive SEO strategies that drive measurable results. Increase organic visibility, drive qualified traffic, and achieve sustainable growth with proven optimization techniques in Decatur, Texas."
        keywords="strategic SEO, search engine optimization, SEO services, organic traffic, local SEO, keyword strategy, technical SEO, Decatur Texas SEO"
        url="/strategic-seo"
        type="service"
        structuredData={seoStructuredData}
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
                Strategic{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  SEO Services
                </span>
              </motion.h1>
              
              <motion.p
                className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Dominate search results with our comprehensive SEO strategies that drive measurable results. We help businesses increase organic visibility, drive qualified traffic, and achieve sustainable growth through proven optimization techniques.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link to="/get-a-quote">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
                    Get SEO Audit
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/case-studies">
                  <Button size="lg" variant="outline">
                    View SEO Results
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
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
                Proven{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  SEO Results
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our strategic SEO approach delivers measurable results that drive business growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.metric}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl md:text-5xl mb-4">
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {benefit.metric}
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl mb-6">
                Comprehensive{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  SEO Services
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Every aspect of SEO covered to ensure your website ranks higher and converts better.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {seoServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full group hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6">
                        {service.description}
                      </p>
                      <div className="space-y-2">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
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
                Our SEO{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Process
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A proven methodology that delivers consistent results for our clients.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={step.step}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white text-xl mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg mb-4">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Local SEO CTA */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl mb-6">
                    Local SEO{' '}
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Specialists
                    </span>
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    Dominate local search results in North Texas and beyond. Our local SEO 
                    expertise helps businesses attract more customers from their immediate area.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    {['Google My Business optimization', 'Local citation building', 'Review management', 'Local content strategy'].map((feature) => (
                      <div key={feature} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Link to="/digital-marketing-decatur">
                      <Badge variant="outline" className="hover:bg-primary/10">Decatur SEO</Badge>
                    </Link>
                    <Link to="/digital-marketing-denton">
                      <Badge variant="outline" className="hover:bg-primary/10">Denton SEO</Badge>
                    </Link>
                    <Link to="/digital-marketing-fort-worth">
                      <Badge variant="outline" className="hover:bg-primary/10">Fort Worth SEO</Badge>
                    </Link>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                    alt="Local SEO Results"
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20">
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
                  Search Results?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let our SEO experts help you achieve higher rankings, more traffic, and better conversions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/get-a-quote">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
                    Get Free SEO Audit
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/case-studies">
                  <Button size="lg" variant="outline">
                    View Case Studies
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