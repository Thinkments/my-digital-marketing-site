import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

export interface InternalLink {
  title: string;
  description: string;
  href: string;
  category?: string;
}

interface InternalLinksProps {
  links: InternalLink[];
  title?: string;
  description?: string;
  columns?: 2 | 3 | 4;
}

/**
 * Internal Links Component for SEO and User Navigation
 * Displays related pages and services with proper internal linking structure
 * Helps with site navigation and SEO link equity distribution
 */
export const InternalLinks: React.FC<InternalLinksProps> = ({
  links,
  title = "Related Services & Resources",
  description = "Explore more of our digital marketing services and resources",
  columns = 3
}) => {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4'
  };

  return (
    <section className="py-16 px-4 bg-accent/5">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">{title}</h2>
          {description && (
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </motion.div>

        <div className={`grid grid-cols-1 ${gridCols[columns]} gap-6`}>
          {links.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link to={link.href}>
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-primary/50 group">
                  <CardContent className="p-6">
                    {link.category && (
                      <span className="text-xs uppercase tracking-wider text-primary mb-2 block">
                        {link.category}
                      </span>
                    )}
                    <h3 className="text-lg mb-2 group-hover:text-primary transition-colors flex items-center justify-between">
                      {link.title}
                      <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" />
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {link.description}
                    </p>
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

/**
 * Quick Links Component for Footer or Sidebar
 * Compact version for navigation areas
 */
interface QuickLinksProps {
  links: { title: string; href: string }[];
  title?: string;
}

export const QuickLinks: React.FC<QuickLinksProps> = ({ links, title = "Quick Links" }) => {
  return (
    <div className="space-y-3">
      <h4 className="text-sm uppercase tracking-wider">{title}</h4>
      <ul className="space-y-2">
        {links.map(link => (
          <li key={link.href}>
            <Link
              to={link.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
            >
              <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
              <span>{link.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

/**
 * Contextual CTA Links
 * Strategic call-to-action links for conversion
 */
interface CTALinksProps {
  primaryCTA: {
    title: string;
    description: string;
    href: string;
    buttonText: string;
  };
  secondaryCTA?: {
    title: string;
    description: string;
    href: string;
    buttonText: string;
  };
}

export const CTALinks: React.FC<CTALinksProps> = ({ primaryCTA, secondaryCTA }) => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className={`grid ${secondaryCTA ? 'md:grid-cols-2' : 'grid-cols-1'} gap-6`}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/20">
              <CardContent className="p-8">
                <h3 className="mb-3">{primaryCTA.title}</h3>
                <p className="text-muted-foreground mb-6">
                  {primaryCTA.description}
                </p>
                <Link
                  to={primaryCTA.href}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  {primaryCTA.buttonText}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          </motion.div>

          {secondaryCTA && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border-accent/20">
                <CardContent className="p-8">
                  <h3 className="mb-3">{secondaryCTA.title}</h3>
                  <p className="text-muted-foreground mb-6">
                    {secondaryCTA.description}
                  </p>
                  <Link
                    to={secondaryCTA.href}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors"
                  >
                    {secondaryCTA.buttonText}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
