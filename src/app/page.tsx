'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { AuroraBackground } from '@/components/ui/aurora-background';

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites built with modern technologies and best practices.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Print Services',
    description: 'High-quality printing for all your business needs.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
      </svg>
    ),
  },
  {
    title: 'Digital Marketing',
    description: 'SEO and marketing strategies to grow your online presence.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section data-hero-section className="relative min-h-screen">
        <AuroraBackground>
          <div className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto mt-1"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
                <span className="block text-gray-900 dark:text-white mb-4">Transform Your Brand</span>
                <span className="block bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">
                  Digital & Print Solutions
                </span>
              </h1>
              <p className="mt-8 text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We create stunning websites and high-quality print materials that help your brand stand out in today&apos;s competitive market.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  href="/contact" 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white text-lg px-8 py-4 rounded-full"
                >
                  Get Started
                </Button>
                <Button 
                  href="/portfolio" 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-4 rounded-full"
                >
                  View Our Work
                </Button>
              </div>

              {/* Scroll Indicator */}
              <motion.div 
                className="mt-16"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full mx-auto flex justify-center">
                  <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2"></div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </AuroraBackground>
      </section>

      {/* Services Section */}
      <section className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase mb-3">Services</h2>
            <p className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
              Everything you need to succeed
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From web development to print materials, we&apos;ve got you covered with comprehensive solutions for your business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
