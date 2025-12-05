import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { 
  Mic, Zap, Clock, DollarSign, Users, TrendingUp, 
  CheckCircle, Play, FileText, Share2, Headphones,
  ArrowRight, Star, Shield, Sparkles, Radio
} from 'lucide-react';
import SEO from '../SEO';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function AIPodcastProductionPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://thinkments.com/ai-podcast-production#service",
        "name": "AI Podcast Production Service",
        "description": "Professional AI-powered podcast creation service that transforms existing content into podcast episodes",
        "provider": {
          "@type": "Organization",
          "name": "THINKMENTS",
          "url": "https://thinkments.com"
        },
        "serviceType": "AI Podcast Production",
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "AI Podcast Production Packages",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "7-Day AI Podcast Package"
              },
              "price": "797",
              "priceCurrency": "USD"
            }
          ]
        }
      },
      {
        "@type": "Product",
        "name": "7-Day AI Podcast Production Package",
        "description": "Complete podcast production package including 4 episodes, show notes, and social clips",
        "brand": {
          "@type": "Organization",
          "name": "THINKMENTS"
        },
        "offers": {
          "@type": "Offer",
          "url": "https://thinkments.com/ai-podcast-production",
          "priceCurrency": "USD",
          "price": "797",
          "availability": "https://schema.org/InStock",
          "priceValidUntil": "2025-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "50"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Will my AI-generated podcast sound robotic or fake?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Our AI podcast generator creates natural, conversational dialogue between two knowledgeable hosts discussing your content. The result sounds like a professional podcast discussion with natural pacing, tone variation, and engagement—not text-to-speech or robotic voices. Listen to our sample to hear the quality for yourself."
            }
          },
          {
            "@type": "Question",
            "name": "What content do I need to provide for AI podcast production?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You'll need approximately 5-10 pieces of existing content such as blog posts (1,000+ words each), video transcripts, course outlines, webinar recordings, or written materials. The more detailed and substantial your source content, the richer your podcast episodes will be."
            }
          },
          {
            "@type": "Question",
            "name": "Can I review and approve episodes before they go live?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. We deliver all podcast episodes for your review and approval before any publishing occurs. One round of revisions per episode is included in your package. You have complete control over what gets published and when."
            }
          },
          {
            "@type": "Question",
            "name": "How is this different from using AI podcast tools myself?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While AI podcast tools exist, they require learning curves, trial and error, and hands-on management. Our done-for-you service handles the entire workflow: content analysis, script optimization, audio generation, quality editing, show note creation, audiogram production, and technical setup. You provide content and approve results—we handle everything else."
            }
          },
          {
            "@type": "Question",
            "name": "What podcast platforms will my episodes be published on?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Your AI-generated podcast can be published on all major platforms including Spotify, Apple Podcasts, Google Podcasts, Amazon Music, Stitcher, and more. We provide a complete RSS feed and step-by-step publishing guide."
            }
          },
          {
            "@type": "Question",
            "name": "How long does AI podcast production take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "7 business days from content submission to final delivery. Here's the timeline: Day 1-2 (content analysis and script creation), Day 3-4 (AI audio generation and editing), Day 5-6 (show notes and audiogram creation), Day 7 (final review and delivery). Rush production (3-4 days) is available for an additional fee."
            }
          },
          {
            "@type": "Question",
            "name": "Is there a money-back guarantee for your AI podcast service?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We offer a 14-day money-back guarantee. If you're not satisfied with your podcast episodes after delivery and one revision round, we'll refund your full payment. We're confident in our AI podcast production quality and stand behind our work."
            }
          },
          {
            "@type": "Question",
            "name": "Can I order more episodes after the initial 4-episode package?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely! Many clients start with our 4-episode package ($797) then continue with monthly ongoing production. We offer discounted rates for recurring clients: 8 episodes/month for $1,400 or 12 episodes/month for $1,900."
            }
          }
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://thinkments.com/#organization",
        "name": "THINKMENTS",
        "url": "https://thinkments.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://thinkments.com/logo.png"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-940-123-4567",
          "contactType": "Customer Service",
          "email": "hello@thinkments.com",
          "areaServed": "US",
          "availableLanguage": "English"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://thinkments.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://thinkments.com/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "AI Podcast Production",
            "item": "https://thinkments.com/ai-podcast-production"
          }
        ]
      }
    ]
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <SEO 
        title="AI Podcast Production Service | Create Professional Podcasts in 7 Days | THINKMENTS"
        description="Transform your blogs, videos, and content into professional podcast episodes in 7 days with our AI podcast production service. No recording needed. $797 for 4 episodes. 14-day money-back guarantee."
        keywords="AI podcast production, AI-powered podcast creation, podcast production service, automated podcast creation, repurpose content into podcast, professional podcast service, podcast from blog posts"
        canonical="https://thinkments.com/ai-podcast-production"
        structuredData={structuredData}
        ogImage="https://images.unsplash.com/photo-1709846487437-7445553bb6ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2RjYXN0JTIwbWljcm9waG9uZSUyMHN0dWRpb3xlbnwxfHx8fDE3NjMzMTUzNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLS45LTItMi0yaC04Yy0xLjEgMC0yIC45LTIgMnY4YzAgMS4xLjkgMiAyIDJoOGMxLjEgMCAyLS45IDItMnYtOHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                  <span className="text-white">AI-Powered Podcast Creation</span>
                </div>
                
                <h1 className="text-white mb-6">
                  AI-Powered Podcast Production Service
                </h1>
                
                <h2 className="text-white/90 mb-6">
                  Launch Your Professional Podcast in 7 Days—Turn Existing Content Into Audio Gold
                </h2>
                
                <p className="text-white/80 mb-4">
                  Our <strong className="text-white">AI podcast production service</strong> transforms your existing content—blogs, videos, course materials, and transcripts—into polished, conversational podcast episodes. Perfect for coaches, consultants, and entrepreneurs who want to expand their reach through <strong className="text-white">professional podcast creation</strong> without the technical complexity.
                </p>

                <p className="text-white/80 mb-4">
                  Unlike traditional podcast production that requires expensive equipment, recording time, and editing expertise, our <strong className="text-white">AI-powered podcast service</strong> leverages advanced technology to create natural, engaging conversations from your written content. In just <strong className="text-white">7 days</strong>, you'll receive 4 complete podcast episodes, show notes, and social media clips—ready to publish on Spotify, Apple Podcasts, and all major platforms.
                </p>

                <p className="text-white/80 mb-8">
                  Whether you're a business owner looking to <strong className="text-white">repurpose blog content into podcasts</strong>, a consultant wanting to reach audio learners, or a coach expanding your digital presence, our service eliminates the barriers to podcast success.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100" asChild>
                    <Link to="/quote">
                      Start Your AI Podcast Production
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100" asChild>
                    <Link to="/contact">Book Free Consultation</Link>
                  </Button>
                </div>

                <div className="flex items-center gap-6 mt-8 text-white/90">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>7-Day Delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Money-Back Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>No Equipment Needed</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1709846487437-7445553bb6ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2RjYXN0JTIwbWljcm9waG9uZSUyMHN0dWRpb3xlbnwxfHx8fDE3NjMzMTUzNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="AI podcast production service dashboard showing content transformation"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-purple-900">Starting at</span>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="ml-2 text-sm text-gray-600">4.9/5 (50+ reviews)</span>
                      </div>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl text-purple-900">$797</span>
                      <span className="text-gray-600">/ 4 episodes</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">Just $199 per episode</p>
                  </div>
                </div>

                {/* Floating stats */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -right-4 top-20 bg-white p-4 rounded-lg shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Clock className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Average Time</div>
                      <div className="font-bold text-gray-900">7 Days</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -left-4 bottom-40 bg-white p-4 rounded-lg shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Headphones className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Episodes Created</div>
                      <div className="font-bold text-gray-900">50+</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="mb-4">
                How Our AI Podcast Production Process Works
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our <strong>AI podcast creation process</strong> is designed for simplicity and speed. Unlike traditional podcast production that can take weeks, our <strong>automated podcast service</strong> delivers professional results in just 7 business days. Here's exactly how we transform your content into podcast episodes:
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto" itemScope itemType="https://schema.org/HowTo">
              <meta itemProp="name" content="How Our AI Podcast Production Process Works" />
              
              {[
                {
                  step: 1,
                  icon: FileText,
                  title: "Share Your Existing Content",
                  description: "Send us your blog posts, video transcripts, course materials, or documents. We need 5-10 pieces of existing content to create your first 4 podcast episodes. Our AI analyzes your content for key themes, insights, and talking points.",
                  color: "from-blue-500 to-blue-600"
                },
                {
                  step: 2,
                  icon: Sparkles,
                  title: "AI-Powered Podcast Creation",
                  description: "Our AI podcast generator transforms your content into natural, engaging conversations between two virtual hosts. The AI extracts key insights, creates dialogue, and produces professional-quality audio that sounds human and conversational.",
                  color: "from-purple-500 to-purple-600"
                },
                {
                  step: 3,
                  icon: Radio,
                  title: "Launch & Publish Your Podcast",
                  description: "Receive 4 complete professional podcast episodes with show notes, audiogram clips, and publishing guides. We help you set up on Spotify, Apple Podcasts, Google Podcasts, and other major platforms.",
                  color: "from-green-500 to-green-600"
                }
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  itemProp="step"
                  itemScope
                  itemType="https://schema.org/HowToStep"
                >
                  <Card className="h-full relative overflow-hidden group hover:shadow-xl transition-shadow">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${process.color}`} />
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${process.color} text-white`}>
                          <process.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-gray-500 mb-1">Step {process.step}</div>
                          <CardTitle itemProp="name" className="text-xl">{process.title}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600" itemProp="text">
                        {process.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Package Details Section */}
        <section className="py-20" itemScope itemType="https://schema.org/Service">
          <meta itemProp="name" content="AI Podcast Production Package" />
          <meta itemProp="serviceType" content="AI Podcast Production" />
          
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="mb-4">
                What's Included in Your AI Podcast Production Package
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our <strong>$797 AI podcast package</strong> delivers everything you need to launch a professional podcast. Unlike traditional podcast production services that charge $200-500 per episode, our all-inclusive package provides exceptional value with complete podcast setup and support.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden border-2 border-purple-200" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                <meta itemProp="price" content="797" />
                <meta itemProp="priceCurrency" content="USD" />
                <meta itemProp="availability" content="https://schema.org/InStock" />
                <meta itemProp="url" content="https://thinkments.com/ai-podcast-production" />
                
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 text-center">
                  <h3 className="text-white mb-2">7-Day AI Podcast Package</h3>
                  <div className="flex items-baseline justify-center gap-2 mb-4">
                    <span className="text-5xl" itemProp="price">$797</span>
                    <span className="text-xl opacity-90">one-time</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                    <Shield className="w-5 h-5" />
                    <span>14-Day Money-Back Guarantee</span>
                  </div>
                </div>

                <CardContent className="p-8" itemProp="description">
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { icon: Mic, title: "4 Professional AI Podcast Episodes", desc: "15-25 minutes each, optimized for listener engagement" },
                      { icon: FileText, title: "SEO-Optimized Show Notes & Descriptions", desc: "For each episode with keyword targeting" },
                      { icon: Share2, title: "12 Audiogram Social Media Clips", desc: "3 per episode, formatted for Instagram, LinkedIn, Twitter" },
                      { icon: Radio, title: "Podcast RSS Feed Setup", desc: "For seamless distribution" },
                      { icon: TrendingUp, title: "Episode Titles & Keywords", desc: "Optimized for podcast discovery" },
                      { icon: CheckCircle, title: "Spotify & Apple Podcasts Publishing Guide", desc: "Step-by-step instructions" },
                      { icon: Sparkles, title: "Branded Cover Art Recommendations", desc: "Meeting platform specifications" },
                      { icon: CheckCircle, title: "One Revision Round Per Episode", desc: "Ensuring your satisfaction" }
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex gap-3"
                      >
                        <div className="flex-shrink-0">
                          <feature.icon className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <div className="font-bold text-gray-900 mb-1">{feature.title}</div>
                          <div className="text-sm text-gray-600">{feature.desc}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 bg-purple-50 rounded-lg">
                    <div className="grid md:grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl text-purple-600 mb-1">$199</div>
                        <div className="text-sm text-gray-600">Per Episode Cost</div>
                      </div>
                      <div>
                        <div className="text-2xl text-purple-600 mb-1">7 Days</div>
                        <div className="text-sm text-gray-600">Delivery Guaranteed</div>
                      </div>
                      <div>
                        <div className="text-2xl text-purple-600 mb-1">100%</div>
                        <div className="text-sm text-gray-600">Money-Back Guarantee</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700" asChild>
                      <Link to="/quote">
                        Get Started - $797
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </Button>
                    <p className="text-sm text-gray-600 mt-4">
                      4 Episodes • 7 Days • Money-Back Guarantee
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Target Audience Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="mb-4">
                Who Benefits Most from AI Podcast Production Services
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our <strong>AI podcast creation service</strong> is perfect for professionals who have valuable content but lack time for traditional podcast production. Whether you're a coach looking to <strong>repurpose coaching content</strong>, a consultant wanting to reach new audiences, or a business owner expanding your content strategy, AI-powered podcast production eliminates technical barriers while maintaining professional quality.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: Users,
                  title: "Coaches & Consultants",
                  description: "Repurpose your coaching sessions and presentations into engaging podcast content. Our AI podcast service helps coaches turn existing materials into audio courses, reaching clients who prefer learning through podcasts during commutes or workouts.",
                  color: "from-blue-500 to-blue-600"
                },
                {
                  icon: FileText,
                  title: "Course Creators & Educators",
                  description: "Transform your online courses and educational content into podcast episodes. Expand your reach to audio learners and create supplementary content for existing students. Perfect for e-learning professionals wanting to diversify content formats.",
                  color: "from-purple-500 to-purple-600"
                },
                {
                  icon: TrendingUp,
                  title: "Business Owners & Marketers",
                  description: "Convert blog posts into podcast episodes to reach busy professionals. Our service helps businesses repurpose written content for audio distribution, increasing content ROI and expanding audience reach across multiple channels.",
                  color: "from-green-500 to-green-600"
                },
                {
                  icon: Sparkles,
                  title: "Authors & Thought Leaders",
                  description: "Promote your book or expertise through professional podcast content. Turn book chapters, articles, and interviews into engaging audio content that builds authority and drives book sales through podcast listeners.",
                  color: "from-orange-500 to-orange-600"
                },
                {
                  icon: Zap,
                  title: "Marketing Agencies",
                  description: "Offer AI podcast production as a service to your clients. Our white-label approach allows agencies to deliver professional podcast content creation without hiring audio specialists or investing in expensive equipment.",
                  color: "from-pink-500 to-pink-600"
                },
                {
                  icon: Mic,
                  title: "Content Creators",
                  description: "Multiply your content reach by repurposing videos, blogs, and social posts into podcast format. Reach new audiences on Spotify and Apple Podcasts while you focus on creating more great content.",
                  color: "from-indigo-500 to-indigo-600"
                }
              ].map((audience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow group">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${audience.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <audience.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{audience.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{audience.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits & Comparison Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="mb-4">
                Why Choose AI-Powered Podcast Creation Over Traditional Production
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Traditional podcast production requires significant time, money, and technical expertise. Our <strong>AI podcast production service</strong> eliminates these barriers while maintaining professional quality. Compare the <strong>AI-powered approach</strong> versus traditional methods to see why businesses and creators are switching to automated podcast creation.
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto mb-16 overflow-x-auto">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <caption className="sr-only">AI Podcast Production vs. Traditional Podcast Production</caption>
                <thead>
                  <tr className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                    <th scope="col" className="p-4 text-left">Factor</th>
                    <th scope="col" className="p-4 text-left">Traditional Production</th>
                    <th scope="col" className="p-4 text-left bg-white/10">AI-Powered (THINKMENTS)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { factor: "Time Per Episode", traditional: "10-15 hours (recording, editing, post-production)", ai: "45 minutes (automated creation)" },
                    { factor: "Cost Per Episode", traditional: "$200-$500+ per episode", ai: "$199 per episode" },
                    { factor: "Equipment Needed", traditional: "$500-2,000 (microphone, software, soundproofing)", ai: "$0 - No equipment required" },
                    { factor: "Technical Skills", traditional: "Audio editing, mixing, mastering expertise", ai: "None - We handle all technical aspects" },
                    { factor: "Content Source", traditional: "Must record new content", ai: "Repurpose existing blogs, videos, courses" },
                    { factor: "Turnaround Time", traditional: "2-3 weeks for 4 episodes", ai: "7 business days for 4 episodes" },
                    { factor: "Consistency", traditional: "Varies by recording quality, background noise", ai: "Professional quality, every episode" }
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <th scope="row" className="p-4 text-left font-bold">{row.factor}</th>
                      <td className="p-4 text-gray-600">{row.traditional}</td>
                      <td className="p-4 font-bold text-purple-900 bg-purple-50/50">{row.ai}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: Zap,
                  title: "Speed & Efficiency",
                  description: "Launch your podcast in 7 days instead of weeks. Our AI podcast creation service transforms your existing content library into a full podcast season while you focus on your business. No learning curve, no technical headaches.",
                  features: ["45-minute turnaround per episode", "Batch production of 4 episodes simultaneously", "Same-day content analysis and scripting"]
                },
                {
                  icon: DollarSign,
                  title: "Cost-Effective Solution",
                  description: "Save 80% compared to traditional podcast producers. Our AI-powered service delivers professional results at a fraction of traditional costs—no expensive equipment, no hourly studio rates, no ongoing software subscriptions.",
                  features: ["$199 per episode vs. $200-500 industry standard", "Zero equipment investment required", "All-inclusive pricing with no hidden fees"]
                },
                {
                  icon: TrendingUp,
                  title: "Content Maximization",
                  description: "Multiply your content ROI by repurposing existing materials. Your blog posts, videos, and courses gain new life as podcast episodes, reaching audio learners and expanding your digital footprint across multiple platforms.",
                  features: ["One blog post = one podcast episode", "Reach audiences on Spotify, Apple, Google", "SEO benefits from show notes and transcripts"]
                }
              ].map((benefit, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-4">
                        <benefit.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{benefit.description}</p>
                      <ul className="space-y-2">
                        {benefit.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50" itemScope itemType="https://schema.org/FAQPage">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="mb-4">
                Frequently Asked Questions About AI Podcast Production
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Have questions about our <strong>AI podcast creation service</strong>? Here are answers to common questions about how AI-powered podcast production works, quality expectations, and what makes our service different from traditional podcast production methods.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: "Will my AI-generated podcast sound robotic or fake?",
                  answer: "No. Our AI podcast generator creates natural, conversational dialogue between two knowledgeable hosts discussing your content. The result sounds like a professional podcast discussion with natural pacing, tone variation, and engagement—not text-to-speech or robotic voices. Listen to our sample to hear the quality for yourself."
                },
                {
                  question: "What content do I need to provide for AI podcast production?",
                  answer: "You'll need approximately 5-10 pieces of existing content such as blog posts (1,000+ words each), video transcripts, course outlines, webinar recordings, or written materials. The more detailed and substantial your source content, the richer your podcast episodes will be. During your free consultation, we'll assess your content library and recommend the best pieces to transform into podcast episodes."
                },
                {
                  question: "Can I review and approve episodes before they go live?",
                  answer: "Absolutely. We deliver all podcast episodes for your review and approval before any publishing occurs. One round of revisions per episode is included in your package. You have complete control over what gets published and when. We'll make adjustments to ensure you're 100% satisfied with the final product."
                },
                {
                  question: "How is this different from using AI podcast tools myself?",
                  answer: "While AI podcast tools exist, they require learning curves, trial and error, and hands-on management. Our done-for-you service handles the entire workflow: content analysis, script optimization, audio generation, quality editing, show note creation, audiogram production, and technical setup. You provide content and approve results—we handle everything else. It's the difference between buying ingredients and getting a meal delivered."
                },
                {
                  question: "What podcast platforms will my episodes be published on?",
                  answer: "Your AI-generated podcast can be published on all major platforms including Spotify, Apple Podcasts, Google Podcasts, Amazon Music, Stitcher, and more. We provide a complete RSS feed and step-by-step publishing guide. While we don't directly publish for you (you maintain account control), our instructions make the process simple, typically taking 15-30 minutes total."
                },
                {
                  question: "Can I use my own voice instead of AI-generated voices?",
                  answer: "This $797 package uses AI-generated voices for speed, consistency, and cost-effectiveness. However, if you prefer using your own voice, ask about our hybrid production option where we provide the script and you record your narration. This option takes longer and costs more but gives you complete voice control while still leveraging our AI content creation and editing services."
                },
                {
                  question: "How long does AI podcast production take?",
                  answer: "7 business days from content submission to final delivery. Here's the timeline: Day 1-2 (content analysis and script creation), Day 3-4 (AI audio generation and editing), Day 5-6 (show notes and audiogram creation), Day 7 (final review and delivery). Rush production (3-4 days) is available for an additional fee."
                },
                {
                  question: "What if I don't have enough existing content for a podcast?",
                  answer: "If you have fewer than 5 substantial pieces of content, we can work with you to extract podcast-worthy material from various sources: email newsletters, social media posts (compiled), presentation slides with speaker notes, interview transcripts, or even detailed outlines you create. During consultation, we'll explore your available materials and determine if AI podcast production is right for you at this time."
                },
                {
                  question: "Is there a money-back guarantee for your AI podcast service?",
                  answer: "Yes. We offer a 14-day money-back guarantee. If you're not satisfied with your podcast episodes after delivery and one revision round, we'll refund your full payment. We're confident in our AI podcast production quality and stand behind our work. Your satisfaction is our priority."
                },
                {
                  question: "Can I order more episodes after the initial 4-episode package?",
                  answer: "Absolutely! Many clients start with our 4-episode package ($797) then continue with monthly ongoing production. We offer discounted rates for recurring clients: 8 episodes/month for $1,400 or 12 episodes/month for $1,900. These retainer plans ensure consistent podcast content without repeated onboarding."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  itemProp="mainEntity"
                  itemScope
                  itemType="https://schema.org/Question"
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg" itemProp="name">{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                      <p className="text-gray-600" itemProp="text">{faq.answer}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust & Social Proof Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="mb-4">
                Why Businesses Trust THINKMENTS for AI Podcast Production
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8 mb-16 max-w-5xl mx-auto">
              {[
                { icon: Headphones, number: "50+", label: "Podcast Episodes Created" },
                { icon: Star, number: "4.9/5", label: "Average Client Rating" },
                { icon: Clock, number: "7 Days", label: "Average Turnaround Time" },
                { icon: Shield, number: "100%", label: "Money-Back Guarantee" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <Card className="p-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl text-purple-900 mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
              {[
                {
                  rating: 5,
                  text: "I was skeptical about AI-generated podcasts, but THINKMENTS delivered professional quality that exceeded my expectations. My audience can't tell it's AI, and I'm reaching 40% more people through podcast platforms.",
                  author: "Sarah Mitchell",
                  role: "Business Coach"
                },
                {
                  rating: 5,
                  text: "The 7-day turnaround was game-changing. We launched our company podcast without hiring a producer or buying equipment. The ROI is incredible—leads are up 30% since launch.",
                  author: "David Chen",
                  role: "Marketing Director"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  itemProp="review"
                  itemScope
                  itemType="https://schema.org/Review"
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-1 mb-4" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                        <meta itemProp="ratingValue" content="5" />
                        <meta itemProp="bestRating" content="5" />
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-700 mb-4 italic" itemProp="reviewBody">"{testimonial.text}"</p>
                      <div itemProp="author" itemScope itemType="https://schema.org/Person">
                        <div className="font-bold text-gray-900" itemProp="name">{testimonial.author}</div>
                        <div className="text-sm text-gray-600" itemProp="jobTitle">{testimonial.role}</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLS45LTItMi0yaC04Yy0xLjEgMC0yIC45LTIgMnY4YzAgMS4xLjkgMiAyIDJoOGMxLjEgMCAyLS45IDItMnYtOHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-white mb-6">
                Ready to Launch Your Professional Podcast in 7 Days?
              </h2>
              
              <p className="text-white/90 text-xl mb-12">
                Join 50+ entrepreneurs, coaches, and businesses who are reaching new audiences through AI-powered podcast production
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100" asChild>
                  <Link to="/quote">
                    <strong>Get Started - $797</strong>
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100" asChild>
                  <Link to="/contact">
                    <strong>Book Free Consultation</strong>
                  </Link>
                </Button>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {[
                  { icon: Shield, text: "Secure Payment" },
                  { icon: CheckCircle, text: "14-Day Money-Back Guarantee" },
                  { icon: Zap, text: "7-Day Delivery Guaranteed" }
                ].map((badge, index) => (
                  <div key={index} className="flex items-center justify-center gap-2 text-white/90">
                    <badge.icon className="w-5 h-5" />
                    <span>{badge.text}</span>
                  </div>
                ))}
              </div>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="text-white text-xl">What Happens After You Sign Up:</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="text-left space-y-3 max-w-2xl mx-auto">
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm">1</span>
                      <span><strong>Day 1:</strong> Welcome email with content submission portal</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm">2</span>
                      <span><strong>Day 2-3:</strong> Our AI analyzes your content and creates episode outlines</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm">3</span>
                      <span><strong>Day 4-5:</strong> Audio generation and professional editing</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm">4</span>
                      <span><strong>Day 6:</strong> Show notes, descriptions, and audiogram creation</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm">5</span>
                      <span><strong>Day 7:</strong> Delivery of complete package for your review</span>
                    </li>
                  </ol>
                </CardContent>
              </Card>

              <p className="text-white/80 mt-8">
                <strong className="text-white">Limited Availability:</strong> We accept only 10 new projects per month to ensure quality. 
                <Link to="/contact" className="text-white underline hover:text-white/80 ml-2">
                  Check current availability →
                </Link>
              </p>
            </motion.div>
          </div>
        </section>

        {/* Related Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-center mb-12">Related Services & Resources</h3>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div>
                <h4 className="mb-4">Related Services</h4>
                <nav>
                  <ul className="space-y-3">
                    <li>
                      <Link to="/web-design" className="text-purple-600 hover:text-purple-800 flex items-center gap-2" title="Content strategy and planning services">
                        <ArrowRight className="w-4 h-4" />
                        Website Design & Development
                      </Link>
                    </li>
                    <li>
                      <Link to="/videography" className="text-purple-600 hover:text-purple-800 flex items-center gap-2" title="Video content creation services">
                        <ArrowRight className="w-4 h-4" />
                        Professional Videography
                      </Link>
                    </li>
                    <li>
                      <Link to="/digital-marketing" className="text-purple-600 hover:text-purple-800 flex items-center gap-2" title="Digital marketing services">
                        <ArrowRight className="w-4 h-4" />
                        Digital Marketing
                      </Link>
                    </li>
                    <li>
                      <Link to="/strategic-seo" className="text-purple-600 hover:text-purple-800 flex items-center gap-2" title="SEO optimization services">
                        <ArrowRight className="w-4 h-4" />
                        Strategic SEO
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <div>
                <h4 className="mb-4">Helpful Resources</h4>
                <nav>
                  <ul className="space-y-3">
                    <li>
                      <Link to="/blog" className="text-purple-600 hover:text-purple-800 flex items-center gap-2" title="Digital marketing blog">
                        <ArrowRight className="w-4 h-4" />
                        Digital Marketing Blog
                      </Link>
                    </li>
                    <li>
                      <Link to="/case-studies" className="text-purple-600 hover:text-purple-800 flex items-center gap-2" title="Client success stories">
                        <ArrowRight className="w-4 h-4" />
                        Client Success Stories
                      </Link>
                    </li>
                    <li>
                      <Link to="/quote" className="text-purple-600 hover:text-purple-800 flex items-center gap-2" title="Get a free quote">
                        <ArrowRight className="w-4 h-4" />
                        Get a Free Quote
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" className="text-purple-600 hover:text-purple-800 flex items-center gap-2" title="Contact THINKMENTS">
                        <ArrowRight className="w-4 h-4" />
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
