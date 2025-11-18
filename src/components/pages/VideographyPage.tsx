import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Video, Play, Camera, Edit, ArrowRight, CheckCircle } from 'lucide-react';
import SEO from '../SEO';

export default function VideographyPage() {
  const services = [
    {
      icon: Video,
      title: 'Corporate Videos',
      description: 'Professional corporate videos that showcase your business and build trust.',
      features: ['Company Overviews', 'Team Introductions', 'Product Demos', 'Testimonials']
    },
    {
      icon: Camera,
      title: 'Marketing Videos',
      description: 'Engaging marketing videos that drive conversions and boost brand awareness.',
      features: ['Promotional Videos', 'Social Media Content', 'Advertisement Videos', 'Event Coverage']
    },
    {
      icon: Edit,
      title: 'Post Production',
      description: 'Professional editing and post-production services for polished final products.',
      features: ['Video Editing', 'Color Correction', 'Motion Graphics', 'Audio Enhancement']
    },
    {
      icon: Play,
      title: 'Live Streaming',
      description: 'Professional live streaming services for events, meetings, and presentations.',
      features: ['Event Streaming', 'Webinar Production', 'Multi-Camera Setup', 'Real-time Switching']
    }
  ];

  const videographyStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Professional Videography Services",
    "description": "Tell your story with compelling video content that engages audiences and drives results. From corporate videos to marketing campaigns, create professional videos that make an impact.",
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
    "serviceType": "Videography",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Videography Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Corporate Videos",
            "description": "Professional corporate videos that showcase your business and build trust"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Marketing Videos",
            "description": "Engaging marketing videos that drive conversions and boost brand awareness"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Live Streaming",
            "description": "Professional live streaming services for events, meetings, and presentations"
          }
        }
      ]
    }
  };

  return (
    <>
      <SEO
        title="Professional Videography Services - ThinkMents Video Production"
        description="Tell your story with compelling video content that engages audiences and drives results. From corporate videos to marketing campaigns, we create professional videos that make an impact and elevate your brand presence in Decatur, Texas."
        keywords="professional videography, video production, corporate videos, marketing videos, promotional videos, video editing, live streaming, Decatur Texas videography"
        url="/videography"
        type="service"
        structuredData={videographyStructuredData}
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
                Professional{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Videography
                </span>{' '}
                Services
              </motion.h1>
              
              <motion.p
                className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Tell your story with compelling video content that engages audiences and drives results. From corporate videos to marketing campaigns, we create professional videos that make an impact and elevate your brand presence.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link to="/get-a-quote">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
                    Start Your Video Project
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/case-studies">
                  <Button size="lg" variant="outline">
                    View Our Work
                  </Button>
                </Link>
              </motion.div>
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
                Comprehensive{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Video Services
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From concept to completion, we handle every aspect of video production to bring your vision to life.
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
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-lg group-hover:scale-110 transition-transform">
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
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

        {/* Benefits Section */}
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
                Why Choose{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  ThinkMents Video?
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-4">Professional Quality</h3>
                <p className="text-muted-foreground">
                  High-end equipment and experienced team ensure every video meets professional standards.
                </p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Edit className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-4">Full Service</h3>
                <p className="text-muted-foreground">
                  From pre-production planning to final delivery, we handle every aspect of your video project.
                </p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-4">Fast Turnaround</h3>
                <p className="text-muted-foreground">
                  Efficient workflow and dedicated team deliver your videos on time, every time.
                </p>
              </motion.div>
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
                Ready to Bring Your{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Vision to Life?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss your video project and create compelling content that engages your audience and drives results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/get-a-quote">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
                    Start Your Video Project
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline">
                    Discuss Your Ideas
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