import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';
import { Input } from '../../ui/input';
import { Textarea } from '../../ui/textarea';
import { services, budgetRanges, timelineOptions, QuoteFormData } from './QuoteConstants';

interface FormStepProps {
  formData: QuoteFormData;
  setFormData: React.Dispatch<React.SetStateAction<QuoteFormData>>;
}

export function Step1BasicInfo({ formData, setFormData }: FormStepProps) {
  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Full Name *</label>
          <Input
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            placeholder="John Doe"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Email Address *</label>
          <Input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            placeholder="john@example.com"
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Phone Number</label>
          <Input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            placeholder="(940) 123-4567"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Company Name</label>
          <Input
            value={formData.company}
            onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
            placeholder="Your Company"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Current Website (if any)</label>
        <Input
          type="url"
          value={formData.website}
          onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
          placeholder="https://www.yourwebsite.com"
        />
      </div>
    </motion.div>
  );
}

export function Step2Services({ formData, setFormData }: FormStepProps) {
  const handleServiceToggle = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(s => s !== serviceId)
        : [...prev.services, serviceId]
    }));
  };

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-muted-foreground">Select all services you're interested in:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service) => (
          <motion.div
            key={service.id}
            className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
              formData.services.includes(service.id)
                ? 'border-primary bg-primary/5'
                : 'border-border hover:border-primary/50'
            }`}
            onClick={() => handleServiceToggle(service.id)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{service.icon}</span>
                <div>
                  <h3 className="font-medium">{service.name}</h3>
                </div>
              </div>
              {formData.services.includes(service.id) && (
                <CheckCircle className="w-5 h-5 text-primary" />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export function Step3ProjectDetails({ formData, setFormData }: FormStepProps) {
  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Project Budget</label>
          <div className="space-y-2">
            {budgetRanges.map((range) => (
              <motion.div
                key={range}
                className={`p-3 border rounded-lg cursor-pointer transition-all ${
                  formData.budget === range
                    ? 'border-primary bg-primary/5'
                    : 'border-border hover:border-primary/50'
                }`}
                onClick={() => setFormData(prev => ({ ...prev, budget: range }))}
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-center justify-between">
                  <span>{range}</span>
                  {formData.budget === range && (
                    <CheckCircle className="w-4 h-4 text-primary" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Timeline</label>
          <div className="space-y-2">
            {timelineOptions.map((timeline) => (
              <motion.div
                key={timeline}
                className={`p-3 border rounded-lg cursor-pointer transition-all ${
                  formData.timeline === timeline
                    ? 'border-primary bg-primary/5'
                    : 'border-border hover:border-primary/50'
                }`}
                onClick={() => setFormData(prev => ({ ...prev, timeline: timeline }))}
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-center justify-between">
                  <span>{timeline}</span>
                  {formData.timeline === timeline && (
                    <CheckCircle className="w-4 h-4 text-primary" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Project Description *</label>
        <Textarea
          value={formData.description}
          onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
          placeholder="Please describe your project, what you're looking to achieve, and any specific requirements..."
          rows={4}
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Business Goals</label>
        <Textarea
          value={formData.goals}
          onChange={(e) => setFormData(prev => ({ ...prev, goals: e.target.value }))}
          placeholder="What are your main business objectives? (e.g., increase sales, improve brand awareness, generate leads...)"
          rows={3}
        />
      </div>
    </motion.div>
  );
}

export function Step4AdditionalInfo({ formData, setFormData }: FormStepProps) {
  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <label className="block text-sm font-medium mb-2">Current Marketing Efforts</label>
        <Textarea
          value={formData.currentMarketing}
          onChange={(e) => setFormData(prev => ({ ...prev, currentMarketing: e.target.value }))}
          placeholder="Tell us about your current marketing strategies, what's working, what's not..."
          rows={3}
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Main Challenges</label>
        <Textarea
          value={formData.challenges}
          onChange={(e) => setFormData(prev => ({ ...prev, challenges: e.target.value }))}
          placeholder="What are the biggest challenges you're facing with your current digital presence?"
          rows={3}
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Target Audience</label>
        <Textarea
          value={formData.targetAudience}
          onChange={(e) => setFormData(prev => ({ ...prev, targetAudience: e.target.value }))}
          placeholder="Describe your ideal customers, their demographics, interests, and behaviors..."
          rows={3}
        />
      </div>
      
      <div className="bg-muted/50 rounded-lg p-4">
        <h3 className="font-medium mb-2">Ready to Submit?</h3>
        <p className="text-sm text-muted-foreground">
          Once you submit this form, our team will review your information and prepare 
          a custom proposal tailored to your needs. We'll contact you within 24 hours 
          to discuss your project and answer any questions.
        </p>
      </div>
    </motion.div>
  );
}