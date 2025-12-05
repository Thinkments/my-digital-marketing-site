import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import QuoteBenefits from './quote/QuoteBenefits';
import QuoteProgress from './quote/QuoteProgress';
import ContactForm from './quote/ContactForm';
import { Step1BasicInfo, Step2Services, Step3ProjectDetails, Step4AdditionalInfo } from './quote/QuoteFormSteps';
import { initialFormData, QuoteFormData } from './quote/QuoteConstants';

export default function QuotePage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<QuoteFormData>(initialFormData);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      mouseX.set(x);
      mouseY.set(y);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Generate floating particles
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  // Generate 3D geometric shapes
  const shapes = [
    { type: 'cube', x: 20, y: 30, size: 150, color: 'from-[#96FFBF]/30 to-[#5ADFA0]/30' },
    { type: 'sphere', x: 70, y: 20, size: 120, color: 'from-[#00C98D]/30 to-[#0A8460]/30' },
    { type: 'pyramid', x: 50, y: 60, size: 100, color: 'from-[#5ADFA0]/30 to-[#96FFBF]/30' },
    { type: 'torus', x: 30, y: 70, size: 80, color: 'from-[#CFFFE7]/30 to-[#96FFBF]/30' },
    { type: 'octahedron', x: 80, y: 50, size: 110, color: 'from-[#00C98D]/30 to-[#5ADFA0]/30' },
  ];

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
      {/* 3D Hero Section */}
      <section className="relative h-screen overflow-hidden bg-gradient-to-br from-[#000000] via-[#1A1A1A] to-[#000000]">
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(circle at center, rgba(150, 255, 191, 0.3) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Floating particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-[#96FFBF]/40"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              filter: 'blur(1px)',
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(particle.id) * 20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* 3D Scene Container */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            perspective: 1000,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Main 3D rotating platform */}
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }}
            className="relative w-full h-full"
          >
            {/* Geometric shapes */}
            {shapes.map((shape, index) => (
              <motion.div
                key={index}
                className={`absolute bg-gradient-to-br ${shape.color} rounded-2xl backdrop-blur-sm border border-white/10`}
                style={{
                  left: `${shape.x}%`,
                  top: `${shape.y}%`,
                  width: shape.size,
                  height: shape.size,
                  transformStyle: 'preserve-3d',
                  transform: `translateZ(${index * 50}px)`,
                }}
                animate={{
                  rotateX: [0, 360],
                  rotateY: [0, 360],
                  rotateZ: [0, 180],
                }}
                transition={{
                  duration: 20 + index * 5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.3 },
                }}
              >
                {/* Inner glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(255,255,255,0.1)',
                      '0 0 40px rgba(255,255,255,0.3)',
                      '0 0 20px rgba(255,255,255,0.1)',
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </motion.div>
            ))}

            {/* Central rotating ring */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                width: 400,
                height: 400,
                transformStyle: 'preserve-3d',
              }}
              animate={{
                rotateY: [0, 360],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-20 h-20 bg-gradient-to-br from-[#96FFBF]/20 to-[#00C98D]/20 rounded-lg border border-[#96FFBF]/20"
                  style={{
                    transform: `rotateY(${i * 30}deg) translateZ(200px)`,
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.1,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </motion.div>

            {/* Floating text elements */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                transform: 'translateZ(100px)',
                transformStyle: 'preserve-3d',
              }}
            >
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl text-white/90 text-center"
                style={{
                  textShadow: '0 0 30px rgba(150, 255, 191, 0.5)',
                }}
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                Get Your{' '}
                <span className="bg-gradient-to-r from-[#96FFBF] to-[#00C98D] bg-clip-text text-transparent">
                  Free Quote
                </span>
              </motion.h1>
              <motion.p
                className="text-xl text-white/70 text-center mt-4 max-w-2xl mx-auto px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Tell us about your project and we'll create a custom proposal tailored to your business needs
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <Button asChild size="lg" className="bg-gradient-to-r from-[#96FFBF] to-[#00C98D] text-black hover:from-[#5ADFA0] hover:to-[#0A8460]">
                  <a href="#quote-form">
                    Start Quote Request
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <Button asChild size="lg" className="bg-gradient-to-r from-[#0A8460] to-[#00C98D] text-white hover:from-[#5ADFA0] hover:to-[#96FFBF] border-0">
                  <a href="https://www.google.com/search?q=thinkments&rlz=1C1CHBF_enUS1020US1021&oq=thinkments+&gs_lcrp=EgZjaHJvbWUyDAgAEEUYORiABBiiBDIGCAEQABgeMgYIAhBFGEEyBggDEEUYQTIGCAQQRRg8MgYIBRBFGDwyBggGEEUYQTIGCAcQRRg90gEINTI5NWowajSoAgOwAgHxBaa0px-7-mBM&sourceid=chrome&ie=UTF-8#" target="_blank" rel="noopener noreferrer">
                    Call for Consultation
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Grid floor effect */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-64"
              style={{
                background: 'linear-gradient(to bottom, transparent, rgba(150, 255, 191, 0.1))',
                transform: 'rotateX(90deg) translateZ(-100px)',
                transformOrigin: 'bottom',
              }}
            >
              <svg className="w-full h-full opacity-30">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#96FFBF" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Mouse follower glow */}
        <motion.div
          className="absolute pointer-events-none rounded-full"
          style={{
            width: 300,
            height: 300,
            background: 'radial-gradient(circle, rgba(150, 255, 191, 0.3) 0%, transparent 70%)',
            x: mousePosition.x - 150,
            y: mousePosition.y - 150,
            filter: 'blur(40px)',
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
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
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}