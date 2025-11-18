import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export default function Footer() {
  const services = [
    { name: 'Website Design', href: '/services/website-design' },
    { name: 'SEO', href: '/services/seo' },
    { name: 'Google Marketing', href: '/services/google-marketing' },
    { name: 'Social Media', href: '/services/social-media-marketing' },
    { name: 'Videography', href: '/services/videography' },
    { name: 'Virtual Tours', href: '/services/virtual-tours' },
  ];

  const resources = [
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/ThinkMents/', label: 'Facebook' },
    { icon: Twitter, href: 'https://x.com/ments360', label: 'Twitter' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/thinkments', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/thinkments/', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-muted/40 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <motion.div
                className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-primary-foreground text-xs">T</span>
              </motion.div>
              <span className="text-xl font-bold">ThinkMents</span>
            </Link>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Empowering businesses to thrive by enhancing their professional image 
              and online visibility. Your strategic partner in digital growth.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <motion.li
                  key={service.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={service.href}
                    className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block transform duration-200"
                  >
                    {service.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <motion.li
                  key={resource.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={resource.href}
                    className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block transform duration-200"
                  >
                    {resource.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.div
              className="mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link
                to="/get-a-quote"
                className="inline-flex items-center text-primary hover:text-accent transition-colors font-medium"
              >
                Get Free Consultation →
              </Link>
            </motion.div>
          </motion.div>

          {/* Contact & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact & Subscribe</h3>
            <div className="space-y-3 mb-6">
              <motion.div
                className="flex items-center space-x-2 text-muted-foreground"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Phone className="w-4 h-4" />
                <span>(940) 539-3074</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-2 text-muted-foreground"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Mail className="w-4 h-4" />
                <span>Info@thinkments.com</span>
              </motion.div>
              <motion.div
                className="flex items-start space-x-2 text-muted-foreground"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>301 S Washburn St Unit D<br />Decatur, TX 76234</span>
              </motion.div>
            </div>


          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-sm">
            © 2025 ThinkMents. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}