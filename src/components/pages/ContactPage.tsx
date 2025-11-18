import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import SEO from '../SEO';

export default function ContactPage() {
  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "ThinkMents",
      "telephone": "+1-940-539-3074",
      "email": "Info@thinkments.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "301 S Washburn St Unit D",
        "addressLocality": "Decatur",
        "addressRegion": "TX",
        "postalCode": "76234",
        "addressCountry": "US"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '(940) 539-3074',
      subtitle: 'Call us during business hours',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'Info@thinkments.com',
      subtitle: 'We respond within 24 hours',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: '301 S Washburn St Unit D',
      subtitle: 'Decatur, TX 76234',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon - Fri: 9:00 AM - 6:00 PM',
      subtitle: 'Saturday and Sunday Closed',
      color: 'from-orange-500 to-red-600'
    }
  ];



  return (
    <>
      <SEO
        title="Contact ThinkMents - Digital Marketing Agency in Decatur, Texas"
        description="Contact ThinkMents for professional digital marketing and web design services in Decatur, Texas. Call (940) 539-3074 or email Info@thinkments.com. Free consultations available."
        keywords="contact ThinkMents, digital marketing Decatur TX, web design contact, marketing agency contact, Decatur Texas marketing"
        url="/contact"
        type="website"
        structuredData={contactStructuredData}
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
              Let's Start a{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Conversation
              </span>
            </motion.h1>
            
            <motion.p
              className="text-xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ready to take your business to the next level? We'd love to hear from you and discuss your goals. Reach out to us for a personalized consultation and discover how our services can propel your business forward.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent">
                <a href="tel:9405393074">
                  Call (940) 539-3074
                  <Phone className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#contact-form">
                  Send Message
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <info.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="font-semibold mb-2">{info.title}</h3>
                    <p className="text-foreground mb-1">{info.details}</p>
                    <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card id="contact-form">
                <CardContent className="p-8">
                  <h2 className="text-2xl md:text-3xl mb-6 flex items-center space-x-2">
                    <MessageCircle className="w-8 h-8 text-primary" />
                    <span>Send us a Message</span>
                  </h2>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                  >
                    <iframe 
                      src="https://docs.google.com/forms/d/e/1FAIpQLScp90QiVs47wYgWsKVsHS13GEKa_YycKoHhvC0JzAsPMj_lLg/viewform?embedded=true" 
                      width="640" 
                      height="1094" 
                      frameBorder="0" 
                      marginHeight="0" 
                      marginWidth="0"
                      className="w-full max-w-full border-0 rounded-lg"
                      style={{ maxWidth: '640px' }}
                    >
                      Loading…
                    </iframe>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map and Additional Info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Map Placeholder */}
              <Card>
                <CardContent className="p-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.7825874567892!2d-97.59596117447473!3d33.232505945248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864d8c2f592b164d%3A0xde73d0dadccb3c67!2sThinkMents!5e0!3m2!1sen!2sus!4v1692000000000!5m2!1sen!2sus"
                    width="100%"
                    height="956"
                    style={{ border: 0, height: '831px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg w-full"
                    title="ThinkMents Location - 301 S Washburn St Unit D, Decatur, TX 76234"
                  ></iframe>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-4">Need Immediate Assistance?</h3>
                  <p className="text-muted-foreground mb-4">
                    For urgent inquiries or immediate support, don't hesitate to call us directly.
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      asChild 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-emerald-600 hover:to-green-500"
                    >
                      <a href="tel:9405393074" className="flex items-center justify-center space-x-2">
                        <Phone className="w-5 h-5" />
                        <span>Call (940) 539-3074</span>
                      </a>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-4 flex items-center space-x-2">
                    <Clock className="w-6 h-6 text-primary" />
                    <span>Business Hours</span>
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="text-muted-foreground">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="text-muted-foreground">Closed</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="text-muted-foreground">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
    </>
  );
}