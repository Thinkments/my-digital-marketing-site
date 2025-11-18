import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Shield, Mail, Phone, ArrowLeft } from 'lucide-react';
import SEO from '../SEO';

export default function PrivacyPolicyPage() {
  const privacyStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - ThinkMents",
    "description": "ThinkMents privacy policy explaining how we collect, use, and protect your personal information when using our digital marketing services",
    "url": "https://thinkments.com/privacy-policy",
    "dateModified": "2025-01-31",
    "isPartOf": {
      "@type": "WebSite", 
      "name": "ThinkMents",
      "url": "https://thinkments.com"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Privacy Policy",
      "datePublished": "2025-01-31",
      "dateModified": "2025-01-31",
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
        title="Privacy Policy - ThinkMents Digital Marketing Agency"
        description="Your privacy is important to us. Learn how ThinkMents collects, uses, and protects your personal information when you use our digital marketing services in Decatur, Texas."
        keywords="privacy policy, data protection, personal information, digital marketing, ThinkMents, Decatur Texas"
        url="/privacy-policy"
        type="website"
        structuredData={privacyStructuredData}
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
                Privacy{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Policy
                </span>
              </motion.h1>
              
              <motion.p
                className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Your privacy is important to us and we are committed to protecting your personal information. This comprehensive policy explains how ThinkMents collects, uses, and safeguards your data when you use our services or visit our website.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <a href="#policy-content">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
                    <Shield className="mr-2 w-4 h-4" />
                    Read Full Policy
                  </Button>
                </a>
                <Link to="/contact">
                  <Button size="lg" variant="outline">
                    Contact Us
                  </Button>
                </Link>
              </motion.div>

              <motion.p
                className="text-sm text-muted-foreground mt-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Last updated: January 31, 2025
              </motion.p>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section id="policy-content" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>1. Information We Collect</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p>We collect information you provide directly to us, such as when you:</p>
                    <ul>
                      <li>Fill out contact forms or request quotes</li>
                      <li>Subscribe to our newsletter or blog</li>
                      <li>Purchase products from our store</li>
                      <li>Contact us via phone, email, or chat</li>
                      <li>Participate in surveys or provide feedback</li>
                    </ul>
                    
                    <p>This information may include:</p>
                    <ul>
                      <li>Name, email address, and phone number</li>
                      <li>Company name and website</li>
                      <li>Billing and shipping addresses</li>
                      <li>Payment information (processed securely by third-party providers)</li>
                      <li>Project details and business requirements</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>2. How We Use Your Information</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p>We use the information we collect to:</p>
                    <ul>
                      <li>Provide and improve our digital marketing services</li>
                      <li>Respond to your inquiries and provide customer support</li>
                      <li>Process orders and handle billing</li>
                      <li>Send you marketing communications (with your consent)</li>
                      <li>Analyze website usage and improve our services</li>
                      <li>Comply with legal obligations</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>3. Information Sharing</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
                    <ul>
                      <li><strong>Service Providers:</strong> With trusted third-party providers who help us operate our business (e.g., payment processors, email services)</li>
                      <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                      <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                      <li><strong>With Your Consent:</strong> When you explicitly agree to share information with third parties</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>4. Cookies and Tracking Technologies</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p>We use cookies and similar technologies to:</p>
                    <ul>
                      <li>Remember your preferences and settings</li>
                      <li>Analyze website traffic and usage patterns</li>
                      <li>Provide personalized content and advertisements</li>
                      <li>Improve website functionality and user experience</li>
                    </ul>
                    
                    <p>You can control cookie settings through your browser preferences. However, disabling cookies may affect website functionality.</p>
                  </CardContent>
                </Card>

                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>5. Data Security</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
                    <ul>
                      <li>SSL encryption for data transmission</li>
                      <li>Secure servers and databases</li>
                      <li>Regular security audits and updates</li>
                      <li>Employee training on data protection</li>
                      <li>Limited access to personal information on a need-to-know basis</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>6. Your Rights and Choices</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p>You have the right to:</p>
                    <ul>
                      <li><strong>Access:</strong> Request information about the personal data we hold about you</li>
                      <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                      <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                      <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
                      <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                    </ul>
                    
                    <p>To exercise these rights, please contact us using the information provided below.</p>
                  </CardContent>
                </Card>

                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>7. Data Retention</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p>We retain your personal information only as long as necessary to:</p>
                    <ul>
                      <li>Provide the services you requested</li>
                      <li>Comply with legal obligations</li>
                      <li>Resolve disputes and enforce agreements</li>
                      <li>Maintain business records as required by law</li>
                    </ul>
                    
                    <p>When we no longer need your information, we will securely delete or anonymize it.</p>
                  </CardContent>
                </Card>

                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>8. Third-Party Links</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.</p>
                  </CardContent>
                </Card>

                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>9. Children's Privacy</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p>Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it promptly.</p>
                  </CardContent>
                </Card>

                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>10. Changes to This Policy</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p>We may update this privacy policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by:</p>
                    <ul>
                      <li>Posting the updated policy on our website</li>
                      <li>Sending an email notification to registered users</li>
                      <li>Displaying a prominent notice on our website</li>
                    </ul>
                    
                    <p>Your continued use of our services after any changes constitutes acceptance of the updated policy.</p>
                  </CardContent>
                </Card>
              </motion.div>
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
                Questions About{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Privacy?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                If you have any questions about this privacy policy or our data practices, please don't hesitate to contact us.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Mail className="w-8 h-8 mx-auto mb-4 text-primary" />
                    <h3 className="mb-2">Email Us</h3>
                    <p className="text-muted-foreground">Info@thinkments.com</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <Phone className="w-8 h-8 mx-auto mb-4 text-primary" />
                    <h3 className="mb-2">Call Us</h3>
                    <p className="text-muted-foreground">(940) 539-3074</p>
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