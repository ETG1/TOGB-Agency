'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

const webServices = [
  {
    title: 'Custom Web Development',
    description: 'Tailored websites built with cutting-edge technologies to meet your specific needs.',
    features: ['Responsive Design', 'Performance Optimization', 'SEO Best Practices', 'Modern UI/UX'],
  },
  {
    title: 'E-commerce Solutions',
    description: 'Powerful online stores that drive sales and provide great shopping experiences.',
    features: ['Secure Payments', 'Inventory Management', 'Order Tracking', 'Customer Analytics'],
  },
  {
    title: 'Web Applications',
    description: 'Complex web applications that solve business problems and improve efficiency.',
    features: ['Custom Functionality', 'User Authentication', 'Data Management', 'API Integration'],
  },
];

const printServices = [
  {
    title: 'Business Cards',
    description: 'Professional business cards that make a lasting impression.',
    features: ['Premium Paper Stock', 'Custom Finishes', 'Multiple Sizes', 'Quick Turnaround'],
  },
  {
    title: 'Marketing Materials',
    description: 'High-quality brochures, flyers, and promotional materials.',
    features: ['Brochures & Flyers', 'Posters & Banners', 'Product Catalogs', 'Direct Mail'],
  },
  {
    title: 'Custom Printing',
    description: 'Specialized printing services for unique requirements.',
    features: ['Large Format', 'Specialty Papers', 'Custom Sizes', 'Bulk Orders'],
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function Services() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative py-16 bg-gradient-to-b from-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="text-center"
          >
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Our Services
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Comprehensive digital and print solutions to help your business thrive in both online and offline spaces.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Web Development Services */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="lg:text-center"
          >
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Web Development</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Digital Solutions for Modern Businesses
            </p>
          </motion.div>

          <div className="mt-16">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {webServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  <p className="mt-2 text-gray-500">{service.description}</p>
                  <ul className="mt-4 space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-600">
                        <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Print Services */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="lg:text-center"
          >
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Print Services</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Professional Print Solutions
            </p>
          </motion.div>

          <div className="mt-16">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {printServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  <p className="mt-2 text-gray-500">{service.description}</p>
                  <ul className="mt-4 space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-600">
                        <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block text-blue-200">Let's discuss your project today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Button href="/contact" size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 