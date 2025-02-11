"use client";

import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { motion } from 'framer-motion';
import { Button } from "./ui/Button";

const Hero = () => {
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
                <span className="block text-gray-900 dark:text-white mb-4 pt-16">
                  Transform Your Brand
                </span>
                <span className="block bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">
                  Digital & Print Solutions
                </span>
              </h1>
              <p className="mt-8 text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We create stunning websites and high-quality print materials
                that help your brand stand out in today&apos;s competitive
                market.
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
    </div>
  );
};

export default Hero;
