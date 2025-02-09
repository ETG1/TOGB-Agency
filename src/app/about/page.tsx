'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { AuroraBackground } from '@/components/ui/aurora-background';

const team = [
  {
    name: 'Reeper',
    role: 'Founder & CEO',
    image: '/images/team/john.jpg',
    bio: 'With over 15 years of experience in web development and print design, John leads our team with a passion for creating exceptional digital experiences.',
  },
  {
    name: 'Prince',
    role: 'Creative Director',
    image: '/images/team/prince.jpg',
    bio: 'Prince brings his artistic vision and strategic thinking to every project, ensuring our clients receive innovative and effective design solutions.',
  },
  {
    name: 'Eli',
    role: 'Lead Developer',
    image: '/images/team/eli.jpg',
    bio: 'Eli specializes in building scalable web applications and implementing cutting-edge technologies to deliver outstanding results.',
  },
  {
    name: 'Piano',
    role: 'Print Production Manager',
    image: '/images/team/piano.jpg',
    bio: 'Piano oversees all print projects, ensuring the highest quality standards and timely delivery of materials to our clients.',
  },
];

const values = [
  {
    title: 'Innovation',
    description: 'We stay ahead of the curve by embracing new technologies and creative approaches.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Quality',
    description: 'We maintain the highest standards in both our digital and print productions.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Client Focus',
    description: `We prioritize our clients' needs and work closely with them to achieve their goals.`,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative [&>main>div]:!h-auto">
        <AuroraBackground>
          <div className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                  About WebPrint Agency
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                  We are a team of passionate creators dedicated to delivering exceptional digital and print solutions.
                </p>
              </motion.div>
            </div>
          </div>
        </AuroraBackground>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:text-center"
          >
            <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">Our Story</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              A Decade of Excellence
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
              Founded in 2013, WebPrint Agency has grown from a small startup to a full-service digital and print agency.
              We have helped hundreds of businesses establish their presence both online and offline.
            </p>
          </motion.div>

          {/* Values */}
          <div className="mt-16">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-blue-600 to-violet-600 text-white">
                      {value.icon}
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">{value.title}</p>
                  </div>
                  <div className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
                    {value.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white dark:bg-zinc-800/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">Our Team</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Meet the Experts
            </p>
          </div>

          <div className="mt-16">
            <div className="space-y-12 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="lg:col-span-1 bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
                    <div className="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                      <div className="relative h-48 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg overflow-hidden">
                        <div className="absolute inset-0 opacity-75" />
                        <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold">
                          {member.name}
                        </div>
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="space-y-4">
                        <div className="text-lg leading-6 font-medium space-y-1">
                          <h3 className="text-gray-900 dark:text-white">{member.name}</h3>
                          <p className="text-blue-600 dark:text-blue-400">{member.role}</p>
                        </div>
                        <div className="text-lg">
                          <p className="text-gray-500 dark:text-gray-300">{member.bio}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-violet-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to bring your ideas to life?</span>
            <span className="block text-blue-200">Let us start working together.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Button href="/contact" size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 