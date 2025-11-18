import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { ArrowRight, Brain, Zap, Target, TrendingUp, BarChart3, Users, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function AIOptimizationPage() {
  const benefits = [
    {
      icon: Brain,
      title: 'Intelligent Data Analysis',
      description: 'AI algorithms analyze vast amounts of data to identify patterns and opportunities humans might miss.'
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Advanced targeting algorithms ensure your ads reach the most relevant audience segments.'
    },
    {
      icon: Zap,
      title: 'Real-Time Optimization',
      description: 'Continuous optimization adjusts campaigns in real-time for maximum performance.'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'AI predicts trends and customer behavior to stay ahead of the competition.'
    }
  ];

  const features = [
    'Automated bid management and optimization',
    'Dynamic ad creative testing and optimization',
    'Intelligent audience segmentation',
    'Predictive customer lifetime value modeling',
    'Automated A/B testing and statistical analysis',
    'Real-time performance monitoring and alerts',
    'Cross-channel attribution modeling',
    'Conversion rate optimization through machine learning'
  ];

  const caseStudies = [
    {
      client: 'E-commerce Retailer',
      improvement: '347% ROI Increase',
      description: 'AI-powered product recommendations and dynamic pricing optimization',
      timeline: '6 months'
    },
    {
      client: 'SaaS Company',
      improvement: '89% Lead Quality Boost',
      description: 'Machine learning lead scoring and automated nurturing sequences',
      timeline: '4 months'
    },
    {
      client: 'Manufacturing Business',
      improvement: '156% Conversion Rate',
      description: 'AI-driven website personalization and predictive content delivery',
      timeline: '8 months'
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
              AI{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Optimization
              </span>{' '}
              Services
            </motion.h1>
            
            <motion.p
              className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Harness the power of artificial intelligence to optimize your marketing campaigns and maximize ROI through data-driven automation. Our AI-powered solutions improve targeting precision, predict customer behavior, and deliver unprecedented performance improvements.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link to="/get-a-quote">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
                  Start AI Optimization
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/case-studies">
                <Button size="lg" variant="outline">
                  View AI Results
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Benefits Section */}
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
              Why Choose{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                AI Optimization?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AI optimization transforms your marketing from reactive to predictive, 
              delivering unprecedented performance improvements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full group hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
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

      {/* Features Section */}
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
                  Advanced AI{' '}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Features
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Our AI optimization platform includes cutting-edge features 
                  designed to maximize your marketing performance.
                </p>
                
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop"
                  alt="AI Optimization Dashboard"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
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
              AI Success{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Stories
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how our AI optimization has transformed businesses across various industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.client}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full group hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="text-center">
                      <div className="text-3xl mb-2">
                        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                          {study.improvement}
                        </span>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {study.client}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">
                      {study.description}
                    </p>
                    <Badge variant="outline">
                      {study.timeline}
                    </Badge>
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
              Ready to Harness{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                AI Power?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Transform your marketing with AI optimization and achieve unprecedented results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-a-quote">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
                  Get Started Today
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
  );
}