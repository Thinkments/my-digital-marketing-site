import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { MapPin, Phone, Star, ArrowRight, CheckCircle, Users, TrendingUp, Award } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import SEO from '../SEO';

interface LocationMarketingPageProps {
  location: string;
}

export default function LocationMarketingPage({ location }: LocationMarketingPageProps) {
  // Convert location slug to display name
  const locationName = location
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const services = [
    {
      title: 'Local SEO',
      description: `Dominate local search results in ${locationName} and attract nearby customers to your business.`,
      icon: '🎯',
      features: ['Google My Business optimization', 'Local keyword targeting', 'Citation building', 'Review management']
    },
    {
      title: 'Google Ads',
      description: `Reach ${locationName} customers when they're ready to buy with targeted advertising campaigns.`,
      icon: '📈',
      features: ['Location-targeted campaigns', 'Keyword research', 'Ad copywriting', 'Conversion tracking']
    },
    {
      title: 'Social Media Marketing',
      description: `Build a strong social media presence that connects with the ${locationName} community.`,
      icon: '👥',
      features: ['Content creation', 'Community management', 'Local event promotion', 'Social advertising']
    },
    {
      title: 'Website Design',
      description: `Professional websites that showcase your ${locationName} business and convert visitors into customers.`,
      icon: '💻',
      features: ['Mobile-responsive design', 'Local optimization', 'Fast loading speeds', 'SEO-friendly structure']
    }
  ];

  const stats = [
    { number: '150+', label: `${locationName} Businesses Served` },
    { number: '300%', label: 'Average Traffic Increase' },
    { number: '4.9/5', label: 'Client Satisfaction Rating' },
    { number: '90%', label: 'Client Retention Rate' }
  ];

  const testimonials = [
    {
      name: 'John Smith',
      business: `Local Restaurant in ${locationName}`,
      rating: 5,
      text: `ThinkMents helped us dominate local search results. We're now the #1 restaurant when people search for dining in ${locationName}!`
    },
    {
      name: 'Sarah Johnson',
      business: `Law Firm in ${locationName}`,
      rating: 5,
      text: `Our website traffic has tripled since working with ThinkMents. They understand the ${locationName} market perfectly.`
    },
    {
      name: 'Mike Rodriguez',
      business: `Auto Shop in ${locationName}`,
      rating: 5,
      text: `Professional, results-driven team. They've helped us become the go-to auto shop in ${locationName}.`
    }
  ];

  const localAreas = [
    'Downtown Area',
    'Business District',
    'Shopping Centers',
    'Residential Neighborhoods',
    'Commercial Corridors'
  ];

  const locationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Digital Marketing in ${locationName}`,
    "description": `Professional digital marketing services for businesses in ${locationName}. Local SEO, Google Ads, social media marketing, and web design.`,
    "provider": {
      "@type": "Organization",
      "name": "ThinkMents",
      "url": "https://thinkments.com"
    },
    "areaServed": {
      "@type": "Place",
      "name": locationName
    },
    "serviceType": "Digital Marketing",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Digital Marketing Services in ${locationName}`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Local SEO",
            "description": `Local search engine optimization services in ${locationName}`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Google Ads Management",
            "description": `Professional Google Ads management for ${locationName} businesses`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Social Media Marketing",
            "description": `Social media marketing services for ${locationName} businesses`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Design",
            "description": `Professional website design and development in ${locationName}`
          }
        }
      ]
    }
  };

  return (
    <>
      <SEO
        title={`Digital Marketing in ${locationName} - ThinkMents Local Services`}
        description={`Professional digital marketing services in ${locationName}. Local SEO, Google Ads, social media marketing, and web design to help ${locationName} businesses grow online and attract more customers.`}
        keywords={`digital marketing ${locationName}, SEO ${locationName}, Google Ads ${locationName}, web design ${locationName}, local marketing, ${location} digital marketing`}
        url={`/digital-marketing-${location}`}
        type="service"
        structuredData={locationStructuredData}
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
                Digital Marketing in{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {locationName}
                </span>
              </motion.h1>
              
              <motion.p
                className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Grow your {locationName} business with proven digital marketing strategies that deliver real results. From local SEO to social media, we help businesses dominate their local market and attract more customers throughout the {locationName} area.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link to="/get-a-quote">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
                    Get Free Local Marketing Audit
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <a href="tel:9405393074">
                  <Button size="lg" variant="outline" className="group">
                    <Phone className="mr-2 w-4 h-4" />
                    (940) 539-3074
                  </Button>
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-gradient-to-r from-primary to-accent">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl md:text-4xl mb-2">{stat.number}</div>
                  <p className="text-white/80">{stat.label}</p>
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
                {locationName} Digital Marketing{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Services
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive digital marketing solutions designed to help {locationName} businesses thrive online and attract more local customers.
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
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-3xl">{service.icon}</span>
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

        {/* Testimonials Section */}
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
                What {locationName}{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Businesses Say
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Don't just take our word for it. Here's what local businesses in {locationName} have to say about our digital marketing services.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-4 italic">
                        "{testimonial.text}"
                      </p>
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Areas Section */}
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
                Serving All of{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {locationName}
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We provide digital marketing services to businesses throughout the {locationName} area.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
              {localAreas.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-4">
                      <MapPin className="w-6 h-6 mx-auto mb-2 text-primary" />
                      <p className="text-sm">{area}</p>
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
                Ready to Dominate {locationName}{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Search Results?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss how we can help your {locationName} business attract more customers and increase revenue through proven digital marketing strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/get-a-quote">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
                    Get Free Marketing Consultation
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline">
                    Contact Our {locationName} Team
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