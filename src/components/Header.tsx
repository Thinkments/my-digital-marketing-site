import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import thinkMentsLogo from 'figma:asset/23dd1a5ded9cf69ce18288f1632f0a531713cb93.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  // Check if we're on the Get Quote page
  const isQuotePage = location.pathname === '/get-a-quote';
  
  // Check if we're on the Virtual Tours page
  const isVirtualToursPage = location.pathname === '/services/virtual-tours';
  
  // Check if we're on the AI Podcast Production page
  const isAIPodcastPage = location.pathname === '/ai-podcast-production';
  
  // Use white text on Quote, Virtual Tours, or AI Podcast Production pages
  const useWhiteText = isQuotePage || isVirtualToursPage || isAIPodcastPage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'Website Design', href: '/services/website-design' },
    { name: 'SEO', href: '/services/seo' },
    { name: 'Google Marketing', href: '/services/google-marketing' },
    { name: 'Social Media', href: '/services/social-media-marketing' },
    { name: 'Videography', href: '/services/videography' },
    { name: 'Virtual Tours', href: '/services/virtual-tours' },
    { name: 'AI Podcast Production', href: '/ai-podcast-production' },
    { name: 'AI 3D Generation', href: '/ai-3d-generation' },
  ];

  const morphVariants = {
    normal: {
      scale: 1,
      rotateY: 0,
      rotateX: 0,
    },
    hover: {
      scale: 1.05,
      rotateY: 5,
      rotateX: 2,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/20 backdrop-blur-md shadow-lg' : 'bg-black/10 backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/">
            <motion.div
              className="flex items-center"
              variants={morphVariants}
              initial="normal"
              whileHover="hover"
            >
              <motion.img
                src={thinkMentsLogo}
                alt="ThinkMents"
                className="h-8 w-auto object-contain"
                animate={{
                  filter: [
                    'brightness(1) saturate(1)',
                    'brightness(1.1) saturate(1.2)',
                    'brightness(1) saturate(1)'
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <motion.button
                className={`flex items-center space-x-1 transition-colors ${
                  useWhiteText 
                    ? 'text-white hover:text-[#96FFBF]' 
                    : 'text-foreground hover:text-primary'
                }`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                whileHover={{ scale: 1.05 }}
              >
                <span>Services</span>
                <motion.div
                  animate={{ rotate: isServicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-48 bg-card/95 backdrop-blur-md rounded-lg shadow-lg border border-border/50 overflow-hidden"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    {services.map((service, index) => (
                      <motion.div
                        key={service.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          to={service.href}
                          className="block px-4 py-2 text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          {service.name}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {[
              { name: 'Case Studies', href: '/case-studies' },
              { name: 'Blog', href: '/blog' },
              { name: 'About', href: '/about' }
            ].map((item) => (
              <motion.div key={item.href} whileHover={{ scale: 1.05 }}>
                <Link
                  to={item.href}
                  className={`transition-colors ${
                    useWhiteText 
                      ? 'text-white hover:text-[#96FFBF]' 
                      : 'text-foreground hover:text-primary'
                  } ${
                    location.pathname === item.href ? 'font-medium' : ''
                  } ${
                    location.pathname === item.href && !useWhiteText ? 'text-primary' : ''
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300">
                <Link to="/get-a-quote">Get a Quote</Link>
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className={`md:hidden transition-colors ${
              useWhiteText ? 'text-white' : 'text-foreground'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden bg-card/90 backdrop-blur-md border-t border-border/50"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="py-4 space-y-2">
                {/* Mobile Services */}
                <div className="px-4 py-2">
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Services</h3>
                  {services.map((service, index) => (
                    <motion.div
                      key={service.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={service.href}
                        className="block px-2 py-1 text-foreground hover:bg-accent hover:text-accent-foreground transition-colors rounded"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile Main Navigation */}
                {[
                  { name: 'Case Studies', href: '/case-studies' },
                  { name: 'Blog', href: '/blog' },
                  { name: 'About', href: '/about' }
                ].map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (services.length + index) * 0.05 }}
                  >
                    <Link
                      to={item.href}
                      className="block px-4 py-2 text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile CTA Button */}
                <motion.div
                  className="px-4 pt-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (services.length + 4) * 0.05 }}
                >
                  <Button 
                    asChild 
                    className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300"
                  >
                    <Link to="/get-a-quote" onClick={() => setIsMobileMenuOpen(false)}>
                      Get a Quote
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}