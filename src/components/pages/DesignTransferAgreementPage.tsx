import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { FileText, Mail, Phone, ArrowLeft } from 'lucide-react';
import { AGREEMENT_SECTIONS, CONTACT_INFO } from './agreement/AgreementConstants';
import SEO from '../SEO';

export default function DesignTransferAgreementPage() {
  const agreementStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Design Transfer Agreement - ThinkMents",
    "description": "Comprehensive agreement outlining the terms and conditions for transferring ownership of design work created by ThinkMents to clients",
    "url": "https://thinkments.com/design-transfer-agreement",
    "dateModified": "2025-01-01",
    "isPartOf": {
      "@type": "WebSite",
      "name": "ThinkMents",
      "url": "https://thinkments.com"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Design Transfer Agreement",
      "datePublished": "2025-01-01",
      "dateModified": "2025-01-01",
      "author": {
        "@type": "Organization",
        "name": "ThinkMents"
      },
      "publisher": {
        "@type": "Organization",
        "name": "ThinkMents",
        "url": "https://thinkments.com"
      }
    }
  };

  return (
    <>
      <SEO
        title="Design Transfer Agreement - ThinkMents Creative Services"
        description="Comprehensive agreement outlining the terms and conditions for transferring ownership of design work created by ThinkMents to our clients. Review complete terms for design ownership transfer."
        keywords="design transfer agreement, intellectual property, design ownership, creative rights, digital design, ThinkMents agreement"
        url="/design-transfer-agreement"
        type="website"
        structuredData={agreementStructuredData}
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
                Design Transfer{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Agreement
                </span>
              </motion.h1>
              
              <motion.p
                className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                This comprehensive agreement outlines the terms and conditions for transferring ownership of design work created by ThinkMents to our clients. Review the complete terms to understand your rights and responsibilities regarding design ownership transfer.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <a href="#agreement-content">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
                    <FileText className="mr-2 w-4 h-4" />
                    Read Agreement
                  </Button>
                </a>
                <Link to="/contact">
                  <Button size="lg" variant="outline">
                    Ask Questions
                  </Button>
                </Link>
              </motion.div>

              <motion.p
                className="text-sm text-muted-foreground mt-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Effective Date: January 1, 2025
              </motion.p>
            </div>
          </div>
        </section>

        {/* Agreement Content */}
        <section id="agreement-content" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {AGREEMENT_SECTIONS.map((section, index) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="mb-8">
                    <CardHeader>
                      <CardTitle>{section.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-gray max-w-none">
                        <pre className="whitespace-pre-wrap text-sm text-muted-foreground font-sans">
                          {section.content}
                        </pre>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-2xl mx-auto text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl mb-6">
                Questions About This{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Agreement?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Contact us if you need clarification on any terms or have questions about design ownership transfer.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Mail className="w-8 h-8 mx-auto mb-4 text-primary" />
                    <h3 className="mb-2">Email Us</h3>
                    <p className="text-muted-foreground">{CONTACT_INFO.email}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <Phone className="w-8 h-8 mx-auto mb-4 text-primary" />
                    <h3 className="mb-2">Call Us</h3>
                    <p className="text-muted-foreground">{CONTACT_INFO.phone}</p>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button className="bg-gradient-to-r from-primary to-accent">
                    Contact Us
                  </Button>
                </Link>
                <Link to="/">
                  <Button variant="outline">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Homepage
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