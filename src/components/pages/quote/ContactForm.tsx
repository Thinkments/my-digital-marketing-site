import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Label } from '../../ui/label';
import { Textarea } from '../../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../ui/card';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  businessName: string;
  serviceInterested: string;
  projectBudget: string;
  projectDescription: string;
  hearAboutUs: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  businessName?: string;
  serviceInterested?: string;
  projectBudget?: string;
  projectDescription?: string;
  hearAboutUs?: string;
}

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    businessName: '',
    serviceInterested: '',
    projectBudget: '',
    projectDescription: '',
    hearAboutUs: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const serviceOptions = [
    'Web Design',
    'SEO',
    'Google Marketing',
    'Social Media Marketing',
    'Videography',
    'Virtual Tours',
    'Multiple Services',
    'Other',
  ];

  const budgetOptions = [
    'Under $1,000',
    '$1,000 - $2,500',
    '$2,500 - $5,000',
    '$5,000 - $10,000',
    '$10,000+',
    'Not Sure Yet',
  ];

  const hearAboutUsOptions = [
    'Google Search',
    'Social Media',
    'Referral',
    'Previous Client',
    'Advertisement',
    'Event',
    'Other',
  ];

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    if (!phone) return true; // Phone is optional
    const phoneRegex = /^[\d\s\-\(\)\+]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Required field validations
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSelectChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/.netlify/functions/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setStatus('success');
      // Reset form after successful submission
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        businessName: '',
        serviceInterested: '',
        projectBudget: '',
        projectDescription: '',
        hearAboutUs: '',
      });
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        'There was an error submitting your request. Please try again or contact us directly.'
      );
      console.error('Form submission error:', error);
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setErrorMessage('');
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="border-[#96FFBF] bg-gradient-to-br from-[#CFFFE7]/50 to-white">
          <CardContent className="p-12 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            >
              <CheckCircle2 className="w-20 h-20 mx-auto mb-6 text-[#00C98D]" />
            </motion.div>
            <h3 className="text-3xl mb-4 text-[#1A1A1A]">Thank You!</h3>
            <p className="text-lg text-[#1A1A1A]/80 mb-6 max-w-md mx-auto">
              We've received your inquiry and will get back to you within 24 hours.
              Our team is excited to learn more about your project!
            </p>
            <Button
              onClick={handleReset}
              className="bg-gradient-to-r from-[#96FFBF] to-[#00C98D] text-black hover:from-[#5ADFA0] hover:to-[#0A8460]"
            >
              Submit Another Request
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <Card className="border-[#96FFBF]/20 shadow-xl">
      <CardHeader className="bg-gradient-to-r from-[#CFFFE7] to-[#96FFBF]/20 border-b border-[#96FFBF]/30">
        <CardTitle className="text-2xl text-[#1A1A1A]">
          Request a Free Consultation
        </CardTitle>
        <CardDescription className="text-[#1A1A1A]/70">
          Fill out the form below and we'll get back to you within 24 hours
        </CardDescription>
      </CardHeader>
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name - Required */}
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-[#1A1A1A]">
              Full Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="John Doe"
              className={`border-[#96FFBF]/30 focus:border-[#00C98D] focus:ring-[#00C98D] ${
                errors.fullName ? 'border-red-500' : ''
              }`}
            />
            {errors.fullName && (
              <p className="text-sm text-red-500 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.fullName}
              </p>
            )}
          </div>

          {/* Email - Required */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#1A1A1A]">
              Email Address <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="john@example.com"
              className={`border-[#96FFBF]/30 focus:border-[#00C98D] focus:ring-[#00C98D] ${
                errors.email ? 'border-red-500' : ''
              }`}
            />
            {errors.email && (
              <p className="text-sm text-red-500 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone Number - Optional */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-[#1A1A1A]">
              Phone Number
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="(555) 123-4567"
              className={`border-[#96FFBF]/30 focus:border-[#00C98D] focus:ring-[#00C98D] ${
                errors.phone ? 'border-red-500' : ''
              }`}
            />
            {errors.phone && (
              <p className="text-sm text-red-500 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.phone}
              </p>
            )}
          </div>

          {/* Business Name - Optional */}
          <div className="space-y-2">
            <Label htmlFor="businessName" className="text-[#1A1A1A]">
              Business Name
            </Label>
            <Input
              id="businessName"
              name="businessName"
              value={formData.businessName}
              onChange={handleInputChange}
              placeholder="Your Business LLC"
              className="border-[#96FFBF]/30 focus:border-[#00C98D] focus:ring-[#00C98D]"
            />
          </div>

          {/* Service Interested In - Dropdown */}
          <div className="space-y-2">
            <Label htmlFor="serviceInterested" className="text-[#1A1A1A]">
              Service Interested In
            </Label>
            <Select
              value={formData.serviceInterested}
              onValueChange={(value) => handleSelectChange('serviceInterested', value)}
            >
              <SelectTrigger className="border-[#96FFBF]/30 focus:border-[#00C98D] focus:ring-[#00C98D]">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {serviceOptions.map((service) => (
                  <SelectItem key={service} value={service}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Project Budget - Dropdown */}
          <div className="space-y-2">
            <Label htmlFor="projectBudget" className="text-[#1A1A1A]">
              Project Budget
            </Label>
            <Select
              value={formData.projectBudget}
              onValueChange={(value) => handleSelectChange('projectBudget', value)}
            >
              <SelectTrigger className="border-[#96FFBF]/30 focus:border-[#00C98D] focus:ring-[#00C98D]">
                <SelectValue placeholder="Select a budget range" />
              </SelectTrigger>
              <SelectContent>
                {budgetOptions.map((budget) => (
                  <SelectItem key={budget} value={budget}>
                    {budget}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Project Description - Textarea */}
          <div className="space-y-2">
            <Label htmlFor="projectDescription" className="text-[#1A1A1A]">
              Project Description
            </Label>
            <Textarea
              id="projectDescription"
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleInputChange}
              placeholder="Tell us about your project goals, timeline, and any specific requirements..."
              rows={5}
              className="border-[#96FFBF]/30 focus:border-[#00C98D] focus:ring-[#00C98D]"
            />
          </div>

          {/* How did you hear about us? - Dropdown */}
          <div className="space-y-2">
            <Label htmlFor="hearAboutUs" className="text-[#1A1A1A]">
              How did you hear about us?
            </Label>
            <Select
              value={formData.hearAboutUs}
              onValueChange={(value) => handleSelectChange('hearAboutUs', value)}
            >
              <SelectTrigger className="border-[#96FFBF]/30 focus:border-[#00C98D] focus:ring-[#00C98D]">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                {hearAboutUsOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Error Message */}
          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3"
            >
              <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-red-800 font-medium">Submission Error</p>
                <p className="text-red-600 text-sm">{errorMessage}</p>
              </div>
            </motion.div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full bg-gradient-to-r from-[#96FFBF] to-[#00C98D] text-black hover:from-[#5ADFA0] hover:to-[#0A8460] disabled:opacity-50 disabled:cursor-not-allowed"
            size="lg"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Submit Request
              </>
            )}
          </Button>

          <p className="text-sm text-[#1A1A1A]/60 text-center">
            By submitting this form, you agree to our{' '}
            <a href="/privacy-policy" className="text-[#00C98D] hover:underline">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="/terms-of-service" className="text-[#00C98D] hover:underline">
              Terms of Service
            </a>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
