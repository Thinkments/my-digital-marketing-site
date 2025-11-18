import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import QuoteBenefits from './quote/QuoteBenefits';
import QuoteProgress from './quote/QuoteProgress';
import { Step1BasicInfo, Step2Services, Step3ProjectDetails, Step4AdditionalInfo } from './quote/QuoteFormSteps';
import { initialFormData, QuoteFormData } from './quote/QuoteConstants';

export default function QuotePage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<QuoteFormData>(initialFormData);

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote request submitted:', formData);
    // Handle form submission
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.name && formData.email;
      case 2:
        return formData.services.length > 0;
      case 3:
        return formData.description;
      case 4:
        return true;
      default:
        return false;
    }
  };

  const renderCurrentStep = () => {
    const stepProps = { formData, setFormData };
    
    switch (step) {
      case 1:
        return <Step1BasicInfo {...stepProps} />;
      case 2:
        return <Step2Services {...stepProps} />;
      case 3:
        return <Step3ProjectDetails {...stepProps} />;
      case 4:
        return <Step4AdditionalInfo {...stepProps} />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      className=""
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative py-40 overflow-hidden">
        {/* Background Image with Overlays - Same as ContactPage */}
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
              Get Your{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Free Quote
              </span>
            </motion.h1>
            
            <motion.p
              className="text-xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Tell us about your project and goals, and we'll create a custom proposal tailored to your business needs and budget. Our expert team will provide detailed recommendations and transparent pricing for your digital marketing success.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent">
                <a href="#quote-form">
                  Start Quote Request
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="tel:9405393074">
                  Call for Consultation
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <QuoteBenefits />

      {/* Quote Form */}
      <section id="quote-form" className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-4">
                <div className="flex justify-center">
                  <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdC-8dtXzusBKuV-_Unjkd4xmU6j5CbBL8UgFiyvXED_cy2cA/viewform?embedded=true" 
                    width="640" 
                    height="2400" 
                    frameBorder="0" 
                    marginHeight="0" 
                    marginWidth="0"
                    className="w-full max-w-2xl"
                    style={{ border: 'none' }}
                  >
                    Loading…
                  </iframe>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}