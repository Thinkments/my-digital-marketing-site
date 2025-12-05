import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  businessName: string;
  serviceInterestedIn: string;
  projectBudget: string;
  projectDescription: string;
  howDidYouHear: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  serviceInterestedIn?: string;
}

export default function ContactForm({
  title = "Get Your Free Consultation",
  subtitle = "Fill out the form below and we'll get back to you within 24 hours",
  className = ""
}: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phoneNumber: '',
    businessName: '',
    serviceInterestedIn: '',
    projectBudget: '',
    projectDescription: '',
    howDidYouHear: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Validate email format
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validate form fields
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.serviceInterestedIn) {
      newErrors.serviceInterestedIn = 'Please select a service';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field as keyof FormErrors];
        return newErrors;
      });
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/.netlify/functions/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString()
        }),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setSubmitStatus('success');
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phoneNumber: '',
      businessName: '',
      serviceInterestedIn: '',
      projectBudget: '',
      projectDescription: '',
      howDidYouHear: ''
    });
    setErrors({});
    setSubmitStatus('idle');
  };

  return (
    <div className={`w-full ${className}`}>
      <AnimatePresence mode="wait">
        {submitStatus === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white rounded-lg shadow-lg p-8 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            >
              <CheckCircle className="w-16 h-16 text-[#00C98D] mx-auto mb-4" />
            </motion.div>
            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">
              Thank You for Your Inquiry!
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              We've received your message and will get back to you within 24 hours.
            </p>
            <Button
              onClick={resetForm}
              className="bg-gradient-to-r from-[#00C98D] to-[#96FFBF] hover:from-[#0A8460] hover:to-[#5ADFA0] text-[#1A1A1A]"
            >
              Submit Another Inquiry
            </Button>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white rounded-lg shadow-lg p-6 md:p-8"
          >
            {/* Form Header */}
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-2">
                {title}
              </h2>
              <p className="text-gray-600">{subtitle}</p>
            </div>

            {/* Error Alert */}
            <AnimatePresence>
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-red-800 font-medium">Something went wrong.</p>
                    <p className="text-red-600 text-sm">
                      Please try again or call us at{' '}
                      <a href="tel:9403998879" className="underline font-medium">
                        (940) 399-8879
                      </a>
                      .
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div>
                <Label htmlFor="fullName" className="text-[#1A1A1A] font-medium">
                  Full Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className={`mt-1.5 ${errors.fullName ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                  disabled={isSubmitting}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <Label htmlFor="email" className="text-[#1A1A1A] font-medium">
                  Email Address <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`mt-1.5 ${errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <Label htmlFor="phoneNumber" className="text-[#1A1A1A] font-medium">
                  Phone Number
                </Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  placeholder="(555) 555-5555"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                  className="mt-1.5"
                  disabled={isSubmitting}
                />
                <p className="text-gray-500 text-sm mt-1">
                  We'll only call if you prefer phone contact
                </p>
              </div>

              {/* Business Name */}
              <div>
                <Label htmlFor="businessName" className="text-[#1A1A1A] font-medium">
                  Business Name
                </Label>
                <Input
                  id="businessName"
                  type="text"
                  placeholder="Your business or organization"
                  value={formData.businessName}
                  onChange={(e) => handleInputChange('businessName', e.target.value)}
                  className="mt-1.5"
                  disabled={isSubmitting}
                />
              </div>

              {/* Service Interested In */}
              <div>
                <Label htmlFor="serviceInterestedIn" className="text-[#1A1A1A] font-medium">
                  Service Interested In <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={formData.serviceInterestedIn}
                  onValueChange={(value) => handleInputChange('serviceInterestedIn', value)}
                  disabled={isSubmitting}
                >
                  <SelectTrigger
                    id="serviceInterestedIn"
                    className={`mt-1.5 ${errors.serviceInterestedIn ? 'border-red-500 focus:ring-red-500' : ''}`}
                  >
                    <SelectValue placeholder="Select a service..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web-design">Web Design & Development</SelectItem>
                    <SelectItem value="seo">SEO (Search Engine Optimization)</SelectItem>
                    <SelectItem value="google-business">Google Business Profile Management</SelectItem>
                    <SelectItem value="social-media">Social Media Marketing</SelectItem>
                    <SelectItem value="videography">Videography & Video Production</SelectItem>
                    <SelectItem value="virtual-tours">Virtual Tours (360° Photography)</SelectItem>
                    <SelectItem value="complete-package">Complete Digital Marketing Package</SelectItem>
                    <SelectItem value="consultation">Not sure - need consultation</SelectItem>
                  </SelectContent>
                </Select>
                {errors.serviceInterestedIn && (
                  <p className="text-red-500 text-sm mt-1">{errors.serviceInterestedIn}</p>
                )}
              </div>

              {/* Project Budget */}
              <div>
                <Label htmlFor="projectBudget" className="text-[#1A1A1A] font-medium">
                  Project Budget
                </Label>
                <Select
                  value={formData.projectBudget}
                  onValueChange={(value) => handleInputChange('projectBudget', value)}
                  disabled={isSubmitting}
                >
                  <SelectTrigger id="projectBudget" className="mt-1.5">
                    <SelectValue placeholder="Select your budget range..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-1000">Under $1,000</SelectItem>
                    <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                    <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                    <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                    <SelectItem value="10000-plus">$10,000+</SelectItem>
                    <SelectItem value="not-sure">Not sure yet</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Tell Us About Your Project */}
              <div>
                <Label htmlFor="projectDescription" className="text-[#1A1A1A] font-medium">
                  Tell Us About Your Project
                </Label>
                <Textarea
                  id="projectDescription"
                  placeholder="Describe your project, goals, timeline, or any questions you have..."
                  value={formData.projectDescription}
                  onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                  rows={5}
                  className="mt-1.5 resize-none"
                  disabled={isSubmitting}
                />
              </div>

              {/* How Did You Hear About Us */}
              <div>
                <Label htmlFor="howDidYouHear" className="text-[#1A1A1A] font-medium">
                  How Did You Hear About Us?
                </Label>
                <Select
                  value={formData.howDidYouHear}
                  onValueChange={(value) => handleInputChange('howDidYouHear', value)}
                  disabled={isSubmitting}
                >
                  <SelectTrigger id="howDidYouHear" className="mt-1.5">
                    <SelectValue placeholder="Select one..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="google-search">Google Search</SelectItem>
                    <SelectItem value="social-media">Social Media</SelectItem>
                    <SelectItem value="referral">Referral from friend/colleague</SelectItem>
                    <SelectItem value="saw-work">Saw your work on another website</SelectItem>
                    <SelectItem value="google-business">Google Business Profile</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#00C98D] to-[#96FFBF] hover:from-[#0A8460] hover:to-[#5ADFA0] text-[#1A1A1A] font-semibold py-6 text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Inquiry'
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
