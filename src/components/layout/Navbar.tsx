'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { HomeIcon, BriefcaseIcon, FolderIcon, UserIcon, EnvelopeIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Services', href: '/services', icon: BriefcaseIcon },
  { name: 'Portfolio', href: '/portfolio', icon: FolderIcon },
  { name: 'About', href: '/about', icon: UserIcon },
  { name: 'Contact', href: '/contact', icon: EnvelopeIcon },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">TOGB WebInk</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <item.icon className="h-5 w-5 transform group-hover:scale-110 transition-transform" />
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">{item.name}</span>
                </div>
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden"
          >
            <div className="fixed inset-0 z-50">
              <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" aria-hidden="true" />
              <div className="fixed inset-x-4 top-8 z-50 mx-auto max-w-xl rounded-lg bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-lg ring-1 ring-black/5 dark:ring-white/5 p-6">
                <div className="space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center space-x-3 rounded-lg px-3 py-2 text-base font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100/50 dark:hover:bg-zinc-800/50 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <item.icon className="h-6 w-6" />
                      <span>{item.name}</span>
                    </Link>
                  ))}
                  <Link
                    href="/contact"
                    className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-blue-600 to-violet-600 text-white px-4 py-3 rounded-lg text-base font-medium hover:from-blue-700 hover:to-violet-700 transition-all"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <EnvelopeIcon className="h-5 w-5" />
                    <span>Get Started</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 