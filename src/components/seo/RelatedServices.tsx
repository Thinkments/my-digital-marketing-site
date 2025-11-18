import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Monitor, Video, Palette, TrendingUp, Box } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

interface Service {
  name: string;
  path: string;
  description: string;
  icon: React.ReactNode;
}

interface RelatedServicesProps {
  currentService: string;
  maxServices?: number;
}

/**
 * Related Services Component
 * Shows contextually relevant services to encourage exploration
 * Improves internal linking structure for SEO
 */
export const RelatedServices: React.FC<RelatedServicesProps> = ({ 
  currentService, 
  maxServices = 3 
}) => {
  const allServices: Service[] = [
    { 
      name: 'Web Design', 
      path: '/web-design',
      description: 'Custom website design that converts visitors into customers',
      icon: <Monitor className="w-6 h-6" />
    },
    { 
      name: 'SEO Services', 
      path: '/services/seo',
      description: 'Rank higher on Google and drive organic traffic to your site',
      icon: <TrendingUp className="w-6 h-6" />
    },
    { 
      name: 'Videography', 
      path: '/videography',
      description: 'Professional video production that tells your brand story',
      icon: <Video className="w-6 h-6" />
    },
    { 
      name: 'Graphic Design', 
      path: '/services/graphic-design',
      description: 'Eye-catching graphics that elevate your brand identity',
      icon: <Palette className="w-6 h-6" />
    },
    { 
      name: 'AI Podcast Production', 
      path: '/ai-podcast-production',
      description: 'AI-powered podcast creation with professional editing',
      icon: <Sparkles className="w-6 h-6" />
    },
    { 
      name: 'AI 3D Generation', 
      path: '/ai-3d-generation',
      description: 'Transform product photos into stunning 3D models',
      icon: <Box className="w-6 h-6" />
    }
  ];
  
  // Filter out current service and limit results
  const relatedServices = allServices
    .filter(service => service.name !== currentService)
    .slice(0, maxServices);
  
  return (
    <section className="py-20 px-4 bg-accent/5">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">Explore Our Other Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how our comprehensive digital marketing solutions can help grow your business
          </p>
        </motion.div>

        <div className={`grid md:grid-cols-${Math.min(relatedServices.length, 3)} gap-8`}>
          {relatedServices.map((service, index) => (
            <motion.div
              key={service.path}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={service.path}>
                <Card className="h-full hover:shadow-xl hover:border-primary/50 transition-all duration-300 group">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {service.name}
                    </CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform">
                      <span className="mr-2">Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
