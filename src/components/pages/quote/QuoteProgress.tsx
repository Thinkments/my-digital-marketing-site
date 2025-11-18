import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';
import { stepTitles } from './QuoteConstants';

interface QuoteProgressProps {
  currentStep: number;
}

export default function QuoteProgress({ currentStep }: QuoteProgressProps) {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        {[1, 2, 3, 4].map((stepNumber) => (
          <div
            key={stepNumber}
            className={`flex items-center ${stepNumber < 4 ? 'flex-1' : ''}`}
          >
            <motion.div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                currentStep >= stepNumber
                  ? 'bg-gradient-to-r from-primary to-accent text-white'
                  : 'bg-muted text-muted-foreground'
              }`}
              whileHover={{ scale: 1.1 }}
            >
              {currentStep > stepNumber ? <CheckCircle className="w-4 h-4" /> : stepNumber}
            </motion.div>
            {stepNumber < 4 && (
              <div
                className={`flex-1 h-0.5 mx-4 ${
                  currentStep > stepNumber ? 'bg-gradient-to-r from-primary to-accent' : 'bg-muted'
                }`}
              />
            )}
          </div>
        ))}
      </div>
      <div className="text-center">
        <h2 className="text-xl font-semibold">
          Step {currentStep}: {stepTitles[currentStep - 1]}
        </h2>
      </div>
    </div>
  );
}