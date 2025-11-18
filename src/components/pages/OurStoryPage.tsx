import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Users, Award, Target, Heart, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import SEO from '../SEO';

export default function OurStoryPage() {
  const values = [
    {
      icon: Heart,
      title: 'Client-First Approach',
      description: 'Every decision we make is guided by what\'s best for our clients and their success.'
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We measure our success by the tangible results we deliver for your business.'
    },
    {
      icon: Award,
      title: 'Excellence in Everything',
      description: 'We never settle for "good enough" - we strive for excellence in every project.'
    },
    {
      icon: Users,
      title: 'Collaborative Partnership',
      description: 'We work alongside you as true partners in your business growth and success.'
    }
  ];

  const milestones = [
    {
      year: '2018',
      title: 'ThinkMents Founded',
      description: 'Started with a vision to help small businesses compete in the digital marketplace.'
    },
    {
      year: '2019',
      title: 'First 100 Clients',
      description: 'Reached our first major milestone by helping 100 local businesses establish their online presence.'
    },
    {
      year: '2020',
      title: 'Expanded Services',
      description: 'Added virtual tours, videography, and advanced SEO services to our offering.'
    },
    {
      year: '2021',
      title: 'Google Partner Status',
      description: 'Achieved Google Partner certification, validating our expertise in digital marketing.'
    },
    {
      year: '2022',
      title: 'Regional Expansion',
      description: 'Expanded our services throughout North Texas, serving clients across the DFW metroplex.'
    },
    {
      year: '2025',
      title: 'AI Integration',
      description: 'Leading the industry with AI-powered optimization and cutting-edge digital solutions.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b1e1?w=300&h=300&fit=crop',
      bio: 'With over 10 years in digital marketing, Sarah founded ThinkMents to help businesses thrive online.'
    },
    {
      name: 'Mike Rodriguez',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
      bio: 'Mike brings 8 years of design expertise, creating stunning visuals that convert visitors into customers.'
    },
    {
      name: 'Emily Chen',
      role: 'SEO Specialist',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
      bio: 'Emily\'s data-driven approach to SEO has helped hundreds of businesses reach the top of search results.'
    },
    {
      name: 'David Thompson',
      role: 'Technical Lead',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
      bio: 'David ensures all our websites are fast, secure, and built with the latest web technologies.'
    }
  ];

  const storyStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Our Story - ThinkMents Digital Marketing Agency",
    "description": "Founded in 2018 in Decatur, Texas, ThinkMents began with a mission to help businesses compete in the digital world. Learn about our journey, values, and team.",
    "url": "https://thinkments.com/our-story",
    "isPartOf": {
      "@type": "WebSite",
      "name": "ThinkMents",
      "url": "https://thinkments.com"
    },
    "mainEntity": {
      "@type": "Organization",
      "name": "ThinkMents",
      "foundingDate": "2018",
      "foundingLocation": {
        "@type": "Place",
        "name": "Decatur, Texas"
      },
      "description": "Digital marketing agency helping businesses compete in the digital marketplace",
      "numberOfEmployees": "4+",
      "knowsAbout": [
        "Digital Marketing",
        "Web Design",
        "SEO",
        "Social Media Marketing",
        "PPC Advertising",
        "Content Marketing"
      ]
    }
  };

  return (
    <>
      <SEO
        title="Our Story - ThinkMents Digital Marketing Agency History"
        description="Founded in 2018 in Decatur, Texas, ThinkMents began with a mission to help small and medium businesses compete in the digital world. Learn about our journey, values, and dedicated team."
        keywords="ThinkMents story, digital marketing agency history, Decatur Texas business, company values, marketing team, business growth"
        url="/our-story"
        type="website"
        structuredData={storyStructuredData}
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
                Our{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Story
                </span>
              </motion.h1>
              
              <motion.p
                className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Founded in 2018 in Decatur, Texas, ThinkMents began with a simple mission: to help small and medium businesses compete in the digital world. Today, we're proud to be a leading digital marketing agency serving the North Texas region.
              </motion.p>

              <motion.div
                className="flex flex-wrap justify-center gap-6 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="text-center">
                  <div className="text-3xl mb-2">
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      500+
                    </span>
                  </div>
                  <p className="text-muted-foreground">Happy Clients</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      7+
                    </span>
                  </div>
                  <p className="text-muted-foreground">Years Experience</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      98%
                    </span>
                  </div>
                  <p className="text-muted-foreground">Client Satisfaction</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl mb-6">
                  Our{' '}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Mission
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  We believe every business deserves a powerful online presence. Our mission is to democratize digital marketing by providing enterprise-level services to businesses of all sizes, helping them compete and thrive in the digital marketplace.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  From our headquarters in Decatur, Texas, we serve clients throughout the DFW metroplex and beyond, combining local expertise with cutting-edge digital strategies.
                </p>
                <Link to="/contact">
                  <Button className="bg-gradient-to-r from-primary to-accent">
                    Work With Us
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                  alt="ThinkMents team collaboration"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
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
                  Values
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                These core values guide everything we do and shape how we serve our clients and community.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full text-center group hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="bg-gradient-to-r from-primary to-accent p-4 rounded-lg w-fit mx-auto mb-4">
                        <value.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl mb-3 group-hover:text-primary transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
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
                Our{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Journey
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From a small startup to a leading digital marketing agency, here's how we've grown alongside our clients.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className="flex items-center mb-8 last:mb-0"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-24 text-center">
                    <Badge className="bg-gradient-to-r from-primary to-accent text-white">
                      {milestone.year}
                    </Badge>
                  </div>
                  <div className="flex-grow ml-8">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
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
                Meet Our{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Team
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The passionate professionals behind ThinkMents, dedicated to your success.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full text-center group hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <ImageWithFallback
                          src={member.image}
                          alt={member.name}
                          className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-xl mb-1 group-hover:text-primary transition-colors">
                        {member.name}
                      </h3>
                      <Badge variant="outline" className="mb-3">
                        {member.role}
                      </Badge>
                      <p className="text-muted-foreground text-sm">
                        {member.bio}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
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
                Ready to Be Part of{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Our Story?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's write the next chapter together. Discover how ThinkMents can help your business thrive in the digital world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/get-a-quote">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
                    Start Your Journey
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline">
                    Explore Services
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