import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Monitor, Smartphone, Zap, Search, ShoppingCart, Users, ArrowRight, CheckCircle, Star } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function WebDesignPage() {
  const features = [
    {
      icon: Monitor,
      title: 'Responsive Design',
      description: 'Beautiful websites that work perfectly on all devices, from mobile to desktop.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized for speed with Core Web Vitals in mind for better user experience and SEO.'
    },
    {
      icon: Search,
      title: 'SEO Optimized',
      description: 'Built with search engine optimization best practices for maximum visibility.'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Ready',
      description: 'Complete online store functionality with secure payment processing.'
    },
    {
      icon: Users,
      title: 'User-Focused',
      description: 'Designed with your customers in mind for maximum engagement and conversions.'
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Prioritizing mobile experience where most of your customers browse and shop.'
    }
  ];

  const packages = [
    {
      name: 'Starter',
      price: '$2,500',
      description: 'Perfect for small businesses getting started online',
      features: [
        'Up to 5 pages',
        'Responsive design',
        'Contact forms',
        'Basic SEO setup',
        'SSL certificate',
        '1 month support'
      ],
      highlighted: false
    },
    {
      name: 'Professional',
      price: '$4,500',
      description: 'Ideal for growing businesses needing more features',
      features: [
        'Up to 15 pages',
        'Custom design',
        'Content management',
        'Advanced SEO',
        'Analytics setup',
        'Social media integration',
        '3 months support'
      ],
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: '$8,500',
      description: 'Complete solution for large businesses and e-commerce',
      features: [
        'Unlimited pages',
        'E-commerce functionality',
        'Custom integrations',
        'Advanced analytics',
        'Multi-user management',
        'Priority support',
        '6 months support'
      ],
      highlighted: false
    }
  ];

  const portfolio = [
    {
      title: 'Law Firm Website',
      category: 'Professional Services',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop',
      description: 'Modern, professional website for a leading law firm with appointment booking and case study showcase.'
    },
    {
      title: 'Restaurant Website',
      category: 'Hospitality',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
      description: 'Beautiful restaurant website with online ordering, menu display, and reservation system.'
    },
    {
      title: 'Real Estate Platform',
      category: 'Real Estate',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
      description: 'Comprehensive real estate website with property listings, virtual tours, and lead generation.'
    },
    {
      title: 'Healthcare Practice',
      category: 'Healthcare',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      description: 'Clean, trustworthy website for medical practice with patient portal and appointment scheduling.'
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
              Professional{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Web Design
              </span>{' '}
              Services
            </motion.h1>
            
            <motion.p
              className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transform your business with stunning, conversion-focused websites that captivate visitors and drive results. Our expert team creates custom designs tailored to your brand and goals.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link to="/get-a-quote">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
                  Get Free Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="#portfolio">
                <Button size="lg" variant="outline">
                  View Our Work
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
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-6">
              Why Choose Our{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Web Design
              </span>{' '}
              Services?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine stunning design with cutting-edge technology to create websites that not only look amazing but deliver real business results.
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
                <Card className="h-full group hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-lg">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
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
              Choose Your{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Perfect Package
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transparent pricing with packages designed to meet businesses of all sizes. Every package includes our commitment to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={pkg.highlighted ? 'transform scale-105' : ''}
              >
                <Card className={`h-full relative ${pkg.highlighted ? 'border-primary shadow-xl' : ''}`}>
                  {pkg.highlighted && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-primary to-accent text-white">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                    <div className="text-3xl mb-2">
                      <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {pkg.price}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{pkg.description}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link to="/get-a-quote">
                      <Button 
                        className={`w-full ${pkg.highlighted ? 'bg-gradient-to-r from-primary to-accent' : ''}`}
                        variant={pkg.highlighted ? 'default' : 'outline'}
                      >
                        Get Started
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
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
                Recent Work
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how we've helped businesses across various industries achieve their online goals with stunning, functional websites.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolio.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-gradient-to-r from-primary to-accent text-white">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm text-muted-foreground ml-2">
                        Client satisfaction
                      </span>
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
                Online Presence?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss your vision and create a website that drives real results for your business. Get your free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-a-quote">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
                  Start Your Project
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}