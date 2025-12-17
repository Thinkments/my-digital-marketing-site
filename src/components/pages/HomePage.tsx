import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  ArrowRight, 
  Star,
  Target,
  Code,
  MapPin,
  Camera,
  Brain,
  Megaphone,
  Phone,
  CheckCircle,
  TrendingUp,
  Store,
  Building2,
  SearchCheck,
  MousePointerClick,
  Sparkles,
  Award,
  Users,
  Zap,
  Shield,
  FileText,
  BarChart3
} from 'lucide-react';
import SEO from '../SEO';
import heroImage from 'figma:asset/55b25b8461b7b19f287a1f5f306d8eab0c585da5.png';

export default function HomePage() {
  const heroRef = useRef(null);
  const pathwaysRef = useRef(null);
  const problemsRef = useRef(null);
  const servicesRef = useRef(null);
  const whyChooseRef = useRef(null);
  const trustRef = useRef(null);
  const resourcesRef = useRef(null);
  const ctaRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isPathwaysInView = useInView(pathwaysRef, { once: true });
  const isProblemsInView = useInView(problemsRef, { once: true });
  const isServicesInView = useInView(servicesRef, { once: true });
  const isWhyChooseInView = useInView(whyChooseRef, { once: true });
  const isTrustInView = useInView(trustRef, { once: true });
  const isResourcesInView = useInView(resourcesRef, { once: true });
  const isCtaInView = useInView(ctaRef, { once: true });

  // LocalBusiness Structured Data
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ThinkMents Digital Marketing Agency",
    "alternateName": "ThinkMents",
    "description": "Texas digital marketing agency since 2002. Local SEO, web design, PPC & AI solutions for SMBs and enterprise. Decatur HQ, serving 31 states.",
    "url": "https://thinkments.com",
    "logo": "https://thinkments.com/logo.png",
    "image": "https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBvZmZpY2UlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NjU0NDE1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "telephone": "(940) 315-1023",
    "email": "info@thinkments.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "301 South Washburn St, Suite D",
      "addressLocality": "Decatur",
      "addressRegion": "TX",
      "postalCode": "76234",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.2283526,
      "longitude": -97.5883743
    },
    "openingHours": "Mo-Fr 08:00-18:00",
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "103",
      "bestRating": "5"
    },
    "sameAs": [
      "https://www.facebook.com/ThinkMents/",
      "https://www.linkedin.com/company/thinkments",
      "https://www.instagram.com/thinkments/",
      "https://www.youtube.com/@ThinkMents"
    ],
    "areaServed": [
      {
        "@type": "State",
        "name": "Texas"
      },
      {
        "@type": "Country",
        "name": "United States"
      }
    ],
    "foundingDate": "2002",
    "founder": {
      "@type": "Person",
      "name": "Corey Rumble"
    }
  };

  return (
    <>
      <SEO
        title="ThinkMents | Digital Marketing Agency in Texas | SEO, Web Design & More"
        description="Texas digital marketing agency since 2002. Local SEO, web design, PPC & AI solutions for SMBs and enterprise. Decatur HQ, serving 31 states. Free consultation."
        keywords="digital marketing agency texas, texas seo company, web design dallas fort worth, local seo decatur, digital marketing decatur tx, ppc management texas, ai marketing automation"
        url="/"
        type="website"
        structuredData={localBusinessSchema}
      />

      {/* SECTION 1: Hero Section (Enhanced) */}
      <section 
        ref={heroRef}
        className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
      >
        {/* Hero Background Image */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/95 via-[#1E3A5F]/85 to-[#1E3A5F]/70"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              {/* Main Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Digital Marketing Agency in Texas
              </h1>

              {/* Subheadline */}
              <p className="text-2xl md:text-3xl text-white/95 mb-8 leading-relaxed">
                Trusted experience + Digital innovation = <span className="text-[#F7B928]">Golden results</span>
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 max-w-4xl mx-auto">
                {[
                  { stat: '20+', label: 'Years' },
                  { stat: '31', label: 'States' },
                  { stat: '5.0', label: 'Rating' },
                  { stat: '$500M+', label: 'Generated' }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-4xl md:text-5xl text-[#F7B928] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {item.stat}
                    </div>
                    <div className="text-white/90">
                      {item.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
              >
                <Button 
                  asChild 
                  size="lg"
                  className="bg-[#F7B928] hover:bg-[#D4960F] text-[#1E3A5F] font-semibold text-lg px-10"
                >
                  <Link to="/free-consultation">Get Free Consultation</Link>
                </Button>
                <Button 
                  asChild 
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-white text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white font-semibold text-lg px-10"
                >
                  <a href="tel:9403151023" className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Call (940) 315-1023
                  </a>
                </Button>
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isHeroInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap items-center justify-center gap-4 text-white/90 text-sm"
              >
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-[#FBBC04] text-[#FBBC04]" />
                    ))}
                  </div>
                  <span>5.0 Rating</span>
                </div>
                <span className="text-white/40">•</span>
                <span>103+ Reviews</span>
                <span className="text-white/40">•</span>
                <span>Serving Since 2002</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Audience Pathways (NEW) */}
      <section ref={pathwaysRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isPathwaysInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Tailored Solutions for Your Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're a local business in Decatur or a growing enterprise, we have the expertise to help you succeed.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* SMB/Local Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isPathwaysInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link to="/local-seo">
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#00B4D8] group cursor-pointer">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Store className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Local Businesses & SMBs
                    </h3>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                      Get found by local customers, dominate Google Maps, and grow your Decatur or North Texas business with proven local SEO strategies.
                    </p>
                    <div className="flex items-center gap-2 text-[#00B4D8] font-semibold group-hover:gap-3 transition-all">
                      Explore Local Solutions
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* Enterprise Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isPathwaysInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link to="/strategic-consulting">
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#F7B928] group cursor-pointer">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#F7B928] to-[#1E3A5F] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Building2 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Enterprise & Growth Companies
                    </h3>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                      Scale with AI automation, advanced analytics, and innovative strategies that deliver long-term ROI across multiple markets.
                    </p>
                    <div className="flex items-center gap-2 text-[#F7B928] font-semibold group-hover:gap-3 transition-all">
                      Explore Enterprise Solutions
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Problem/Solution Navigation (NEW) */}
      <section ref={problemsRef} className="py-20 bg-gradient-to-br from-[#1E3A5F] to-[#0F2844]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isProblemsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              What Challenge Can We Solve For You?
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Click on your biggest challenge and discover how we can help you overcome it.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { 
                icon: SearchCheck, 
                problem: 'Need More Qualified Leads?',
                link: '/marketing-seo',
                delay: 0.1
              },
              { 
                icon: MapPin, 
                problem: 'Struggling to Get Found Locally?',
                link: '/local-seo',
                delay: 0.2
              },
              { 
                icon: MousePointerClick, 
                problem: 'Website Not Converting?',
                link: '/conversion-rate-optimization',
                delay: 0.3
              },
              { 
                icon: Sparkles, 
                problem: 'Want to Leverage AI?',
                link: '/ai-automation',
                delay: 0.4
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isProblemsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: item.delay }}
              >
                <Link to={item.link}>
                  <Card className="h-full bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 hover:border-[#00B4D8] transition-all duration-300 group cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="w-14 h-14 rounded-lg bg-[#00B4D8] flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-7 h-7 text-white" />
                      </div>
                      <p className="text-white text-lg mb-3">
                        {item.problem}
                      </p>
                      <div className="flex items-center justify-center gap-2 text-[#00B4D8] font-semibold group-hover:gap-3 transition-all">
                        Find Solution
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

      {/* SECTION 4: Services Overview (Enhanced) */}
      <section ref={servicesRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions designed to drive measurable results for your business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Target,
                title: 'SEO & Search Marketing',
                benefit: 'Rank higher, get found faster, and convert more customers with proven SEO strategies.',
                link: '/marketing-seo',
                delay: 0.1
              },
              {
                icon: MapPin,
                title: 'Google Business Profile',
                benefit: 'Dominate local search results and attract customers actively looking for your services.',
                link: '/google-business-profile',
                delay: 0.2
              },
              {
                icon: Code,
                title: 'Web Design & Development',
                benefit: 'Beautiful, conversion-focused websites that turn visitors into customers.',
                link: '/web-development',
                delay: 0.3
              },
              {
                icon: Megaphone,
                title: 'Paid Advertising',
                benefit: 'Get immediate results with expertly managed Google Ads, Facebook, and YouTube campaigns.',
                link: '/paid-advertising',
                delay: 0.4
              },
              {
                icon: Brain,
                title: 'AI & Automation',
                benefit: 'Stay ahead of competitors with AI-powered content, chatbots, and automated workflows.',
                link: '/ai-automation',
                delay: 0.5
              },
              {
                icon: SearchCheck,
                title: 'Local SEO',
                benefit: 'Own your local market and become the go-to choice for customers in your area.',
                link: '/local-seo',
                delay: 0.6
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: service.delay }}
              >
                <Link to={service.link}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#00B4D8] group cursor-pointer">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl text-[#1E3A5F] mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {service.benefit}
                      </p>
                      <div className="flex items-center gap-2 text-[#00B4D8] font-semibold group-hover:gap-3 transition-all">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isServicesInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center"
          >
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 text-[#00B4D8] hover:text-[#1E3A5F] font-semibold text-lg transition-colors"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: Why Choose ThinkMents (NEW) */}
      <section ref={whyChooseRef} className="py-20 bg-[#F8F9FA]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isWhyChooseInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Why Partner With ThinkMents?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another digital marketing agency. We're your growth partner, committed to your success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Award,
                title: '20+ Years Experience',
                description: 'Since 2002, we\'ve helped businesses navigate every digital shift—from dial-up to AI.',
                delay: 0.1
              },
              {
                icon: Users,
                title: 'True Partnership',
                description: 'We\'re an extension of your team, not just a vendor. Your success is our success.',
                delay: 0.2
              },
              {
                icon: TrendingUp,
                title: 'Results-Driven',
                description: '$500M+ in client revenue generated. We don\'t just promise results—we deliver them.',
                delay: 0.3
              },
              {
                icon: Zap,
                title: 'Local Roots, National Reach',
                description: 'Headquartered in Decatur, TX, serving businesses across 31 states with personal service.',
                delay: 0.4
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isWhyChooseInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: item.delay }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] flex items-center justify-center mb-4 mx-auto">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl text-[#1E3A5F] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Trust Signals */}
      <section ref={trustRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTrustInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Google Rating */}
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-gray-50 px-6 py-4 rounded-lg mb-3">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-6 h-6 fill-[#FBBC04] text-[#FBBC04]" />
                    ))}
                  </div>
                </div>
                <p className="text-2xl text-[#1E3A5F] mb-1">5.0 Google Rating</p>
                <p className="text-gray-600">103+ Five-Star Reviews</p>
              </div>

              {/* Years in Business */}
              <div className="text-center border-x border-gray-200">
                <Shield className="w-12 h-12 text-[#00B4D8] mx-auto mb-3" />
                <p className="text-2xl text-[#1E3A5F] mb-1">Serving Businesses Since 2002</p>
                <p className="text-gray-600">Over Two Decades of Excellence</p>
              </div>

              {/* Service Area */}
              <div className="text-center">
                <MapPin className="w-12 h-12 text-[#00B4D8] mx-auto mb-3" />
                <p className="text-2xl text-[#1E3A5F] mb-1">Headquartered in Decatur, Texas</p>
                <p className="text-gray-600">Proudly serving Dallas-Fort Worth, North Texas & businesses nationwide</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 7: Featured Resources (NEW) */}
      <section ref={resourcesRef} className="py-20 bg-gradient-to-br from-[#00B4D8]/5 to-[#1E3A5F]/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isResourcesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Learn From Our Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our resources to discover how we can help your business grow.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: FileText,
                title: 'Case Studies',
                description: 'See how we\'ve helped businesses like yours generate millions in revenue.',
                link: '/case-studies',
                cta: 'View Case Studies',
                delay: 0.1
              },
              {
                icon: BarChart3,
                title: 'Success Stories',
                description: 'Real results from real businesses across 18 industries.',
                link: '/portfolio',
                cta: 'See Our Work',
                delay: 0.2
              },
              {
                icon: CheckCircle,
                title: 'Free Consultation',
                description: 'Let\'s discuss your goals and create a custom growth strategy.',
                link: '/free-consultation',
                cta: 'Schedule Now',
                delay: 0.3
              }
            ].map((resource, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isResourcesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: resource.delay }}
              >
                <Link to={resource.link}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#00B4D8] group cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <resource.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl text-[#1E3A5F] mb-3">
                        {resource.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {resource.description}
                      </p>
                      <div className="flex items-center justify-center gap-2 text-[#00B4D8] font-semibold group-hover:gap-3 transition-all">
                        {resource.cta}
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

      {/* SECTION 8 & 9: Final CTA Section (Enhanced) */}
      <section ref={ctaRef} className="py-24 bg-gradient-to-br from-[#1E3A5F] to-[#0F2844] relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
              Whether you're a local shop in Decatur or a nationwide enterprise, we're ready to help you achieve your goals. Let's start with a free consultation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Button 
                asChild 
                size="lg"
                className="bg-[#F7B928] hover:bg-[#D4960F] text-[#1E3A5F] font-semibold text-lg px-10"
              >
                <Link to="/free-consultation">Get Free Consultation</Link>
              </Button>
              <Button 
                asChild 
                size="lg"
                variant="outline"
                className="border-2 border-white bg-white text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white font-semibold text-lg px-10"
              >
                <a href="tel:9403151023" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call (940) 315-1023
                </a>
              </Button>
            </div>

            {/* Trust Badges Below CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/80 border-t border-white/20 pt-8">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-[#FBBC04] text-[#FBBC04]" />
                  ))}
                </div>
                <span>5.0 Rating</span>
              </div>
              <span className="text-white/40">|</span>
              <span>103+ Reviews</span>
              <span className="text-white/40">|</span>
              <span>20+ Years</span>
              <span className="text-white/40">|</span>
              <span>Free Consultation</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
