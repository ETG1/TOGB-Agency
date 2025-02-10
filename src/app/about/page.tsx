'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { useState } from 'react';

const team = [
  {
    name: 'Reeper',
    role: 'Founder & CEO',
    image: '/images/team/john.jpg',
    bio: 'With over 15 years of experience in web development and print design, John leads our team with a passion for creating exceptional digital experiences.',
    extendedBio: 'A visionary leader with a deep understanding of both digital and print mediums, Reeper has successfully guided numerous businesses through their digital transformation journeys. His expertise spans across modern web technologies, user experience design, and print production techniques.',
    skills: ['Web Development', 'Business Strategy', 'UX Design', 'Print Production'],
    social: {
      linkedin: 'https://linkedin.com/in/reeper',
      twitter: 'https://twitter.com/reeper',
      github: 'https://github.com/reeper'
    }
  },
  {
    name: 'Prince',
    role: 'Creative Director',
    image: '/images/team/prince.jpg',
    bio: 'Prince brings his artistic vision and strategic thinking to every project, ensuring our clients receive innovative and effective design solutions.',
    extendedBio: 'As our Creative Director, Prince combines artistic excellence with strategic insight to deliver compelling visual solutions. His work has been recognized in multiple design awards and has helped establish our agency as a leader in creative innovation.',
    skills: ['Visual Design', 'Brand Strategy', 'Art Direction', 'Motion Design'],
    social: {
      linkedin: 'https://linkedin.com/in/prince',
      twitter: 'https://twitter.com/prince',
      github: 'https://github.com/prince'
    }
  },
  {
    name: 'Eli',
    role: 'Lead Developer',
    image: '/images/team/eli.jpg',
    bio: 'Eli specializes in building scalable web applications and implementing cutting-edge technologies to deliver outstanding results.',
    extendedBio: 'A master of modern web technologies, Eli leads our development team in creating robust, scalable solutions. His expertise in Next.js, Node.js, and React architecture has been instrumental in delivering high-performance applications for our clients.',
    skills: ['Full Stack Development', 'Cloud Architecture', 'Performance Optimization', 'Technical Leadership'],
    social: {
      linkedin: 'https://linkedin.com/in/eli',
      twitter: 'https://twitter.com/eli',
      github: 'https://github.com/eli'
    }
  },
  {
    name: 'Piano',
    role: 'Print Production Manager',
    image: '/images/team/piano.jpg',
    bio: 'Piano oversees all print projects, ensuring the highest quality standards and timely delivery of materials to our clients.',
    extendedBio: 'With a keen eye for detail and extensive knowledge of print production processes, Piano ensures that every print project meets our exacting standards. Her expertise in color management and print techniques has been crucial in delivering premium print materials.',
    skills: ['Print Production', 'Color Management', 'Quality Control', 'Project Management'],
    social: {
      linkedin: 'https://linkedin.com/in/piano',
      twitter: 'https://twitter.com/piano',
      github: 'https://github.com/piano'
    }
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

interface TeamMemberModalProps {
  member: typeof team[0];
  isOpen: boolean;
  onClose: () => void;
}

function TeamMemberModal({ member, isOpen, onClose }: TeamMemberModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={onClose}
        >
          <div className="min-h-screen px-4 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              aria-hidden="true"
            />

            <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>

            <Dialog.Panel
              as={motion.div}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle bg-white dark:bg-zinc-800 rounded-2xl shadow-xl transform transition-all"
            >
              <div className="absolute right-4 top-4">
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>

              <div className="mt-2">
                <div className="flex items-center space-x-4">
                  <div className="relative h-20 w-20 rounded-full overflow-hidden bg-gradient-to-br from-blue-600 to-violet-600">
                    <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                      {member.name[0]}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">
                      {member.name}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300">{member.role}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-gray-600 dark:text-gray-300">{member.extendedBio}</p>
                </div>

                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Skills & Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex space-x-4">
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    <FaLinkedin className="h-6 w-6" />
                  </a>
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <FaTwitter className="h-6 w-6" />
                  </a>
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  >
                    <FaGithub className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}

export default function About() {
  const [selectedMember, setSelectedMember] = useState<typeof team[0] | null>(null);

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div
                    onClick={() => setSelectedMember(member)}
                    className="relative overflow-hidden rounded-2xl bg-white dark:bg-zinc-800 p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer
                             border border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500"
                  >
                    <div className="relative h-48 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-blue-600 to-violet-600 group-hover:scale-105 transition-transform duration-300">
                      <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
                        {member.name[0]}
                      </div>
                    </div>

                    <div className="relative z-10 min-h-[160px] flex flex-col">
                      <div>
                        <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text mb-1">
                          {member.name}
                        </h3>
                        <p className="text-sm text-blue-600 dark:text-blue-400 mb-4">{member.role}</p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                          {member.bio}
                        </p>
                      </div>

                      <div className="mt-4 flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-blue-500 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaLinkedin className="h-5 w-5" />
                        </a>
                        <a
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-blue-400 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaTwitter className="h-5 w-5" />
                        </a>
                        <a
                          href={member.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaGithub className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <TeamMemberModal
          member={selectedMember!}
          isOpen={!!selectedMember}
          onClose={() => setSelectedMember(null)}
        />
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