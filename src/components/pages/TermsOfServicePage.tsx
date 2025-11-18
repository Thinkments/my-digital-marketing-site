import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from '../ui/card';
import { Separator } from '../ui/separator';
import SEO from '../SEO';

export default function TermsOfServicePage() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: [
        "By accessing and using ThinkMents' website and services, you accept and agree to be bound by the terms and provision of this agreement. These Terms of Service apply to all visitors, users, and others who access or use the service.",
        "If you do not agree to abide by the above, please do not use this service."
      ]
    },
    {
      title: "2. Services Description",
      content: [
        "ThinkMents provides digital marketing services including but not limited to:",
        "• Website Design and Development",
        "• Search Engine Optimization (SEO)",
        "• Google Marketing and PPC Management",
        "• Social Media Marketing",
        "• Videography and Content Creation",
        "• Virtual Tours and 360° Photography",
        "• Graphic Design Services",
        "• Digital Strategy Consulting",
        "",
        "All services are subject to availability and may be modified or discontinued at any time without notice."
      ]
    },
    {
      title: "3. Client Responsibilities",
      content: [
        "Clients are responsible for:",
        "• Providing accurate and complete information necessary for service delivery",
        "• Timely payment of all fees and charges",
        "• Providing feedback and approvals within agreed timeframes",
        "• Ensuring they have legal rights to all materials provided to ThinkMents",
        "• Maintaining confidentiality of login credentials and account information",
        "• Complying with all applicable laws and regulations in their business operations"
      ]
    },
    {
      title: "4. Payment Terms",
      content: [
        "Payment terms are as follows:",
        "• All invoices are due within 30 days of invoice date unless otherwise agreed",
        "• Late payments may incur interest charges of 1.5% per month",
        "• Services may be suspended for accounts with outstanding balances over 60 days",
        "• Refunds are subject to our refund policy and must be requested in writing",
        "• All prices are subject to change with 30 days written notice"
      ]
    },
    {
      title: "5. Intellectual Property Rights",
      content: [
        "Ownership and usage rights:",
        "• ThinkMents retains ownership of all proprietary methods, processes, and technologies",
        "• Upon full payment, clients receive ownership of custom creative assets developed specifically for them",
        "• Clients grant ThinkMents permission to use completed work for marketing and portfolio purposes",
        "• Third-party assets used in projects remain property of their respective owners",
        "• Clients warrant they have rights to all materials provided to ThinkMents"
      ]
    },
    {
      title: "6. Confidentiality",
      content: [
        "ThinkMents commits to maintaining the confidentiality of:",
        "• Client business information and trade secrets",
        "• Marketing strategies and campaign data",
        "• Customer lists and proprietary information",
        "• Any information marked as confidential by the client",
        "",
        "This obligation continues after the termination of our business relationship."
      ]
    },
    {
      title: "7. Service Level Agreements",
      content: [
        "Our commitment to service quality:",
        "• We strive to respond to client communications within 24 hours during business days",
        "• Project timelines will be clearly communicated and adhered to whenever possible",
        "• Any delays will be communicated promptly with revised timelines",
        "• Regular reporting and updates will be provided as agreed in service contracts",
        "• Quality assurance processes are in place for all deliverables"
      ]
    },
    {
      title: "8. Limitation of Liability",
      content: [
        "ThinkMents' liability is limited as follows:",
        "• Our total liability shall not exceed the amount paid for services in the preceding 12 months",
        "• We are not liable for indirect, consequential, or punitive damages",
        "• We are not responsible for third-party platform changes that affect campaign performance",
        "• Clients acknowledge that digital marketing results cannot be guaranteed",
        "• Force majeure events are excluded from liability claims"
      ]
    },
    {
      title: "9. Termination",
      content: [
        "This agreement may be terminated:",
        "• By either party with 30 days written notice",
        "• Immediately for material breach of contract",
        "• Immediately for non-payment after 60 days",
        "• Upon completion of agreed project scope",
        "",
        "Upon termination:",
        "• All outstanding invoices become immediately due",
        "• Access to ThinkMents systems and resources will be revoked",
        "• Final deliverables will be provided upon payment of all outstanding amounts"
      ]
    },
    {
      title: "10. Privacy and Data Protection",
      content: [
        "We are committed to protecting your privacy:",
        "• Personal and business data is collected and used in accordance with our Privacy Policy",
        "• Data is stored securely and accessed only by authorized personnel",
        "• We comply with applicable data protection regulations",
        "• Client data will not be shared with third parties without explicit consent",
        "• Data retention policies are in place and communicated upon request"
      ]
    },
    {
      title: "11. Dispute Resolution",
      content: [
        "In case of disputes:",
        "• Initial resolution attempts will be made through direct negotiation",
        "• Mediation may be pursued before legal action",
        "• Texas state law governs this agreement",
        "• Disputes will be resolved in courts of competent jurisdiction in Texas",
        "• The prevailing party may recover reasonable attorney fees"
      ]
    },
    {
      title: "12. Changes to Terms",
      content: [
        "ThinkMents reserves the right to modify these terms:",
        "• Changes will be effective immediately upon posting on our website",
        "• Clients will be notified of material changes via email when possible",
        "• Continued use of services constitutes acceptance of modified terms",
        "• Clients may terminate services if they disagree with changes"
      ]
    },
    {
      title: "13. Contact Information",
      content: [
        "For questions about these Terms of Service, contact us:",
        "",
        "ThinkMents",
        "301 S Washburn St Unit D",
        "Decatur, TX 76234",
        "Phone: (940) 539-3074",
        "Email: Info@thinkments.com",
        "",
        "Business Hours: Monday - Friday, 9:00 AM - 5:00 PM CST"
      ]
    }
  ];

  const termsStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service - ThinkMents",
    "description": "Terms and conditions for using ThinkMents digital marketing services and website. Learn about our service agreements, client responsibilities, and business policies.",
    "url": "https://thinkments.com/terms-of-service",
    "dateModified": "2025-01-01",
    "isPartOf": {
      "@type": "WebSite",
      "name": "ThinkMents",
      "url": "https://thinkments.com"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Terms of Service",
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
        title="Terms of Service - ThinkMents Digital Marketing Agency"
        description="Terms and conditions for using ThinkMents digital marketing services and website. Learn about our service agreements, client responsibilities, and business policies in Decatur, Texas."
        keywords="terms of service, service agreement, legal terms, client responsibilities, digital marketing, ThinkMents, Decatur Texas"
        url="/terms-of-service"
        type="website"
        structuredData={termsStructuredData}
      />
      
      <main className="min-h-screen pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Terms of Service
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              These terms and conditions outline the rules and regulations for the use of ThinkMents' services and website.
            </motion.p>
            <motion.p
              className="text-sm text-muted-foreground mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Last updated: January 1, 2025
            </motion.p>
          </motion.div>

          {/* Terms Content */}
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden border-0 shadow-2xl bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 md:p-12">
                <div className="space-y-8">
                  {sections.map((section, index) => (
                    <motion.div
                      key={section.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                    >
                      <h2 className="text-2xl mb-4 text-primary">
                        {section.title}
                      </h2>
                      <div className="space-y-3 text-muted-foreground">
                        {section.content.map((paragraph, pIndex) => (
                          <p key={pIndex} className={paragraph === "" ? "h-2" : ""}>
                            {paragraph}
                          </p>
                        ))}
                      </div>
                      {index < sections.length - 1 && (
                        <Separator className="mt-8" />
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Footer Notice */}
                <motion.div
                  className="mt-12 p-6 bg-muted/50 rounded-lg border"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <h3 className="text-lg mb-3 text-primary">
                    Agreement Acknowledgment
                  </h3>
                  <p className="text-muted-foreground">
                    By using ThinkMents' services, you acknowledge that you have read, understood, 
                    and agree to be bound by these Terms of Service. If you have any questions about 
                    these terms, please contact us before using our services.
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
}