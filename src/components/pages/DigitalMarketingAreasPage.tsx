import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { ArrowRight, MapPin, Users, TrendingUp, Target, Phone, Mail } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function DigitalMarketingAreasPage() {
  const serviceAreas = [
    {
      name: 'Decatur',
      population: '6,800+',
      description: 'County seat with thriving local businesses and growing commercial district.',
      specialties: ['Local SEO', 'Google My Business', 'Community Engagement'],
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop'
    },
    {
      name: 'Denton',
      population: '145,000+',
      description: 'University town with diverse economy and tech-savvy population.',
      specialties: ['Social Media Marketing', 'Student Targeting', 'University Partnerships'],
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=400&h=300&fit=crop'
    },
    {
      name: 'Fort Worth',
      population: '900,000+',
      description: 'Major metropolitan market with diverse business opportunities.',
      specialties: ['PPC Advertising', 'Enterprise SEO', 'Multi-location Marketing'],
      image: 'https://images.unsplash.com/photo-1555501900-669bb87facab?w=400&h=300&fit=crop'
    },
    {
      name: 'Lewisville',
      population: '110,000+',
      description: 'Growing suburban community with family-focused businesses.',
      specialties: ['Family Business Marketing', 'Local Events', 'Community Outreach'],
      image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&h=300&fit=crop'
    },
    {
      name: 'Flower Mound',
      population: '75,000+',
      description: 'Affluent community with high-end service businesses.',
      specialties: ['Luxury Brand Marketing', 'High-Value Targeting', 'Premium Services'],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop'
    },
    {
      name: 'Gainesville',
      population: '16,000+',
      description: 'Historic town with agriculture and manufacturing base.',
      specialties: ['Industrial Marketing', 'B2B Services', 'Regional Outreach'],
      image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop'
    }
  ];

  const services = [
    {
      icon: Target,
      title: 'Local SEO Optimization',
      description: 'Dominate local search results in your specific area with targeted SEO strategies.'
    },
    {
      icon: Users,
      title: 'Community Engagement',
      description: 'Build strong connections with your local community through strategic outreach.'
    },
    {
      icon: TrendingUp,
      title: 'Regional Advertising',
      description: 'Targeted advertising campaigns that reach customers in your service area.'
    },
    {
      icon: MapPin,
      title: 'Location-Based Marketing',
      description: 'Leverage location data to attract customers when they\'re nearby.'
    }
  ];

  const benefits = [
    {
      metric: '150+',
      description: 'Local businesses served across North Texas'
    },
    {
      metric: '75%',
      description: 'Average increase in local visibility'
    },
    {
      metric: '200%',
      description: 'Improvement in local lead generation'
    },
    {
      metric: '95%',
      description: 'Client satisfaction rate in our service areas'
    }
  ];

  return (
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
              Digital Marketing{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Service Areas
              </span>
            </motion.h1>
            
            <motion.p
              className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We provide comprehensive digital marketing services across North Texas, helping local businesses grow their online presence and attract more customers. Our deep understanding of each community ensures targeted strategies that deliver real results.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link to="/get-a-quote">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
                  Get Local Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <a href="tel:9405393074">
                <Button size="lg" variant="outline">
                  <Phone className="w-4 h-4 mr-2" />
                  (940) 539-3074
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
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

      {/* Service Areas Section */}
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
              Our{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Service Areas
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We understand the unique characteristics and opportunities in each North Texas community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={area.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full group hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={area.image}
                      alt={`${area.name} Digital Marketing`}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-primary to-accent text-white">
                        {area.population}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {area.name}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {area.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      <h4 className="text-sm font-medium">Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {area.specialties.map((specialty) => (
                          <Badge key={specialty} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Link to={`/digital-marketing-${area.name.toLowerCase().replace(' ', '-')}`}>
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
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
              Local Marketing{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored digital marketing services designed for local business success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
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
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
                  Local Business{' '}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Headquarters
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Based in Decatur, Texas, we understand the unique challenges and opportunities 
                  that North Texas businesses face in the digital landscape.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">301 S Washburn St Unit D, Decatur, TX 76234</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">(940) 539-3074</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Info@thinkments.com</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=400&fit=crop"
                  alt="ThinkMents Office Location"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Ready to Grow Your{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Local Business?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can help your business dominate the local market with 
              strategic digital marketing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-a-quote">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
                  Get Free Local Assessment
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  Contact Our Team
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}