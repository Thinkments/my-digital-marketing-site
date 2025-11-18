import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { ArrowRight, Target, Lightbulb, Clock, Users, Award, Zap } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import SEO from '../SEO';

export default function AboutPage() {
  const storyRef = useRef(null);
  const missionRef = useRef(null);
  const partnershipRef = useRef(null);
  
  const isStoryInView = useInView(storyRef, { once: true });
  const isMissionInView = useInView(missionRef, { once: true });
  const isPartnershipInView = useInView(partnershipRef, { once: true });

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly explore new strategies and technologies to stay ahead of the curve.',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Every strategy is designed with measurable outcomes and ROI in mind.',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We work as an extension of your team, deeply understanding your business goals.',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: Clock,
      title: 'Timeliness',
      description: 'We understand that timing is crucial in digital marketing and act accordingly.',
      color: 'from-red-500 to-pink-600'
    }
  ];

  const timeline = [
    {
      year: '2014',
      title: 'Founded',
      description: 'ThinkMents was born from a vision to help businesses thrive in the digital age.'
    },
    {
      year: '2015',
      title: 'Google Partnership',
      description: 'Became a certified Google Partner, establishing our expertise in Google marketing tools.'
    },
    {
      year: '2018',
      title: 'Service Expansion',
      description: 'Added videography and virtual tours to our comprehensive service offering.'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Helped 50+ businesses pivot and thrive during the digital transformation surge.'
    },
    {
      year: '2025',
      title: 'Industry Leader',
      description: 'Recognized as a leading digital marketing agency with 100+ successful projects.'
    }
  ];

  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About ThinkMents - Digital Marketing Experts",
    "description": "Learn about ThinkMents, a premier digital marketing agency with over 10 years of Google Partner expertise, helping businesses grow through innovative marketing strategies.",
    "mainEntity": {
      "@type": "Organization",
      "name": "ThinkMents",
      "url": "https://thinkments.com",
      "logo": "https://thinkments.com/logo.png",
      "foundingDate": "2014",
      "description": "Premier digital marketing agency specializing in web design, SEO, virtual tours, and comprehensive marketing solutions.",
      "knowsAbout": [
        "Digital Marketing",
        "Search Engine Optimization",
        "Web Design",
        "Google Ads Management",
        "Social Media Marketing",
        "Virtual Tours",
        "Videography"
      ],
      "award": "Google Partner for 10+ Years"
    }
  };

  return (
    <>
      <SEO
        title="About ThinkMents - Digital Marketing Experts & Google Partner"
        description="Learn about ThinkMents, a premier digital marketing agency with over 10 years of Google Partner expertise. Discover our story, mission, and commitment to helping businesses grow through innovative marketing strategies."
        keywords="about ThinkMents, digital marketing agency, Google Partner, company story, marketing experts, web design team, SEO specialists"
        url="/about"
        type="website"
        structuredData={aboutStructuredData}
      />
      
      <motion.div
        className=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <section className="relative py-40 overflow-hidden">
          {/* Background Image with Overlays - Same as HomePage */}
          <div className="absolute inset-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&h=1080&fit=crop"
              alt="Digital Marketing Hero Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-accent/30" />
          </div>
          <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white drop-shadow-2xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                We Are{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  ThinkMents
                </span>
              </motion.h1>
              
              <motion.p
                className="text-xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Your trusted partner in digital excellence, dedicated to empowering businesses with innovative marketing strategies. We combine strategic thinking with creative execution to deliver measurable results that drive sustainable growth.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link to="/get-a-quote">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
                    Start Your Journey
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/our-story">
                  <Button size="lg" variant="outline">
                    Our Story
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section ref={storyRef} className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl mb-6">
                  Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Story</span>
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    The name "ThinkMents" reflects our core values and approach to digital marketing. 
                    "Think" signifies our focus on strategy, innovation, and creative problem-solving 
                    that drives every campaign we create.
                  </p>
                  <p>
                    "Ments" represents both "elements" - our commitment to foundational principles 
                    and comprehensive service offerings - and "moments" - highlighting our focus 
                    on timely, impactful decisions that can transform your business trajectory.
                  </p>
                  <p>
                    Since our founding, we've been dedicated to empowering businesses of all sizes 
                    to not just compete, but dominate their markets through strategic digital marketing.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, x: 50 }}
                animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isStoryInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    <Card className="h-full group hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6 text-center">
                        <motion.div
                          className={`w-12 h-12 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <value.icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <h3 className="font-semibold mb-2">{value.title}</h3>
                        <p className="text-sm text-muted-foreground">{value.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section ref={missionRef} className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl mb-8">
                Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Mission</span>
              </h2>
              <motion.div
                className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <div className="relative z-10">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Zap className="w-8 h-8 text-white" />
                  </motion.div>
                  <p className="text-lg md:text-xl leading-relaxed text-foreground">
                    Our mission at ThinkMents is to <strong>empower businesses to thrive</strong> by 
                    enhancing their professional image and online visibility. We provide a 
                    comprehensive range of services to equip you with the necessary tools to 
                    succeed in today's competitive digital landscape.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Timeline */}
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
                Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Journey</span>
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  className="flex items-center mb-8"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'order-3 pl-8'}`}>
                    <motion.div
                      className="bg-card rounded-lg p-6 shadow-lg"
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </motion.div>
                  </div>
                  
                  <div className="flex flex-col items-center order-2">
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold mb-2"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {item.year.slice(-2)}
                    </motion.div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-16 bg-gradient-to-b from-primary to-accent" />
                    )}
                  </div>
                  
                  <div className={`flex-1 ${index % 2 === 0 ? 'order-3' : ''}`}>
                    {index % 2 !== 0 && (
                      <div className="text-2xl font-bold text-primary">{item.year}</div>
                    )}
                    {index % 2 === 0 && (
                      <div className="text-2xl font-bold text-primary text-right">{item.year}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Google Partnership */}
        <section ref={partnershipRef} className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={isPartnershipInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center space-x-4 mb-8"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-blue-500 to-red-500 rounded-full flex items-center justify-center"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <Award className="w-8 h-8 text-white" />
                </motion.div>
                <div>
                  <h2 className="text-3xl md:text-4xl">
                    <span className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
                      Google Partner
                    </span>
                  </h2>
                  <p className="text-xl text-muted-foreground">For 10+ Years</p>
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-blue-50 to-red-50 dark:from-blue-950/20 dark:to-red-950/20 rounded-2xl p-8 md:p-12"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={isPartnershipInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <p className="text-lg leading-relaxed mb-6">
                  As a proud Google Partner for over a decade, our expertise in Google's suite of 
                  marketing tools is endorsed by Google itself. This prestigious partnership allows 
                  us to provide our clients with cutting-edge strategies and measurable results.
                </p>
                <p className="text-muted-foreground">
                  Our Google Partner status demonstrates our commitment to staying current with the 
                  latest Google innovations and best practices, ensuring your campaigns leverage the 
                  most effective tools and strategies available.
                </p>
              </motion.div>

              <motion.div
                className="mt-12"
                initial={{ opacity: 0, y: 30 }}
                animate={isPartnershipInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent">
                  <Link to="/services/google-marketing" className="flex items-center space-x-2">
                    <span>Explore Google Marketing Services</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  );
}