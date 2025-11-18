import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Camera, Eye, MapPin, Smartphone, Users, TrendingUp, ArrowRight, CheckCircle, Play } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function VirtualToursPage() {
  const benefits = [
    {
      icon: Eye,
      title: '24/7 Accessibility',
      description: 'Allow customers to explore your space anytime, anywhere, increasing engagement and interest.'
    },
    {
      icon: TrendingUp,
      title: 'Increased Sales',
      description: 'Businesses see up to 60% more sales leads when using virtual tours on their websites.'
    },
    {
      icon: Users,
      title: 'Better Customer Experience',
      description: 'Provide an immersive experience that builds trust and confidence before customers visit.'
    },
    {
      icon: MapPin,
      title: 'Location Independence',
      description: 'Reach customers from anywhere in the world and expand your market reach.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Compatible',
      description: 'Virtual tours work seamlessly on all devices, from smartphones to VR headsets.'
    },
    {
      icon: Camera,
      title: 'Professional Quality',
      description: 'High-resolution 360° photography that showcases your space in stunning detail.'
    }
  ];

  const industries = [
    {
      title: 'Real Estate',
      description: 'Showcase properties with immersive virtual tours that help buyers visualize their future home.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
      features: ['Property walkthroughs', 'Room measurements', 'Interactive floor plans', 'Virtual staging']
    },
    {
      title: 'Restaurants & Hospitality',
      description: 'Give customers a taste of your atmosphere and ambiance before they visit.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
      features: ['Dining room tours', 'Kitchen views', 'Private event spaces', 'Outdoor seating areas']
    },
    {
      title: 'Retail Stores',
      description: 'Let customers browse your store layout and products from the comfort of their home.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
      features: ['Store layout', 'Product displays', 'Fitting rooms', 'Special sections']
    },
    {
      title: 'Healthcare Facilities',
      description: 'Build patient confidence by showcasing your clean, modern medical facilities.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      features: ['Waiting areas', 'Treatment rooms', 'Surgical suites', 'Patient amenities']
    },
    {
      title: 'Educational Institutions',
      description: 'Attract students and parents with virtual campus tours and facility showcases.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop',
      features: ['Classrooms', 'Laboratories', 'Libraries', 'Recreation areas']
    },
    {
      title: 'Event Venues',
      description: 'Help clients envision their perfect event with detailed venue virtual tours.',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop',
      features: ['Event spaces', 'Seating arrangements', 'Catering areas', 'Audio/visual capabilities']
    }
  ];

  const packages = [
    {
      name: 'Basic Tour',
      price: '$800',
      spaces: 'Up to 10 scenes',
      description: 'Perfect for small businesses and single locations',
      features: [
        '360° photography',
        'Basic navigation',
        'Mobile compatible',
        'Social media sharing',
        'Hosting included',
        'Basic analytics'
      ]
    },
    {
      name: 'Professional Tour',
      price: '$1,500',
      spaces: 'Up to 25 scenes',
      description: 'Ideal for larger spaces and multiple rooms',
      features: [
        'High-resolution photography',
        'Interactive hotspots',
        'Custom branding',
        'Lead capture forms',
        'Advanced analytics',
        'Virtual reality ready',
        'Custom music/narration'
      ],
      highlighted: true
    },
    {
      name: 'Enterprise Tour',
      price: '$3,000',
      spaces: 'Unlimited scenes',
      description: 'Complete solution for large facilities and multiple locations',
      features: [
        'Premium photography',
        'Interactive floor plans',
        'Multi-language support',
        'Advanced integrations',
        'Priority support',
        'White-label options',
        'Custom development'
      ]
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
              Immersive{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Virtual Tours
              </span>{' '}
              & Photography
            </motion.h1>
            
            <motion.p
              className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transform how customers experience your business with stunning 360° virtual tours. Increase engagement, build trust, and drive more sales with immersive virtual experiences.
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
              <Button size="lg" variant="outline" className="group">
                <Play className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                View Demo Tour
              </Button>
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
              Why{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Virtual Tours
              </span>{' '}
              Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Virtual tours provide an engaging, interactive experience that helps customers connect with your space before they visit, leading to higher conversion rates and customer satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full group hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-lg">
                        <benefit.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl group-hover:text-primary transition-colors">
                        {benefit.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
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
              Industries We{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Serve
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Virtual tours benefit businesses across all industries. See how we can help showcase your unique space and attract more customers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-xl text-white mb-1">{industry.title}</h3>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4">
                      {industry.description}
                    </p>
                    <ul className="space-y-2">
                      {industry.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>{feature}</span>
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

      {/* Packages Section */}
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
              Virtual Tour{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Packages
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect package for your business needs. All packages include professional photography and hosting.
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
                    <Badge variant="outline" className="mb-2">{pkg.spaces}</Badge>
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
              Ready to Showcase Your{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Space?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's create an immersive virtual tour that brings your space to life and drives more customers to your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-a-quote">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
                  Schedule Photography
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}