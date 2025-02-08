'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'web',
    image: '/images/portfolio/ecommerce.jpg',
    description: 'A modern e-commerce platform built with Next.js and Shopify.',
    technologies: ['Next.js', 'Shopify', 'Tailwind CSS'],
    link: '#',
  },
  {
    id: 2,
    title: 'Corporate Branding',
    category: 'print',
    image: '/images/portfolio/branding.jpg',
    description: 'Complete branding package including business cards, letterheads, and marketing materials.',
    technologies: ['Adobe Creative Suite', 'Print Design', 'Brand Identity'],
    link: '#',
  },
  {
    id: 3,
    title: 'Real Estate Website',
    category: 'web',
    image: '/images/portfolio/real-estate.jpg',
    description: 'Custom real estate platform with property listings and virtual tours.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    link: '#',
  },
  {
    id: 4,
    title: 'Event Materials',
    category: 'print',
    image: '/images/portfolio/event.jpg',
    description: 'Event materials including banners, flyers, and promotional items.',
    technologies: ['Large Format Printing', 'Digital Printing', 'Event Design'],
    link: '#',
  },
  {
    id: 5,
    title: 'Restaurant App',
    category: 'web',
    image: '/images/portfolio/restaurant.jpg',
    description: 'Mobile-first restaurant application with online ordering system.',
    technologies: ['React Native', 'Firebase', 'Stripe'],
    link: '#',
  },
  {
    id: 6,
    title: 'Product Catalogs',
    category: 'print',
    image: '/images/portfolio/catalog.jpg',
    description: 'High-quality product catalogs with professional photography and layout.',
    technologies: ['Catalog Design', 'Photography', 'Print Production'],
    link: '#',
  },
];

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'web', name: 'Web Development' },
  { id: 'print', name: 'Print Services' },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'all' || project.category === activeCategory
  );

  return (
    <div className="bg-white">
      <div className="relative py-16 bg-gradient-to-b from-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Our Portfolio
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Explore our latest projects and see how we have helped businesses succeed in both digital and print media.
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="mt-8 flex justify-center space-x-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Project Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          layout
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 bg-gray-200">
                  {/* Replace with actual images */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-75" />
                  <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold">
                    {project.title}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
                  <p className="mt-2 text-gray-600">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-500"
                  >
                    View Project
                    <svg
                      className="ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
} 